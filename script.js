document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ELEMENTS
    ========================================= */

    const entrance = document.getElementById("entrance");
    const second = document.getElementById("second");
    const main = document.getElementById("main");

    const typingElement = document.getElementById("typing");
    const introTypingElement = document.getElementById("typing-intro");

    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector("nav");
    const navLinks = document.querySelectorAll("nav a");


    /* =========================================
       MOBILE MENU
    ========================================= */

    if (hamburger && nav) {

        hamburger.addEventListener("click", () => {
            nav.classList.toggle("active");
            hamburger.classList.toggle("active");
        });

        navLinks.forEach(link => {

            link.addEventListener("click", () => {
                nav.classList.remove("active");
                hamburger.classList.remove("active");
            });

        });

    }


    /* =========================================
       INTRO ANIMATION
    ========================================= */

    const introText =
        "in technology, innovation, and software.";

    let introIndex = 0;

    function typeIntro() {

        if (!introTypingElement) return;

        if (introIndex < introText.length) {

            introTypingElement.textContent +=
                introText.charAt(introIndex);

            introIndex++;

            setTimeout(typeIntro, 65);

        }

    }


    /* =========================================
       ENTRANCE → MAIN PAGE
    ========================================= */

    if (entrance && second && main) {

        setTimeout(() => {

            entrance.style.opacity = "0";

            setTimeout(() => {

                entrance.style.display = "none";

                second.style.display = "flex";
                second.style.opacity = "1";

                typeIntro();

                setTimeout(() => {

                    second.style.opacity = "0";

                    setTimeout(() => {

                        second.style.display = "none";

                        main.style.display = "block";

                        requestAnimationFrame(() => {
                            main.style.opacity = "1";
                        });

                    }, 700);

                }, 3500);

            }, 900);

        }, 1800);

    } else if (main) {

        main.style.display = "block";
        main.style.opacity = "1";

    }


    /* =========================================
       HERO TYPING EFFECT
    ========================================= */

    const words = [
        "Software Engineer",
        "Salesforce Developer",
        "AI / Full-Stack Developer"
    ];

    let wordIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;

    function typeRole() {

        if (!typingElement) return;

        const currentWord = words[wordIndex];

        if (isDeleting) {

            letterIndex--;

        } else {

            letterIndex++;

        }

        typingElement.textContent =
            currentWord.substring(0, letterIndex);


        let speed = isDeleting ? 55 : 90;


        if (!isDeleting &&
            letterIndex === currentWord.length) {

            speed = 1800;
            isDeleting = true;

        } else if (
            isDeleting &&
            letterIndex === 0
        ) {

            isDeleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;

            speed = 400;

        }

        setTimeout(typeRole, speed);

    }

    typeRole();


    /* =========================================
       PARTICLES
    ========================================= */

    const particlesContainer =
        document.querySelector(".particles");

    if (particlesContainer) {

        for (let i = 0; i < 35; i++) {

            const particle =
                document.createElement("span");

            const size =
                Math.random() * 4 + 3;

            particle.style.width =
                `${size}px`;

            particle.style.height =
                `${size}px`;

            particle.style.left =
                `${Math.random() * 100}%`;

            particle.style.top =
                `${Math.random() * 100}%`;

            particle.style.animationDuration =
                `${Math.random() * 5 + 3}s`;

            particlesContainer.appendChild(
                particle
            );

        }

    }


    /* =========================================
       ACTIVE NAVIGATION
    ========================================= */

    const sections =
        document.querySelectorAll("section[id]");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (window.scrollY >= sectionTop) {

                currentSection =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === `#${currentSection}`) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    updateActiveNav();


    /* =========================================
       FOOTER YEAR
    ========================================= */

    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});
