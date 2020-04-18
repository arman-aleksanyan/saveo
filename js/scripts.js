(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {
    var navListItem = $('.navbar-nav>li');
    var navLink = $('.navbar-nav>li>a');
    var urlLocation = window.location.href;
    var page = window.location.pathname;
    var stickyNavTop = $('.navbar').offset().top;

    // Add active class on page change and section change
    $.each(navLink, function (key, value) {
        var currentLink = $(this);
        var href = currentLink.attr('href');
        if (urlLocation.indexOf(href) > -1) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });

    // Close nav on link click
    navLink.on('click', function () {
        navListItem.removeClass('active');
        $(this).parent().addClass('active');
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').collapse('hide');
        }
    });
    $('.navbar-brand').on('click', function () {
        if ($('.navbar-collapse').hasClass('show')) {
            $('.navbar-collapse').collapse('hide');
            $("html, body").animate({ scrollTop: 0 }, 850);
        }
        if (page == '/' || page == '') {
            $("html, body").animate({ scrollTop: 0 }, 850);
        } else {
            $(location).attr('href', '/');
            $("html, body").animate({ scrollTop: 0 }, 850);
        }
    });

    //Nav click slick smooth scroll custom
    $('a.nav-link').on('click', function () {
        var target = $(this.hash);
        $('html,body').animate({
            scrollTop: target.offset().top
        }, 850);
    });

    // Assign active class to nav links while scrolling
    $('body').scrollspy({ target: '#siteNav', offset: 60 });

    // Hamburger click
    $('.navbar-toggler').on("click", function () {
        $('.toggle').toggleClass('clicked');
    });

    // Animate on page change
    $('body').addClass('animated');

    // Illumination effect
    var box = $('.box');
    var originalBg = box.css("background-color");
    var lightColor = "rgba(255,255,255,0.85)";
    var gradientSize = 250;
    box.each(function () {
        $(this).on('mousemove', function (e) {
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var xy = x + " " + y;
            var bgWebKit = "-webkit-gradient(radial, " + xy + ", 0, " + xy + ", " + gradientSize + ", from(" + lightColor + "), to(rgba(255,255,255,0.0))), " + originalBg;
            var bgMoz = "-moz-radial-gradient(" + x + "px " + y + "px 45deg, circle, " + lightColor + " 0%, " + originalBg + " " + gradientSize + "px)";
            $(this).css({ background: bgWebKit }).css({ background: bgMoz });
        }).mouseleave(function () {
            $(this).css({ background: originalBg });
        });
    });

    // Sticky nav
    var stickyNav = function stickyNav() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('.navbar').addClass('sticky');
            $('body').addClass('nav-fixed');
        } else {
            $('.navbar').removeClass('sticky');
            $('body').removeClass('nav-fixed');
        }
    };
    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
});

},{}]},{},[1]);
