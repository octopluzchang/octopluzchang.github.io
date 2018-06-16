$(document).ready(function() {
    setTimeout(function() {
        $('.textContent').first().addClass('show')
    }, 1000);
    $('.next').click(function(){
        $('.textContent').first().removeClass('show')
        $('.textContent').last().addClass('show')
    })
    $('.back').click(function(){
        $('.textContent').first().addClass('show')
        $('.textContent').last().removeClass('show')
    })
})