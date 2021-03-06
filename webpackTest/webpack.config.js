const path = require('path');
const glob = require('glob');
//js压缩插件
const uglify = require('uglifyjs-webpack-plugin');
//压缩html--需安装
const htmlPlugin = require('html-webpack-plugin');
//css分离插件--需安装
const extractTextPlugin = require('extract-text-webpack-plugin');
//消除无用css插件
//需安装 purifycss-webpack & purify-css
const purifyCssPlugin = require('purifycss-webpack');
//安装公共插件(jquery) webpack自带插件 ProvidePlugin
const webpack = require('webpack');




//命令行传值打包开发、生产环境
//console.log(process.env)
if(process.env.type == "build"){
    //公共配置
    var webpackSite = {
        //静态资源路径
        publicPath : 'http://img.img.9xiu.com/'
    }
}else{
    var webpackSite = {
        publicPath : 'http://192.168.100.6:1717/'
    }
}



module.exports = {

    //打包调试
    //source-map 打包最慢，生成独立map文件，生成错误 行 列
    //cheap-moudle-source-map 独立map文件，生成错误 行 没有列
    //eval-source-map  打包快 没有独立文件，影响性能，开发阶段用，上线前重新打包 生成错误 行 列
    //cheap-moudle-eval-source-map  生成错误 列 没有行
    
    //devtool : 'eval-source-map',

    //入口
    entry : {
        "common" : './src/entry.js',
        "jquery-module" : 'jquery', //引用jquery包
        "vue-module" : "vue" //引用vue包
       // index : './src/entry2.js'
    },
    //出口
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : '[name].js',//[name]表示为entry定义入口名称[common||index]
        publicPath : webpackSite.publicPath//静态文件公共路径
    },
    //模块
    module : {

        //规则 可以有多个
        rules : [
            // {
            //     test : /\.css$/,//找到css文件
            //     use : ['style-loader','css-loader']//使用哪些loader
            //     //include : ,//需要配置哪些文件，文件夹，扩展名 需要处理
            //     //exclude :,//哪些不需要处理
            //     //query : //额外配置项 可选
            // },
            
            //css-loader: 加载.css文件
            //style-loader:使用<style>将css-loader内部样式注入到我们的HTML页面
            /*
                css3自动添加前缀
                需要安装postcss-loader && autoprefixer(postcss-loader的插件，主要作用添加前缀,在postcss配置文件用引用)
                需要配置文件 postcss.config.js 并在 webpack配置用引用postcss-loader
            */
            {
                test : /\.css$/,//找到css文件
                //分离
                use : extractTextPlugin.extract({
                    fallback : "style-loader",
                    use : ["css-loader","postcss-loader"]
                })
            },
            {
                //file-loader[解决src dist 打包后目录不同的问题]
                //url-loader[配置图片小于limit值改base64]
                test : /\.(png|jpg|jpeg|gif)$/,
                use : [
                    {
                        loader : 'url-loader',
                        options : {
                            limit : 2000, //小于此设置生成base64限制，单位b字节
                            outputPath : 'images/'//打包图片输出路径
                        }
                    }
                ]
            },
            {
                //解决webpack html内插入img标签图片无法打包问题
                test : /\.(htm|html)$/i,
                use :['html-withimg-loader']
            },
            {
                //编译less  安装less&less-loader
                test : /\.less/,
                //use : ['style-loader','css-loader','less-loader']
                //分离
                use : extractTextPlugin.extract({
                    use : ['css-loader','less-loader'],
                    fallback : 'style-loader'
                })
            },
            {
                //编译sass 安装node-sass sass-loader
                test : /\.scss/,
                use : extractTextPlugin.extract({
                    use : ['css-loader','sass-loader'],
                    fallback : 'style-loader'
                })
            },
            {
                //babel编译ES6 jsx--react文件 渲染器使用.babelrc配置
                //babel-core babel-loader babel-preset-env 
                //babel-preset-react //编译react的包
                test: /\.(jsx|js)$/,
                use:{
                    loader : 'babel-loader'
                },
                exclude : /node_modules/
            }
        ]
    },
    //插件
    plugins : [

        //js压缩
        //new uglify(),

        //优化 抽离jquery文件
        new webpack.optimize.CommonsChunkPlugin({
            name : ["jquery-module","vue-module"], // 对应entry模块名
            filename : "assets/[name].js",//抽离目录 [name取上面name，ext扩展名]
            minChunks : 2 //最小抽离文件数
        }),

        //引入公用插件
        new webpack.ProvidePlugin({
            $ : 'jquery',
            vue : 'vue'
        }),
        //版权，打包文件开头加入文案
        new webpack.BannerPlugin("这个文件是我配置的，是第一行"),
        
        //压缩html
        new htmlPlugin({
            //html压缩相关配置
            minify : {
                removeAttributeQuotes : true//去掉html属性的引号 id=test
            },
            hash : true,//解决缓存,引用文件生成随机串
            template : './src/index.html'//模版
        }),
        //分离css 配置css路径
        new extractTextPlugin('css/index.css'),
        //去除无用css
        new purifyCssPlugin({
            //目录下匹配文件node语法
            paths : glob.sync(path.join(__dirname,'src/*.html'))
        })
    ],
    resolve: {
        alias: {
            'vue': 'vue/dist/vue.js'//改变包指向
        }
    },

    //webpack开发服务 热更新 webpack-dev-server
    devServer : {
        contentBase : path.resolve(__dirname,'dist'),//基本目录结构，监听哪里
        host : '192.168.100.6',//ip localhost
        compress : true,//服务器压缩
        port : 1717 //端口
    },
    //自动打包配置
    watchOptions:{
        poll : 1000,//监测时间毫秒
        aggregeateTimeout : 500,//延迟打包，500秒内多次保存只打包一次
        ignored : /node_moudles/ //不打包
    }
}