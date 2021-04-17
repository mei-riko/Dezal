import $ from 'jquery';

export let sliderInitialized = (countShow, sliderClass, arrows, dots, loop, margin, stagePadding, responsive) => {
    let $sliderItem = $(sliderClass);

    if( $sliderItem.length === 0 ){ return null; }

    if ( $sliderItem.find('.slider__item').length > countShow ){
        $sliderItem.closest('.slider-container').addClass('slider-container--active');
        $sliderItem.closest('.slider-container').removeClass('slider-container--disable');

        $sliderItem.owlCarousel({
            items: countShow,
            loop: loop,
            margin: margin,
            nav: arrows,
            dots: dots,
            stagePadding: stagePadding,
            responsive: responsive,
        })
    } else{
        $sliderItem.closest('.slider-container').removeClass('slider-container--active');
        $sliderItem.closest('.slider-container').addClass('slider-container--disable');
    }
}


$(function() {
    const responsiveReview = {
        500 : {
            items: 2,
            arrows: true,
            loop: true,
            stagePadding: 60,
        }
    }
    const responsiveColumn = {
        460 : {
            items: 1,
            arrows: false,
            loop: true,
            stagePadding: 100,
        }
    }
    sliderInitialized(1, '.slider.slider_review', false, false, true, 10, 60, responsiveReview);

    if ( $(window).width() > 576 || !window.matchMedia('screen and (max-width: 576px)').matches ){
        $('.slider.slider_sale').removeClass("owl-carousel owl-theme");
        $('.slider.slider_advantage').removeClass("owl-carousel owl-theme");
    }else{

        $('.slider.slider_advantage').addClass("owl-carousel owl-theme");
        sliderInitialized(1, '.slider.slider_advantage', false, false, true, 10, 60, responsiveColumn);

        $('.slider.slider_sale').addClass("owl-carousel owl-theme");
        sliderInitialized(1, '.slider.slider_sale', false, false, true, 10, 60, responsiveColumn);
    }
});