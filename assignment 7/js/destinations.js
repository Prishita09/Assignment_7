document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const destinations = document.querySelectorAll('.destination-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Filter destinations with animation
            destinations.forEach(destination => {
                if (filter === 'all' || destination.classList.contains(filter)) {
                    destination.classList.remove('hidden');
                } else {
                    destination.classList.add('hidden');
                }
            });
        });
    });
});
