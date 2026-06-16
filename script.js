document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // 2. Dark/Light Theme Switcher
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    // Check system preference or localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    
    if (savedTheme === 'light') {
        bodyElement.classList.remove('dark-theme');
        bodyElement.classList.add('light-theme');
    } else {
        bodyElement.classList.remove('light-theme');
        bodyElement.classList.add('dark-theme');
    }

    themeToggleBtn.addEventListener('click', () => {
        if (bodyElement.classList.contains('dark-theme')) {
            bodyElement.classList.remove('dark-theme');
            bodyElement.classList.add('light-theme');
            localStorage.setItem('portfolio-theme', 'light');
        } else {
            bodyElement.classList.remove('light-theme');
            bodyElement.classList.add('dark-theme');
            localStorage.setItem('portfolio-theme', 'dark');
        }
    });

    // 3. Mobile Hamburger Menu
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const menuIconOpen = document.getElementById('menu-icon-open');
    const menuIconClose = document.getElementById('menu-icon-close');
    const navLinks = document.querySelectorAll('.nav-link');

    function toggleMenu() {
        navMenu.classList.toggle('mobile-active');
        menuIconOpen.classList.toggle('hidden');
        menuIconClose.classList.toggle('hidden');
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // Close menu when a navigation link is clicked (on mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('mobile-active')) {
                toggleMenu();
            }
        });
    });

    // 4. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                // Optional: Unobserve if you only want the animation to run once
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 5. Active Link Highlighting on Scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', () => {
        let currentSectionId = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Highlight when section is centered/top 150px
            if (pageYOffset >= (sectionTop - 150)) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });

        // Add glass styling to header upon scroll
        const header = document.getElementById('main-header');
        if (pageYOffset > 50) {
            header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // 6. Interactive Contact Form Handler (Mock Submission)
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('btn-form-submit');
    const submitBtnText = submitBtn.querySelector('span');
    const submitBtnIcon = document.getElementById('btn-submit-icon');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Collect Form Values
            const name = document.getElementById('form-name').value;
            const email = document.getElementById('form-email').value;
            const subject = document.getElementById('form-subject').value;
            const message = document.getElementById('form-message').value;

            // Set Loading state
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            submitBtnText.textContent = 'Sending...';
            
            // Temporarily replace send icon with simple loader spinner
            if (typeof lucide !== 'undefined') {
                submitBtnIcon.setAttribute('data-lucide', 'loader-2');
                lucide.createIcons();
                submitBtnIcon.classList.add('animate-spin'); // spin animation handled by Tailwind or custom css
            }

            // Simulate Network Request delay
            setTimeout(() => {
                // Success State
                submitBtn.disabled = false;
                submitBtn.style.opacity = '1';
                submitBtnText.textContent = 'Send Message';
                
                if (typeof lucide !== 'undefined') {
                    submitBtnIcon.setAttribute('data-lucide', 'send');
                    submitBtnIcon.classList.remove('animate-spin');
                    lucide.createIcons();
                }

                formFeedback.classList.remove('hidden', 'error');
                formFeedback.classList.add('success');
                formFeedback.textContent = `Thank you, ${name}! Your message has been sent successfully. Sathwika will get back to you soon.`;

                // Reset Form Fields
                contactForm.reset();

                // Hide feedback message after 5 seconds
                setTimeout(() => {
                    formFeedback.classList.add('hidden');
                }, 5000);

            }, 1800);
        });
    }

    // 7. Extra Custom Feature: Spinning spinner rotation utility for loader icon
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin {
            animation: spin 1s linear infinite;
        }
    `;
    document.head.appendChild(styleElement);
    document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const params = {
        from_name: document.getElementById("form-name").value,
        from_email: document.getElementById("form-email").value,
        subject: document.getElementById("form-subject").value,
        message: document.getElementById("form-message").value
    };

    emailjs.send(
        "service_4krceob",
        "template_yz59gh9",
        params
    )
    .then(function(response) {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
        console.log("SUCCESS!", response.status, response.text);
    })
    .catch(function(error) {
        alert("Failed to send message.");
        console.error("FAILED...", error);
    });
});
});
