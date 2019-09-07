// 将this与定义时的对象绑定

var handler = {
    id: "123456",
    init: function () {
        document.addEventListener("click", event => this.doSomething(event.type), false)
    }

    doSomething: function(type) {
        console.log("handling" + type + "for" + this.id)
    }
}

console.log(handler.doSomething(23))