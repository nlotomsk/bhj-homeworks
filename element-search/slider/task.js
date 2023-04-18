const sliders = Array.prototype.slice.call(document.querySelectorAll('.slider__item'));
const next = document.querySelector('div.slider__arrow.slider__arrow_next');
const prev = document.querySelector('div.slider__arrow.slider__arrow_prev');

next.onclick = function () {
    let indexSlideNext = sliders.findIndex(el => el.className === 'slider__item slider__item_active')
    sliders[indexSlideNext].className =('slider__item');
    sliders[++indexSlideNext % sliders.length].className = ('slider__item slider__item_active')
    
};

prev.onclick = function () {
    let indexSlidePrev = sliders.findIndex(el => el.className === 'slider__item slider__item_active')
    sliders[indexSlidePrev].className =('slider__item');

    if (indexSlidePrev > 0) {
        indexSlidePrev--;
    } else {
        indexSlidePrev = sliders.length - 1;
    }
    sliders[indexSlidePrev].className = ('slider__item slider__item_active')
};