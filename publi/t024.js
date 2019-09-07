
// 数组的扩展运算

var a = [1]
var b = [2,3,4]
var c = [6,7]
var d = [0, ...a, ...b, 5, ...c]

console.log(d) // [0,1,2,3,4,5,6,7]