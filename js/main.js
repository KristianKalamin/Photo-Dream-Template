$(document).ready(function () {

    $('.menu-trigger').click(function () {
        mobileMenuShow();
    });

    $('.circle').click(function () {
        mobileMenuHide();
    });

    var $height = $(window).height();
    bgHeight($height);
    var $selectedLinks = $("body > nav > ul > li > *");

    $(window).resize(function () {
        $height = $(window).height();
        bgHeight($height);

    });

    $(document).on("scroll", function () {
     
        if ($(this).scrollTop() >= $('#home').position().top - 15) {
            unselect();
            $($selectedLinks[0]).addClass("active");
        }

        if ($(this).scrollTop() >= $('#skills').position().top - 15) {
            unselect();
            $($selectedLinks[1]).addClass("active");
        }

        if ($(this).scrollTop() >= $('#gallery').position().top - 15) {
            unselect();
            $($selectedLinks[2]).addClass("active");
        }

        if ($(this).scrollTop() >= $('#about').position().top - 15) {
            unselect();
            $($selectedLinks[3]).addClass("active");
        }

        if ($(this).scrollTop() >= $('#contact').position().top - 15) {
            unselect();
            $($selectedLinks[4]).addClass("active");
        }
    });
});


function unselect() {
    $selectedLinks = $("body > nav > ul > li > *");
    for (var i = 0; i < $selectedLinks.length; i++) {
        $($selectedLinks[i]).removeClass("active");
    }
}
function mobileMenuShow() {
    $("body > nav").css("padding-left", "0");
    $("body > nav").css("padding-right", "0");
    $("body > nav > .menu-trigger").css("display", "none");
    $("body > nav > #links").fadeIn(function () {
        $("body > nav > #links").css("display", "block");
    });
}

function mobileMenuHide() {
    $("body > nav > #links").fadeOut(function () {
        $("body > nav > #links").css("display", "none");
    });
    $("body > nav").css("padding-left", "10%");
    $("body > nav").css("padding-right", "10%");
    $("body > nav > .menu-trigger").css("display", "block");
}

function bgHeight($height) {
    $("body > header").css("height", $height - 55);
    $("#home").css("margin-top", $height - 20);
}