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
    2.1. close mobile menu
    2.2. collapse navigation
  3. animate elements
  4. hide on scroll
  5. to top arrow + NAV
  6. owlCarousel
  7. magnificPopup
  8. page scroll
  9. YouTube player
  10. contact form
*/


$(function () {
    "use strict";


    setTimeout(function () {
        // 1. preloader
        $("#preloader").fadeOut(1200);
        $(".preloader-bg").delay(1000).fadeOut(1200);
    }, 2000);

    // 2. navigation
    // 2.1. close mobile menu
    $(".navbar-collapse ul li a").on("click", function () {
        $(".navbar-toggle:visible").click();
    });

    $(window).on("scroll", function () {
        // 2.2. collapse navigation
        if ($(".navbar").offset().top > 50) {
            $(".navbar-bg-switch").addClass("main-navigation-bg");
        } else {
            $(".navbar-bg-switch").removeClass("main-navigation-bg");
        }

        // 3. animate elements
        if ($(this).scrollTop() > 500) {
            $(".border-top").addClass("top-position-primary");
            $(".border-bottom").addClass("bottom-position-primary");
            $(".main-navigation-bg").addClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").addClass("navbar-collapse-position-primary");
            $(".logo").addClass("logo-home-call");
            $(".main-navigation").addClass("main-navigation-home-call");
        } else {
            $(".border-top").removeClass("top-position-primary");
            $(".border-bottom").removeClass("bottom-position-primary");
            $(".main-navigation-bg").removeClass("main-navigation-bg-position-primary");
            $(".navbar-collapse").removeClass("navbar-collapse-position-primary");
            $(".logo").removeClass("logo-home-call");
            $(".main-navigation").removeClass("main-navigation-home-call");
        }

        // 4. hide on scroll
        $(".scroll-line").css("opacity", 1 - $(window).scrollTop() / 500);

        // 5. to top arrow + NAV
        if ($(this).scrollTop() > 500) {
            $(".to-top-arrow").addClass("show");
            $(".navigation-icon-wrapper-bg").addClass("show");
            $(".navigation-icon-wrapper").addClass("direction");
        } else {
            $(".to-top-arrow").removeClass("show");
            $(".navigation-icon-wrapper-bg").removeClass("show");
            $(".navigation-icon-wrapper").removeClass("direction");
        }
    });

    // 6. owlCarousel
    $("#owl-carousel-all").owlCarousel({
        loop: true,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-all',
        responsive: {
            0: {
                items: 1,
                margin: 30
            },
            768: {
                items: 2,
                margin: 50
            },
            980: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 3,
                margin: 50
            }
        }
    });

    // 7. magnificPopup
    $(".popup-photo-gallery").each(function () {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            }, callbacks: {
                beforeOpen: function () {
                    // just a hack that adds mfp-anim class to markup 
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            removalDelay: 100,
            mainClass: "mfp-zoom-in",
            fixedContentPos: false,
            closeOnContentClick: false,
            midClick: false
        });
    });

    // 8. page scroll
    $(".page-scroll").on("click", function (e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 0
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });

    // 9. YouTube player
    $("#bgndVideo").YTPlayer();

    // 10. contact form
    $("form#form").on("submit", function () {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function () {
            if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                "inputError"), s = !0;
            else if ($(this).hasClass("email")) {
                var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                    "inputError"), s = !0);
            }
        }), !s) {
            $("form#form input.submit").fadeOut("normal", function () {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function () {
                $("form#form").slideUp("fast", function () {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });


});