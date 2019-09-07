// 模板字符串
var name = "bob" , time = "today"

`hello ${name}, how are you ${time}?` // 字符串中嵌入变量

// 变量名必须写在 ${} 中
var x = 3
var t = 5
console.log(`${x} + ${t} = ${x +t}`) // "3+5 = 8"