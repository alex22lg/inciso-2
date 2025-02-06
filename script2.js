let currentIndex = 0;

function updateCarousel() {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const imageWidth = images[0].clientWidth;

    carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

function showNextImage() {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex + 1) % images.length; // Cíclico hacia adelante
    updateCarousel();
}

function showPreviousImage() {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Cíclico hacia atrás
    updateCarousel();
}

document.getElementById('prevButton').addEventListener('click', showPreviousImage);
document.getElementById('nextButton').addEventListener('click', showNextImage);

// Asegura que el carrusel sea responsivo
window.addEventListener('resize', updateCarousel);


   
const music = document.getElementById('background-music');
const musicControl = document.getElementById('music-control');

musicControl.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicControl.textContent = 'Pausar Música';
    } else {
        music.pause();
        musicControl.textContent = 'Reproducir Música';
    }
});
