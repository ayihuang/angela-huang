/*checks to see if element is in view */
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('.rectangle').forEach(rectangle => { // make rectangles visible once they are in viewport
        observer.observe(rectangle);
    });
});