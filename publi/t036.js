// 为输入的属性或方法重新取一个名字

import {someMethod, another as newName} from "./...."

export function area(radius) {
    return Math.PI * radius * radius
}

export function circumference(radius) {
    return 2 * Math.PI * radius
}


import {area, circumference} from 'circle'

console.log("圆面积：" + circle.area(4))
console.log("圆周长：" + circle.circumference(14))