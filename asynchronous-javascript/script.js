// const interval = setInterval(() => console.log("Hello World"), 1000);
// clearInterval(interval)

const myInterval = setTimeout(() => console.log("Helooooo World"), 1000)

// Sychronous Javascript

const function1 = () => {
    console.log("Function one")

    function2();
    console.log("Function one, two")

}


const function2 = () => {
    setTimeout(() => console.log("Function Two"), 2000);
}

function1()

