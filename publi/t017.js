var suffix = 'word';

var a = {
  ['first' + suffix]: 'hello',
  ['last' + suffix]: 'world'
};

console.log(a['first word']);  //hello
console.log(a['last word']);  //world
console.log(a)
