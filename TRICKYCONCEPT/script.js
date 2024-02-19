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


const firstName = "John"
const lastName = "Doe"
const education = "Phd.amtomic physics"
const countryRes = "Nigeria"

const info = () => {
    return `Mr ${lastName} is the new President of this company. With his experience and ${education} background he will do wonders, but he prefers being called ${firstName}`
}
const reply = info()
console.log(reply)