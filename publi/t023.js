// 函数的扩展

function push(array, ...items) {
  array.push(...items);
}

function add(x, y) {
  return x + y;
}

var numbers = [3, 43];
console.log(add(...numbers));  //46
