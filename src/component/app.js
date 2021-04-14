import $ from 'jquery';
import '../component/tabs/tabs';
import '../component/input/input';
import '../component/modal/modal';
import '../component/slider/slider';

$(function() {
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
});