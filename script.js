// Ensure GSAP and ScrollTrigger are loaded before running the script
if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.error('GSAP or ScrollTrigger not loaded. Please check CDN links.');
} else {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // --- Hero Section Animations ---
    gsap.timeline()
        .from(".logo-text", {
            opacity: 0,
            y: -50,
            duration: 0.8,
            ease: "power3.out"
        })
        .from(".nav-links li", {
            opacity: 0,
            y: -20,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out"
        }, "<0.2") // Start slightly after logo
        .from("#mobile-menu-button", {
            opacity: 0,
            y: -20,
            duration: 0.6,
            ease: "power2.out"
        }, "<0.2")
        .from(".hero-text-clip", {
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        }, "<0.2") // Ensure hero text container is visible
        .to(".reveal-text span span", {
            y: "0%",
            duration: 1.2,
            stagger: 0.1,
            ease: "power3.out"
        }, "<0.2") // Animate text up
        .from(".hero-subtitle", {
            opacity: 0,
            y: 20,
            duration: 1,
            ease: "power2.out"
        }, "-=0.6") // Start subtitle animation slightly before text finishes
        .from(".hero-button", {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4"); // Start button animation slightly before subtitle finishes

    // --- Background Blob Animations (subtle, continuous) ---
    gsap.to(".animate-blob", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        scale: "random(1, 1.1)",
        rotation: "random(-10, 10)",
        ease: "none",
        duration: 8,
        repeat: -1,
        yoyo: true,
        stagger: {
            each: 0.5,
            from: "random"
        }
    });


    // --- Scroll-Triggered Animations for Sections ---

    // About Section
    gsap.from(".fade-in-left", {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 75%", // When the top of the trigger hits 75% of the viewport
            toggleActions: "play none none none",
            // markers: true // For debugging
        }
    });
    gsap.from(".fade-in-right", {
        opacity: 0,
        x: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
            trigger: "#about",
            start: "top 75%",
            toggleActions: "play none none none",
            // markers: true
        }
    });

    // Services Section
    gsap.from("#services h2", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#services",
            start: "top 75%",
            toggleActions: "play none none none",
            // markers: true
        }
    });
    gsap.from(".service-card", {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.8,
        ease: "back.out(1.7)",
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#services .grid",
            start: "top 80%",
            toggleActions: "play none none none",
            // markers: true
        }
    });

    // Work Section
    gsap.from("#work h2", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#work",
            start: "top 75%",
            toggleActions: "play none none none",
            // markers: true
        }
    });
    gsap.from(".work-card", {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#work .grid",
            start: "top 80%",
            toggleActions: "play none none none",
            // markers: true
        }
    });

    // Testimonials Section
    gsap.from("#testimonials h2", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#testimonials",
            start: "top 75%",
            toggleActions: "play none none none",
            // markers: true
        }
    });
    gsap.from(".testimonial-card", {
        opacity: 0,
        y: 50,
        duration: 0.9,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#testimonials .grid",
            start: "top 80%",
            toggleActions: "play none none none",
            // markers: true
        }
    });

    // Contact Section
    gsap.from("#contact h2", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 75%",
            toggleActions: "play none none none",
            // markers: true
        }
    });
    gsap.from(".contact-subtitle", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 70%",
            toggleActions: "play none none none",
            // markers: true
        }
    });
    gsap.from(".contact-button", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: "#contact",
            start: "top 65%",
            toggleActions: "play none none none",
            // markers: true
        }
    });


    // --- Mobile Menu Functionality ---
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.nav-link-mobile');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('hidden');
        gsap.to(mobileMenu, {
            x: '0%',
            duration: 0.3,
            ease: "power2.out"
        });
        gsap.fromTo(mobileNavLinks, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: "power2.out",
            delay: 0.2
        });
    });

    closeMobileMenuButton.addEventListener('click', () => {
        gsap.to(mobileMenu, {
            x: '100%',
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // Close mobile menu when a link is clicked
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            gsap.to(mobileMenu, {
                x: '100%',
                duration: 0.3,
                ease: "power2.in",
                onComplete: () => {
                    mobileMenu.classList.add('hidden');
                }
            });
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
