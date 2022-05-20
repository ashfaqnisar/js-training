// Promises.

//  - Ask  Something
//  - Waiting for the response
//  - Response 

// const samplePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('User was not present in the system');
//     }, 2000);
// });

const test = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10000)
        // reject("User was not present in the system")
        // resolve({
        //     name: "Vivek",
        //     age: 21,
        //     email: "sds@gfds.com", 
        //     address: {
        //         city: "Bangalore",
        //     }
        // })
    }, 2000)
})

console.log(test?.address?.city ?? "No city")

// try{
//     test
//     .then((res) => res ) 
// }catch(err){
//     console.log(err)
// }finally{
//     console.log("Finally")
// }
// - button press
// - request
// - priomise start 
// - stop execution
// - wait for response
// - response
// - reposnse success or failure


// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))

test
    .then((res) => console.log(res))
    .catch(err => err)
    .finally(() => console.log("Finally"))

// Promise Chaining

test
    .then((res) => res)
    .then(res => res + 100)
    .then(res => console.log(res))
    .catch(err => err)
    .finally(() => console.log("Finally"))


const runApp = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10000)
        }, 2000)
    })
}

console.log(typeof runApp)

console.log(runApp())


runApp().then(res => console.log(res))

setTimeout(() => {
    console.log("This should run in the last")
}, 2000)

console.log("This should run in the last")




