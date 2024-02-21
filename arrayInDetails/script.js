const cohorts = [
    "Oluwaseyi", "David", "Hannah", "Board man", "John doe"
]

// ES 5
for (let i = 0; i < cohorts.length; i++) {
    console.log(i, cohorts[i])
}
//ES6
for(const names of cohorts) {
    console.log(names)
}

console.log(cohorts);

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