
// 从函数返回多个值

// 返回一个数组
function ezample () {
  return [1, 2, 3]
}

var [a, v, b] = ezample()
console.log(a, v, b)

// 返回一个对象

function example () {
  return {
    foo: 3,
    bar: 6
  }
}

var { foo, bar } = example()
console.log(foo, bar)
