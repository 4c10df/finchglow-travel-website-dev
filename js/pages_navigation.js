



//show nav bar
document.addEventListener('DOMContentLoaded', () => {
    const mainMenu = document.querySelector("#open1");
    const closeMenu = document.querySelector(".closeMenu");
    const openMenu = document.querySelector("#close-Icon");

    openMenu.addEventListener('click', showMenu);
    closeMenu.addEventListener('click', closeMenuFunction);

    function showMenu() {
        mainMenu.classList.add('top-[96px]'); // Show the menu
    }

    function closeMenuFunction() {
        mainMenu.classList.remove('top-[96px]'); // Hide the menu
    }
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



//// sign up function 

    function openOverlay() {
       const overlay = document.getElementById('overlay');
       overlay.classList.add('active');
   }

   function closeOverlay() {
       const overlay = document.getElementById('overlay');
       overlay.classList.remove('active');
   }

/// sign up function ends