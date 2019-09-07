
export var firstName = "David"
export var lastName = "Belle"
export var year = 1937

// 同等于 

export {firstName, lastName, year}

//-----------------------------

// 其他文件加载这个模块

import {firstName, lastName, year} from './...'//模块目录

function setHeader(element) {
    element.textContent = firstName + ' ' + lastName
}