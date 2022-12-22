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
        _Vue.mixins({
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
    }
    initComponents(Vue) {
        // 找到vue对象里的<router-link></router-link>标签
        Vue.component('router-link', {
            props: {
                to: string
            },
            // 本质是a标签加插槽,将来把路由对应组件渲染到插槽里
            template: '<a :href="to"><slot></slot></a>'
        })
    }
}