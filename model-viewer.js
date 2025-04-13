const container = document.getElementById("coffee-container");
  const model = document.getElementById("coffee-cup");

  let idleTimer;
  let floatingTween = null;

  // Fade in the model
  window.addEventListener("DOMContentLoaded", () => {
    gsap.to(model, {
      opacity: 1,
      duration: 1.2,
      delay: 0.2,
      ease: "power2.out"
    });
  });

  function startIdleTimer() {
    idleTimer = setTimeout(() => {
      floatingTween = gsap.to(container, {
        y: -10,
        scale: 1.02,
        duration: 2.4,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    }, 5000); // 5s idle
  }

  function resetIdleTimer() {
    clearTimeout(idleTimer);

    if (floatingTween) {
      floatingTween.kill();
      floatingTween = null;

      gsap.to(container, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "sine.out"
      });
    }

    startIdleTimer();
  }

  ["mousemove", "keydown", "scroll", "touchstart", "click"].forEach(event =>
    window.addEventListener(event, resetIdleTimer)
  );

  startIdleTimer();