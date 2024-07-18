const button = document.querySelector("button")
const body = document.querySelector(".body")

button.addEventListener("click", () => {
    body.classList.toggle("show")
})


const boxButton = document.querySelector(".box-button")
const boxDiv = document.querySelector(".box-div")

boxButton.addEventListener("click", () => {
    boxDiv.classList.toggle("show")
})