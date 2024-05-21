// testimonial slider code
document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".testimonial-container ", {
        slidesPerView: 3,
        spaceBetween: 0,
        slidesPerGroup: 1,
        loop: true,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
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
    // Add your JavaScript for slider functionality here
    const slider = document.querySelector('.slider');
    const sliderContent = document.querySelector('.slider-content');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    const pageNumbers = document.querySelectorAll('.page-number');

    let slideWidth = slides[0].clientWidth;
    let currentIndex = 0;

    // Set initial position
    sliderContent.style.transform = `translateX(${-slideWidth * currentIndex}px)`;

    // Update slideWidth on window resize
    window.addEventListener('resize', () => {
        slideWidth = slides[0].clientWidth;
        updateSliderPosition();
    });

    // Function to handle next slide
    function nextSlide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = slides.length - 1;
            nextBtn.disabled = true;
        } else {
            prevBtn.disabled = false;
            updateSliderPosition();
            updatePagination();
        }
    }

    // Function to handle previous slide
    function prevSlide() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = 0;
            prevBtn.disabled = true;
        } else {
            nextBtn.disabled = false;
            updateSliderPosition();
            updatePagination();
        }
    }

    function updateSliderPosition() {
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

    // Event listeners for prev and next buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

});
// our blogs 





