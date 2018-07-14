const card = $('.card__inner')


card.click(function(e){
    alert('Bạn đã bị hack !!!')
    $(this).find('.back').addClass('new_back');
    $(this).find('.front').addClass('new_front');
});

// card.forEach(element => {
//     element.addEventListener('click',function(e){
//     this.classList.add('new_front');
   
//     // a.css('transform','rotateY(0deg)');
//     // b.css('transform','rotateY(180deg)');
//     // a.css('backface-visibility','hidden');
//     // b.css('backface-visibility','hidden');
//     // a.css('transition','0.4s');
//     // b.css('transition','0.4s');
// console.log(element)
// });

// });



// let a = $('.card__inner');
// a.on('click', function(){
// a.find('.front').css('transform','rotateY(0deg)');
// a.find('.front').css('backface-visibility','hidden');
// a.find('.front').css('transition','0.4s');
// a.find('.back').css('transform','rotateY(180deg)');
// a.find('.back').css('backface-visibility','hidden');
// a.find('.back').css('transition','0.4s');
// })





