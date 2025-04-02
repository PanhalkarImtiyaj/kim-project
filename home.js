document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.innerHTML = navLinks.classList.contains('active') 
            ? '<i class="ri-close-line"></i>' 
            : '<i class="ri-menu-line"></i>';
    });
    
    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="ri-menu-line"></i>';
            }
        });
    });
    
    // Change active link on click
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelectorAll('.nav-links li a').forEach(item => {
                item.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar') && window.innerWidth <= 768) {
            navLinks.classList.remove('active');
            hamburger.innerHTML = '<i class="ri-menu-line"></i>';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.car-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    let autoSlideInterval;
    const slideInterval = 5000; // 5 seconds
    
    // Function to show slide
    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current slide
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    // Next slide function
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    
    // Previous slide function
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }
    
    // Start auto sliding
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, slideInterval);
    }
    
    // Stop auto sliding
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });
    
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });
    });
    
    // Pause on hover
    const sliderWrapper = document.querySelector('.slider-wrapper');
    sliderWrapper.addEventListener('mouseenter', stopAutoSlide);
    sliderWrapper.addEventListener('mouseleave', startAutoSlide);
    
    // Initialize
    showSlide(0);
    startAutoSlide();
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextSlide();
            stopAutoSlide();
            startAutoSlide();
        } else if (e.key === 'ArrowLeft') {
            prevSlide();
            stopAutoSlide();
            startAutoSlide();
        }
    });
});



        document.addEventListener('DOMContentLoaded', function() {
            // Animate section headers on load
            const sectionHeaders = document.querySelectorAll('.section-header');
            sectionHeaders.forEach(header => {
                setTimeout(() => {
                    header.querySelector('h2').classList.add('animate-in');
                    header.querySelector('p').classList.add('animate-in');
                }, 300);
            });
            
            // Scroll animation function
            function checkScroll() {
                const vehicleCards = document.querySelectorAll('.vehicle-card');
                const benefitCards = document.querySelectorAll('.benefit-card');
                const processSteps = document.querySelectorAll('.process-step');
                const windowHeight = window.innerHeight;
                const triggerPoint = windowHeight * 0.75;
                
                vehicleCards.forEach((card, index) => {
                    const cardTop = card.getBoundingClientRect().top;
                    if (cardTop < triggerPoint) {
                        setTimeout(() => {
                            card.classList.add('animate-in');
                        }, index * 150);
                    }
                });
                
                benefitCards.forEach((card, index) => {
                    const cardTop = card.getBoundingClientRect().top;
                    if (cardTop < triggerPoint) {
                        setTimeout(() => {
                            card.classList.add('animate-in');
                        }, index * 150);
                    }
                });
                
                processSteps.forEach((step, index) => {
                    const stepTop = step.getBoundingClientRect().top;
                    if (stepTop < triggerPoint) {
                        setTimeout(() => {
                            step.classList.add('animate-in');
                        }, index * 200);
                    }
                });
            }
            
            // Initial check
            checkScroll();
            
            // Check on scroll
            window.addEventListener('scroll', checkScroll);
        });
        
        // Load Font Awesome for icons
        const faScript = document.createElement('script');
        faScript.src = 'https://kit.fontawesome.com/a076d05399.js';
        faScript.crossOrigin = 'anonymous';
        document.head.appendChild(faScript);

        document.querySelectorAll('.city-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                document.querySelectorAll('.city-btn').forEach(b => {
                    b.style.background = 'rgba(255,255,255,0.2)';
                });
                
                // Add active style to clicked button
                this.style.background = 'var(--saffron)';
                
                // Here you would typically filter vehicles by city
                console.log('Selected city:', this.textContent);
            });
        });
        
        // Initialize animations for Indian sections
        const indiaSections = document.querySelectorAll('.india-vehicle-showcase, .indian-cities, .festival-special');
        indiaSections.forEach(section => {
            section.querySelectorAll('.vehicle-card, .benefit-card').forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate-in');
                }, index * 200);
            });
        });

    //      // Footer animations
    // document.addEventListener('DOMContentLoaded', function() {
    //     const footerObserver = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 entry.target.classList.add('animate-in');
                    
    //                 // Animate payment methods sequentially
    //                 const paymentLogos = document.querySelectorAll('.payment-methods img');
    //                 paymentLogos.forEach((logo, index) => {
    //                     setTimeout(() => {
    //                         logo.style.transform = 'translateY(0)';
    //                         logo.style.opacity = '0.8';
    //                     }, index * 100);
    //                 });
    //             }
    //         });
    //     }, {threshold: 0.1});
        
    //     document.querySelectorAll('[data-animate]').forEach(el => {
    //         footerObserver.observe(el);
    //     });