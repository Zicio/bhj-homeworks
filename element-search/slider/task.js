'use strict'
const arrows = document.getElementsByClassName('slider__arrow');
const sliders = document.getElementsByClassName('slider__item');
let numberSlide = 0;

for (let i = 0; i < arrows.length; i++) {
    arrows[i].onclick = () => {
        sliders[numberSlide].classList.remove('slider__item_active');
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
    }
}

//arrows[1].closest('div.slider').querySelector('div.slider__item_active').classList.remove('slider__item_active');
//arrows[1].closest('div.slider').querySelectorAll('div.slider__item').classList.toggle('slider__item_active');