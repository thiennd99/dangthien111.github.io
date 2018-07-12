function chooseCart(e){
    console.log(e)
    console.log(  $(e).find('.front')    );
    let a = $(e).find('.front');
    let b = $(e).find('.back');
    $(a).css('transform','rotateY(0deg)');
    $(b).css('transform','rotateY(180deg)');
    $(a).css('backface-visibility','hidden');
    $(b).css('backface-visibility','hidden');
    $(a).css('transition','0.4s');
    $(b).css('transition','0.4s');
}