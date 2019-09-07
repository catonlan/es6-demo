var [foo = true] = [] // 结构赋值的默认值
var [abc] = []
console.log(foo, abc)

var { fii, bar } = { fii: 'aaa', bar: 'bbb' } // 结构对象

console.log(fii, bar)

var { bae } = { foe: 'aaa', bss: 'dss' }

console.log(bae) // undefined  对象的解构必须与属性同名,才能取到正确的值
