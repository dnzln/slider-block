let sliderInputs = document.querySelectorAll('.slider-switch-input');
let slides = document.querySelectorAll('.slides div');

for (let i = 0; i < sliderInputs.length; i++) {
    sliderInputs[i].addEventListener('input', slide);
}

function slide(e) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('show-slide');
    }    
    document.querySelector(`.${e.target.value}-slide`).classList.add('show-slide');
}

document.querySelector('#menu-input').addEventListener('input', menuHandler);

function menuHandler(e) {
    if (e.target.checked) {
        document.querySelector('.menu-icon').classList.add('opened');
    } else {
        document.querySelector('.menu-icon').classList.remove('opened');
    }

}