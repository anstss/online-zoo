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

if (activeSidebarAnimal) {
    activeSidebarAnimal.addEventListener("click", function(event) {
        event.preventDefault();
    });
}

const sidebar = document.querySelector(".side-bar");
const openSidebar = document.querySelector(".side-bar__open");

if (openSidebar) {
    openSidebar.addEventListener("click", function(event) {
        sidebar.classList.toggle("side-bar__opened");
        document.body.classList.toggle("_lock");
    });
}


const cover = document.getElementById("cover");
const logInButton = document.getElementById("log-in");
const signUpButton = document.getElementById("sign-up");
const formSignUp = document.getElementById("form-sign-up");
const formLogIn = document.getElementById("form-log-in");
const userIcon = document.getElementById("user-icon-elem");
const navbarRight = document.getElementById("navbar-right");

if (cover) {
    cover.addEventListener("click", function() {
        formSignUp.classList.add("hidden");
        formLogIn.classList.add("hidden");
        cover.classList.add("hidden");
        document.body.classList.remove("_lock");
    });
}

if (logInButton) {
    logInButton.addEventListener("click", function() {
        formLogIn.classList.remove("hidden");
        cover.classList.remove("hidden");
        document.body.classList.add("_lock");
        toggleForm();
        logInWithSocial();
    });
}

function openFormSignUp() {
    formSignUp.classList.remove("hidden");
    cover.classList.remove("hidden");
    document.body.classList.add("_lock");
}

if (signUpButton) {
    signUpButton.addEventListener("click", function() {
        openFormSignUp();
        toggleForm();
        logInWithSocial();
    });
}

const sendButtonSignUp = document.getElementById("button-send_sign-up");
const nameFieldSignUp = document.getElementById("name");
const emailFieldSignUp = document.getElementById("email_sign-up");
const passwordFieldSignUp = document.getElementById("password_sign-up");
const agreementFieldSignUp = document.getElementById("agreement");

const sendButtonLogIn = document.getElementById("button-send_log-in");
const emailFieldLogIn = document.getElementById("email_log-in");
const passwordFieldLogIn = document.getElementById("password_log-in");

function validate() {
    if (nameFieldSignUp.validity.valid &&
        emailFieldSignUp.validity.valid &&
        passwordFieldSignUp.validity.valid &&
        agreementFieldSignUp.validity.valid) {
            sendButtonSignUp.classList.remove("invalid");
        } else {
            sendButtonSignUp.classList.add("invalid");
        }

    if (emailFieldLogIn.validity.valid &&
        passwordFieldLogIn.validity.valid) {
            sendButtonLogIn.classList.remove("invalid");
        } else {
            sendButtonLogIn.classList.add("invalid");
        }
}

let userName = null;

nameFieldSignUp.addEventListener("input", function() {
    userName = this.value;
    validate();
});

emailFieldSignUp.addEventListener("input", function() {
    validate();
});

passwordFieldSignUp.addEventListener("input", function() {
    validate();
});

agreementFieldSignUp.addEventListener("input", function() {
    validate();
});

emailFieldLogIn.addEventListener("change", function() {
    validate();
});

passwordFieldLogIn.addEventListener("input", function() {
    validate();
});

function hideSignUpForm() {
    formSignUp.classList.add("hidden");
    cover.classList.add("hidden");
    document.body.classList.remove("_lock");
    navbarRight.classList.add("logged");
}

function hideLogInForm() {
    formLogIn.classList.add("hidden");
    cover.classList.add("hidden");
    document.body.classList.remove("_lock");
    navbarRight.classList.add("logged");
}

if (sendButtonSignUp) {
    sendButtonSignUp.addEventListener("click", function() {
        if (sendButtonSignUp.classList.contains("invalid")) return;
        hideSignUpForm();
        userIcon.setAttribute("title", userName);
        userIcon.classList.remove("unlogged");
        logOutMenu.classList.remove("unactive");
    });
}

const warning = document.querySelector(".warning");

if (sendButtonLogIn) {
    sendButtonLogIn.addEventListener("click", function() {
        if (sendButtonLogIn.classList.contains("invalid")) return;
        if (emailFieldLogIn.value !== "user@gmail.com" || passwordFieldLogIn.value !== "useruser") {
            warning.classList.remove("hidden");
            return;
        }
        warning.classList.add("hidden");
        hideLogInForm();
        userIcon.setAttribute("title", "User");
        userIcon.classList.remove("unlogged");
        logOutMenu.classList.remove("unactive");
    });
}

const formToggles = document.querySelectorAll(".form__subtitle");

