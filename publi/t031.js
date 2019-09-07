getJSON("/post/1.json").then(function(post) {
    return getJSON(post.commentURL)

}).then(function(comments) {
    // some code
}).catch(function(error) {
    //处理前两个回调函数 的错误
})