//Function declaration

// function square () {
//     return number * number
// }
// square()
// const result = square(4)
// console.log(result);

// functiion expression
const nameFunction = function(params) {}

// Arrow function
const arrowFn = () => {}


function sayHello (firstName) {
    console.log(`Hello ${firstName}`);
}
sayHello(`Folake`)

const greetings = function(sayHello) {
    console.log(`hello ${sayHello}`)
}

greetings(`Davis`);

const fName = (lastName) => {
    console.log(`hello ${lastName}`)
}

fName(`Abolaji`);


const subtraction = (smallNumber, bigNumber) => {
    return smallNumber - bigNumber
}

const answer = subtraction(5, 2)
console.log(answer)




function sayHello (name, age, height, complexion, shoeSize, hobbies) {
    console.log(
        `My name is ${name} and I am ${age} years old, with the heigh to ${height}, ${complexion} in complexion. My shoe size is ${shoeSize} and my hobbies is ${hobbies}`
    )
}
sayHello(`Oluwaseyi, `)

//write a function declaration with two parameters, return in a tenary operation if the addition of the two parameters passed is >= 10
//it should return a staement showing 'sum is > or = 10', if not it should have the sum of the two parameters
//age > 18 ? console.log("You can Drive"): age === 18 ? console.log("you may not drive"): console.log("You must be driven")

function addition(x, y){
    return x + y >= 10 ? "Sum is greater than or equal to 10" : x + y;
}

const numbers = addition (5, 6);
console.log(numbers);

const lowNumber = addition (4, 2)
console.log(lowNumber)

//  Check for even numbers
const isEven = (nestedGame) => {
    return nestedGame % 2 === 0 ? true : false;
}

const even = isEven(6);
console.log(even)

const odd = isEven(7);
console.log(odd)