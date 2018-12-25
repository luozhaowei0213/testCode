const path = require('path');
module.exports = {
    //入口
    entry : {
        common : './src/entry.js',
        index : './src/entry2.js'
    },
    //出口
    output : {
        path : path.resolve(__dirname,'dist'),
        filename : '[name].js'//[name]表示为entry定义入口名称[common||index]
    },
    //模块
    module : {

        //规则 可以有多个
        rules : [
            {
                test : /\.css$/,//找到css文件

                //三种写法
                use : ['style-loader','css-loader']//使用哪些loader
                //loader : ['style-loader','css-loader']//使用哪些loader
                //use : [ { loader : 'style-loader' } , { loader : 'css-loader' }  ]
                
                //include : ,//需要配置哪些文件，文件夹，扩展名 需要处理
                //exclude :,//哪些不需要处理
                //query : //额外配置项 可选
            }
        ]
    },
    //插件
    plugins : [],

    //webpack开发服务 热更新 webpack-dev-server
    devServer : {
        contentBase : path.resolve(__dirname,'dist'),//基本目录结构，监听哪里
        host : '192.168.100.6',//ip localhost
        compress : true,//服务器压缩
        port : 1717 //端口
    }
}