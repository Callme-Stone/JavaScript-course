const name = "Jagunlabi"
const age = 70
const school = "Harvard University"

const one = () => {
    return `My name is ${name}, I'm ${age} years of age, and my i went to ${school}`;
}
const answer = one()
console.log(answer)

// Local scope
const localScope =() => {
    const names = "oloye Pipo"
    const religion = "muslim"
    const activity = "Drinking of water"

    return `${names} who is a ${religion} enjoys ${activity}`;
}
const oloye = localScope()
console.log(oloye)