$('a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href');
  var pos = $(elmHash).offset().top - 80;
  $('body,html').animate({scrollTop: pos}, 500); 
  return false;
});
$('#nav_burger nav ul li a[href]').on('click', function(event) {
  $('.burger_box').trigger('click');
});
function scrollAddClass() {
  const scrollEffect = document.querySelectorAll('.inactive');
  let windowHeight = window.innerHeight;
  for (let i = 0; i < scrollEffect.length; i++) {
    target = scrollEffect[i].getBoundingClientRect().top;
    if (target < windowHeight) {
      scrollEffect[i].classList.add('active');
    }
  }
}
document.addEventListener('DOMContentLoaded', scrollAddClass);
document.addEventListener('scroll', scrollAddClass);
let currentSlideIndex = 0;
let isAutoplay = true;
let autoplayInterval;
let progressInterval;
let slides, dots, totalSlides, progressBar, playBtn, slideCounter, totalSlidesCounter;
const autoplayDuration = 4000;
function initializeElements() {
    slides = document.querySelectorAll('.slide');
    dots = document.querySelectorAll('.dot');
    totalSlides = slides.length;
    progressBar = document.getElementById('progressBar');
    playBtn = document.getElementById('playBtn');
    slideCounter = document.getElementById('currentSlide');
    totalSlidesCounter = document.getElementById('totalSlides');
}
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.classList.remove('zoom-in', 'zoom-out');
        
        if (i === index) {
            setTimeout(() => {
                slide.classList.add('zoom-in');
            }, 100);
        }
    });
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlideIndex = index;
    triggerContentAnimation(index);
}
function triggerContentAnimation(index) {
    const slideContent = slides[index].querySelector('.slide-content');
    const cta = slideContent.querySelector('.slide-cta');
}
function changeSlide(direction) {
    slides[currentSlideIndex].classList.remove('zoom-in');
    
    let newIndex = currentSlideIndex + direction;
    
    if (newIndex >= totalSlides) {
        newIndex = 0;
    } else if (newIndex < 0) {
        newIndex = totalSlides - 1;
    }
    
    showSlide(newIndex);
}
function currentSlide(index) {
    slides[currentSlideIndex].classList.remove('zoom-in');
    showSlide(index - 1);
}
function nextSlide() {
    changeSlide(1);
}
function startAutoplay() {
    if (isAutoplay) {
        autoplayInterval = setInterval(nextSlide, autoplayDuration);
    }
}
function stopAutoplay() {
    clearInterval(autoplayInterval);
}
function toggleAutoplay() {
    isAutoplay = !isAutoplay;
    playBtn.textContent = isAutoplay ? '⏸️' : '▶️';
    
    if (isAutoplay) {
        startAutoplay();
    } else {
        stopAutoplay();
    }
}
function restartSlideshow() {
    stopAutoplay();
    showSlide(0);
    if (isAutoplay) {
        startAutoplay();
    }
}
let isPaused = false;
function pauseSlideshow() {
    if (isAutoplay && !isPaused) {
        isPaused = true;
        clearInterval(autoplayInterval);
    }
}
function resumeSlideshow() {
    if (isAutoplay && isPaused) {
        isPaused = false;
        startAutoplay();
    }
}
function handleParallax() {
    const scrollTop = window.pageYOffset;
    const activeSlide = slides[currentSlideIndex];
    
    if (scrollTop < window.innerHeight) {
        const parallaxSpeed = scrollTop * 0.5;
        activeSlide.style.transform = `translateY(${parallaxSpeed}px) scale(1.1)`;
    }
}
function setupEventListeners() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            changeSlide(-1);
        } else if (e.key === 'ArrowRight') {
            changeSlide(1);
        } else if (e.key === ' ') {
            e.preventDefault();
            toggleAutoplay();
        } else if (e.key === 'Escape') {
            stopAutoplay();
        }
    });
    const slideshowContainer = document.querySelector('.fullscreen-slideshow');
    slideshowContainer.addEventListener('mouseenter', () => {
        pauseSlideshow();
    });
    slideshowContainer.addEventListener('mouseleave', () => {
        resumeSlideshow();
    });
    window.addEventListener('scroll', handleParallax);
    window.addEventListener('resize', () => {
        handleParallax();
    });
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;
    slideshowContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
        pauseSlideshow();
    });
    slideshowContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
        resumeSlideshow();
    });
    function handleSwipe() {
        const swipeThreshold = 50;
        const diffX = touchStartX - touchEndX;
        const diffY = touchStartY - touchEndY;
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > swipeThreshold) {
            if (diffX > 0) {
                changeSlide(1);
            } else {
                changeSlide(-1);
            }
        }
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (isAutoplay && isPaused) {
                    resumeSlideshow();
                }
            } else {
                pauseSlideshow();
            }
        });
    });
    observer.observe(slideshowContainer);
}
function applyInitialZoom() {
    slides[0].classList.add('zoom-in');
}
function initializeSlideshow() {
    initializeElements();
    setupEventListeners();
    applyInitialZoom();
    startAutoplay();
}
document.addEventListener('DOMContentLoaded', initializeSlideshow);