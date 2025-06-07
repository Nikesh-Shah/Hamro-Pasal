// FAQ javascript
var acc = document.getElementsByClassName("faq-btn");
var i;
for(i=0; i < acc.length;i++){
    acc[i].addEventListener("click",function(){
        this.classList.toggle("active");
        var question = this.nextElementSibling;
        if(question.style.maxHeight){
            question.style.maxHeight=null;
        }else{
            question.style.maxHeight= question.scrollHeight + "px";
        }
    });
} 





// Connection to our blogs about us page
function toggleMore() {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("about-more");
    var paragraph = document.querySelector(".paragraph");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.innerHTML = "Read Less"; 
    } else {
      moreText.style.display = "none";
      btnText.innerHTML = "Read More"; 
    }
  }

//   banner sliding section
const images = [
    "/image/banner1.png",
    "/image/banner2.png",
    "/image/banner3.png",
    "/image/banner 4.png"
];

let index = 0;
let intervalId;
let isManual = false;

function changeImage(direction) {
    clearInterval(intervalId);
    index = (index + direction + images.length) % images.length;
    document.querySelector('.bannerImage').src = images[index];
    if (!isManual) {
        intervalId = setInterval(changeImage, 1500, 1);
    }
}

function toggleManual() {
    isManual = !isManual;
    if (!isManual) {
        intervalId = setInterval(changeImage, 1500, 1);
        document.querySelector('.manual-toggle').textContent = "Automatic";
    } else {
        clearInterval(intervalId);
        document.querySelector('.manual-toggle').textContent = "Manual";
    }
}

// Start automatic slideshow
intervalId = setInterval(changeImage, 1000, 1);


// new
// product slider home
// product slider home
const slider = document.querySelector('.product-slider');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const pagination = document.querySelector('.pagination');
const slides = document.querySelectorAll('.product-box');
const totalSlides = slides.length;
const slideWidth = slides[0].offsetWidth;
let currentSlide = 0;
let slideCount = 0;
const maxSlides = 3; // Maximum number of automatic slides in each direction
let direction = 1; // 1 for left to right, -1 for right to left
let slideInterval;

// Create pagination dots
for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.setAttribute('data-slide', i);
    pagination.appendChild(dot);
}
const dots = document.querySelectorAll('.dot');
dots[currentSlide].classList.add('active');

function goToSlide(index) {
    slider.style.transform = `translateX(-${slideWidth * index}px)`;
    currentSlide = index;
    updatePagination();
}

function updatePagination() {
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        currentSlide++;
    } else {
        currentSlide = 0;
    }
    goToSlide(currentSlide);
    slideCount++;
    if (slideCount >= maxSlides) {
        clearInterval(slideInterval);
        nextBtn.removeEventListener('click', nextSlide);
        prevBtn.removeEventListener('click', prevSlide);
        slideCount = 0; // Reset slide count
        direction = -direction; // Switch direction
        startSlider();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
    } else {
        currentSlide = totalSlides - 1;
    }
    goToSlide(currentSlide);
    slideCount++;
    if (slideCount >= maxSlides) {
        clearInterval(slideInterval);
        nextBtn.removeEventListener('click', nextSlide);
        prevBtn.removeEventListener('click', prevSlide);
        slideCount = 0; // Reset slide count
        direction = -direction; // Switch direction
        startSlider();
    }
}

function startSlider() {
    slideInterval = setInterval(() => {
        direction === 1 ? nextSlide() : prevSlide();
    }, 3000);
}

function stopSlider() {
    clearInterval(slideInterval);
}

nextBtn.addEventListener('click', () => {
    if (slideCount < maxSlides) {
        nextSlide();
    }
});

prevBtn.addEventListener('click', () => {
    if (slideCount < maxSlides) {
        prevSlide();
    }
});

startSlider();
// javascript close
