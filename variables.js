// let vs var
// 1. let is block scoped and var is function scoped.
// 2. let is not hoisted and var is hoisted.
// 3. let doesnot accept redeclaration and var does.

// Redeclaration
var test = 1
var test = 2

let test1 = 1
// let test1 = 2

console.log(test)


// Hoisting


sample = 1
var sample

console.log(sample)


// sampleVar = 1
let sampleVar
// console.log(sampleV)



if(true){
    var test12 = 1
    let test122 = 2
    console.log(test122)
}
function test324(){
    var sample1 = 55

    if(true){
        var sample12 = 66
        console.log(sample1)
    }
}

console.log(sample1)

console.log("Test1", test12)
console.log("test2", test122)