document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Logic
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        // Toggle Nav
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.right = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'white';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 10px 15px rgba(0,0,0,0.1)';
        }
    });

    // Reset Nav on Resize (Fix for switching between mobile/desktop)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'row';
            navLinks.style.position = 'static';
            navLinks.style.boxShadow = 'none';
            navLinks.style.background = 'transparent';
            navLinks.style.padding = '0';
        } else {
            navLinks.style.display = 'none'; // Auto hide on resize down
        }
    });


    // 2. Scroll Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.15, // Trigger when 15% of element is visible
        rootMargin: "0px 0px -50px 0px" // Offset trigger slightly
    });

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });
});