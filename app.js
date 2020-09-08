// document.addEventListener('DOMContentLoaded', ()=>{
//     console.log('DOM is loaded!')
// })

const container = document.querySelector("#container");
console.log(container)

const h1 = document.createElement('h1')
console.log(h1)

h1.innerText = "Hogwarts"
container.appendChild(h1)

