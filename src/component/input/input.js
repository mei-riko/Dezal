import $ from 'jquery';

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
});

$('input.input_phone').on('keydown', function(event) {
    if (event.keyCode === 13 && !$(this).inputmask("isComplete") ) {
        event.preventDefault();
        $(this).blur();
        return false;
    }
});