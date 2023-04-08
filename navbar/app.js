const hamburgerOpen = document.querySelector('.open');
const hamburgerClose = document.querySelector('.close');
const menu = document.querySelector('.nav-links');
const hamburger = document.querySelectorAll('.hamburger');

hamburger.forEach((hamburger) => {
    hamburger.addEventListener('click',function(){
        menu.classList.toggle('active');
        hamburgerOpen.classList.toggle('remove');
        hamburgerClose.classList.toggle('active')
    });
});

