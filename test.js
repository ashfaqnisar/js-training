// console.log("Hello World");

// const name = "John";
// console.log(typeof name)

// ctrl + / to comment out a line

/* sdsdsd
sdsdsdsdsd
sd */

// Different types of datatypes.

let test = 122 //string

let number = 10; 
let number1 = 10.2323; 
let Number1 = 10.5

let bigNumber = 1234567890123456789012345678901234567890n;

let sampleDate = new Date();

let boolean = true, boolean1 = false;

let sampleNull = null;
let sampleUndefined = undefined;

let sampleObject = {
    name: "John",
    number: 12345,
    email: "john@email.com"
}

let sampleArray = ["John", "Jane", "Mary"];

console.log(sampleObject.name);
console.log(sampleObject.number);
console.log(sampleObject.email);

console.log(sampleArray);

console.log(sampleDate.getDate());

console.log(typeof bigNumber)
console.log(typeof sampleNull)
console.log(typeof sampleUndefined)

const sampel = 10

// You cannot do this
// let vivek = 10
// let vivek = 15

// let this = 10

let camelCase = "sdsdsdA";

// To uppercase and lowerccase
console.log(camelCase.toUpperCase());
console.log(camelCase.toLowerCase());


// Strings 
console.log(test + " " + number);
console.log(`Name: ${test}, Test: ${number}`);

const n1 = "1" //string
const n2 = 1 //number

console.log(n1 + n2)
console.log(n2 + n1)

console.log(n1 === n2)









// Type conversions 
// Number to String
console.log(String(number));
console.log(String(number1));

// String to Number
console.log(Number(test));

console.log(Boolean(n1))


// Operators 
// Arithmetic Operators
console.log(number + number1);
console.log(number - number1);

console.log("1" + 2 + 2)
console.log(2 + 2 + "1")


test -= 22
console.log(test)


const test12 = test || sampleNull || "Hello"
console.log(test12)

const someValue = 0 || "Hello World"
console.log(someValue)

const some = sampleNull ?? "Hello World"

test++; 
console.log(test)


console.log(Boolean(0))


// Comparisions
const test1 = 1005 > test ? "True" : "False";
console.log(test1);

const test2 = true !== boolean1 ? "True" : "False";
console.log(test2);


console.log("vivek" > "ashfaq")

// conditional statements
if (boolean1) {
    console.log("True");
}else if(1>2){
    console.log("False");
}else {
    console.log("Else");
}

const  test23 = false
const sampleTest = test23 ? 20 : 30
console.log(sampleTest)

const testSample = 10 > 5 ? true : false


if(10> 33 || "test"=="test"){
    console.log("True");
}

if(10> 33 && "test"=="test"){
    console.log("True");
}

const sampleTest1 = !boolean


// Loops
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        continue;
    }
}

// While
let i = 0;
while (i < 10) {
    
    console.log(i);
    if (i === 5) break; 
    i++;
}

// do while
let j = 0;
do {
    console.log(j);
    j++;
}   while (j < 10)

// for in loop
for (const key in sampleArray) {
    console.log(key, sampleArray[key]);
}

// for of loop
for (const key of sampleArray) {
    console.log(key);
}

const sampleNum = 20

// switch statement
switch (sampleNum) {
    case 11:
    case 10:
        console.log("10");
        break;
    case 20:
        console.log("20");
        break;
    default: 
        console.log("Default");
}




