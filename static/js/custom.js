 $(window).scroll(function(){      
        /* -------------------
        Header Animation
        ---------------------*/
        if ($(this).scrollTop() > 50){  
            $('.before-color').addClass("after-color");
        }
        else{
            $('.before-color').removeClass("after-color");
        }
    });

//full width revolution
var revapi;


jQuery(document).ready(function() {

    revapi = jQuery('.tp-banner').revolution(
            {
                delay: 6000,
                startwidth: 1170,
                startheight: 450,
                hideThumbs: 10,
                fullScreen: "on",
                forceFullWidth: "on",
                navigationStyle: "preview4"
            });

});	//ready

  $(window).load(function() {
    $('.testislider').flexslider({
        direction: "horizantol",
        animation: "slide",
        smoothHeight: true,
        controlNav: false
    });
  });

/**smooth scroll on anchor tag****/
$(function() {
    $('.scroll-to a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});


/* -------------------
 Parallax Sections
 ---------------------*/
if (!Modernizr.touch) {
    $('.parallax-1').parallax("50%", 0.5);
    $('.parallax-2').parallax("50%", 0.5);
    $('.parallax-3').parallax("50%", 0.5);
}
/*----------------
 Auto Close Navbar
 -----------------*/
function close_toggle() {
    if ($(window).width() <= 992) {
        $('.navbar-collapse a').on('click', function() {
            $('.navbar-collapse').collapse('hide');
        });
    }
    else {
        $('.navbar .navbar-default a').off('click');
    }
}
close_toggle();
$(window).resize(close_toggle);
$(".navbar-collapse").css({maxHeight: $(window).height() - $(".navbar-header").height() + "px"});
$(function() {
    $('.navbar-toggle').bind('click', function(event) {
        var $anchor = $('.navbar-header');
        $('html, body').stop().animate({
            scrollTop: $($anchor).offset().top - 0
        }, 800, 'swing');
        event.preventDefault();
    });
});



/**prettyPhoto**/
$(window).load(function(){
 "use strict";
    $("a[data-gal^='prettyPhoto']").prettyPhoto();
  });

// Carousel
$(window).load(function(){
  $('.title').css({ 'top': 90+'px', 'opacity': 1 });
  $('.text').css({ 'opacity': 1 });
  $('.more').css({ 'opacity': 1, 'bottom': 90+'px' });
});
$('#header-carousel').on('slid.bs.carousel', function () {
  $('.title').css({ 'top': 90+'px', 'opacity': 1 });
  $('.text').css({ 'opacity': 1 });
  $('.more').css({ 'opacity': 1, 'bottom': 90+'px' });
});
$('#header-carousel').on('slide.bs.carousel', function () {
  $('.title').css({ 'top': 0+'px', 'opacity': 0 });
  $('.text').css({ 'opacity': 0 });
  $('.more').css({ 'opacity': 0, 'bottom': 0+'px' });
});
function carouselFix() {
  $(".carousel.slide").carousel("pause");
  $('.carousel.slide .item').removeClass('active');
  $('.carousel.slide').find('.item:first').addClass('active');
}
$(document).ready(function() {      
  carouselFix();
});