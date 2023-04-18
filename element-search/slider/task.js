const sliders = document.querySelectorAll('.slider__item');

const next = document.querySelector('div.slider__arrow.slider__arrow_next');
const prev = document.querySelector('div.slider__arrow.slider__arrow_prev');

indexSlide = 0;

next.onclick = function () {
    sliders[indexSlide].className = 'slider__item';
    
    if (indexSlide < sliders.length-1) {
        indexSlide++;
    } else {
        indexSlide = 0;
    }
    sliders[indexSlide].className = 'slider__item_active';
};

prev.onclick = function () {
    sliders[indexSlide].className = 'slider__item';
    console.log(sliders[indexSlide]);
    if (indexSlide > 0) {
        indexSlide--;
    } else {
        indexSlide = sliders.length - 1;
    }
    sliders[indexSlide].className = 'slider__item_active'; 
};