document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScroll = currentScroll;
    });

    // Destination filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    const destinationItems = document.querySelectorAll('.destination-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            destinationItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 0);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Smooth scroll functionality
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const featuredSection = document.querySelector('#featured');
    
    if (scrollIndicator && featuredSection) {
        scrollIndicator.addEventListener('click', function(e) {
            e.preventDefault();
            featuredSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Add hover effect to scroll indicator
    if (scrollIndicator) {
        scrollIndicator.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(5px)';
        });

        scrollIndicator.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
});
