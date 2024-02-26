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

const menString = men.toString()
console.log(menString)

//to.include

const doo = men.includes('Hayzed')
console.log(doo)
const doodole = men.includes('Oluwaseyi')
console.log(doodole)

// SORT()
men.sort();
console.log(men)

const num = ['3', '5', '2', '0', '15', '77', '99', '20']
console.log(num)

num.sort();
console.log(num)

const alph = ['G', 'H', 'J', 'O', 'K', 'A'];
console.log(alph)

alph.sort()
console.log(alph)

num.sort((a, b) => a -b)
num.sort((a, b) => b -a)
console.log(num)

// indexOf()

const $nums = [1, 3, 5, 3, 7, 8, 4, 9, 3, 6, 1]
console.log($nums)
const index1 = $nums.indexOf(3)
console.log(index1)

const mew = $nums.lastIndexOf(3)
console.log(mew)

const $numsy = ['a', 'd', 's', 'f', 'w', 'r', 'f', 's', 't', 'y', 'w']
console.log($numsy)
const index12 = $numsy.indexOf('f')
console.log(index12)



const man = "I love coding and my favourite language is Javascript, Javascript"

const final = man.indexOf('Javascript')
const main = man.lastIndexOf('Javascript')

console.log(final)
// console.log(main)

let _names = ['David', 'Kay', 'Money']


// //ES5 loop
// for(let i = 0; i < _names.length; i++) {
//     console.log(i, _names[i])
// }

// // ES6 loop 
// for(const _name of _names) {
//     console.log(_name)
// }


// FOR EACH METHOD

// _names.forEach(function() {});

// _names.forEach((value, i) => {
//     console.log(value.toUpperCase());
//     console.log(i);
//     // console.log(arr);
    
// })

let nums = [2, 6, 3, 8, 2, 9]

// nums.sort()


nums.forEach(function(value, i) {
    console.log(value, i)
})



let mammals = ['Goat', 'Man', 'Baboon', 'Dog']
mammals.sort()

mammals.forEach((mammal, i) => console.log(mammal.toUpperCase(), i))

console.log(mammals)


//Example 3
let totalVal = 0;
const trans = [42, 45, 26, 4, 13, 16]

trans.forEach((tran) => console.log(totalVal, (totalVal += tran),(tran *= 2)))

// Example 4

_names.forEach((name) => console.log(`Congratulations ${name} for coming to DLT Africa`))


// Map method
// The map method of arrat instances creates a new array populated with the results of calling a provided function on every element in the calling array

const array1 = [1,3,6,4]
const map1 = array1.map((x) => x * 2)

console.log(map1)

const inventory = [
    {name:"Rice", price: 4040},
    {name:"Beans", price: 1200},
    {name:"Dodo", price: 600},
    {name:"Noodles", price: 300},
    {name:"Kunu", price: 200},
]

// const inven = inventory.map((value) => {
//     return value.price
// })
// console.log(inven)

const iven = inventory.map((value) => value.name)
console.log(iven)

let A = [2,4,6,8]
const map2 = A.map((x) => x * 2)

console.log(map2)

const numberss = [1,3,6]
const roots = numberss.map((numa) => Math.sqrt(numa))

console.log(roots)


//Array Filters

const num$ = [-10, 0, -2, 4, -9, 5, 8]

// const filteredNumbers = num$.filter((num) => {
//     return num < 0
// })

// console.log(filteredNumbers)

//  for(const num of num$) {
//         console.log(num)
//     }

const filteredNumbers1 = []

for(let i = 0 ; i < numbers.length; i++){
    if(numbers[i] < 0){
        filteredNumbers1.push(numbers[i])
    }
}

console.log(filteredNumbers1)

const employees = [
    {name: "David", overtime: 10},
    {name: "Bola", overtime: 2},
    {name: "Dayo", overtime: 4},
    {name: "Tobi", overtime: 1},
    {name: "Funmi", overtime: 7},
    {name: "Funke", overtime: 5},

]

const employeesToReward = employees.filter((employee) => {
    if(employee.overtime >= 7){
        return true
    }
})

console.log(employeesToReward)