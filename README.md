# 课程资源来源于互联网和博客,仅供学习交流使用,不作商业用途!!!
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671624994236-ef52829b-9236-4da7-b646-1369c01bd929.png#averageHue=%23454854&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=477&id=u5454df9f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=596&originWidth=925&originalType=binary&ratio=1&rotation=0&showTitle=false&size=159874&status=done&style=none&taskId=u03783799-d694-4d39-aab9-7a0b2e640bd&title=&width=740)
# 基础回顾
## 使用步骤
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671625020502-5228847a-a032-4ae8-bf9c-3e989a08f139.png#averageHue=%234f4338&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=410&id=ufbab1beb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=512&originWidth=831&originalType=binary&ratio=1&rotation=0&showTitle=false&size=157785&status=done&style=none&taskId=u47102095-a4ed-434b-9cdc-730b82ef84d&title=&width=664.8)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671625173051-0508bcf0-60d5-4e45-8205-1c49517453b9.png#averageHue=%23282b35&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=714&id=u63e84624&margin=%5Bobject%20Object%5D&name=image.png&originHeight=893&originWidth=1483&originalType=binary&ratio=1&rotation=0&showTitle=false&size=522433&status=done&style=none&taskId=u7ec50c7f-4eee-4e45-b9f3-935212b088c&title=&width=1186.4)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671625192438-4ea732bb-ddc1-4ed5-8bec-57be2de15921.png#averageHue=%23292c36&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=458&id=u65434ff6&margin=%5Bobject%20Object%5D&name=image.png&originHeight=573&originWidth=997&originalType=binary&ratio=1&rotation=0&showTitle=false&size=172289&status=done&style=none&taskId=uf42b2a8c-2697-492a-aeb4-ceb82145eab&title=&width=797.6)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671625205653-bf901374-c669-4cab-a697-a80cd8db0990.png#averageHue=%23282b36&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=395&id=uceaa965a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=494&originWidth=658&originalType=binary&ratio=1&rotation=0&showTitle=false&size=150279&status=done&style=none&taskId=u09191a13-ed76-469f-9228-0bd623161c1&title=&width=526.4)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671625213445-cb4a01e8-d134-4d76-b94b-787584c84bd1.png#averageHue=%23292d37&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=490&id=ue39c6b9b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=613&originWidth=924&originalType=binary&ratio=1&rotation=0&showTitle=false&size=234667&status=done&style=none&taskId=uddd9693e-caf3-4268-ae5d-e2be6d26615&title=&width=739.2)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671625226856-a3ebe727-0332-4761-bc6e-761ff37849a9.png#averageHue=%23fefefe&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=426&id=uf29e4363&margin=%5Bobject%20Object%5D&name=image.png&originHeight=533&originWidth=518&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55839&status=done&style=none&taskId=u1696c081-854b-48bd-b114-b2ceda4ac08&title=&width=414.4)
### 不传入router对象,vue对象就没有router
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671625287510-fd2e9dd0-37cb-4978-9059-022c8e20f40b.png#averageHue=%232a2d38&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=422&id=u3514ac3a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=528&originWidth=661&originalType=binary&ratio=1&rotation=0&showTitle=false&size=216656&status=done&style=none&taskId=ud893090c-ccaf-473b-b35d-2304be52505&title=&width=528.8)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671625301352-39a22fe3-e179-41e1-973d-e9e0aaffe664.png#averageHue=%23272725&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=440&id=ue65523c8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=744&originWidth=731&originalType=binary&ratio=1&rotation=0&showTitle=false&size=315986&status=done&style=none&taskId=ua0fe8695-a635-47d3-a73f-4e4a82a75c0&title=&width=432.79998779296875)
### 传入就有$route(路由规则)和$router(vueRouter对象,包含路由操作方法等)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671625321511-f1d53063-8f4c-4aff-91e2-4ce3e60de281.png#averageHue=%23282926&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=237&id=u4efadd1a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=296&originWidth=384&originalType=binary&ratio=1&rotation=0&showTitle=false&size=110610&status=done&style=none&taskId=u03dad6a9-81f1-4b36-8c4f-e96f1e2ad99&title=&width=307.2)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671625333665-dd3258de-896b-4664-9e67-e6a40ae4a303.png#averageHue=%23252522&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=202&id=uafb917d7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=252&originWidth=335&originalType=binary&ratio=1&rotation=0&showTitle=false&size=56495&status=done&style=none&taskId=ua55ca8cf-8f43-42d5-b9ed-8e200606afa&title=&width=268)
#### currentRoute就是当前路由规则
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671625386073-0699031d-7095-4d18-ac2a-65943fe25616.png#averageHue=%23282825&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=580&id=u9a619e4d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=725&originWidth=683&originalType=binary&ratio=1&rotation=0&showTitle=false&size=313083&status=done&style=none&taskId=uff2b15a5-7c8d-4709-a97c-be33ed57e5e&title=&width=546.4)
### 路由懒加载(()=>import()),提高性能
## 动态路由/:xx
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671625867639-241ea2c5-05bd-40c8-9a03-6d7d98bb6420.png#averageHue=%232a2e38&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=350&id=u91679764&margin=%5Bobject%20Object%5D&name=image.png&originHeight=437&originWidth=1309&originalType=binary&ratio=1&rotation=0&showTitle=false&size=242995&status=done&style=none&taskId=uf5046afa-0586-4981-b6a0-48d8baeed9d&title=&width=1047.2)
### 获取动态路由的参数 [推荐使用props(父子组件传值),需要路由规则里props设置为true] 
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671625867639-241ea2c5-05bd-40c8-9a03-6d7d98bb6420.png#averageHue=%232a2e38&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=350&id=hJ3dv&margin=%5Bobject%20Object%5D&name=image.png&originHeight=437&originWidth=1309&originalType=binary&ratio=1&rotation=0&showTitle=false&size=242995&status=done&style=none&taskId=uf5046afa-0586-4981-b6a0-48d8baeed9d&title=&width=1047.2)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671625994504-22ba97e8-5fda-40cc-a42f-923f0fa82c42.png#averageHue=%23282b34&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=503&id=u81978a64&margin=%5Bobject%20Object%5D&name=image.png&originHeight=629&originWidth=1119&originalType=binary&ratio=1&rotation=0&showTitle=false&size=318737&status=done&style=none&taskId=uf733f5cf-38ff-425c-a9c7-2067f766162&title=&width=895.2)
## 嵌套路由
### 嵌套路由可以把相同的头和尾放到父路由,中间放router view用于选染子路由的内容,达到复用头尾的目的
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671626078266-94c06dd7-a240-4e71-9005-0b559f7b9352.png#averageHue=%23f5e7c8&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=589&id=u3dc52367&margin=%5Bobject%20Object%5D&name=image.png&originHeight=905&originWidth=812&originalType=binary&ratio=1&rotation=0&showTitle=false&size=110096&status=done&style=none&taskId=u342fd2f5-bb73-43d8-9e69-437398ae8d1&title=&width=528.6000366210938)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671626098164-ea88c46d-7bcc-4649-b7ce-493584e4bf17.png#averageHue=%23272b34&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=614&id=u94654afd&margin=%5Bobject%20Object%5D&name=image.png&originHeight=767&originWidth=1154&originalType=binary&ratio=1&rotation=0&showTitle=false&size=326034&status=done&style=none&taskId=u51f163c5-3a2a-4891-aabf-3c6f33f1e86&title=&width=923.2)
### 嵌套路由,会把父路由的路径和子路由的拼接起来
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671626151793-89ee9df3-0aeb-4caa-b546-50659841fae2.png#averageHue=%23282b35&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=724&id=u749cfb98&margin=%5Bobject%20Object%5D&name=image.png&originHeight=905&originWidth=933&originalType=binary&ratio=1&rotation=0&showTitle=false&size=224121&status=done&style=none&taskId=u68cccd8b-3d1a-4a43-ac43-aee81af35b8&title=&width=746.4)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671626249173-84eefe7a-b3c2-4bd2-bed4-434699fbb1a5.png#averageHue=%23fefefe&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=570&id=ua34656bb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=712&originWidth=962&originalType=binary&ratio=1&rotation=0&showTitle=false&size=81174&status=done&style=none&taskId=u413405fc-3874-408b-a091-b66850a2d79&title=&width=769.6)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671626256821-6c5dd6c2-371e-4e21-a880-ea378363fba5.png#averageHue=%23fefefe&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=551&id=udc402ca7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=689&originWidth=967&originalType=binary&ratio=1&rotation=0&showTitle=false&size=98723&status=done&style=none&taskId=uf9d6fde0-e003-4db8-b1fa-c2c3a44b7c7&title=&width=773.6)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671626268292-8f92708d-72f3-4f8a-8715-5c3a558a1a90.png#averageHue=%23a09d97&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=200&id=u037308fa&margin=%5Bobject%20Object%5D&name=image.png&originHeight=250&originWidth=1015&originalType=binary&ratio=1&rotation=0&showTitle=false&size=23192&status=done&style=none&taskId=u0038aae9-45ce-47c6-9e64-d5f348f940f&title=&width=812)
## 编程式导航
### (可以push(相对路径),也可以push({name:xx,params: xx}),name是路由规则里声明的,params可以传递参数
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671627241838-1eb478f9-e9f6-48ec-bf48-c9c1c7634109.png#averageHue=%23282c36&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=614&id=uf0db1a2d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=768&originWidth=1053&originalType=binary&ratio=1&rotation=0&showTitle=false&size=236797&status=done&style=none&taskId=u0800824f-5b71-4e64-b724-fec8f2f4b67&title=&width=842.4)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671627253608-4d5cdcdc-6354-41ae-8eec-845404285826.png#averageHue=%23292c36&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=188&id=u2f5a48d4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=235&originWidth=401&originalType=binary&ratio=1&rotation=0&showTitle=false&size=46514&status=done&style=none&taskId=ubc768805-e054-4995-b2e4-a1ee3d3e7d1&title=&width=320.8)
### replace不会记录历史,push会
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671627599289-efad46c0-c871-4d05-b653-82d8c1de963f.png#averageHue=%23282c36&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=691&id=u1dad18bf&margin=%5Bobject%20Object%5D&name=image.png&originHeight=864&originWidth=1155&originalType=binary&ratio=1&rotation=0&showTitle=false&size=290170&status=done&style=none&taskId=uee689cef-4669-406f-856b-5c39e78181a&title=&width=924)
### go是跳转历史中的某一次,如果是负数则是后退,为-1则与back效果一致	
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671627714788-81ba6494-26c1-4d88-bae7-55a8cd736138.png#averageHue=%23282c35&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=558&id=u9b02d9dc&margin=%5Bobject%20Object%5D&name=image.png&originHeight=697&originWidth=780&originalType=binary&ratio=1&rotation=0&showTitle=false&size=165690&status=done&style=none&taskId=u90559b0d-7c34-421a-825e-e6055bf900c&title=&width=624)
## hash和history模式区别(不管哪种模型都不会在路径变化时向浏览器发送请求(单页面),而是js根据不同url渲染不同内容,数据变化则用ajax或axios获取)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671627867310-44e020d4-370b-4c4f-830f-f830e116e1f0.png#averageHue=%23434652&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=596&id=ub99bb52e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=745&originWidth=1513&originalType=binary&ratio=1&rotation=0&showTitle=false&size=265824&status=done&style=none&taskId=u21405883-03da-465b-8c0d-16f51b40281&title=&width=1210.4)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671627899604-9e305887-42fe-4fba-a149-76c1e9c548e0.png#averageHue=%23454753&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=587&id=u45da718b&margin=%5Bobject%20Object%5D&name=image.png&originHeight=734&originWidth=1401&originalType=binary&ratio=1&rotation=0&showTitle=false&size=283484&status=done&style=none&taskId=u9575a7bf-a1a7-4bf5-971c-642afa46010&title=&width=1120.8)
## history模式
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629000810-921cf39a-8451-48e2-9592-82dab30fa13f.png#averageHue=%23464954&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=539&id=uafc897d8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=674&originWidth=1695&originalType=binary&ratio=1&rotation=0&showTitle=false&size=374467&status=done&style=none&taskId=u97605b02-c70c-4749-88c9-052de73ce9e&title=&width=1356)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629025704-286e8b9e-a6d6-495c-8d45-95d506c129b9.png#averageHue=%23282b34&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=500&id=u808ce893&margin=%5Bobject%20Object%5D&name=image.png&originHeight=625&originWidth=824&originalType=binary&ratio=1&rotation=0&showTitle=false&size=202652&status=done&style=none&taskId=u20b39afc-b79f-485b-874e-55ce3dce9c6&title=&width=659.2)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629044138-b19cb530-d6f6-498c-bcd1-c38453c8b3b1.png#averageHue=%232b2e39&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=581&id=u6ab78c88&margin=%5Bobject%20Object%5D&name=image.png&originHeight=726&originWidth=972&originalType=binary&ratio=1&rotation=0&showTitle=false&size=293633&status=done&style=none&taskId=u6fbeaa7b-f5b6-4793-be2a-85130c41500&title=&width=777.6)
### 配置404和history模式
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629063258-f1d59874-ab04-4cac-bb0b-4cce5d992725.png#averageHue=%23292d37&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=369&id=u24e6bc97&margin=%5Bobject%20Object%5D&name=image.png&originHeight=461&originWidth=1187&originalType=binary&ratio=1&rotation=0&showTitle=false&size=108196&status=done&style=none&taskId=u024d2241-bb41-45ee-903f-47ed161ea20&title=&width=949.6)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629103308-67372635-bd09-4ed0-a1b5-15d3661dd241.png#averageHue=%23f3f3f3&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=235&id=u93178fa1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=294&originWidth=1129&originalType=binary&ratio=1&rotation=0&showTitle=true&size=37238&status=done&style=none&taskId=ucdc8ab6b-15d4-4b42-bea3-61db670d27d&title=%E6%AD%A4%E6%97%B6%E5%88%B7%E6%96%B0%E4%BC%9A%E5%90%91%E6%B5%8F%E8%A7%88%E5%99%A8%E5%8F%91%E9%80%81%E8%AF%B7%E6%B1%82%2C%E5%A6%82%E6%9E%9C%E6%B5%8F%E8%A7%88%E5%99%A8%E4%B8%8D%E6%94%AF%E6%8C%81%2C%E6%88%96%E6%B2%A1%E6%9C%89%E8%AF%A5%E9%A1%B5%E9%9D%A2%E4%BC%9A%E8%B7%B3%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84404&width=903.2 "此时刷新会向浏览器发送请求,如果浏览器不支持,或没有该页面会跳浏览器的404")
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629178758-a3d98ac1-d04d-4448-b2d0-59188d621977.png#averageHue=%23262625&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=252&id=ue736cd55&margin=%5Bobject%20Object%5D&name=image.png&originHeight=315&originWidth=750&originalType=binary&ratio=1&rotation=0&showTitle=false&size=78241&status=done&style=none&taskId=u6e40f9ba-b779-4267-a582-21e48841715&title=&width=600)
### 这里的history模块是处理history模式的,此时没有注册到中间件(use)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629192045-d98e4b54-c17a-4845-9d91-1f5e9dac74ca.png#averageHue=%23272b34&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=518&id=u3e07a562&margin=%5Bobject%20Object%5D&name=image.png&originHeight=648&originWidth=1342&originalType=binary&ratio=1&rotation=0&showTitle=false&size=366680&status=done&style=none&taskId=ubf5ccfeb-d19c-4dfa-8f35-4949b174fac&title=&width=1073.6)
### 访问时,history模块会往地址里push路径,但是不会刷新
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629311852-ff4abeea-1f9a-4891-829f-18d7c90d799c.png#averageHue=%23d5d3cd&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=261&id=u7be8b458&margin=%5Bobject%20Object%5D&name=image.png&originHeight=326&originWidth=1220&originalType=binary&ratio=1&rotation=0&showTitle=false&size=57552&status=done&style=none&taskId=ub8187d32-96bb-4e80-b1b6-45333230da9&title=&width=976)
### 如果刷新浏览器,没有对history模块的支持,则浏览器去寻找该地址,找不到,直接返回404
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629303438-67c0699c-712c-48e2-a29e-1d91b666cd19.png#averageHue=%23959691&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=91&id=ufe0fb5ed&margin=%5Bobject%20Object%5D&name=image.png&originHeight=114&originWidth=508&originalType=binary&ratio=1&rotation=0&showTitle=false&size=25691&status=done&style=none&taskId=u287aa4e1-da91-495b-ac76-3be8079aa16&title=&width=406.4)
### 使用history支持,则刷新时找不到该路径(url对应资源),则会把当前单页面应用返回给浏览器,然后浏览器再根据该单页面应用去找对应路径资源
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629421499-04380b44-2e66-4d0a-bbb6-e8c20d866d16.png#averageHue=%23292d37&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=448&id=u03dca717&margin=%5Bobject%20Object%5D&name=image.png&originHeight=560&originWidth=1036&originalType=binary&ratio=1&rotation=0&showTitle=false&size=306707&status=done&style=none&taskId=u294d7c7b-f014-4565-a86c-210e13a403a&title=&width=828.8)
### nginx配置history模式
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629570746-b24b2c28-b4c8-4188-9fef-1b81419399d0.png#averageHue=%23454854&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=462&id=ud86df510&margin=%5Bobject%20Object%5D&name=image.png&originHeight=577&originWidth=1511&originalType=binary&ratio=1&rotation=0&showTitle=false&size=257294&status=done&style=none&taskId=u4b92719e-fb16-475d-8883-ba47f59480b&title=&width=1208.8)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629576290-83d7e26c-b48d-4577-a5e3-1f7b22c81918.png#averageHue=%233a3d48&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=679&id=uf87ec2f5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=849&originWidth=1132&originalType=binary&ratio=1&rotation=0&showTitle=false&size=104814&status=done&style=none&taskId=u1f5ac316-8eb4-43d0-9b51-3c73d65ce61&title=&width=905.6)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629588083-a40b0deb-b664-4b7d-835e-8a36ff49e471.png#averageHue=%23242322&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=308&id=u84cd1c17&margin=%5Bobject%20Object%5D&name=image.png&originHeight=385&originWidth=432&originalType=binary&ratio=1&rotation=0&showTitle=false&size=47444&status=done&style=none&taskId=u494d1833-b0a0-4d60-b469-c97aff3d74a&title=&width=345.6)
#### 默认80端口
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629607041-d4602759-1082-41a2-94ec-455840ef035e.png#averageHue=%23f9f9f8&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=333&id=u7869c7be&margin=%5Bobject%20Object%5D&name=image.png&originHeight=416&originWidth=1280&originalType=binary&ratio=1&rotation=0&showTitle=false&size=147348&status=done&style=none&taskId=uaab5e192-845b-41e4-aef4-5e84c5f95aa&title=&width=1024)
### 把项目打包,把dist里的内容(不是复制dist文件夹)复制
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629623169-48c05e30-594e-4485-880f-222f90a1e620.png#averageHue=%23403f3f&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=258&id=ucf0d8208&margin=%5Bobject%20Object%5D&name=image.png&originHeight=322&originWidth=578&originalType=binary&ratio=1&rotation=0&showTitle=false&size=43234&status=done&style=none&taskId=u98b2a1f5-a538-47e8-bffe-fa8e31405f2&title=&width=462.4)
### 黏贴打包好的文件到nginx的html文件夹下,dist里的index.html替换nginx默认的html
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629725679-e319b20b-311f-4fed-ae97-cc378f4b49fd.png#averageHue=%23232322&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=256&id=uec0d9eeb&margin=%5Bobject%20Object%5D&name=image.png&originHeight=320&originWidth=610&originalType=binary&ratio=1&rotation=0&showTitle=false&size=79483&status=done&style=none&taskId=ud86ebaa9-728b-4070-8f81-8deae449193&title=&width=488)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629736920-b720d640-6d7f-4a01-9156-86f05ebc2c4e.png#averageHue=%23fdfdfd&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=701&id=u17d6071f&margin=%5Bobject%20Object%5D&name=image.png&originHeight=876&originWidth=1352&originalType=binary&ratio=1&rotation=0&showTitle=false&size=162177&status=done&style=none&taskId=u57f9571f-a85d-4905-879d-30730816996&title=&width=1081.6)
### nginx默认不支持history模式
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629747596-0f7f16a2-96c2-47ba-934f-33562d3201e2.png#averageHue=%23faf9f9&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=239&id=u0f853ce4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=299&originWidth=1429&originalType=binary&ratio=1&rotation=0&showTitle=false&size=41989&status=done&style=none&taskId=uee3fc144-fde4-469c-9af1-2a21ec36373&title=&width=1143.2)
### 解决: 修改conf/nginx.conf[改完要重启], location / 对应nginx的根目录,try_files是当访问不到url时,尝试请求根目录下的uri对应的文件($uri),找不到就找uri对应目录下的文件($uri/),否则返回当前单页面应用(/index.html)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629834349-5b8a856e-1219-45d4-a24e-62d114f9fd4f.png#averageHue=%23282c35&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=422&id=uab35d171&margin=%5Bobject%20Object%5D&name=image.png&originHeight=527&originWidth=897&originalType=binary&ratio=1&rotation=0&showTitle=false&size=148410&status=done&style=none&taskId=ucd9a9727-5d66-45ac-b573-08249597d49&title=&width=717.6)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671629968264-1166c6ae-f720-4f7b-95cd-a47017be5f64.png#averageHue=%23fcfcfc&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=225&id=uff4f42df&margin=%5Bobject%20Object%5D&name=image.png&originHeight=281&originWidth=1264&originalType=binary&ratio=1&rotation=0&showTitle=false&size=36915&status=done&style=none&taskId=ue7abf872-0f31-488f-b87a-bbb2b1f25bb&title=&width=1011.2)
# vueRouter实现原理
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671630029207-c4f15c9a-d319-47f6-b64f-c69d855044e2.png#averageHue=%23444753&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=600&id=u223a20d7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=887&originWidth=747&originalType=binary&ratio=1&rotation=0&showTitle=false&size=163751&status=done&style=none&taskId=uff75efc5-22b5-4440-8567-749f17dbb0f&title=&width=505.60003662109375)
## 两种模式
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671630053356-a8ec1c78-e362-4173-b17d-3d52da209239.png#averageHue=%23454853&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=467&id=ua8b310e5&margin=%5Bobject%20Object%5D&name=image.png&originHeight=584&originWidth=1160&originalType=binary&ratio=1&rotation=0&showTitle=false&size=202551&status=done&style=none&taskId=u02896224-eab5-4dd6-8c7f-1bc85644596&title=&width=928)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671630070215-a8723ab0-7ab6-4e07-b85d-dd937cc363b0.png#averageHue=%23464954&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=454&id=ucb0dc522&margin=%5Bobject%20Object%5D&name=image.png&originHeight=568&originWidth=1252&originalType=binary&ratio=1&rotation=0&showTitle=false&size=222258&status=done&style=none&taskId=u8a52a287-87cd-4ccb-8ccf-c404231e62b&title=&width=1001.6)
# VueRouter 模拟实现
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671630111979-98fa843a-bc02-4c21-98cb-07aaa03b4b6e.png#averageHue=%23323640&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=714&id=ub6b42e68&margin=%5Bobject%20Object%5D&name=image.png&originHeight=893&originWidth=1525&originalType=binary&ratio=1&rotation=0&showTitle=false&size=250869&status=done&style=none&taskId=u9b284e73-1e4d-499c-bd40-aa8f7e430f5&title=&width=1220)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671630169131-18ef861e-7059-449a-9b5f-cccea9c976f2.png#averageHue=%23eceded&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=674&id=u7ade07c4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=843&originWidth=1121&originalType=binary&ratio=1&rotation=0&showTitle=false&size=152305&status=done&style=none&taskId=u49e84759-e1be-48fd-af3c-d708e0b2346&title=&width=896.8)
## router install方法(先创建一个带vue-router的vue2项目)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671632801368-64938ad2-d17e-4180-ad75-a1277f9984bf.png#averageHue=%2323272e&clientId=ue90d661c-2a90-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=553&id=ue26e6b38&margin=%5Bobject%20Object%5D&name=image.png&originHeight=691&originWidth=339&originalType=binary&ratio=1&rotation=0&showTitle=false&size=137242&status=done&style=none&taskId=u779ef50c-17ab-4c6e-ba91-4639b3e8873&title=&width=271.2)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671679432983-884f98cc-80d9-4cc6-9a3d-408240efbb34.png#averageHue=%23262729&clientId=u518d89cc-31b3-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=431&id=u98a4f4e0&margin=%5Bobject%20Object%5D&name=image.png&originHeight=539&originWidth=284&originalType=binary&ratio=1&rotation=0&showTitle=false&size=21465&status=done&style=none&taskId=uffa2fca5-b2fd-43a6-b357-e005412762a&title=&width=227.2)
```javascript
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
}
```
## 构造函数
```javascript
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
}
```
## createRouteMap(把传进来的路由规则转换为键值对形式放到routeMap里)
```javascript
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
                if (this.$options.router) { // 如果vue实例有router才执行
                    _Vue.prototype.$router = this.$options.router // vue对象的router挂载给这的全局变量             
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
}
```
## initComponent
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671678409583-7fe79291-e1c3-46c1-aa53-256b6b9f170b.png#averageHue=%23292d37&clientId=u518d89cc-31b3-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=150&id=u4b77f1e1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=188&originWidth=783&originalType=binary&ratio=1&rotation=0&showTitle=false&size=87343&status=done&style=none&taskId=u1a8959cf-b165-4b75-938d-9f90593221c&title=&width=626.4)
```javascript
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
    }
    initComponents(Vue) {
        // 找到vue对象里的<router-link></router-link>标签
        Vue.component('router-link', {
            props: {
                to: String
            },
            // 本质是a标签加插槽,将来把路由对应组件渲染到插槽里
            template: '<a :href="to"><slot></slot></a>'
        })
    }
}
```
## 测试使用 
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671679219857-07fca083-589f-4fa0-bfe1-a93df12d5acb.png#averageHue=%23222120&clientId=u518d89cc-31b3-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=217&id=ueea2fde4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=271&originWidth=639&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30981&status=done&style=none&taskId=u32f6e0f2-2935-43e0-9c71-f404557d5c8&title=&width=511.2)
### 报错2: 使用了未注册的routerLink组件
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671679477240-7593d770-76cb-4a48-a0d5-6fe210d5919a.png#averageHue=%23feecea&clientId=u518d89cc-31b3-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=330&id=u734f9bc8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=412&originWidth=728&originalType=binary&ratio=1&rotation=0&showTitle=false&size=32614&status=done&style=none&taskId=u67ef6764-7abc-4bdc-8a10-34cb2768d11&title=&width=582.4)
### 报错1: 使用的是只有运行版本的build -> 什么意思? :
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671679579763-f2656dc6-978a-4c5e-af39-5de3beeee92d.png#averageHue=%23464954&clientId=u518d89cc-31b3-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=455&id=ucdb53ff3&margin=%5Bobject%20Object%5D&name=image.png&originHeight=569&originWidth=1739&originalType=binary&ratio=1&rotation=0&showTitle=false&size=356402&status=done&style=none&taskId=ub28b240b-f677-4d94-9a14-a07757d2f89&title=&width=1391.2)
## 解决报错1的方法1: 使用完整的vue
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671681599735-89900891-4e7a-445b-96bb-a3d6001c0096.png#averageHue=%23e2e1dc&clientId=u518d89cc-31b3-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=577&id=u68cc8530&margin=%5Bobject%20Object%5D&name=image.png&originHeight=721&originWidth=1445&originalType=binary&ratio=1&rotation=0&showTitle=false&size=256225&status=done&style=none&taskId=u8e9a818f-f0d9-4993-8d26-3d6862d3958&title=&width=1156)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671681617277-f2da518e-9da9-4326-81cb-55373d6860ea.png#averageHue=%23fdfdfd&clientId=u518d89cc-31b3-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=316&id=u8a71cd4e&margin=%5Bobject%20Object%5D&name=image.png&originHeight=395&originWidth=1260&originalType=binary&ratio=1&rotation=0&showTitle=false&size=137315&status=done&style=none&taskId=u9d69b4cf-1f32-49ee-b74e-a0bbcd38d79&title=&width=1008)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671681654417-eeeffaed-a8a3-4eed-abd1-d6750d488ab3.png#averageHue=%23222120&clientId=u518d89cc-31b3-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=190&id=u2a1250f8&margin=%5Bobject%20Object%5D&name=image.png&originHeight=237&originWidth=794&originalType=binary&ratio=1&rotation=0&showTitle=false&size=32657&status=done&style=none&taskId=u668bc706-7ee7-4d12-9bf3-ab33c41cf43&title=&width=635.2)![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671681777588-acc32991-724f-416e-9700-fe1ab5e8797f.png#averageHue=%23fefefd&clientId=u518d89cc-31b3-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=321&id=u05a308d9&margin=%5Bobject%20Object%5D&name=image.png&originHeight=401&originWidth=1355&originalType=binary&ratio=1&rotation=0&showTitle=false&size=36755&status=done&style=none&taskId=u9e30fbda-8bc6-4c5f-acb4-01b3ee0fd8c&title=&width=1084)
## 解决报错1的方法2:  render(我们平常写的vue组件可以工作,是因为文件里的template被编译成render函数(预编译))

