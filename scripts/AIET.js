
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.gallery-slide');
const dots = document.querySelectorAll('.dot');
const slidesContainer = document.querySelector('.gallery-slides');
let slideInterval;

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    const offset = -currentSlideIndex * 100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
    resetTimer();
}

function currentSlide(index) {
    showSlide(index);
    resetTimer();
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 3000); 
}

function resetTimer() {
    clearInterval(slideInterval);
    startAutoSlide();
}

showSlide(0);
startAutoSlide();