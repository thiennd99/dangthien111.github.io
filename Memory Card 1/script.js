// window.onload = function(){
//     $('.card__inner').css('pointer-events','none')

// }


let imgArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
imgArr = imgArr.concat(imgArr);
shuffle(imgArr);

let html = '';
for(let i = 0; i< imgArr.length; i++){
    html += '<div class = "card_item">' + '<div class="card__inner" data-name = "'+imgArr[i]+'">' + '<div class = "front"><img src = "img/'+imgArr[i]+'.jpg"></div>'
    +'<div class="back"><img src="img/00.jpg"></div>'+'</div></div>'
}
$('.card').html(html);

const card = $('.card__inner');
let current = null;

card.click(function (e) {
    $(this).toggleClass('new_back');
    $(this).toggleClass('new_front');
    // $(this).css('pointer-events', 'none'); 
    // if (!current) {
    //     current = $(this);
    //     // console.log(current);
    // } else {
    //     if (current.attr('data-name') != $(this).attr('data-name')) {
    //         // setTimeout(function(){
    //         //     current.toggleClass('flipped');
    //         //     console.log(current.toggleClass('flipped'))
    //         //     $(this).toggleClass('flipped');
    //         //     current = null;
    //         // }, 500)
    //         console.log('khac nhau')
    //         current = null
    //     } else {
    //         console.log('Giong nhau')
    //         current = null
    //     }
    // }
})

function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

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