function toggleForm() {
    const formToggleElements = Array.from(formToggles);
    formToggleElements.forEach(elem => elem.addEventListener("click", function() {
        if (elem.classList.contains("sign-up-elem")) {
            formLogIn.classList.add("hidden");
            formSignUp.classList.remove("hidden");
        }
        if (elem.classList.contains("log-in-elem")) {
            formSignUp.classList.add("hidden");
            formLogIn.classList.remove("hidden");
        }
    }));
}

const socialSignUp = document.querySelectorAll(".form__social");

function logInWithSocial() {
    socialSignUpElements = Array.from(socialSignUp);
    socialSignUpElements.forEach(elem => elem.addEventListener("click", function() {
        console.log("TEST");
        if (elem.classList.contains("sign-with-google")) {
            console.log("TEST");
            hideSignUpForm();
            userIcon.setAttribute("title", "Signed up with Google");
            userIcon.classList.remove("unlogged");
        }
        if (elem.classList.contains("sign-with-facebook")) {
            hideSignUpForm();
            userIcon.setAttribute("title", "Signed up with Facebook");
            userIcon.classList.remove("unlogged");
        }
        if (elem.classList.contains("log-with-google")) {
            hideLogInForm();
            userIcon.setAttribute("title", "Logged in with Google");
            userIcon.classList.remove("unlogged");
        }
        if (elem.classList.contains("log-with-facebook")) {
            hideLogInForm();
            userIcon.setAttribute("title", "Logged in with Facebook");
            userIcon.classList.remove("unlogged");
        }
    }));
}

const logOutMenu = document.getElementById("log-out-menu");
const logOutButton = document.getElementById("log-out");

userIcon.addEventListener("click", function() {
    if (userIcon.classList.contains("unlogged")) {
        openFormSignUp();
        toggleForm();
        logInWithSocial();
    } else {
        logOutMenu.classList.remove("unactive");
        logOutMenu.classList.toggle("hidden");
    }
});

logOutButton.addEventListener("click", function() {
    logOutMenu.classList.add("hidden");
    navbarRight.classList.remove("logged");
    userIcon.classList.add("unlogged");
    userName = null;
    userIcon.removeAttribute("title");
    logOutMenu.classList.add("unactive");
});


// TODO: fix for media < 1200px (1198)

const carousel = document.querySelector(".pets-in-zoo__cards");
const carouselItems = document.querySelectorAll(".pets-in-zoo__cards-group");

let currentCarouselItem = 0;

function changeCurrentCarouselItem(n) {
    currentCarouselItem = (n + carouselItems.length) % carouselItems.length;
}

function hideItem() {
    carouselItems[currentCarouselItem].classList.remove("active");
}

function showItem() {
    carouselItems[currentCarouselItem].classList.add("active");
}

const buttonNext = document.querySelector(".slider-button_next");
const buttonPrev = document.querySelector(".slider-button_prev");

buttonNext.addEventListener("click", function() {
    hideItem();
    changeCurrentCarouselItem(currentCarouselItem + 1);
    showItem();
});

buttonPrev.addEventListener("click", function() {
    hideItem();
    changeCurrentCarouselItem(currentCarouselItem - 1);
    showItem();
});

// let width = carousel.offsetWidth;
// buttonNext.addEventListener("click", function() {
//     carousel.scrollBy(width, 0);
// });

// buttonPrev.addEventListener("click", function() {
//     carousel.scrollBy(-width, 0);
// });


const sliderTestimonials = document.querySelector(".testimonials__cards-wrapper");
const contentSliderTestimonials = document.querySelector(".testimonials__cards");
let widthSliderTestimonials = sliderTestimonials.offsetWidth;

const gap = 25;

window.addEventListener("resize", e => (widthSliderTestimonials = sliderTestimonials.offsetWidth));

const slideTestimonails = () => {
    sliderTestimonials.scrollBy(widthSliderTestimonials + gap, 0);
    if (contentSliderTestimonials.scrollWidth - widthSliderTestimonials < sliderTestimonials.scrollLeft + widthSliderTestimonials) {
        sliderTestimonials.scrollBy(-(widthSliderTestimonials + gap) * 3, 0);
    }
}

let autoSliderTestimonialsInterval = setInterval(slideTestimonails, 10000);
let autoSliderTestimonialsTimeout = null;

const delaySliding = () => {
    clearInterval(autoSliderTestimonialsInterval);
    autoSliderTestimonialsInterval = null;

    autoSliderTestimonialsTimeout = setTimeout(() => {
        autoSliderTestimonialsInterval = setInterval(slideTestimonails, 10000);
    }, 20000);
}

sliderTestimonials.addEventListener("click", delaySliding);
