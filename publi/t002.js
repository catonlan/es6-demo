// let 没有变量提升
var a = []
for (var i = 0; i < 10; i++) {
  // let c = i
  const c = i
  a[i] = function () {
    console.log(c)
  }
}

a[6]()
