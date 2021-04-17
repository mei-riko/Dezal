import $ from 'jquery';

let sliderInitialized = (sliderClass, slidesToShow, slidesToScroll, infinite, arrows, dots, responsive) => {
    let $sliderItem = $(sliderClass);

    if( $sliderItem.length === 0 ){ return null; }

    if ( $sliderItem.find('.slider__item').length > slidesToShow ){
        $sliderItem.removeClass('slider--disable').addClass('slider--active');

        $sliderItem.slick({
            slidesToShow  : slidesToShow,
            slidesToScroll: slidesToScroll,
            infinite      : infinite,
            arrows        : arrows,
            dots          : dots,
            autoplay      : false,
            responsive    : responsive,
        });
    } else{
        $sliderItem.removeClass('slider--active').addClass('slider--disable');
    }
}

$(function(){
    let reviewResponsive = [
        { breakpoint: 992, settings: {slidesToShow: 3, slidesToScroll: 3} },
        { breakpoint: 768, settings: {slidesToShow: 2, slidesToScroll: 2} } ,
        { breakpoint: 480, settings: {slidesToShow: 1, slidesToScroll: 1} }
    ];

    sliderInitialized('.slider.slider_review', 4, 4, false, true, false, reviewResponsive) 
});