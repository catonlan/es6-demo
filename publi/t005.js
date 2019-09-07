var o = { // 变量的嵌套解构赋值
  p: [
    'hello',
    { y: 'world' }
  ]
}

var { p: [x, { y }] } = o

console.log(x, y)
// x hello
// y world
