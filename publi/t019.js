// 监听对象的变化

var o = {}

function observer(changes) {
    changes.forEach(function(change) {
        console.log('发生变动的属性:' + change.name);
        console.log('变动前的值:' + change.oldValue);
        console.log('变动后的值:' + change.object[change.name]);
        console.log('变动类型:' + change.type);
    })
}

Object.observer(o, observer);