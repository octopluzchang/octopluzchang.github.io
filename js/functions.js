//Fix navigation Bar
$(window).scroll(function() {
    var tall = $('#portfolio').position().top - 50;
    
    if ( $(window).scrollTop() > tall) {
        $('#navbar').addClass('fixed');
    } else {
        $('#navbar').removeClass('fixed');
    }

});


//Fix Branding Bar
$(window).scroll(function() {
    var tall = $('#portfolio').position().top - 100;
    
    if ( $(window).scrollTop() > tall) {
        $('#branding-bar').css('opacity', '1');
    } else {
        $('#branding-bar').css('opacity', '0');
    }

});

//Smooth Scrolling
$(function() {
    $("#main-nav a[href^='#']").on('click', function(e) {

        // prevent default anchor click behavior
        e.preventDefault();

        // store hash
        var hash = this.hash;

        // animate
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 500, function() {

            // when done, add hash to url
            // (default click behaviour)
            window.location.hash = hash;
        });

    });
});