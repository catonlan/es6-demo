var s = new Set()

[1,2,3,4,5,3,3,2,2].map(x => s.add(x))

for (i of s) {console.log(i)}

//1 2 3 4 5