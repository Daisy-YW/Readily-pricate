/* 
基本语法:
    (参数1,参数2,...参数N) => {函数声明}


    //相当于：(参数1, 参数2, …, 参数N) =>{ return 表达式; }
    (参数1,参数2,...参数N) => 表达式


    //当只有一个参数时,圆括号是可选的
    (一个参数) => {函数声明}
    一个参数 => {函数声明}

    //没有参数的函数应该写成一对圆括号
    () => {函数声明}


高级语法:
    //加括号的函数体返回对象字面表达式
    参数 => ({foo:bar})

    //支持剩余参数和默认参数
    (参数1,参数2,...rest) => {函数声明}
    (参数1 = 默认值1,参数2,...,参数N = 默认值n) => {函数声明}

    //同样支持采纳数列表解构
    let f = ([a,b] = [1,2],{x:c} = {x: a + b}) => a + b + c;
    f();
*/