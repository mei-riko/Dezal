import $ from 'jquery';

$(function() {
    // Modal
    if( $('[data-fancybox]').length > 0 ){
        $('[data-fancybox]').fancybox({
            autoFocus: false
        });
    }
});