import '../assets/css/style.css'
import jsImage from '../assets/img/javascript.svg'

const app = document.getElementById('app')
app.innerHTML = `<div style="display: flex; justify-content: center; align-items: bottom"><img style="margin-right: 20px;" src=${jsImage} alt="JS img"/><h1>JavaScript DOM</h1></div>`

addEventListener('DOMContentLoaded', () => {
  console.log('binb bin')
})

addEventListener('load', () => {
  console.log('abng')
})
