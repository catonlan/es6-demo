var lastWord = "last word"

var a = {
    "first word": "hello",
    [lastWord]:"world"
}

console.log(a["first word"])

console.log(a[lastWord])
console.log(a["last word"])