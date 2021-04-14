import $ from 'jquery';

// Desktop Navbar   
function navbarHover( itemNav ){
    let item = itemNav.find(".navbar__link");
    let nav = item.data("nav");

    if( $(".navbar__link.navbar__link--active").length > 0 && !item.hasClass("navbar__link--active") ){
        let navActive = $(".navbar__link.navbar__link--active");
        navActive.removeClass("navbar__link--active");
        $(".navbar .navbar__children" + navActive.data("nav")).removeClass("navbar__children--active");
    }

    item.addClass("navbar__link--active");
    $(".navbar .navbar__children" + nav).addClass("navbar__children--active");
}
function navbarUnHover(){
    let item = $(".navbar").find(".navbar__link.navbar__link--active");
    let nav = item.data("nav");

    item.removeClass("navbar__link--active");
    $(".navbar .navbar__children" + nav).removeClass("navbar__children--active");
}

$(function(){
    if ( $(window).width() > 1400 || !window.matchMedia('screen and (max-width: 1400px)').matches ){
        $(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop");
    }else{
        $(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile");
    }

    // Desktop Hover Nav
    var timeout = null;
    // Задержка скрытия меню 0.4сек
    $('.navbar.navbar--desktop .navbar__item')
        .mouseenter(function(event){
            clearTimeout(timeout);
            let nav = $(this);
            timeout = setTimeout( function(){
                navbarHover( nav );
            }, 200);
        })
        .mouseleave(function(event){
            clearTimeout(timeout);
            timeout = setTimeout( navbarUnHover , 400);
        });
});

// Resize
$(window).on("resize", function(){
    if ( $(window).width() > 991 || !window.matchMedia('screen and (max-width: 992px)').matches ){
        // Hide Navigation on Desktop
        $(".navbar").removeClass("navbar--active");
        $(".navbar .navbar__children.navbar__children--active").removeClass("navbar__children--active");
        // Overlay
        if( $(".overlay").hasClass("overlay--navbar") ){ 
            $(".overlay").addClass("overlay--disable"); 
            $(".overlay").removeClass("overlay--navbar");
        }
        if( $("body").hasClass("open-navbar") ){ 
            $("body").removeClass("hidden"); 
            $("body").removeClass("open-navbar");
        }
        // Remove Class
        $(".navbar").removeClass("navbar--mobile").addClass("navbar--desktop");
    }else{
        // Remove Class
        $(".navbar").removeClass("navbar--desktop").addClass("navbar--mobile");
    }
});

// $(document).ready(() =>{
//     // Mobile Navbar
//     $(".header .header__nav#open-nav").on("click", function(){
//         $(".navbar.navbar_header").addClass("navbar_header--active");
//         $(".overlay").addClass("overlay--navbar");
//         $(".overlay").removeClass("overlay--disable");
//         $("body").addClass("hidden open-navbar");
//     });
//     $(".navbar.navbar_header #close-nav").on("click", function(){
//         $(".navbar.navbar_header").removeClass("navbar_header--active");
//         $(".navbar .navbar-inside.navbar-inside--active").removeClass("navbar-inside--active");

//         $(".overlay").removeClass("overlay--navbar");
//         $(".overlay").addClass("overlay--disable");
        
//         $("body").removeClass("hidden");
//         $("body").removeClass("open-navbar");
//     });
//     $(document).mouseup(function (e){ // событие клика по веб-документу
//         let navActive = $(".navbar.navbar_header.navbar_header--active"); // элемент
//         if (!navActive.is(e.target) // клик был не по блоку
//             && navActive.has(e.target).length === 0 // и не по его дочерним элементам
//             && !$(".navbar.navbar_header #close-nav").is(e.target) ) { 
//                 if( $(".overlay").hasClass("overlay--navbar") ){ 
//                     $(".overlay").addClass("overlay--disable"); 
//                     $(".overlay").removeClass("overlay--navbar");
//                 }
//                 if( $("body").hasClass("open-navbar") ){ 
//                     $("body").removeClass("hidden"); 
//                     $("body").removeClass("open-navbar");
//                 }
//                 $(".navbar .navbar-inside.navbar-inside--active").removeClass("navbar-inside--active");
//                 $(".navbar.navbar_header").removeClass("navbar_header--active");
//             }
//     });
    
//     function navbarMobileClick( itemNav ){
//         itemNav.on("click", function(e){
//             if( $(".navbar").hasClass("navbar--mobile") ){
//                 e.preventDefault();
//                 let id = $(this).data("nav");
//                 let navbar = $(".navbar-inside#" + id);
//                 if( !navbar.hasClass("navbar-inside--active")){
//                     navbar.addClass("navbar-inside--active");
//                 }
//             }
//         });
//     }

//     // Mobile Click Nav
//     navbarMobileClick( $(".navbar.navbar_header .navbar_header__parent .navbar__item") );
    
//     $(".navbar.navbar_header .navbar_header__back").on("click", function(e){
//         // e.preventDefault();
//         let id = $(this).data("close");
//         let navbar = $(".navbar-inside#" + id);
//         // console.log( id + '   ' + navbar)
//         navbar.removeClass("navbar-inside--active");
//     });
// });