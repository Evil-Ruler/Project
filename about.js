// Intersection Observer for animation triggers
document.addEventListener('DOMContentLoaded', function () {
    // Timeline line animation
    const timelineLine = document.querySelector('.timeline-line');
    setTimeout(() => {
        timelineLine.style.height = '100%';
        timelineLine.style.transition = 'height 2s ease-out';
    }, 500);

    // Timeline milestones
    const milestones = document.querySelectorAll('.timeline-milestone');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    milestones.forEach(milestone => {
        observer.observe(milestone);
    });

    // Process stages
    const stages = document.querySelectorAll('.process-stage');
    const stageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, parseInt(entry.target.dataset.delay) || 0);
            }
        });
    }, { threshold: 0.2 });

    stages.forEach(stage => {
        stageObserver.observe(stage);
    });

    // Testimonials
    const testimonials = document.querySelectorAll('.testimonial-card');
    const testimonialObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    entry.target.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                }, parseInt(entry.target.dataset.delay) || 0);
            }
        });
    }, { threshold: 0.2 });

    testimonials.forEach(testimonial => {
        testimonialObserver.observe(testimonial);
    });

    // CTA circles
    const ctaSection = document.querySelector('.coffee-cta');
    const ctaObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.querySelector('.cta-bg-circles').classList.add('cta-circles-visible');
                }, 300);
            }
        });
    }, { threshold: 0.3 });

    ctaObserver.observe(ctaSection);
});