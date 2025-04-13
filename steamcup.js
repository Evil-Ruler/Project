// Animate text elements on load
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("mobileMenuButton");
    const closeBtn = document.getElementById("closeMobileMenu");
    const mobileMenu = document.getElementById("mobileMenu");

    // Open Menu
    menuBtn.addEventListener("click", function () {
      mobileMenu.classList.remove("opacity-0", "pointer-events-none");
      mobileMenu.classList.add("opacity-100", "pointer-events-auto");
    });

    // Close Menu
    closeBtn.addEventListener("click", function () {
      mobileMenu.classList.add("opacity-0", "pointer-events-none");
      mobileMenu.classList.remove("opacity-100", "pointer-events-auto");
    });
  });


const modelViewer = document.getElementById('coffee-cup');
const steamContainer = document.getElementById('steam-container');
let hasUserInteracted = false;
let rotationTimeout;

// Only hide steam when *user* rotates
modelViewer.addEventListener('mousedown', () => {
    hasUserInteracted = true;
    steamContainer.classList.add('hidden');
});

// Optional: Also detect touch for mobile users
modelViewer.addEventListener('touchstart', () => {
    hasUserInteracted = true;
    steamContainer.classList.add('hidden');
});

modelViewer.addEventListener('camera-change', () => {
    if (hasUserInteracted) {
        steamContainer.classList.add('hidden');
        clearTimeout(rotationTimeout);
        rotationTimeout = setTimeout(() => {
            steamContainer.classList.remove('hidden');
        }, 2000);
    }
});

modelViewer.addEventListener('interaction-end', () => {
    if (hasUserInteracted) {
        steamContainer.classList.remove('hidden');
    }
});