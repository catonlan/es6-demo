var promise = new Promise(function(resolve, reject) {
  if (/*异步操作成功 */) {
    resolve(value)
  }
    
else {
    reject(error);
    }
})


promise.then(function(value) {
    // success
}, function(value) {
    // failure
})
function timeout(ms) { 
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
 }

 timeout(100).then(() => {
     console.log('done')
 })