const burgerMenu = document.querySelector(".burger-menu");

if (burgerMenu) {
    const iconBurgerMenu = document.querySelector(".burger-menu__icon");
    const nav = document.querySelector(".nav");

    burgerMenu.addEventListener("click", function(e) {
        nav.classList.toggle("_active");
        burgerMenu.classList.toggle("_active");
        document.body.classList.toggle("_lock");
    })
}