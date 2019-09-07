for (let index of ['a', 'b'].keys()) {
  // keys() 是对键名的遍历

  console.log(index);
}

// 打印 0 1

for (let ekem of ['s', 'g'].values()) {
  // values() 是对键值的遍历
  console.log(ekem);
}
// 打印 s g

for (let [index, ekem] of ['s', 'g'].entries()) {
  // entries() 是键值对 的遍历
  console.log(index, ekem);
}
// 打印 0  s
//      1 g
