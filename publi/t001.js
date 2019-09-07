
var a = []

for (var i = 0; i < 10; i++) {
  var c = i
  a[i] = function () {
    console.log(c)
  }
}

a[0]()
a[6]()
