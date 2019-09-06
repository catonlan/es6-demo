var map = new Map() // 遍历map结构
map.set('first', 'hello')
map.set('second', 'world')
console.log(map)

for (const [key, value] of map) {
  console.log(key + ' is ' + value)
}

// first is hello
// second is world
