// creating a basic guided function for the hamburger menu/icon

function toggleMenu() { // targeting elements (.menu-links and .hamburger-icon) on the webpage and basically using that element
    const menu = document.querySelector(".menu-links"); 
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open"); // when clicked, this function will add or remove the "open" class.            
    icon.classList.toggle("open");                       
}
