// OBJECTS
// Objects are used to represent real life data

//  Object is an unordered collection of related data in form of key and value pairs
// const firstName = "David"
// const person = {
//     firstName: firstName,
//     surName: "Abakaliki",
//     age: 13,
//     children:{
//         firstChild: "Eef",
//         secondChild: "Nafisat"
//     }
    
// }

// console.log(person)

// ASSESSING AND ADDING OF PROPERTIES TO AN OBJECT

const human = {
    firstName: 'Abdullah',
    "DLT Africa location": "Pegamut"
}

human.pet = {name: "cobra", age:3}

human.job = "Headmaster"
human.favFood = "Garri"

// console.log(human.firstName)
console.log(human.pet.name)
console.log(human["firstName"])
console.log(human['DLT Africa location'])
console.log(human)


const pet = {
    petName: "dog",
    petSound: () => {
        console.log("Woof! Woof!")
    }
}

pet.petSound()

const dog = {
    name: "fluffy",
    age:2,
    listAllProperties: function(){
        console.log(this.name, this.age)
    }
}

dog.listAllProperties()


const myObject = {
    myMethods1: () => {}, //arrow function
    myMethod2: function() {}, // function declaration
    myMethod3() {} //function expression
}

const animal = {
    name: "Goat",
    age: 30,
    bleet: () => {
        console.log("Meeeehhsi")
    }
}
console.log(animal.name)
animal.bleet()


//Object.keys()
const employees = {
    oga: "Dolapo",
    emiOga: "Dupe",
    aburoOga: "Ope",
    ogaBoy: "Asake",
    sideChick: "Fireboy",
}

const employeeInfo = Object.keys(employees)
console.log(employeeInfo)


//Object.value()
const session = {
    avatar1: "Aang",
    avatar2: "Kyoshi",
    avatar3: "Roku",
    avatar4: "Kuruk"
}

const sessionValue = Object.values(session)
console.log(sessionValue)



// Object.entries()
const operatingSystem = {
    name: "Linux",
    version: 2.0,
    license: "Open Source",

}

const operatingSystemInfo = Object.entries(operatingSystem)
console.log(operatingSystemInfo)



// object.freeze()
const user = {
    username: "Joro",
    password: 1232,
}

const userLogin = Object.freeze(user)
console.log(userLogin)

userLogin.username = "Starboy"
console.log(userLogin)

// object.seal

const user1 = {
    ronaldo: "Suuuuiiiiii",
    messi: "Meeeehhhh"
}

const userGoat = Object.seal(user1)
console.log(userGoat)

userGoat.ronaldo = "Im the best in the world"
console.log(userGoat)


let x
const person = {
    name: "AZ",
    age: 100,
    isAdmin: true,
    address: {
        street: "2000, Ile apa road",
        city: "Ikeja",
        state: "Lagos State",
    },

    hobbies: ["Music", "Sport"]
}

//accessing an array inside an object
x = person.hobbies[0]
let y = person["hobbies"][1]
console.log(x,y)


// updating a property
person.name = "Bode"
console.log(person)

person.address.street = "Jakande estate"

console.log(person)

// delete a property

delete person.address.state
console.log(person)

delete person.address.city
console.log(person)


// adding a function to an object with only function
person.greet = function() {
    console.log(`Hola, my name is ${this.name}`)
}
person.greet()

// value and refrence 
// copying primitive value

//copying numbers

let x1 = 1
let y1 = x1;

x1 = 2
console.log(x1)
console.log(y1)

//copying strings

let firstPerson = "Person pikin"
let secondPerson = firstPerson

firstPerson = "Austin";
console.log(firstPerson)
console.log(secondPerson)

//copying complex value


// copign array

const animals = ["Slot", "Poccupine"]
const otherAnimals = animals

