// // const interval = setInterval(() => console.log("Hello World"), 1000);
// // clearInterval(interval)

// // const myInterval = setTimeout(() => console.log("Helooooo World"), 1000)

// // Sychronous Javascript

// // const function1 = () => {
// //     console.log("Function one")

// //     function2();
// //     console.log("Function one, two")

// // }


// // const function2 = () => {
// //     setTimeout(() => console.log("Function Two"), 2000);
// // }

// // function1()


// //
// const fetchUser = (username) => {
//     setTimeout(() => {
//         return{user: username}
//     }, )
// }

// const user = fetchUser('test')
// console.log(user)

// const fetchUser1 = (username, callBack) => {
//     setTimeout(() => {
//         console.log("Hey motherfucker")
//         callBack({user: username})
//     }, 2000)
// }

// const user2 = fetchUser1("test", (user2) => {
//     console.log(user2)
// })


// //Call back hell

// // const fetchUserTwo = (username, callback) => {
// //     setTimeout(() => {
// //         console.log("Now we have the users")
// //         callback(username)
// //     }, 2000)
// // }

// // const fetchUserPhotos = (username, callback) => {
// // setTimeout(() => {
// //     console.log(`Now we have the photos for ${username}`)
// //     callback(["Photo 1", "Photo 2"])
// // }, 2000)
// // }

// // const fetchPhotosDetails = (photo, callback) => {
// //     setTimeout(() => {
// //         console.log(`Now we have the photos details ${photo}`)
// //         callback("details")
// //     }, 2000)
// // }

// const user3 = fetchUser("Micheal", (user) => {
//     console.log(`Your name is: ${user.username}`)
//     fetchUserPhotos(user.username, (userPhotos) => {
//         console.log(`Your photos are: ${userPhotos}`)
//         fetchPhotosDetails(userPhotos[0], (details) => {
//             console.log(`Your photos details are:${details}`)
//         })
//     })
// })

// // this is called a callback hell, it becomems unreadable



// const user4 = fetchUser("Micheal", (user) => {
//     fetchUserPhotos(user.username, (userPhotos) => {
//         fetchPhotosDetails(userPhotos[0], (details) => {
//             fetchPhotosDetails(userPhotos[0], (details) => {
//                 fetchPhotosDetails(userPhotos[0], (details) => {
//                     fetchPhotosDetails(userPhotos[0], (details) => {
//                         console.log(details)
//                     })
//                 })
//             })
//         })
//     })
// })


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Now we are in Promise")

//         resolve({username: "Bode"})
//         reject("User not found")
//     }, 5000)
// })

// promise
// .then((user) => console.log(user.userame))
// .catch((error) => console.log(error))


// const fetchUserTwo = (username) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("We are using promise")
//             resolve(username)

//         }, 4000)
//     })
// }


// const fetchUserPhotos = (username) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("We have the photos")

//             resolve(["Photo 1", "Photo 2"])
//         }, 4000)
//     })

// }

// const fetchPhotosDetails = (photo) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Now we have the photos details")

//             resolve("details")
//         }, 2000)
//     })
 
// }

// fetchUserTwo("Zainab")
//     .then((user) => fetchUserPhotos(user))
//     .then((photos) => fetchUserPhotos(photos[0]))
//     .then((details) => fetchUserPhotos(details))
    


////
// async and wait

// Example 1
const myUsers = {
    userList:[]
}

// const myFoolFunc = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const fetchJson = await response.json()
//     // console.log(fetchJson)
//     return fetchJson
// }

// const anotherFn = async () => {
//     const data = await myFoolFunc()
//     myUsers.userList = data
//     console.log(myUsers.userList)
// }
// anotherFn()
// // console.log(myUsers.userList)
// myFoolFunc()


// Example 2
// const getAllUsersEmail = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const fetchJson = await response.json()
//     // console.log(fetchJson)
//     const soliu = fetchJson.map((user) => {
//         return user.email
//     })
//     console.log(soliu)
// }

// getAllUsersEmail()


// const getAllUsername = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const fetchJson = await response.json()
//     const userNames = fetchJson.map((names) => {
//         return names.username
//     })
//     console.log(userNames)
// }

// getAllUsername()



// TRY AND CATCH
// try {
//     // Block of code
// } catch(err) {

// } finally {

// }

// const getData = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         return data 

//     } catch (err) {
//         console.log("Error:", err.msg)
//     }
// }

// getData()

// .then((data) => console.log("data:", data)).catch((err) => console.log("Error:", err.msg))

// const fetchDataWithErr = async () => {
//     try {
//         console.log("...fetching data")
//         const res = await fetch('https://jsonplaceholder.typicode.com/invalid-url')
//         if(!res.ok) {
//             throw new Error('Failed to fetch data ori e baje')
//         }

//         const $data = await res.json()
//         return $data
//     } catch (err) {
//         console.error('Error:', err.msg)
//     }
// }

// fetchDataWithErr()
// .then(result => {
//     if(result) {
//         console.log("Data", result)
//     }
// })


const fetchSingleData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok) {
            throw new Error('Not found')
        }

        const data = await response.json()
        const mappedData = data.map(({id, username, email, name, address, phone, website, company}) => ({
            id,
            username, 
            email, 
            name, 
            address:{
                street: address.street,
            }, 
            phone, 
            website, 
            company: {
                name: company.name
            }
        }));
        console.log(mappedData)
        

    } catch(err) {
        console.log("Error:", err.msg)
    }
}
fetchSingleData()


