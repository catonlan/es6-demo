
// map 结构属性方法

var m = new Map()

m.set("edition", 6)  // 键是字符串
m.set(262, "standard") // 键是数值
m.set(undefined, "nah")// 键是undefined


var hello = function() {console.log("hello")}

m.set(hello, "hello ES6!") // 键是函数

m.has("edition")
m.has("years")
m.has(262)
m.has(undefined)
m.has(hello)


m.delete(undefined)
m.has(undefined)

m.get(hello)
m.get("edition")
