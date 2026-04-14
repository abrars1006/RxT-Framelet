document.addEventListener('DOMContentLoaded', () => {
    
    /* ---- SCROLL REVEAL ANIMATIONS ---- */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Keep observing if we want reverse animations, else unobserve
                observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    const animElements = document.querySelectorAll('.scroll-anim');
    animElements.forEach(el => observer.observe(el));

    // Initially reveal first elements right away
    setTimeout(() => {
        const topElements = document.querySelectorAll('.hero');
        topElements.forEach(el => el.classList.add('visible'));
    }, 50);

    /* ---- FAQ ACCORDION ---- */
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Close other open items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    /* ---- PARALLAX EFFECTS ---- */
    const parallaxBg = document.getElementById('parallaxBg');
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;

        // Parallax background floating icons
        if(parallaxBg) {
            parallaxBg.style.transform = `translateY(${scrollY * 0.3}px)`;
        }

        // Navbar blur/shadow effect on scroll
        if(scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
