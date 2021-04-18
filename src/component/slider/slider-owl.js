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

const responsiveReview = {
    500 : {
        items: 2,
        stagePadding: 60,
    },
    769 : {
        items: 3,
        loop: false,
        stagePadding: 0,
        margin: 20,
    },
    1040 : {
        items: 4,
        loop: false,
        stagePadding: 0,
        margin: 20,
    }
}
const responsiveSale = {
    500 : {
        items: 1,
        arrows: false,
        loop: true,
        stagePadding: 100,
    },
    600 : {
        items: 1,
        arrows: false,
        loop: true,
        stagePadding: 140,
    },
    769 : {
        items: 2,
        arrows: true,
        loop: false,
        dots: true,
        stagePadding: 0,
        margin: 20,
    }
}
const responsiveAdv = {
    500 : {
        stagePadding: 100,
    },
    600 : {
        stagePadding: 140,
    }
}

$(function() {
    // Review Slider
    sliderInitialized(1, '.slider.slider_review', true, false, true, 10, 60, responsiveReview);
    // Sale Slider
    if ( $(window).width() > 992 || !window.matchMedia('screen and (max-width: 992px)').matches ){
        $('.slider.slider_sale').removeClass("owl-carousel owl-theme");
    }else{
        $('.slider.slider_sale').addClass("owl-carousel owl-theme");
        sliderInitialized(1, '.slider.slider_sale', true, false, true, 10, 40, responsiveSale);
    }
    // Advantage Slider
    if ( $(window).width() > 768 || !window.matchMedia('screen and (max-width: 768px)').matches ){
        $('.slider.slider_advantage').removeClass("owl-carousel owl-theme");
    }else{
        $('.slider.slider_advantage').addClass("owl-carousel owl-theme");
        sliderInitialized(1, '.slider.slider_advantage', false, false, true, 10, 60, responsiveAdv);
    }
});

$(window).on('resize', function(){
    // Sale Slider
    if ( $(window).width() > 992 || !window.matchMedia('screen and (max-width: 992px)').matches ){
        $('.slider.slider_sale').removeClass("owl-carousel owl-theme");
        $('.slider.slider_sale').trigger('destroy.owl.carousel');
    }else{
        $('.slider.slider_sale').addClass("owl-carousel owl-theme");
        sliderInitialized(1, '.slider.slider_sale', true, false, true, 10, 40, responsiveSale);
    }
    // Advantage Slider
    if ( $(window).width() > 768 || !window.matchMedia('screen and (max-width: 768px)').matches ){
        $('.slider.slider_advantage').removeClass("owl-carousel owl-theme");
        $('.slider.slider_advantage').trigger('destroy.owl.carousel');
    }else{
        $('.slider.slider_advantage').addClass("owl-carousel owl-theme");
        sliderInitialized(1, '.slider.slider_advantage', false, false, true, 10, 60, responsiveAdv);
    }
});