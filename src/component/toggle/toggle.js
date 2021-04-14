import $ from 'jquery';

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

        if( textShow != undefined && textHide != undefined ){
            toggle.text( textHide );
        }
    }else{
        toggle.removeClass("toggle__title--active");
        toggle.closest("toggle").removeClass("toggle--active");
        toggle.next(".toggle__content").slideUp();

        if( textShow != undefined && textHide != undefined ){
            toggle.text( textShow );
        }
    }
});