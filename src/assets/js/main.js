document.addEventListener("DOMContentLoaded", function(event) { 

    const navBurger = document.querySelector(".open-menu");
    const navList = document.querySelector(".nav-list");

    const burgerIcon = document.getElementById("burgerIcon");

    navBurger.onclick = function(){
        openCloseMenu();
    }

    function openCloseMenu() {
        if(navList.style.display === 'flex') {
            navList.style.display = 'none';
            burgerIcon.className = "fa-solid fa-bars open-menu";
        } else {
            burgerIcon.className = "fa-solid fa-xmark close-menu";
            navList.style.display = 'flex';
        }
      }  

});