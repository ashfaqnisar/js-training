const quantity = 2
const price = 10.2356

const totalPrice= quantity * price

console.log(totalPrice)
console.log(totalPrice?.toFixed(2))

const number = 10000


const samplePrice = number.toLocaleString(); // "10,000.00"
console.log(parseInt(samplePrice)) // 10000
console.log(Number(samplePrice)) // 10000

console.log((String(totalPrice)).toUpperCase())

// const price1 = 10,000.00
// const price2 = 10.000.00

let text = "Vivek,Ashfaq,Rahul";
const myArray = text.split(",");
// console.log(myArray)

String(number)


number.toString()

// Array Class Methods

const arr1 = ["Vivek", "Ashfaq", "Rahul"]
arr1.push("vamshi")

// console.log(arr1)

// arr1.forEach(function test (elem){
//     console.log(elem)
// })

const test1 = arr1.forEach((elem, index) => {
    return {
        name: elem,
    }
})

console.log(test1)

const test= arr1.map((elem, index) => {
    return {
        name: elem,
        age: index
    }
})
console.log(test)


// const arr1.filter((elem, index) => {
//     console.log(elem, index)
// })


const test3 = test.filter((elem, index) => {
    return elem.age > 1
})

console.log(test)
console.log(test3)

const checkForNameAndAge = (elem, index) => {
    return elem.age < 1 && elem.name === "Vivek"
}

const test4 = test.filter(checkForNameAndAge)
console.log(test4)


const test5 = test.find((elem, index) => {
    return index == 1
})
console.log(test5)

const test6 = test.findIndex((elem, index) => {
    return elem.age < 1
})
console.log(test6)

const arr2 = ["Ashfaq", "Nisar"]
arr2.fill("Apple")
console.log(arr2)

const arr3 = ["", "", ""] // 3
const arr4 = new Array(100).fill("*")
console.log(arr3)
console.log(arr4)

console.log(arr1.toString())

console.log(arr1.includes("Vivek"))
console.log(arr1.includes("Vivek", 1))

if(!arr1.includes("Vivek")){
    arr1.push("Vivek")
}

console.log(arr1.indexOf("Ashfaq"))

console.log(arr1.join(" ---- "))

console.log(arr1.concat(arr2))

console.log([...arr1, ...arr2, "Vamshi"])

const test12={name: "ahs"},test22 = {age: 1}
console.log({...test12, ...test22, name: "Vivek"})


const arr5 = [1, 2, 3, 4, 5]

const result = arr5.reduce((acc, elem) => {
    // 0+1
    // 1 +2 
    // 3 + 3
    // 6 + 4
    // 10 + 5
    return acc + elem
}, 10)
console.log(result)


const arr6 = [1, 2, 23, 10,12]
console.log(arr6.sort((a, b) => {
    console.log(a, b)
    return a - b
}))

console.log(arr1.sort())

// create a function to sort the array using bubble sort.

const bubbleSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

const result1 = bubbleSort(arr6)
console.log(result1)

// create a function to sort the array using selection sort.

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (min != i) {
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
    return arr
}

const result2 = selectionSort(arr6)
console.log(result2)

// create a function to sort the array using insertion sort.

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = temp
    }
    return arr
}

const result3 = insertionSort(arr6)
console.log(result3)


// Slice in array
const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(arr7.slice(2))
console.log(arr7)


console.log(arr7.splice(2, 0, 4, 5,6))
console.log("", arr7)


console.log(arr7.reverse())


