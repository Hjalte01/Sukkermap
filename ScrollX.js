var leftOffset = parseInt($("#ScrollX").css('left'));
$(window).scroll(function(){
    $('#ScrollX').css({
        'left': $(this).scrollLeft() + leftOffset
    });
});
