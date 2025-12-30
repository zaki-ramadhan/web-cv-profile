// CV Profile Logic

// Add any interactive features here if needed in the future
console.log('CV Profile Loaded');

// Example: Add a subtle fade-in effect on load
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.querySelector('main');
    if (mainContent) {
        mainContent.style.opacity = '0';
        mainContent.style.transition = 'opacity 0.8s ease-out';
        setTimeout(() => {
            mainContent.style.opacity = '1';
        }, 100);
    }
    // Scroll to Top Logic
    const scrollBtn = document.getElementById('scrollToTop');

    if (scrollBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollBtn.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
                scrollBtn.classList.add('opacity-100', 'translate-y-0');
            } else {
                scrollBtn.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
                scrollBtn.classList.remove('opacity-100', 'translate-y-0');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
