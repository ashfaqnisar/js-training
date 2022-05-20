class student {
    
    constructor(name, age, email) {
        this.name = name
        this.age = age
        this.email = email
    }

    setNumber(number) {
        this.number = number
    }

    getNumber(){
        return this.number
    }

    getName() {
        return this.name
    }
}

const vivek = new student("vivek", 22, "email.com")
console.log(vivek.getName())
const ash = null ?? "Ashfaq"
console.log(vivek)

class Car {
    constructor(name, company) {
        this.name = name
        this.company = company
    }

    drive(){
        console.log("Driving")
    }
}

const x8 = new Car("BMW X8", "BMW")
x8.drive()

const sample = new String("Hello")
const sample1 = "Hello"

const sample2 = new Number(10)
console.log(typeof sample)
console.log(typeof sample1)
console.log(typeof sample2)

const sample4 = {
    name: "vivek",
    age: 22,
    number: null,
    email: "vivke@gmail.com",
    "hello world": "program", 
    address: {
        street1: 0
    }, 
    getSampleAddress: function(){
        return this.address
    }
}
console.log(sample4.getSampleAddress())

// bike {
//     name: "",
//     company: ""
// }

function bike(name, company) {
    this.name = name
    this.company = company
}
bike.prototype.drive = function() {
    console.log(`We are driving ${this.name} of ${this.company}. `)
}

const duke = new bike("Duke 200", "Duke")
duke.name = "Duke 300"
console.log(duke)
duke.drive()

const splendor = Object.create(duke)
splendor.name = "Splendor"
console.log(splendor)


//encapsulation example
class person{
	constructor(name,id){
		this.name = name;
		this.id = id;
	}
	add_Address(add){
		this.add = add;
	}
	getDetails(){
		console.log(`Name is ${this.name},Address is: ${this.add}`);
	}
}

let person1 = new person('Mukul',21);
console.log(person1.add)
person1.add_Address('Delhi');
person1.getDetails();


console.log(vivek.number)
vivek.setNumber(123)
console.log(vivek.getNumber())

function samplePerson(name, email) {
    let name1 = name
    let email1 = email

    let getNameAndEmailPrivate = function(){
        return `Name is ${name1}, Email is ${email1}`
    }

    this.test = getNameAndEmailPrivate()

    this.getNameAndEmail = function() {
        return `The name is ${name1} and email is ${email1}`
    }
}

const ashad = new samplePerson("ashad", "ash@gmail.com")
console.log(ashad.getNameAndEmail())
console.log(ashad.test)


//Inheritance example
class person23{
	constructor(name, age){
		this.name = name;
        this.age = age;
	}

    get getName(){
        return this.name
    }
	//method to return the string
	toString(){
		return (`Name of person: ${this.name} and age is ${this.age}`);
	}
}

const ashas = new person23('ashad', 21);
console.log(ashas.toString())

class student12 extends person23 {
    constructor(name,  age, rollNo, branch){
        super(name, age)
        this.rollNo = rollNo
        this.branch = branch
    }

    toString() {
        return `${super.getName} Roll no is ${this.rollNo} and branch is ${this.branch}`
    }

}
const adsasd = new student12("adfssd",21, 12, "CSE")
console.log(adsasd.toString())








// class student extends person{
// 	constructor(name,rollNo){
// 		//super keyword to for calling above class constructor
// 		super(name);
// 		this.rollNo = rollNo;
// 	}
// 	toString(){
// 		return (`${super.toString()},Student ID: ${this.rollNo}`);
// 	}
// }
// let student1 = new student('Mukul',22);
// console.log(student1.toString());
