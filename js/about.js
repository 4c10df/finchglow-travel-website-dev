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