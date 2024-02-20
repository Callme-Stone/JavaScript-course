// const name = "Jagunlabi"
// const age = 70
// const school = "Harvard University"

// const one = () => {
//     return `My name is ${name}, I'm ${age} years of age, and my i went to ${school}`;
// }
// const answer = one()
// console.log(answer)

// // Local scope
// const localScope =() => {
//     const names = "oloye Pipo"
//     const religion = "muslim"
//     const activity = "Drinking of water"

//     return `${names} who is a ${religion} enjoys ${activity}`;
// }
// const oloye = localScope()
// console.log(oloye)


// const firstName = "John"
// const lastName = "Doe"
// const education = "Phd.amtomic physics"
// const countryRes = "Nigeria"

// const info = () => {
//     return `Mr ${lastName} is the new President of this company. With his experience and ${education} background he will do wonders, but he prefers being called ${firstName}`
// }
// const reply = info()
// console.log(reply)



//Hoisting 
//const a = 2 // something here is similar to func expression and arrow function but its not similar to func declaration
// const b = 3
const result = exampleFive()
console.log(result)

function exampleFive() {
    return 2 + 2
}

//const exampleFive = () => {
//     return 2 + 2
// }

const me = function () {}
const m = 2

console.log(g)

var g

// g = 4

// console.log(g)


// CLOSURE

// The scope regarding a function inside a function

const outerFunction = () => {
    const ben = 5

    const innerFunction = () => {
        const man = 7

        return ben + man
    }

    const final = innerFunction()
    console.log(final * 2)


}

outerFunction()

// A function that carries a function within the condition that if true retuen a certain number then return the final answer of the condition * 4
// And in the main function the find answer of the previous function should be divided by 2

const mainFunction = (condition) => {
    const a = 4

    const subFunction = () => {
        let firstAns 
        const double = 3

        if (true) {
            firstAns = 2
        }
        
        const anss = firstAns * double
        return anss    
    }
    const initialAnswer = subFunction()
    const total = initialAnswer / a
    console.log(total)
    
   
}

mainFunction()

const firstFunc = () => {
    const div = 2


    const secondFunc = () => {
        const condition = true
        let certainNumber 
        const mult = 4

        if (condition) {
            certainNumber = 5
        }

        const ans = certainNumber * mult
        return ans
    }

    const initialAnswer = secondFunc()

    const finalAnswer = initialAnswer / div

    console.log(finalAnswer)

}
firstFunc()