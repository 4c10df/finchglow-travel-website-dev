






//homepage first slider ends
document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll(".nav-btn");
    const slides = document.querySelectorAll(".img-slide");
    const contents = document.querySelectorAll("#content1");
    const nextBtn = document.querySelector(".next-btn");
    const prevBtn = document.querySelector(".prev-btn");
    let slideIndex = 0;
    let slideInterval;

    // Function to show slide based on index
    const showSlide = (index) => {
        btns.forEach(btn => btn.classList.remove("active"));
        slides.forEach(slide => slide.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));

        btns[index].classList.add("active");
        slides[index].classList.add("active");
        contents[index].classList.add("active");
    };

    // Function to show next slide
    const showNextSlide = () => {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    };

    // Function to show previous slide
    const showPreviousSlide = () => {
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    };

    // Start automatic sliding
    slideInterval = setInterval(showNextSlide, 30000); // Initial delay of 30 seconds

    // Event listener for manual slide change
    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            clearInterval(slideInterval); // Stop automatic sliding
            showSlide(i);
            slideIndex = i; // Update current slide index
            slideInterval = setInterval(showNextSlide, 30000); // Restart automatic sliding after 30 seconds delay
        });
    });

    // Event listener for previous slide button
    prevBtn.addEventListener("click", () => {
        clearInterval(slideInterval); // Stop automatic sliding
        showPreviousSlide();
        slideInterval = setInterval(showNextSlide, 30000); // Restart automatic sliding after 30 seconds delay
    });

    // Event listener for next slide button
    nextBtn.addEventListener("click", () => {
        clearInterval(slideInterval); // Stop automatic sliding
        showNextSlide();
        slideInterval = setInterval(showNextSlide, 30000); // Restart automatic sliding after 30 seconds delay
    });



});
//homepage first slider ends


/// what our customer are saying slider code////
document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".slider_container", {
    slidesPerView: 1,
    moveToRight:8,
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
        nextEl: ".next",
        prevEl: ".prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 4,
        },
    },
    });
});
/// what our customer are saying slider code////

// count up 
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const updateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target').replace(',', '');
            const unit = counter.getAttribute('data-unit') || '';
            let count = 0;
            const increment = target / 400; // Divide by 400 for 75% speed

            const updateCounter = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.floor(count).toLocaleString() + unit;
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target.toLocaleString() + unit;
                }
            };

            updateCounter();
        });
    };

    let isCounting = false;
    const handleScroll = () => {
        if (!isCounting) {
            updateCounters();
            isCounting = true;
        }
    };

    window.addEventListener('scroll', handleScroll);
});
// count up 

// Customise your Customer Experience (dashboard-tab)
document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".dashboard_container , .dashboard_container2 , .dashboard_container3",{
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: false,
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // navigation: {
        //     nextEl: ".button-next",
        //     prevEl: ".button-prev",
        // },
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
// tabs
document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll(".tab-btn");
    const tabs = document.querySelectorAll(".tabPanel");
    
    let tabIndex = 0;
    
    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            showtabPanel(i);
            tabIndex = i;
        });
    });
    
   
    const showtabPanel = (index) => {
        btns.forEach(btn => btn.classList.remove("active"));
        tabs.forEach(tab => tab.classList.remove("active"));
    
        btns[index].classList.add("active");
        tabs[index].classList.add("active");
    };
    
    // Initially show the first tab as active
    showtabPanel(tabIndex);
    

});
// Customise your Customer Experience


// blog slider
document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".blog_container ", {
        slidesPerView: 3,
        spaceBetween: 40,
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
            nextEl: ".next22",
            prevEl: ".prev22",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
        },
    });
    
    
});


// blog slider

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

// FAQs drop-down text
document.addEventListener('DOMContentLoaded', () => {
    const bgColors = document.querySelectorAll(".bg-color");

    bgColors.forEach(bgColor => {
        const plusIcon = bgColor.querySelector(".plus-icon, .minus-icon");
        const dropDown = bgColor.querySelector(".drop-down");
       

        bgColor.addEventListener('click', (event) => {
            event.stopPropagation();
            plusIcon.classList.toggle('opacity-0');
            bgColor.classList.toggle('bg-[#E6EFFD]');
            dropDown.classList.toggle('hidden');
        });
    });
});

// FAQs drop-down text

// logos for our_trusted_partners
document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".our_partners-container ", {
        slidesPerView: 3,
        spaceBetween: 30,
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
            nextEl: ".more_logo_next",
            prevEl: ".less_logo_prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 4,
            },
            520: {
                slidesPerView: 6,
            },
            950: {
                slidesPerView: 8,
            },
        },
    });
    
    
});

// logos for our_trusted_partners ends