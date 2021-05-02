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
const formToggles = document.querySelectorAll(".form__subtitle");

// let signUpToggle = null;
// let logInToggle = null;

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
        // signUpToggle = document.querySelector(".sign-up-elem");
        // logInToggle = document.querySelector(".log-in-elem");
        toggleForm();
    });
}

if (signUpButton) {
    signUpButton.addEventListener("click", function() {
        formSignUp.classList.remove("hidden");
        cover.classList.remove("hidden");
        document.body.classList.add("_lock");
        // signUpToggle = document.querySelector(".sign-up-elem");
        // logInToggle = document.querySelector(".log-in-elem");
        toggleForm();
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

nameFieldSignUp.addEventListener("input", function() {
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

emailFieldLogIn.addEventListener("input", function() {
    validate();
});

passwordFieldLogIn.addEventListener("input", function() {
    validate();
});

if (sendButtonSignUp) {
    sendButtonSignUp.addEventListener("click", function() {
        if (sendButtonSignUp.classList.contains("invalid")) return;
        formSignUp.classList.add("hidden");
        cover.classList.add("hidden");
        document.body.classList.remove("_lock");
    });
}

if (sendButtonLogIn) {
    sendButtonLogIn.addEventListener("click", function() {
        if (sendButtonLogIn.classList.contains("invalid")) return;
        formLogIn.classList.add("hidden");
        cover.classList.add("hidden");
        document.body.classList.remove("_lock");
    });
}

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
