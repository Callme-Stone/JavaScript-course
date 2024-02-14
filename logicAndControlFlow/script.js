// IF statement
// const allowedAge = 18
// const Zainab = 19
// const Hayzed = 30
// const David = 18

// if(David > allowedAge){
//     console.log("You are Allowed for the entrance exam")
// } else if(David === allowedAge){
//     console.log("Your admission has been postponed till next year")
// } else {
//     console.log("Wait will youre above 18")
// }

// if (Zainab < allowedAge) {
//     console.log("Grow up nigga")
// } else {
//    console.log("You're Admitted bruh"); 
// }

//Truty and Falsy value
//Falsy Values- False, "", 0, null, undefined, NaN
// if(true){
//     console.log('Truthy value')
// }else{
//     console.log("falsy values")
// }

// const password = "rap"
// const username = "David"
// const email = "david@gmail.com"

// if(password && email && username){
//     console.log("Grant account access")
// }else if (password || email || username){
//     console.log("password or email is incorrect")
// }else{
//     console.log("unapproved")
// }

// create a good morning message if the time is less than 10:00
// if not, but the time is less than 20:00, create a good day message, otherwise good evening 

// const time = 10


// if(time < 10){
//     console.log(`Good morning my neighbour, the time is ${time}:00 AM`)
// }else if(time < 20){
//     console.log(`Good day my guy, the time is ${time}:00 PM`)
// }else{
//     console.log(`good evening, the time is ${time}:00 PM`)
// }
let time = "good morning"

if(!time){
    console.log("Good afternoon")
}else {
    console.log(time)
}