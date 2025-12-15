const overlay = document.getElementById('overlay');

let revealed = false;
let animating = false;

window.addEventListener('wheel', (e) => {
  if (animating) return;

  // Scroll UP → remove design layer
  if (e.deltaY < 0 && !revealed) {
    animating = true;
    revealed = false;
    overlay.style.transform = 'translateY(-100%)';
  }

  // Scroll DOWN → bring design layer back
  if (e.deltaY > 0 && !revealed) {
    animating = true;
    revealed = true;
    overlay.style.transform = 'translateY(0)';
  }

  setTimeout(() => (animating = false), 900);
});


// AUTO REVEAL AFTER PAGE LOAD
window.addEventListener('load', () => {
  setTimeout(() => {
    revealOverlay();
  }, 600); // delay so circles are seen first
});
//Scroll-triggered Text animations

const observerSettings = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add ('visible');
        } else {
            entry.target.classList.remove ('visible');
        }
    });
}, observerSettings);

document.querySelectorAll('.animate-element').forEach((element) => {
    observer.observe(element);
});
