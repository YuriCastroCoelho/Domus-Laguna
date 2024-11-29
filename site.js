document.addEventListener('DOMContentLoaded', () => {
    const menuHamburguer = document.getElementById('menu-hamburguer');
    const menu = document.getElementById('menu');

    menuHamburguer.addEventListener('click', () => {
        menu.classList.toggle('active'); 
    });
});

const carousel = document.getElementById("carousel");
const images = document.querySelectorAll("#carousel img");
const totalImages = images.length;

let currentIndex = 0;
let interval;


function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}


function startCarousel() {
    interval = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel();
    }, 2000); 
}


function stopCarousel() {
    clearInterval(interval);
}


carousel.addEventListener("mouseenter", stopCarousel);
carousel.addEventListener("mouseleave", startCarousel);


startCarousel();
