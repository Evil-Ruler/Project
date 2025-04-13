document.addEventListener('DOMContentLoaded', function () {
    // Menu navigation
    const navItems = document.querySelectorAll('.menu-nav-item');
    const menuSections = document.querySelectorAll('.menu-section');

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            // Remove active class from all items
            navItems.forEach(nav => nav.classList.remove('active'));

            // Add active class to clicked item
            this.classList.add('active');

            // Show corresponding section
            const target = this.getAttribute('data-target');

            menuSections.forEach(section => {
                section.classList.remove('active');
                if (section.id === target) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Animation triggers
    const categories = document.querySelectorAll('.menu-category');
    const seasonalSpecial = document.querySelector('.seasonal-special');
    const coffeeBeans = document.querySelector('.coffee-beans');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    categories.forEach(category => {
        observer.observe(category);
    });

    observer.observe(seasonalSpecial);
    observer.observe(coffeeBeans);

    // Order button click animation
    const orderButtons = document.querySelectorAll('.menu-item-order');

    orderButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.textContent = 'Added!';
            this.style.backgroundColor = '#10B981';

            setTimeout(() => {
                this.textContent = 'Order';
                this.style.backgroundColor = '';
            }, 1500);
        });
    });
});