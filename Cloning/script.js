console.log("Hello World")

const person = {
    firstName: "Tunmise",
    middleName: "Paul"
}

const otherPerson = person

person.firstName = "Makalele";
console.log(person)
console.log(otherPerson)

console.log(person === otherPerson)

// SHALLOW CLONING
// Spread Operator (...)

// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(...numbers)

// const newNumber = [...numbers];
// console.log(newNumber);


const numbers = [1, 2, 3, 4, 5, 6];
const copiedNumber = numbers
const newNumber = [...numbers];

console.log(newNumber);

console.log(copiedNumber)

console.log(numbers === copiedNumber)
console.log(numbers === newNumber)

numbers.push(7)
console.log(numbers)
console.log(copiedNumber)
console.log(newNumber)

const number$ = numbers.slice(2,4)
console.log(number$)

//Object cloning

const personDetails = {
    name: "zainab",
    age: 30,
    height: "6ft"
}

const changeDetails = {...personDetails}
console.log(changeDetails)


personDetails.name = "Funke"
console.log(personDetails)

const originObj = {
    name: "Bash",
    age: 20,
    address: {
        city: "Ikeja",
        state: "Lagos"
    }
}

const cloneObj = Object.assign({}, originObj)

cloneObj.name = "Murphy"
cloneObj.address.city = "Yaba"

console.log('Original Obj', originObj)
console.log('Clone Obj', cloneObj)

// Spreading operator
const arr1= [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const merge = [...arr1, ...arr2]

console.log(merge)

const name1 = ['John']
const name2 = ['Doe']
const name3 = ['Peters']

const merge2 = [...name1, ...name2, ...name3]
console.log(merge2)


