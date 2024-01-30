/*
  [JS Index]
  
  ---
  
  Template Name: Bigex - Creative Portfolio Template
  Author:  ex-nihilo
  Version: 1.0
*/


/*
  1. preloader
  2. navigation
  3. swiper slider
*/


$(function () {
    "use strict";


    setTimeout(function () {
        // 1. preloader
        $("#preloader").fadeOut(1200);
        $(".preloader-bg").delay(1000).fadeOut(1200);
        swiper.init();
    }, 2000);

    // 2. navigation
    $(".navbar-collapse ul li a").on("click", function () {
        $(".navbar-toggle:visible").click();
    });

    // 3. swiper slider
    var swiper = new Swiper(".swiper-container-wrapper .swiper-container", {
        preloadImages: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        init: false,
        loop: false,
        speed: 1200,
        grabCursor: true,
        mousewheel: {
            enable: true
        },
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: {
            el: ".swiper-slide-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true
        }
    });
    swiper.on("slideChangeTransitionStart", function () {
        $(".slider-progress-bar").removeClass("slider-active");
    });
    swiper.on("slideChangeTransitionEnd", function () {
        $(".slider-progress-bar").addClass("slider-active");
    });
    var playButton = $(".swiper-slide-controls-play-pause-wrapper");
    function autoEnd() {
        playButton.removeClass("slider-on-off");
        swiper.autoplay.stop();
    }
    function autoStart() {
        playButton.addClass("slider-on-off");
        swiper.autoplay.start();
    }
    playButton.on("click", function () {
        if (playButton.hasClass("slider-on-off")) autoEnd();
        else autoStart();
        return false;
    });


});