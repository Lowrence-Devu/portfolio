document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       PROJECT CARD ANIMATION
    ========================================= */

    const projectCards =
        document.querySelectorAll(".project-item");

    const projectsSection =
        document.getElementById("projects");

    if (projectCards.length && projectsSection) {

        projectCards.forEach((card, index) => {

            card.classList.add("fade-side-init");

            card.classList.add(
                index % 2 === 0
                    ? "from-left"
                    : "from-right"
            );

        });


        const projectObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting)
                            return;

                        projectCards.forEach(
                            (card, index) => {

                                setTimeout(() => {

                                    card.classList.add(
                                        "fade-side-in"
                                    );

                                }, index * 120);

                            }
                        );

                        observer.disconnect();

                    });

                },
                {
                    threshold: 0.15
                }
            );

        projectObserver.observe(
            projectsSection
        );

    }


    /* =========================================
       SECTION REVEAL
    ========================================= */

    const sections =
        document.querySelectorAll("section");

    const sectionObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting)
                        return;

                    entry.target.classList.add(
                        "section-fade-in"
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12
            }
        );


    sections.forEach(section => {

        section.classList.add(
            "section-fade-init"
        );

        sectionObserver.observe(section);

    });

});
