//// change colors on scroll and logo in the header-navbar and navbar dropdown  

document.addEventListener('DOMContentLoaded', () => {
    function changeBg(){
        var navbar = document.getElementById('navbar')
        var scrollValue = window.scrollY;
        
        if(scrollValue < 100){
            navbar.classList.remove('bgColor');
        } else{
            navbar.classList.add('bgColor');
        }
        

    }

    window.addEventListener('scroll', changeBg)
});
document.addEventListener('DOMContentLoaded', () => {
   
    // Add scroll event listener
    window.addEventListener('scroll', function() {
        var scrollY = window.scrollY;
        var header = document.querySelector('header');
        var ul = document.querySelector('ul.cass');

        // Check if the window width is at least md breakpoint (768px)
        if (window.innerWidth >= 768) {
            // Add or remove 'scrolled' class based on scroll position
            if (scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        } else {
            // Remove 'scrolled' class if window width is below md breakpoint
            header.classList.remove('scrolled');
        }
    });


});

/// menu close button
window.addEventListener('scroll', function() {
    var icon = document.getElementById('icon');
    var scrollPosition = window.scrollY;
    if (scrollPosition > 50) {
        icon.classList.add('text-[#05284C]'); // Change text color to blue
        icon.classList.remove('text-[#FFFFFF]'); // Remove white text color
    } else {
        icon.classList.remove('text-[#05284C]'); // Remove blue text color
        icon.classList.add('text-[#FFFFFF]'); // Change text color to white
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Add scroll event listener
    window.addEventListener('scroll', function() {
        var scrollY = window.scrollY;
        var firstLogo = document.getElementById('first-logo');
        var secondLogo = document.getElementById('second-logo');
      
        // Check if the user has scrolled down past a certain point (e.g., 100 pixels)
        if (scrollY > 100) {
            // Hide the first logo and display the second logo
            firstLogo.style.display = 'none';
            secondLogo.style.display = 'inline-block';
            
        } else {
            // Show the first logo and hide the second logo
            firstLogo.style.display = 'inline-block';
            secondLogo.style.display = 'none';
           
        }
    });
});

//// change colors on scroll and logo in the header-navbar and navbar dropdown  end 

//show nav bar
document.addEventListener('DOMContentLoaded', () => {
    const mainMenu = document.querySelector("#open1");
    const closeMenu = document.querySelector(".closeMenu");
    const openMenu = document.querySelector("#close-Icon");

    openMenu.addEventListener('click', show);
    closeMenu.addEventListener('click', close);

    function show() {
        mainMenu.classList.add('top-[63px]'); // Show the menu
    }

    function close() {
        mainMenu.classList.remove('top-[63px]'); // Hide the menu
    }

    // Add scroll event listener
window.addEventListener('scroll', function() {
    var scrollY = window.scrollY;
    var firstIcon = document.getElementById('first-icon');
    var secondIcon = document.getElementById('second-icon');

        // Check if the user has scrolled down past a certain point (e.g., 100 pixels)
        if (scrollY > 100) {
            // Hide the first logo and display the second logo
            firstIcon.style.display = 'none';
            secondIcon.style.display = 'inline-block';
            secondIcon.style.transition = 'all 5s ease';
        } else {
            // Show the first logo and hide the second logo
            firstIcon.style.display = 'inline-block';
            secondIcon.style.display = 'none';
            secondIcon.style.transition = 'all 5s ease';
        }
    });
});

let mailIcon = document.getElementById("close-Icon");

function openIcon(){
    mailIcon.classList.add("hidden");
    
}
function closeIcon(){
    mailIcon.classList.remove("hidden");
    
} 
//close nav bar
const gotIcon = document.querySelector("#open-Icon");

function toggleIcons() {
    gotIcon.classList.toggle('hidden'); // Toggle the 'hidden' class
}
//nav controls ends
