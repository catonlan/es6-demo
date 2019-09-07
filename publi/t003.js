function fn () {
  const n = 5
  for (var i = 0; i < 10; i++) {
    const u = 10
    console.log(u) // 10
  }
  console.log(n) // 5
}
fn()
