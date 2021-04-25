const burgerMenu = document.querySelector(".burger-menu");

if (burgerMenu) {
    const iconBurgerMenu = document.querySelector(".burger-menu__icon");
    const nav = document.querySelector(".nav");

    burgerMenu.addEventListener("click", function(event) {
        nav.classList.toggle("_active");
        burgerMenu.classList.toggle("_active");
        document.body.classList.toggle("_lock");
    })
}

const activeSidebarAnimal = document.querySelector(".side-bar__animals-card_active");

activeSidebarAnimal.addEventListener("click", function(event) {
    event.preventDefault();
});

const sidebar = document.querySelector(".side-bar");
const openSidebar = document.querySelector(".side-bar__open");

openSidebar.addEventListener("click", function(event) {
    sidebar.classList.toggle("side-bar__opened");
    document.body.classList.toggle("_lock");
});