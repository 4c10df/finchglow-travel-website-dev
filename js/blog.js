// testimonial slider code
document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".testimonial-container ", {
        slidesPerView: 3,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: ".button-next",
            prevEl: ".button-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 1,
            },
            950: {
                slidesPerView: 1,
            },
        },
    });
    
    
});
// testimonial slider code




// our blogs
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const sliderContent = document.querySelector('.slider-content');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const pageNumbers = document.querySelectorAll('.page-number');

    let slideWidth = slides[0].clientWidth;
    let currentIndex = 0;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let isDragging = false;
    let animationID = 0;
    const swipeThreshold = 50; // Minimum distance for swipe to be considered

    sliderContent.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

    window.addEventListener('resize', () => {
        slideWidth = slides[0].clientWidth;
        updateSliderPosition();
    });

    function nextSlide() {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSliderPosition();
            updatePagination();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
            updatePagination();
        }
    }

    function updateSliderPosition() {
        sliderContent.style.transition = 'transform 0.3s ease-out';
        sliderContent.style.transform = `translateX(${-slideWidth * currentIndex}px)`;
    }

    function updatePagination() {
        pageNumbers.forEach((page, index) => {
            if (index === currentIndex) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
    }

    pageNumbers.forEach((page, index) => {
        page.addEventListener('click', function () {
            currentIndex = index;
            updateSliderPosition();
            updatePagination();
        });
    });

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    let touchStartX = 0;
    let touchEndX = 0;

    sliderContent.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    sliderContent.addEventListener('touchmove', (e) => {
        touchEndX = e.touches[0].clientX;
    });

    sliderContent.addEventListener('touchend', () => {
        handleGesture();
    });

    sliderContent.addEventListener('mousedown', (e) => {
        touchStartX = e.pageX;
    });

    sliderContent.addEventListener('mousemove', (e) => {
        touchEndX = e.pageX;
    });

    sliderContent.addEventListener('mouseup', () => {
        handleGesture();
    });

    function handleGesture() {
        const deltaX = touchEndX - touchStartX;
        if (Math.abs(deltaX) > swipeThreshold) {
            if (deltaX > 0 && currentIndex > 0) {
                prevSlide();
            } else if (deltaX < 0 && currentIndex < slides.length - 1) {
                nextSlide();
            }
        }
    }

    sliderContent.addEventListener('dragstart', (e) => e.preventDefault());
});
// our blogs 



