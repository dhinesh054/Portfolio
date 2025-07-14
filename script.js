document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

       // Scroll animations
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.about-content, .skills-grid, .work-content, .portfolio-grid, .feature-film');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Clients section toggle
    const clientsBtn = document.querySelector('.clients-btn');
    const clientsSection = document.querySelector('.clients-section');
    
    if (clientsBtn && clientsSection) {
        clientsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            clientsSection.style.display = clientsSection.style.display === 'block' ? 'none' : 'block';
            
            if (clientsSection.style.display === 'block') {
                window.scrollTo({
                    top: clientsSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
    
    // Reviews slider
    const reviews = document.querySelectorAll('.review');
    const prevBtn = document.querySelector('.prev-review');
    const nextBtn = document.querySelector('.next-review');
    let currentReview = 0;
    
    function showReview(index) {
        reviews.forEach(review => review.classList.remove('active'));
        reviews[index].classList.add('active');
        currentReview = index;
    }
    
    if (reviews.length > 0) {
        showReview(0);
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                let nextIndex = (currentReview + 1) % reviews.length;
                showReview(nextIndex);
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                let prevIndex = (currentReview - 1 + reviews.length) % reviews.length;
                showReview(prevIndex);
            });
        }
    }
  
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});