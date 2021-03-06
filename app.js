// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log('DOM is loaded!')
// })

//year1
const container = document.querySelector("#container");
console.log(container)

const h1 = document.createElement('h1')
console.log(h1)

h1.innerText = "Hogwarts School of Witchcraft and Wizardry"
container.appendChild(h1)

//year 2
const h2 = document.createElement('h2')
h2.innerText = "Name: Taylor"
container.appendChild(h2)

const h3 = document.createElement('h3')
h3.innerText = "House: Ravenclaw"
container.appendChild(h3)

const myPet = document.createElement('h4')
myPet.className = 'gecko'
myPet.innerText = 'Pet: Poe'
container.appendChild(myPet)


const myWand = document.createElement('h4')
myWand.innerText = "Holly Wand with Unicorn Hair Core"
container.appendChild(myWand)

//year 3
const storage = document.createElement('ul')
storage.setAttribute('storage', 'trunk')
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

//year 5
myWand.remove()
beer.remove()

const newWand = document.createElement('li')
newWand.innerText = 'Unicorn Wand 2.0'

storage.insertBefore(newWand, cloak)

newWand.style.color = 'indigo'

myPet.remove()

container.insertBefore(myPet, storage)
console.log(myPet)

//year 6

//remove

var secret = document.querySelectorAll('.secret')
console.log(secret)
// secret.remove()


for (var element of secret) {
    element.remove();
 }

// //set Timeout to show them again

setTimeout(() => {
    for (var element of secret) {
        storage.appendChild(element)
         }
}, 2000)

leash.className = 'cabbage'
var cabbage = document.querySelector('.cabbage')
cabbage.remove()

//Year 7
document.querySelector('h5').innerText = 'Fall 2018'
storage.insertBefore(beer, newWand)
storage.setAttribute('storage', 'chest')