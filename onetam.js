 // Wait for DOM to be fully loaded
      document.addEventListener("DOMContentLoaded", function () {
        // Animate elements on scroll
        const observerOptions = {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver(function (entries) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
            }
          });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll(".card, .project-card").forEach((el) => {
          el.classList.add("fade-in");
          observer.observe(el);
        });

        // Dynamic year in footer
        const yearElement = document.querySelector("footer p");
        if (yearElement) {
          const currentYear = new Date().getFullYear();
          yearElement.textContent = `© ${currentYear} Charles Karanja. All rights reserved.`;
        }
      });