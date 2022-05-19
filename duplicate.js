function sampleTest(x, x){
    console.log(x)
}
sampleTest(1,2)


// const sampleTest1 = (x, x) => {
//     console.log(x)
// }
// sampleTest1(1,2)



// Student {
//     name: String
//     age: Number
//     email: String
// }

function Student(name, age, email){ //Constructor
    this.name = name
    this.age = age
    this.email = email
}

// const  Student = () => {
//     this.name = name
//     this.age = age
//     this.email = email
// }

// FIve students
const vivek = new Student("vivek", 22, "vivke@gmail.com")
const ash = new Student("vivek", 22, "vivke@gmail.com")
const vamshi = new Student("vivek", 22, "vivke@gmail.com")

console.log(vivek)


// TOp of the file.
// 
// IN this, new but arrow 