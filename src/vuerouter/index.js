// 3_vue\i - vue - router\src\vuerouter\index.js
let _Vue = null // 全局变量
export default class VueRouter {
    static install(Vue) {
        // 1,判断当前插件是否全局安装
        if (VueRouter.install.installed) {
            return
        }
        // 设置安装状态
        VueRouter.install.installed = true
        // 2,把Vue构造函数记录到全局变量
        _Vue = Vue
        // 3,把创建vue实例时传入的router对象注入到vue实例上
        // 所有的 JavaScript 对象都会从一个 prototype（原型对象）中继承属性和方法。
        // 使用 prototype 属性就可以给对象的构造函数添加新的属性 
        // 不能在这写,该静态方法的this指向方法本身,而我们需要的是this指向Vue对象
        // _Vue.prototype.$router = this.$options.router
        // 混入 
        _Vue.mixin({
            beforeCreate() {
                // (到时所有vue对象(包括组件)都会有该参数)则会多次执行同一个逻辑,应该简化
                // this->vue对象
                if (this.$options.router) { // 如果vue实例有router才执行
                    _Vue.prototype.$router = this.$options.router // vue对象的router挂载给这的全局变量
                    // 调用初始化方法
                    this.$options.router.init()
                }
            }
        })
    }
    // 构造函数
    constructor(options) {
        // 记录构造函数传入的选项
        this.options = options
        // 存放路由规则: key路由地址,value路由组件
        this.routerMap = {}
        // 响应式对象: 记录当前路由地址,双向绑定
        this.data = _Vue.observable({ // 该方法可以把对象转为响应式
            current: '/' // 当前路由地址,默认是 / 
        })
    }
    createRouteMap() {
        // 遍历路由规则,解析成键值对形式存入routemap
        this.options.routes.forEach(route => {
            this.routerMap[route.path] = route.component
        })
    }
    // 初始化
    init() {
        this.createRouteMap()
        this.initComponents(_Vue)
        this.initEvent()
    }
    // 注册组件
    initComponents(Vue) {
        // 注册router-link组件
        Vue.component('router-link', {
            props: {
                to: String
            },
            // 本质是a标签加插槽,将来把路由对应组件渲染到插槽里
            // 运行时版本vue不支持template
            // template: '<a :href="to"><slot></slot></a>'
            // 运行时版本解决方案: 手动编译template
            render(h) { // h用来创建虚拟dom(由vue传递)
                // 参数1: 要创建的元素的选择器
                // 参数2: 给创建的元素添加属性
                // 参数3: 创建的元素的子元素(array)
                return h('a', {
                    attrs: {
                        href: this.to
                    },
                    // 注册事件
                    // 为了防止a被点击后向浏览器发送请求,导致history模式出错,需要阻止a标签发送请求
                    on: {
                        click: this.clickHandler
                    }
                    //默认插槽
                }, [this.$slots.default]) // a标签子元素放插槽
            },
            methods: {
                clickHandler(e) {
                    // 改变浏览器地址栏但是不发送请求
                    // 参数1是触发pushState时调用的事件函数
                    // 参数2是标题
                    // 参数3是要跳转的地址
                    history.pushState({}, '', this.to)
                    // 记录当前地址->data.current
                    this.$router.data.current = this.to
                    // 之前给vue挂载了$router,所有的vue对象/组件都可以访问到
                    this.$router.data.current
                    // 阻止默认行为(即a标签的发送请求)
                    e.preventDefault();
                }
            },
        })
        // 注册router-view组件
        // 保存当前对象,给render方法用
        const self = this
        Vue.component('router-view', {
            render(h) {
                // 获取路由地址 
                const component = self.routerMap[self.data.current]
                // 根据路由地址寻找路由对应的组件
                return h(component) // 把组件变成响应式,挂到虚拟dom
            }
        })
    }
    // 解决浏览器点击返回时,返回上一页没有渲染对应页面
    initEvent() {
        // 监听浏览器后退
        window.addEventListener('popstate', () => {
            // 改变data.current,渲染对应组件(响应式router-xxx标签会跟着改变)
            // this -> initEvent
            this.data.current = window.location.pathname
        })
    }
}