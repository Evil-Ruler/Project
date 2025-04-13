const navbar = document.getElementById("morphingNavbar");
const navLinks = document.querySelectorAll("#morphingNavbar .nav-link");
const sections = document.querySelectorAll("section");

let lastScrollTop = 0;
let isShrunk = false;
let idleTimer;
let breatheTween = null;

// Animate Navbar on Scroll
window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollTop && currentScroll > 60 && !isShrunk) {
        gsap.to(navbar, {
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            scale: 0.95,
            opacity: 0.85,
            boxShadow: "0 6px 12px rgba(0,0,0,0.15)",
            duration: 0.4,
            ease: "power2.out"
        });
        isShrunk = true;
    } else if (currentScroll < lastScrollTop && isShrunk) {
        gsap.to(navbar, {
            paddingTop: "1rem",  // Reduced from 1.5rem to minimize size change
            paddingBottom: "1rem",
            scale: 1,
            opacity: 1,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            duration: 0.4,
            ease: "power2.out"
        });

        gsap.fromTo(
            navLinks,
            { y: 15, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 0.3,
                ease: "power2.out"
            }
        );
        isShrunk = false;
    }

    lastScrollTop = Math.max(currentScroll, 0);
    resetIdleTimer();
});

// Gradient Color Sync
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const section = entry.target.getAttribute("id");

                let fromColor = "#FF8C42";
                let toColor = "#FFA142";

                switch (section) {
                    case "menu":
                        fromColor = "#6C5CE7"; toColor = "#A29BFE"; break;
                    case "about":
                        fromColor = "#00b894"; toColor = "#55efc4"; break;
                    case "contact":
                        fromColor = "#d63031"; toColor = "#ff7675"; break;
                }

                gsap.to(navbar, {
                    backgroundImage: `linear-gradient(to right, ${fromColor}, ${toColor})`,
                    duration: 0.6,
                    ease: "power2.out"
                });
            }
        });
    },
    { threshold: 0.6 }
);

sections.forEach((section) => observer.observe(section));

// Breathing Animation (No scale increase)
function startIdleTimer() {
    idleTimer = setTimeout(() => {
        breatheTween = gsap.to(navbar, {
            opacity: 0.92,
            boxShadow: "0 0 20px rgba(255, 140, 66, 0.2)", // Soft glow
            repeat: -1,
            yoyo: true,
            duration: 1.5,
            ease: "sine.inOut"
        });
    }, 5000);
}

function resetIdleTimer() {
    clearTimeout(idleTimer);
    if (breatheTween) {
        breatheTween.kill();
        breatheTween = null;

        gsap.to(navbar, {
            opacity: 1,
            boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
            duration: 0.3
        });
    }
    startIdleTimer();
}

// Reset on user activity
["mousemove", "keydown", "scroll", "touchstart"].forEach((event) =>
    window.addEventListener(event, resetIdleTimer)
);

startIdleTimer();



const mobileMenu = document.getElementById("mobileMenu");
  const closeBtn = document.getElementById("closeMobileMenu");
  const mobileLinks = mobileMenu.querySelectorAll("a");

  // Function to close the mobile menu
  function closeMenu() {
    mobileMenu.classList.remove("opacity-100");
    mobileMenu.classList.add("opacity-0", "pointer-events-none");
  }

  // Close button event
  closeBtn.addEventListener("click", closeMenu);

  // Close menu on any link click
  mobileLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
  });






  // Advanced smooth scroll with navbar offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      const navbar = document.querySelector('nav'); // Adjust if your navbar uses a different tag/class
      const offset = navbar.offsetHeight;

      if (target) {
        const targetPosition = target.offsetTop - offset;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
