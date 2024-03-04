// const interval = setInterval(() => console.log("Hello World"), 1000);
// clearInterval(interval)

// const myInterval = setTimeout(() => console.log("Helooooo World"), 1000)

// Sychronous Javascript

// const function1 = () => {
//     console.log("Function one")

//     function2();
//     console.log("Function one, two")

// }


// const function2 = () => {
//     setTimeout(() => console.log("Function Two"), 2000);
// }

// function1()


//
const fetchUser = (username) => {
    setTimeout(() => {
        return{user: username}
    }, )
}

const user = fetchUser('test')
console.log(user)

const fetchUser1 = (username, callBack) => {
    setTimeout(() => {
        console.log("Hey motherfucker")
        callBack({user: username})
    }, 2000)
}

const user2 = fetchUser1("test", (user2) => {
    console.log(user2)
})


//Call back hell

const fetchUserTwo = (username, callback) => {
    setTimeout(() => {
        console.log("Now we have the users")
        callback(username)
    }, 2000)
}

const fetchUserPhotos = (username, callback) => {
setTimeout(() => {
    console.log(`Now we ha e the photos for ${username}`)
    callback(["Photo 1", "Photo 2"])
}, 2000)
}

const fetchPhotosDetails = (photo, callback) => {
    setTimeout(() => {
        console.log(`Now we have the photos details ${photo}`)
        callback("details")
    }, 2000)
}

const user3 = fetchUserTwo("Micheal", (user) => {
    console.log(`Your name is: ${user.username}`)
    fetchUserPhotos(user.username, (userPhotos) => {
        console.log(`Your photos are: ${userPhotos}`)
        fetchPhotosDetails(userPhotos[0], (details) => {
            console.log(`Your photos details are:${details}`)
        })
    })
})

// this is called a callback hell, it becomems unreadable



const user4 = fetchUserTwo("Micheal", (user) => {
    fetchUserPhotos(user.username, (userPhotos) => {
        fetchPhotosDetails(userPhotos[0], (details) => {
            fetchPhotosDetails(userPhotos[0], (details) => {
                fetchPhotosDetails(userPhotos[0], (details) => {
                    fetchPhotosDetails(userPhotos[0], (details) => {
                        console.log(details)
                    })
                })
            })
        })
    })
})