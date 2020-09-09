// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log('DOM is loaded!')
// })

//year1
const container = document.querySelector("#container");
console.log(container)

const h1 = document.createElement('h1')
console.log(h1)

h1.innerText = "Hogwarts"
container.appendChild(h1)

//year 2
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

//year 3
const storage = document.createElement('ul')
container.appendChild(storage)

const beer = document.createElement('li')
beer.innerText = "butter beer"
storage.appendChild(beer)

const cloak = document.createElement('li')
cloak.className = "secret"
cloak.innerText = "invisibility cloak"
storage.appendChild(cloak)

const map = document.createElement('li')
map.className = 'secret'
map.innerText = 'magic map'
storage.appendChild(map)

const turner = document.createElement('li')
turner.className = 'secret'
turner.innerText = 'time turner'
storage.appendChild(turner)

const leash = document.createElement('li')
leash.className = 'gecko'
leash.innerText = 'leash'
storage.appendChild(leash)

const beans = document.createElement('li')
beans.innerText = "Bertie Bott's Every Flavor [Jelly] Beans"
storage.appendChild(beans)



