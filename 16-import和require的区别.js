/* import xxx from '...';
var xxx = require('xxx'); */

/* 
区别一: 遵循规范
    require 是AMD规范引入方式
    import 是ES6的一个语法标准,如果要兼容浏览器的话必须转成ES5的语法


区别二: 调用时间
    require是运行时调用,所以require理论上可以运用在代码的任何地方
    import 是编译时调用,所以必须放在文件开头


区别三: 本质
    require是赋值过程, require的结果就是对象/数字/字符串/函数等, 再把require的结果赋值给某个变量
    import 是解构过程,但是目前所有的引擎都还没有实现import, 所以我们需要使用babel转化为ES5再执行, import语法会被转码为require
*/

