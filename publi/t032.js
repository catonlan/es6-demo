// promise 对象

var promises = [2, 3, 5, 7, 11, 13].map(function(id) {
  return getJSON('/post/' + id + '.json');
});

Promise.all(promises)
  .then(function(posts) {
    // ...
  })
  .catch(function(reason) {
    //...
  });
//----------------------------------
var p = Promise.resolve('Hello');

p.then(function(s) {
  console.log(s); // Hello
});
//----------------------------------
async function getStockPrice(symbol, currency) {
  let price = await getStockPrice(symbol);
  return convert(price, currency);
}

//----------------------------------

function tiemout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })

}

async function asyncValue(value) {
    await tiemout(50)
    return value
}
