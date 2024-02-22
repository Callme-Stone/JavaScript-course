const cohorts = [
    "Oluwaseyi", "David", "Hannah", "Board man", "John doe"
]
console.log(cohorts);

const replaceE1 = (cohorts[2] = "Dense")

cohorts[5] = "Dupe"

// ES 5
for (let i = 0; i < cohorts.length; i++) {
    console.log(i, cohorts[i])
}
//ES6
for(const names of cohorts) {
    console.log(names)
}


const nested = [[1,2], [3,4], [5,6]]
const newArr = nested[0]
console.log(newArr)

const object = {
    name :"John",
    age : 60,
}

console.log(object)

const arr = [
    "Banana",
    1000,
    {
        name : "Bola",
        age : 30
    },

    function name () {
        alert("Gbe mi de be")
    }
]

console.log(typeof arr)

// Push method
// Is used to add a new element to the end of an array

const student = ["Yemi", "Shola", "Dupes", "Denise"];

student.push("DU", "JH")
console.log(student);

//POP Method

const numbers = [3, 4, 5, 6, 7];
console.log(numbers)

numbers.pop();
console.log(numbers)

// SLICE ()
const men = ['Tunmise', 'Kenny', 'Soliu', 'Bode', 'Hayzed'];
console.log(men)

const newString = 'Nafeesah'
console.log(newString.length);
const newSlice = newString.slice(2, 7)
console.log(newSlice)

const name = 'Oluwaseyi'
console.log(name)

const slice = name.slice(3, 6)
console.log(slice)

const baddestMen = men.slice(2, 5)
console.log(baddestMen)

const coolestAmong = men.slice(2)
console.log(coolestAmong)

// toString()

