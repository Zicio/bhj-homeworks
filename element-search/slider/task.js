'use strict'
const arrows = document.getElementsByClassName('slider__arrow');
const sliders = document.getElementsByClassName('slider__item');
const dots = document.getElementsByClassName('slider__dot');
let numberSlide = 0;
dots[numberSlide].classList.add('slider__dot_active');

for (let i = 0; i < arrows.length; i++) {
    arrows[i].onclick = () => {
        sliders[numberSlide].classList.remove('slider__item_active');
        dots[numberSlide].classList.remove('slider__dot_active');
        if (arrows[i].classList.contains('slider__arrow_next')) {
            if (numberSlide === sliders.length - 1) {
            numberSlide -= sliders.length;
        }
        numberSlide += 1;
        }
        else {
            if (numberSlide === 0) {
                numberSlide = sliders.length;
            }
        numberSlide -= 1;
        }
        sliders[numberSlide].classList.add('slider__item_active');
        dots[numberSlide].classList.add('slider__dot_active');
    }
}

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = () => {
        if (i !== numberSlide) {
            dots[numberSlide].classList.remove('slider__dot_active');
            sliders[numberSlide].classList.remove('slider__item_active');
            dots[i].classList.add('slider__dot_active');
            sliders[i].classList.add('slider__item_active');
            numberSlide = i;
        }
    }
}