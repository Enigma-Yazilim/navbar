const menu = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const checkbox = document.querySelector('#checkbox')

checkbox.addEventListener('click',function(){
    menu.classList.toggle('active')
})

