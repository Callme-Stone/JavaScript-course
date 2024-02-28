const tagE1 = document.getElementsByTagName('h1')
console.log(tagE1)

const testE1 = document.getElementsByClassName("testing")
console.log(testE1)

const checkId = document.getElementById('boxText')
console.log(checkId)

const allEl = document.querySelectorAll('.selectEl')
console.log(allEl)

const OneEl = document.querySelector('.selectorOne')

const ell = document.querySelector('#PeleZainabu')

const button = document.querySelector('button')

console.log(button)

button.addEventListener('mouseover', () => {
    alert('Kick back and relax, its the weekend')
})


