// window.onload = function(){
//     $('.card__inner').css('pointer-events','none')
    
// }


const card = $('.card__inner');
let front_card = $('.card__inner').find('.front');
let back_card = $('.card__inner').find('.back');
let a = front_card.find('img');
let b = back_card.find('img');
let c = b.attr('src',"img/00.jpg");


let imgArr = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.png','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg','img/11.jpg','img/12.jpg','img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg','img/5.png','img/6.jpg','img/7.jpg','img/8.jpg','img/9.jpg','img/10.jpg','img/11.jpg','img/12.jpg'];
shuffle(imgArr)
for(let i = 0; i <(imgArr.length);i++){
    $(a[i]).attr('src',imgArr[i]);
}   




card.click(function(e){
    $(this).find('.back').addClass('new_back');
    $(this).find('.front').addClass('new_front');
    $(this).css('pointer-events','none');
    
}) 

   

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
  }

  return array;
}











