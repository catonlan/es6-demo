var { x = 4 } = {} // 对象解构的指定默认值
console.log(x) // 4


// 如果要将一个已经声明的变量用于解构赋值, 必须非常小心

//错误写法

var t;
{t} = {t:1}

console.log(t) // syntaxError:syntax error


// 正确的写法

({r}) = {r:5} 
// "或者" 
({r} = {r:5})
