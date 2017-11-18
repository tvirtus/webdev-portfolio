$(document).ready(function () {
    adjustImageIndicatorPosition();

    console.log('Window height ', $(this).height());
    console.log('Window.top height ', $(window.top).height());

});

$(window).resize(function () {
    adjustImageIndicatorPosition();
    
});

function adjustImageIndicatorPosition() {
    //Adjust carousel indicator position
    var imageIndicatorPosition = $('.carousel-inner img').height() - 25;
    console.log('Position of indicators is: ' + imageIndicatorPosition);
    $('.carousel-indicators').css({'bottom': 0, 'top': imageIndicatorPosition});
}
