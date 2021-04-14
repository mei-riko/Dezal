import $ from 'jquery';

$(".tabs .tabs__nav-item").on("click", function() {
    let tabContentId = $(this).data("tab");
    $(".tabs .tabs__nav-item").removeClass("tabs__nav-item--active").eq($(this).index()).addClass("tabs__nav-item--active");

    $(".tabs .tabs__content").removeClass("tabs__content--show");
    $(".tabs .tabs__content").removeClass("tabs__content--active");
    $(".tabs .tabs__content" + tabContentId).addClass("tabs__content--show").addClass("tabs__content--active");
});