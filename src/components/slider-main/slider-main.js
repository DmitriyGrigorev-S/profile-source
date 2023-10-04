import $ from 'jquery';
import Swiper from "swiper/bundle";

let mainSlider = new Swiper("[data-main-slider]", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: 'progressbar'
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(document).ready(function(){
  let ww = $(window).width();
  let allSlides = $('.swiper-slide').length;
  let widthProgressbar = null;
 
  if (ww < 768) {
    widthProgressbar = 28
  } else {
    widthProgressbar = 38
  }

  let width = allSlides * widthProgressbar;

  let mainSliderTotalSliders = $('.slider-main__total-slide');
  let mainSliderCurrentSlide = $('.slider-main__now-slide');

  mainSliderTotalSliders.html('0' + mainSlider.slides.length);

  mainSlider.on('slideChange', function() {
    let currentSlide = ++mainSlider.realIndex;
    mainSliderCurrentSlide.html('0' + currentSlide);
  });


  $('.slider-main__pagination').css({'width': `${width}px`});
})

