import common from './css/common.css';
import css from './css/index.css';
import lessblack from './css/black.less';
import sass from './css/sass.scss';

//import Vue from 'vue';

// import $ from 'jquery';
 $('#test').html('525252');

//document.getElementById('test').innerHTML='123456';
let add = function(){
   // console.log(init);
}
add();

new vue({el : "#vues",template:'<div><h1>{{test}}</h1></div>',
data:{
test:'hello vue'
}});

const str = `
    <div>11111</div>
    <div>11111</div>
    <div>11111</div>
    <div>11111</div>
    <div>11111</div>
    <div>11111</div>
`;

//打包css  style-loader css-loader