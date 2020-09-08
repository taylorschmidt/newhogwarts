// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log('DOM is loaded!')
// })

const container = document.querySelector("#container");
console.log(container)

const h1 = document.createElement('h1')
console.log(h1)

h1.innerText = "Hogwarts"
container.appendChild(h1)

const h2 = document.createElement('h2')
h2.innerText = "Taylor"
container.appendChild(h2)

const h3 = document.createElement('h3')
h3.innerText = "Ravenclaw"
container.appendChild(h3)

const petType = document.createElement('h4')
petType.className = "gecko"
const myPet = document.createElement('h4')
myPet.innerText = "Poe"
container.appendChild(petType)
petType.appendChild(myPet)

const myWand = document.createElement('h4')
myWand.innerText = "Holly Wand with Unicorn Hair Core"
container.appendChild(myWand)



