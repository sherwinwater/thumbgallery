//define var
const current = document.getElementById('current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// set the first img opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', clickimage));

function clickimage(e) {
    // reset img
    imgs.forEach(img => img.style.opacity = 1);
    // effects to work
    current.src = e.target.src;
    e.target.style.opacity = opacity;

    // add fade in
    current.classList.add('fade-in');

    setTimeout(() => current.classList.remove('fade-in'), 600);

}