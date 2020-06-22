const path = require('path') //这是node中自带的模块
const HtmlWebPackPlugin = require('html-webpack-plugin')//自动生成index页面的插件

const { VueLoaderPlugin } = require("vue-loader");

//创建一个插件的实例对象,作用1自动在内存中根据指定页面生成一个内存的页面，2自动把打包好的dist下的main.js追加到页面中去
const htmlPlugin = new HtmlWebPackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})

//向外暴露一个打包的配置对象
module.exports = {
    mode: 'development',//development,production
    //在webpack 4.x 中约定大于配置，约定默认打包路径是src->index.js,打包的输出文件是dist
    plugins:[
        htmlPlugin,
        new VueLoaderPlugin()
    ],
     //--hot --open什么的 还可以在webpack.config.js利用devServer方式
    devServer:{//第二种配置dev-server命令参数的形式，相对麻烦
        open:true,
        port:3000,
        hot:true
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
          
        ]
    },
    resolve:{
        alias:{//修改vue包导入的路径
            // "vue$":"vue/dist/vue.js"
        }
    }
}

//这是ES6中向外到处模块的API与之对应的是import ** from '标识符'
//export default{}