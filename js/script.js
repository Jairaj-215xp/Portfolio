/* ==========================================
   TYPING ANIMATION
========================================== */

const words = [
    "Web Developer",
    "AI Enthusiast",
    "Python Learner",
    "Future ML Engineer",
    "Problem Solver"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typingText = document.getElementById("typing-text");

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent = currentWord.substring(0, letterIndex);
        letterIndex++;

        if (letterIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);
            return;

        }

    } else {

        typingText.textContent = currentWord.substring(0, letterIndex);
        letterIndex--;

        if (letterIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


/* ==========================================
   GLASS NAVBAR
========================================== */

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        nav.style.background = "rgba(5,8,22,.65)";
        nav.style.backdropFilter = "blur(16px)";
        nav.style.boxShadow = "0 10px 40px rgba(0,0,0,.3)";

    }

    else {

        nav.style.background = "transparent";
        nav.style.backdropFilter = "blur(0px)";
        nav.style.boxShadow = "none";

    }

});


/* ==========================================
   PROFILE CARD TILT
========================================== */

const card = document.querySelector(".profile-card");

card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = (x - rect.width / 2) / 18;

    const rotateX = -(y - rect.height / 2) / 18;

    card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

card.addEventListener("mouseleave", () => {

    card.style.transform =
        "rotateX(0deg) rotateY(0deg)";

});


/* ==========================================
   SMOOTH BUTTON HOVER
========================================== */

const buttons = document.querySelectorAll(
    ".primary-btn, .secondary-btn"
);

buttons.forEach(btn => {

    btn.addEventListener("mousemove", e => {

        const x = e.offsetX;
        const y = e.offsetY;

        btn.style.setProperty("--x", x + "px");
        btn.style.setProperty("--y", y + "px");

    });

});

console.log("Portfolio Loaded 🚀");

/* ==========================================
MOUSE SPOTLIGHT
========================================== */

const spotlight = document.querySelector(".spotlight");

document.addEventListener("mousemove",(e)=>{

    spotlight.style.left=e.clientX+"px";

    spotlight.style.top=e.clientY+"px";

});

/* ==================================
SCROLL REVEAL
================================== */

const reveals = document.querySelectorAll(
".timeline-item"
);

window.observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

} else {

entry.target.classList.remove("show");

}

});

},{
threshold:.3
});

reveals.forEach(item=>{

window.observer.observe(item);

});

/* ==========================================
   MOBILE NAVBAR MENU TOGGLE
========================================== */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
        const icon = menuToggle.querySelector("i");
        if (icon) {
            if (navLinks.classList.contains("show")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        }
    });

    // Close mobile menu when any nav link is clicked
    const links = navLinks.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", () => {
            if (navLinks.classList.contains("show")) {
                navLinks.classList.remove("show");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }
        });
    });
}