![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671682273223-817c5857-6f28-4134-8054-ea41cc20c8af.png#averageHue=%23fdfdfd&clientId=u518d89cc-31b3-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=251&id=u3c1bd2b4&margin=%5Bobject%20Object%5D&name=image.png&originHeight=314&originWidth=1153&originalType=binary&ratio=1&rotation=0&showTitle=false&size=20739&status=done&style=none&taskId=uaebcec81-b241-4b97-a857-cd129ab2534&title=&width=922.4)
```javascript
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
    }
    initComponents(Vue) {
        // 找到vue对象里的<router-link></router-link>标签
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
                    }
                    //默认插槽
                }, [this.$slots.default]) // a标签子元素放插槽
            }
        })
    }
}
```
## route-view
```javascript
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
    }
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
}
```
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26091703/1671685974148-9cc5a1e4-e6cc-44ec-89fa-d42ce2b3a527.png#averageHue=%23fefdfd&clientId=u518d89cc-31b3-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=262&id=u3296e3e7&margin=%5Bobject%20Object%5D&name=image.png&originHeight=328&originWidth=921&originalType=binary&ratio=1&rotation=0&showTitle=false&size=26516&status=done&style=none&taskId=uc8451c48-3c41-4dab-93e6-989e5f8e3dc&title=&width=736.8)
## initEvent ( 上面的代码,当浏览器点击返回(<-)时,并没有返回到上一个页面)
```javascript
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
```
