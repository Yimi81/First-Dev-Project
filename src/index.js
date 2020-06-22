//入口文件
console.log('ok')

//如何在webpack构建的项目中使用vue开发
//普通网页中如何使用vue:
//1.使用script标签引入vue包
//2.在index页面中，创建一个id为app的div容器
//3.通过new Vue得到一个vm的实例


//在webpack中尝试使用vue
//注意使用下面方法导入的vue构造函数，功能不完整，只提供了runtime-only的方式，并没有提供像网页中那样的使用方式
import Vue from 'vue'
//解决方法1
// import Vue from'../node_modules/vue/dist/vue.js'
//方法2  webpack.config.js中配置resolve

// var login ={
//     template:'<h1>这是login组件，是使用网页中的形式创建出的组件</h1>'
// }


//导入login组件
import login from './login.vue'
//默认，webpack无法打包.vue文件，需要安装相关的loader
//装完后在配置文件中，新增loader配置项

var vm = new Vue({
    el:'#app',
    data:{
        msg:'123'
    },
    render: createElements=> createElements(login)  //ES6箭头函数
})

import m1,{title,content} from './test.js'
console.log(m1)
console.log(title + '---' + content)

