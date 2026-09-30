/* =========================================================
   LOWRENCE DEVU PORTFOLIO
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const splash = document.getElementById("splash");
    const entrance = document.getElementById("entrance");
    const second = document.getElementById("second");
    const main = document.getElementById("main");

    const typingIntro =
        document.getElementById("typing-h1");

    const progressBar =
        document.getElementById("progress-bar");

    const heroTyping =
        document.getElementById("typing");

    const header =
        document.getElementById("header");

    const nav =
        document.getElementById("nav");

    const menuToggle =
        document.getElementById("menu-toggle");

    const particles =
        document.getElementById("particles");


    /* =====================================================
       SPLASH SCREEN
    ====================================================== */

    const introText =
        "in technology, innovation, and creativity.";

    let introIndex = 0;


    function typeIntro() {

        if (!typingIntro) {
            return;
        }

        if (introIndex < introText.length) {

            typingIntro.textContent +=
                introText.charAt(introIndex);

            introIndex++;

            setTimeout(
                typeIntro,
                55
            );

        }

    }


    function showSecondSplash() {

        if (!entrance || !second) {
            return;
        }

        entrance.classList.remove("active");

        setTimeout(() => {

            second.classList.add("active");

            setTimeout(
                typeIntro,
                450
            );

        }, 300);

    }


    function startProgress() {

        if (!progressBar) {
            return;
        }

        const duration = 5800;

        const startTime =
            performance.now();


        function updateProgress(currentTime) {

            const elapsed =
                currentTime - startTime;

            const percentage =
                Math.min(
                    (elapsed / duration) * 100,
                    100
                );

            progressBar.style.width =
                `${percentage}%`;

            if (percentage < 100) {

                requestAnimationFrame(
                    updateProgress
                );

            }

        }

        requestAnimationFrame(
            updateProgress
        );

    }


    function finishSplash() {

        if (!main || !splash) {
            return;
        }

        main.classList.add("is-visible");

        splash.classList.add("hidden");

        document.body.style.overflow = "";

        setTimeout(() => {

            splash.remove();

        }, 900);

    }


    document.body.style.overflow =
        "hidden";


    startProgress();


    setTimeout(() => {

        showSecondSplash();

    }, 3000);


    setTimeout(() => {

        finishSplash();

    }, 6400);


    /* =====================================================
       HERO TYPING
    ====================================================== */

    const heroWords = [

        "Frontend Developer",
        "Web Developer",
        "AI Enthusiast",
        "Software Builder"

    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;


    function typeHeroText() {

        if (!heroTyping) {
            return;
        }

        const currentWord =
            heroWords[wordIndex];


        if (!deleting) {

            heroTyping.textContent =
                currentWord.substring(
                    0,
                    charIndex + 1
                );

            charIndex++;


            if (
                charIndex ===
                currentWord.length
            ) {

                deleting = true;

                setTimeout(
                    typeHeroText,
                    1700
                );

                return;

            }

        } else {

            heroTyping.textContent =
                currentWord.substring(
                    0,
                    charIndex - 1
                );

            charIndex--;


            if (charIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1)
                    % heroWords.length;

            }

        }


        setTimeout(
            typeHeroText,
            deleting ? 45 : 75
        );

    }


    setTimeout(
        typeHeroText,
        7000
    );


    /* =====================================================
       PARTICLES
    ====================================================== */

    function createParticles() {

        if (!particles) {
            return;
        }

        const count =
            window.innerWidth < 600
                ? 25
                : 45;


        for (
            let i = 0;
            i < count;
            i++
        ) {

            const particle =
                document.createElement("span");

            particle.className =
                "particle";


            particle.style.left =
                `${Math.random() * 100}%`;

            particle.style.top =
                `${Math.random() * 100}%`;


            particle.style.setProperty(
                "--x",
                `${(Math.random() - 0.5) * 100}px`
            );

            particle.style.setProperty(
                "--y",
                `${(Math.random() - 0.5) * 100}px`
            );

            particle.style.setProperty(
                "--duration",
                `${3 + Math.random() * 5}s`
            );


            particle.style.animationDelay =
                `${Math.random() * 3}s`;


            particles.appendChild(
                particle
            );

        }

    }


    createParticles();


    /* =====================================================
       HEADER SCROLL
    ====================================================== */

    function handleHeaderScroll() {

        if (!header) {
            return;
        }

        if (window.scrollY > 30) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        handleHeaderScroll,
        {
            passive: true
        }
    );


    handleHeaderScroll();


    /* =====================================================
       MOBILE NAVIGATION
    ====================================================== */

    function closeNav() {

        if (!nav) {
            return;
        }

        nav.classList.remove(
            "open"
        );

        if (menuToggle) {

            menuToggle
                .setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            menuToggle.innerHTML =
                '<i class="fas fa-bars"></i>';

        }

    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            () => {

                if (!nav) {
                    return;
                }

                const isOpen =
                    nav.classList.toggle(
                        "open"
                    );


                menuToggle
                    .setAttribute(
                        "aria-label",
                        isOpen
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    );


                menuToggle.innerHTML =
                    isOpen
                        ? '<i class="fas fa-xmark"></i>'
                        : '<i class="fas fa-bars"></i>';

            }
        );

    }


    document
        .querySelectorAll(".nav-link")
        .forEach((link) => {

            link.addEventListener(
                "click",
                () => {

                    closeNav();

                }
            );

        });


    /* =====================================================
       ACTIVE NAVIGATION
    ====================================================== */

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );

    const navLinks =
        document.querySelectorAll(
            ".nav-link"
        );


    function updateActiveNav() {

        let current =
            "home";


        sections.forEach((section) => {

            const sectionTop =
                section.offsetTop - 160;

            const sectionBottom =
                sectionTop +
                section.offsetHeight;


            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionBottom
            ) {

                current =
                    section.id;

            }

        });


        navLinks.forEach((link) => {

            link.classList.remove(
                "active"
            );


            const href =
                link.getAttribute(
                    "href"
                );


            if (
                href ===
                `#${current}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNav,
        {
            passive: true
        }
    );


    updateActiveNav();


    /* =====================================================
       REVEAL ANIMATIONS
    ====================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target
                                    .classList
                                    .add(
                                        "visible"
                                    );

                                observer
                                    .unobserve(
                                        entry.target
                                    );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            (element) => {

                observer.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            (element) => {

                element.classList.add(
                    "visible"
                );

            }
        );

    }


    /* =====================================================
       PROJECT MODAL
    ====================================================== */

    const projectModal =
        document.getElementById(
            "project-modal"
        );

    const projectImage =
        document.getElementById(
            "modal-project-image"
        );

    const projectTitle =
        document.getElementById(
            "modal-project-title"
        );

    const projectDescription =
        document.getElementById(
            "modal-project-description"
        );

    const projectLink =
        document.getElementById(
            "modal-project-link"
        );

    const projectCategory =
        document.getElementById(
            "modal-project-category"
        );


    function openProjectModal(card) {

        if (!projectModal || !card) {
            return;
        }


        const title =
            card.dataset.title ||
            "Project";

        const image =
            card.dataset.img ||
            "";

        const description =
            card.dataset.desc ||
            "";

        const link =
            card.dataset.link ||
            "#";

        const categoryElement =
            card.querySelector(
                ".project-category"
            );


        if (projectTitle) {

            projectTitle.textContent =
                title;

        }


        if (projectImage) {

            projectImage.src =
                image;

            projectImage.alt =
                title;

        }


        if (projectDescription) {

            projectDescription.textContent =
                description;

        }


        if (projectLink) {

            projectLink.href =
                link;

            if (
                !link ||
                link === "#"
            ) {

                projectLink.style.display =
                    "none";

            } else {

                projectLink.style.display =
                    "inline-flex";

            }

        }


        if (
            projectCategory &&
            categoryElement
        ) {

            projectCategory.textContent =
                categoryElement.textContent;

        }


        projectModal.classList.add(
            "active"
        );

        projectModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );

    }


    document
        .querySelectorAll(
            ".project-card"
        )
        .forEach((card) => {

            card.addEventListener(
                "click",
                () => {

                    openProjectModal(
                        card
                    );

                }
            );

        });


    /* =====================================================
       CERTIFICATION MODAL
    ====================================================== */

    const certModal =
        document.getElementById(
            "cert-modal"
        );

    const certImage =
        document.getElementById(
            "modal-cert-image"
        );

    const certTitle =
        document.getElementById(
            "modal-cert-title"
        );

    const certDescription =
        document.getElementById(
            "modal-cert-description"
        );

    const certLink =
        document.getElementById(
            "modal-cert-link"
        );


    function openCertModal(card) {

        if (!certModal || !card) {
            return;
        }


        const title =
            card.dataset.title ||
            "Certificate";

        const image =
            card.dataset.img ||
            "";

        const description =
            card.dataset.desc ||
            "";

        const link =
            card.dataset.link ||
            "#";


        if (certTitle) {

            certTitle.textContent =
                title;

        }


        if (certImage) {

            certImage.src =
                image;

            certImage.alt =
                title;

        }


        if (certDescription) {

            certDescription.textContent =
                description;

        }


        if (certLink) {

            certLink.href =
                link;


            if (
                !link ||
                link === "#"
            ) {

                certLink.style.display =
                    "none";

            } else {

                certLink.style.display =
                    "inline-flex";

            }

        }


        certModal.classList.add(
            "active"
        );

        certModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.classList.add(
            "modal-open"
        );

    }


    document
        .querySelectorAll(
            ".cert-card"
        )
        .forEach((card) => {

            card.addEventListener(
                "click",
                (event) => {

                    /*
                     * Prevent the button's default
                     * behavior from affecting the modal.
                     */
                    event.preventDefault();

                    openCertModal(
                        card
                    );

                }
            );

        });


    /* =====================================================
       CLOSE MODALS
    ====================================================== */

    function closeModal(modal) {

        if (!modal) {
            return;
        }

        modal.classList.remove(
            "active"
        );

        modal.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.classList.remove(
            "modal-open"
        );

    }


    document
        .querySelectorAll(
            ".modal-close"
        )
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    closeModal(
                        button.closest(
                            ".modal"
                        )
                    );

                }
            );

        });


    document
        .querySelectorAll(
            ".modal-overlay"
        )
        .forEach((overlay) => {

            overlay.addEventListener(
                "click",
                () => {

                    closeModal(
                        overlay.closest(
                            ".modal"
                        )
                    );

                }
            );

        });


    /* =====================================================
       ESCAPE KEY
    ====================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key !==
                "Escape"
            ) {

                return;

            }


            document
                .querySelectorAll(
                    ".modal.active"
                )
                .forEach(
                    (modal) => {

                        closeModal(
                            modal
                        );

                    }
                );


            closeNav();

        }
    );


    /* =====================================================
       WINDOW RESIZE
    ====================================================== */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 850
            ) {

                closeNav();

            }

        }
    );


    /* =====================================================
       IMAGE ERROR HANDLING
    ====================================================== */

    document
        .querySelectorAll(
            "img"
        )
        .forEach((img) => {

            img.addEventListener(
                "error",
                () => {

                    img.style.opacity =
                        "0.25";

                }
            );

        });


});
