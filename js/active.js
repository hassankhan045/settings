(function ($) {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 Countdown Active Code
    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<div>%D <span>Days</span></div> <div>%H <span>Hours</span></div> <div>%M <span>Minutes</span></div> <div>%S <span>Seconds</span></div>'));
        });
    });

    // :: 3.0 Nav Active Code
    if ($.fn.classyNav) {
        $('#cleverNav').classyNav();
    }
    if ($.fn.classyNav) {
        $('#showFilters').classyNav();
    }

    // :: 4.0 Sliders Active Code
    if ($.fn.owlCarousel) {
        var tutors = $('.tutors-slide');
        tutors.owlCarousel({
            items: 3,
            margin: 0,
            loop: true,
            nav: true,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            dots: false,
            autoplay: true,
            autoplayTimeout: 6000,
            smartSpeed: 1000,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    // :: 5.0 Gallery Active Code
    if ($.fn.magnificPopup) {
        $('.video-btn').magnificPopup({
            type: 'iframe'
        });
    }

    // :: 6.0 ScrollUp Active Code
    // if ($.fn.scrollUp) {
    //     browserWindow.scrollUp({
    //         scrollSpeed: 400,
    //         scrollText: '<i class="fa fa-angle-up"></i>'
    //     });
    // }


    // :: 6.0 ScrollUp Active Code
    if ($.fn.scrollDown) {
        browserWindow.scrollDown({
            scrollSpeed: 800

          });


    }


    // :: 7.0 CouterUp Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // :: 8.0 Sticky Active Code
    if ($.fn.sticky) {
        $(".clever-main-menu").sticky({
            topSpacing: 0
        });
    }

    // :: 9.0 wow Active Code
    if (browserWindow.width() > 767) {
        new WOW().init();
    }

    // :: 10.0 prevent default a click
    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });


    // Smooth Scroll

//     $("#btn").click(function() {
//       $('html,body').animate({
//         scrollTop:$(".curriculum-level").offset().top},
//         'slow');
//
// });


// Smooth Scroll

// $("#btn2").click(function() {
//   $('html,body').animate({
//     scrollTop:$(".cl2").offset().top},
//     'slow');
//
// });
//
// // Smooth Scroll
//
// $("#btn3").click(function() {
//   $('html,body').animate({
//     scrollTop:$(".cl3").offset().top},
//     'slow');
//
// });

// Smooth Scroll

$("#btID1").click(function() {
  $('html,body').animate({
    scrollTop:$(".search-area").offset().top},
    'slow');

});

$("#btID2").click(function() {
  $('html,body').animate({
    scrollTop:$(".search-area").offset().top},
    'slow');

});
// Smooth Scroll

$("#btID3").click(function() {
  $('html,body').animate({
    scrollTop:$(".search-area").offset().top},
    'slow');

});

})(jQuery);
