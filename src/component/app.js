import $ from 'jquery';
import '../component/tabs/tabs';

$(function() {

  // Input mask
  if( $('.input_phone').length > 0 ) {
    $(".input_phone").inputmask({
      mask: "+7 999 999 99 99",
      placeholder: " ",
      showMaskOnHover: true,

      onincomplete: function(){ 
        $(this).closest("form").addClass('error-phone'); 
        $(this).addClass('error'); 
        $(this).siblings(".error_phone").addClass('error').html('Укажите корректный номер'); 
      }, 
      oncomplete: function(){ 
        $(this).closest("form").removeClass('error-phone'); 
        $(this).removeClass('error'); 
        $(this).siblings(".error_phone").removeClass('error').html(''); 
      },
    })
  }
  $('input.input_phone').on('keydown', function(event) {
    if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
      event.preventDefault();
      $(this).blur();
      return false;
    }
  });

  // Modal
  if( $('[data-fancybox]').length > 0 ){
    $('[data-fancybox]').fancybox({
      autoFocus: false
    });
  }

  // Нестандартное поведение ссылок
  $('a[data-trigger="click"]').on("click", function(e){
    e.preventDefault();
  })
  $(".scroll").on("click", function() {
    $("html, body").animate({
       scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
       duration: 500,
       easing: "swing"
    });
    return false;
  });

  // Раскрытие блока
  $('.toggle .toggle__title').on("click", function(e){
    e.preventDefault();
    let toggle = $(this);
    let textShow = $(this).data("show");
    let textHide = $(this).data("hide");

    if( !toggle.hasClass("toggle__title--active")){
      toggle.addClass("toggle__title--active");
      toggle.closest("toggle").addClass("toggle--active");
      toggle.next(".toggle__content").slideDown();

      toggle.text( textHide );

		}else{
      toggle.removeClass("toggle__title--active");
      toggle.closest("toggle").removeClass("toggle--active");
      toggle.next(".toggle__content").slideUp();

      toggle.text( textShow );
    }
  });
  // Слайдер
	if( $('.slider').length > 0 ){
    // Review Block Col
    let $slickReview = $('.slider.slider_review');
		$slickReview.slick({
			slidesToShow  : 4,
			slidesToScroll: 4,
      infinite      : false,
      arrows        : true,
			dots          : false,
      autoplay      : false,
      responsive    : [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
          }
        }
      ]
    });
  }
});