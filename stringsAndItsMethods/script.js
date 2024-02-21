// Types of strings
// Single quote ('')
// const world = 'I am a boy'

// Double quote ("")
// const words = "I am a boy"

// Backticks (``)
// const worlds = `I am a boy` 

// console.log(words,worlds, world)

// const age = 12
// const school = 'DLT Africa'
// const name = "Oluwaseyi"

// const sentence = `My name is ${name}, i am ${age} years old and i go to ${school} bootcamp`

// console.log(sentence)


// const math = "2 + 2"

// const lines = `1
// 2
// 3
// 4
// 5`
// console.log(lines)

// const numerals = `Hello I'm aliyu and i am from "kogi state"`
// console.log(numerals)

// checking the length of a string
const name = "Oluwaseyi"
console.log(name.length)

console.log(name[6])

// Changing the case of strings

const words = "I am a boy of many colors"
console.log(words.toUpperCase());
console.log(words.toLowerCase())

// Checking for SUbstring

const man = "I love coding and my favourite language is Javascript, Javascript"

const final = man.indexOf('Javascript')
const main = man.lastIndexOf('Javascript')

console.log(final)
console.log(main)

const check = man.includes('favourite')
console.log(check)

const starting = man.startsWith('I')
console.log(starting)

const ending = man.endsWith('Javascript')
console.log(ending)


// Getting a Substring
const exampleString = "Hotdog"
console.log(exampleString.slice(0, 3))
console.log(exampleString.slice(3))
console.log(exampleString.slice(4))

// SPLIT METHOD
const sentence1 = "the quick brown fox jumped ob=ver the lazy dog";
console.log(sentence1.split(' '))

const name4 = "Nofisat and zainab";
const split1 = name4.split(' ')
console.log(split1);


//REVERSE() and JOIN() METHOD
const name2 = "Oluwaseyi and David";
const split2 = name2.split(' ')
console.log(split2)


const reverse$ = split2.reverse()
console.log(reverse$);

const join1 = reverse$.join(' ')
console.log(join1)

// REPEAT() METHOD

const dogSays = "woof "
console.log(dogSays.repeat(9))

const trim = " the market is full  "
console.log(trim.trim())