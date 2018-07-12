function chooseCart(e){
    console.log(e);
    $(".e.front").css('transform','rotateY(0deg)');
    $(".e.back").css('transform','rotateY(180deg)');
    $(".e.front").css('backface-visibility','hidden');
    $(".e.back").css('backface-visibility','hidden');
    $(".e.front").css('transition','0.4s');
    $(".e.back").css('transition','0.4s');
}