// creating a basic guided function for the hamburger menu/icon

function toggleMenu() { // targeting elements (.menu-links and .hamburger-icon) on the webpage and basically using that element
    const menu = document.querySelector(".menu-links"); // using cons instead of var/let as the function name as it cannot be updated or re-declared
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); // when clicked, this function will add or remove the "open" class. this class will have some styling - style.css              
    icon.classList.toggle("open");                       
}
