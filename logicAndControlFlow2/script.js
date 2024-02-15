// IF statement
const allowedAge = 18
const Zainab = 19
const Hayzed = 30
const David = 18

if(David > allowedAge){
    console.log("You are Allowed for the entrance exam")
} else if(David === allowedAge){
    console.log("Your admission has been postponed till next year")
} else {
    console.log("Wait will youre above 18")
}

if (Zainab < allowedAge) {
    console.log("Grow up nigga")
} else {
   console.log("You're Admitted bruh"); 
}

//Truty and Falsy value
//Falsy Values- False, "", 0, null, undefined, NaN
if(true){
    console.log('Truthy value')
}else{
    console.log("falsy values")
}

const password = "rap"
const username = "David"
const email = "david@gmail.com"

if(password && email && username){
    console.log("Grant account access")
}else if (password || email || username){
    console.log("password or email is incorrect")
}else{
    console.log("unapproved")
}

// create a good morning message if the time is less than 10:00
// if not, but the time is less than 20:00, create a good day message, otherwise good evening 

const time = 10


if(time < 10){
    console.log(`Good morning my neighbour, the time is ${time}:00 AM`)
}else if(time < 20){
    console.log(`Good day my guy, the time is ${time}:00 PM`)
}else{
    console.log(`good evening, the time is ${time}:00 PM`)
}
let times = "good morning"

if(!times){
    console.log("Good afternoon")
}else {
    console.log(times)
}

let temperature = 25
if (temperature > 30) {
    console.log("it's a hot day")
} else {
    console.log("its not too hot today")
}

let hour = new Date().getHours();
if(hour < 12) {
    console.log("Good morning")
} else if(hour >= 12 && hour < 18) {
    console.log("Good afternoon")
} else {
    console.log("good evening")
}

let hours = new Date().getHours();
if(hours < 10) {
    console.log("First period is over")
} else if(hours >= 10) {
    console.log("Second period is over")

}else if(hours === 11) {
    console.log("Break period")
}else if(hours >= 15 && hours < 18) {
     console.log("Closing period, go home")
} else {
   console.log("Classes ongoing")
}

let score = 85
if (score >=90) {
    console.log("Excellent you score an A")
} else if(score >=80) {
    console.log("Well done! You score a B")
} else if(score >=70) {
    console.log("Good job you score a C")
} else if(score >= 60) {
    console.log("You pass with a D")
} else {
    console.log("Sorry you failed, you score an F")
}

// Switch statement
let superHero = "Captain America"

switch (superHero) {
    case 'Iron man':
        console.log("I am Iron man..")
        break;
    case 'Captain America' :
        console.log("I am Captain America")
        break;
    case 'Thor':
        console.log("As my ilorin people will say😂😂😂")
        break;
    case 'Black widow': 
        console.log("One shot and you're fucked")
        break;
        default:
            console.log("Enter a valid superHero name")
    
}
console.log(superHero)

let day = new Date().getDay();
console.log(day)
let dayName;

switch (day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;

        default:
        dayName = "Unknown"
}

console.log("Today is " + dayName)
// Write a switch statement to discribe 4 types of friuts, variables is fruits, 

let friuts = "Mango";
friuts = "Pineapple"
let fruitsName;

switch(friuts) {
    case "Apple":
    fruitsName = "Yum i love Apple";
        break;
    case "Mango":
    fruitsName = "Yum i love Mango";
        break;
    case "Pineapple":
    fruitsName = "Yum i love Pineapple";
        break;
        default:
            fruitsName = "Sorry we dont have information on that fruit";

}
console.log(fruitsName);

//Ternary Operator
const age = 18

if(age >= 18) {
    console.log("You can drive")
} else {
    console.log("You may not drive")
}

age > 18 ? console.log("You can Drive"): age === 18 ? console.log("you may not drive"): console.log("You must be driven")
 
let ages = 20;
let canVote = ages === 18 ? "Yes, you can vote" : ages < 18 ? "No, you can't vote" : "Definetly! You can vote";
console.log(canVote)
