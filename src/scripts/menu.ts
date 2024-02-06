
const h = document.querySelector('.hamburger');
const n = document.querySelector('.nav-links');
if (h && n)
    h.addEventListener('click', () => {
        n.classList.toggle('expanded');
    });