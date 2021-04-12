import $ from 'jquery'
$(function() {

  // Input mask
  if( $('.phone').length > 0 ) {
    $(".phone").inputmask({
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
  $('input.phone').on('keydown', function(event) {
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
  $('.toggle-item').on("click", function(e){
    e.preventDefault();
    let toggle = $(this);
    if( !toggle.hasClass("toggle-item--active")){
      toggle.addClass("toggle-item--active");
      toggle.find(".toggle-item__title").addClass("toggle-item__title--active");
      toggle.find(".toggle-item__content").slideDown();
		}else{
			toggle.removeClass("toggle-item--active");
      toggle.find(".toggle-item__title").removeClass("toggle-item__title--active");
      toggle.find(".toggle-item__content").slideUp();
    }
  });
  // Слайдер
	if( $('.slider').length > 0 ){
    // Review Block Col
    let $slickReview = $('#reviews');
		$slickReview.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows      : true,
			dots        : true,
      autoplay  : false,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            arrows: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            arrows: false,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            arrows: false,
            dots: true
          }
        }
      ]
    });
  }
});