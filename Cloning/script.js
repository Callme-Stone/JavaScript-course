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

// const originObj = {
//     name: "Bash",
//     age: 20,
//     address: {
//         city: "Ikeja",
//         state: "Lagos"
//     }
// }

// const cloneObj = Object.assign({}, originObj)

// cloneObj.name = "Murphy"
// cloneObj.address.city = "Yaba"

// console.log('Original Obj', originObj)
// console.log('Clone Obj', cloneObj)

// // Spreading operator
// const arr1= [1, 2, 3, 4];
// const arr2 = [5, 6, 7, 8];

// const merge = [...arr1, ...arr2]

// console.log(merge)

// const name1 = ['John']
// const name2 = ['Doe']
// const name3 = ['Peters']

// const merge2 = [...name1, ...name2, ...name3]
// console.log(merge2)


// const text = {name: "bode"}
// const numbs = [1, 2, 3, 4]

// const cloneMerged = {...text, number:[...numbs]}

// cloneMerged.name = "Hayzed"
// cloneMerged.number.push(5);

// console.log(text)
// console.log(numbs)
// console.log(cloneMerged)


// const details = {
//     firstName: "Dan",
//     car: {
//         brand: "Mercerdes",
//         wheels: 4,
//         color: "Black"
//     }
// }

// const newDetails = {...details}
// newDetails.firstName = "Mike"

// newDetails.car.color = "Pitch Black"


// console.log(newDetails)
// console.log(details)


const details = {
    firstName: "Dan",
    car: {
        brand: "Mercerdes",
        wheels: 4,
        color: "Black"
    }
}
    
const stringDetails = JSON.stringify(details)
console.log(stringDetails)

const newDetails = JSON.parse(stringDetails)
console.log(newDetails)

newDetails.car.color = "MoonBlue"
console.log(newDetails.car.color)
console.log(details.car.color)

const originObj = {
    name: "Zainab",
    age: 12,
    address: {
        local: "Agege wa",
        area: "baba yemi"
    }
}


const cloneObj = JSON.parse(JSON.stringify(originObj))

cloneObj.name = 'Soliu'
cloneObj.age = 54
cloneObj.address.local = 'Pegamut'
cloneObj.address.area = 'JUJU'

console.log(originObj)
console.log(cloneObj)
