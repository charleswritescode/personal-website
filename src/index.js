import './scss/app.scss'

const age = document.getElementById("age")
age.innerText = Math.floor(new Date((new Date() - new Date("1995-11-18"))) / 31536000000)