/* ==========================================
   NAVANEETH PORTFOLIO - JAVASCRIPT
========================================== */


/* ==========================================
   1. MOBILE MENU
========================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (icon) {
            icon.className = isOpen
                ? "fa-solid fa-xmark"
                : "fa-solid fa-bars";
        }

    });

    // Close menu when clicking links
    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.className = "fa-solid fa-bars";
            }

        });

    });

    // Close menu when clicking outside
    document.addEventListener("click", event => {

        if (
            navLinks.classList.contains("active") &&
            !navLinks.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            if (icon) {
                icon.className = "fa-solid fa-bars";
            }

        }

    });

}


/* ==========================================
   2. TYPING ANIMATION
========================================== */

const typingElement = document.getElementById("typing");

const words = [
    "IT Support Engineer",
    "Linux Enthusiast",
    "Networking Learner",
    "DevOps Enthusiast",
    "Cloud Learner"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        charIndex++;

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        charIndex--;

        typingElement.textContent =
            currentWord.substring(0, charIndex);

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;

        }

    }

    setTimeout(typeEffect, deleting ? 45 : 90);

}

if (typingElement) {
    typeEffect();
}


/* ==========================================
   3. LIGHT / DARK MODE
========================================== */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    const icon = themeToggle.querySelector("i");

    let savedTheme = "light";

    try {
        savedTheme =
            localStorage.getItem("portfolio-theme") || "light";
    } catch (error) {
        savedTheme = "light";
    }

    // Apply saved theme
    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        if (icon) {
            icon.className = "fa-solid fa-sun";
        }

    }

    // Toggle theme
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        const isDark =
            document.body.classList.contains("dark-mode");

        if (icon) {

            icon.className = isDark
                ? "fa-solid fa-sun"
                : "fa-solid fa-moon";

        }

        try {

            localStorage.setItem(
                "portfolio-theme",
                isDark ? "dark" : "light"
            );

        } catch (error) {
            console.log("Theme preference could not be saved.");
        }

    });

}


/* ==========================================
   4. PAGE LOADER
========================================== */

function hideLoader() {

    const loader = document.getElementById("page-loader");

    if (!loader) return;

    loader.classList.add("loader-hidden");

    setTimeout(() => {

        if (loader.parentNode) {
            loader.remove();
        }

    }, 500);

}

// Page load
window.addEventListener("load", hideLoader);

// Backup timer
setTimeout(hideLoader, 2000);


/* ==========================================
   5. SCROLL REVEAL ANIMATION
========================================== */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-card, " +
    ".about-details, " +
    ".skill-card, " +
    ".project-card, " +
    ".certificate-card, " +
    ".timeline-item, " +
    ".contact-card, " +
    ".contact-cta"
);

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.10,
            rootMargin: "0px 0px -30px 0px"
        }

    );

    // FIXED: Correct variable name
    revealElements.forEach(element => {

        element.classList.add("reveal");

        revealObserver.observe(element);

    });

} else {

    revealElements.forEach(element => {
        element.classList.add("active");
    });

}


/* ==========================================
   6. EXPAND / COLLAPSE CARDS
========================================== */

// Skills
document.querySelectorAll(".skill-card").forEach(card => {

    card.addEventListener("toggle", () => {

        if (card.open) {

            document.querySelectorAll(".skill-card").forEach(otherCard => {

                if (otherCard !== card) {
                    otherCard.open = false;
                }

            });

        }

    });

});


// Projects
document.querySelectorAll(".project-card").forEach(card => {

    card.addEventListener("toggle", () => {

        if (card.open) {

            document.querySelectorAll(".project-card").forEach(otherCard => {

                if (otherCard !== card) {
                    otherCard.open = false;
                }

            });

        }

    });

});


// Certificates
document.querySelectorAll(".certificate-card").forEach(card => {

    card.addEventListener("toggle", () => {

        if (card.open) {

            document.querySelectorAll(".certificate-card").forEach(otherCard => {

                if (otherCard !== card) {
                    otherCard.open = false;
                }

            });

        }

    });

});


/* ==========================================
   7. COPYRIGHT YEAR
========================================== */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* ==========================================
   8. SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", event => {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetElement =
            document.querySelector(targetId);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* ==========================================
   9. REMOVE OLD PARTICLE EFFECTS
========================================== */

const oldCanvas =
    document.getElementById("particles-canvas");

if (oldCanvas) {
    oldCanvas.remove();
}

const oldMouseGlow =
    document.getElementById("mouse-glow");

if (oldMouseGlow) {
    oldMouseGlow.remove();
}


/* ==========================================
   10. BUTTON CLICK EFFECT
========================================== */

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.96)";

        setTimeout(() => {

            this.style.transform = "";

        }, 150);

    });

});


/* ==========================================
   11. PORTFOLIO READY
========================================== */

console.log(
    "%c Navaneeth Portfolio Ready! ",
    "background:linear-gradient(90deg,#7047f5,#ec4899);" +
    "color:white;font-size:14px;padding:10px;border-radius:8px;"
);
/* ==========================================
   12. PROFILE CARD 3D TILT
========================================== */

const profileCard = document.getElementById("profileCard");

if (profileCard) {

    const cardInner =
        profileCard.querySelector(".profile-card-inner");

    const isMobile =
        window.matchMedia("(max-width: 768px)").matches;

    const reducedMotion =
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (cardInner && !isMobile && !reducedMotion) {

        profileCard.addEventListener("mousemove", function (event) {

            const rect = profileCard.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateY = ((x - centerX) / centerX) * 8;
            const rotateX = ((centerY - y) / centerY) * 8;

            cardInner.style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        });

        profileCard.addEventListener("mouseleave", function () {

            cardInner.style.transform =
                "rotateX(0deg) rotateY(0deg)";

        });

    }

}