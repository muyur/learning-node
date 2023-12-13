global.age = 10
function a() {
    global.age++
}
function b() {
    global.age--
}

a()
console.log(global.age)