window.onload = function () {
    $('.card__inner').css('pointer-events', 'none')
    $('.alert_1').show();
    $('.pro').attr('max', remainingTime)
    $('.pro').attr('value', remainingTime)
}


let imgArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
imgArr = imgArr.concat(imgArr);
shuffle(imgArr);

let html = '';
for (let i = 0; i < imgArr.length; i++) {
    html += '<div class = "card_item">' + '<div class="card__inner" data-name = "' + imgArr[i] + '">' + '<div class="back"><img src = "img/' + imgArr[i] + '.jpg"></div>' +
    '<div class = "front"><img src="img/00.jpg"></div>' + '</div></div>'
}
$('.card').html(html);
let count = 0;

let remainingTime = 30;

let run;

function normal() {
    $('.card__inner').css('pointer-events', 'auto')
    $('.alert').hide();

    run = setInterval(function () {
        remainingTime--;
        document.getElementById('pro').value = remainingTime;
        if (remainingTime == 0) {
            clearInterval(run);
            $('.card__inner').css('pointer-events', 'none');
            $('.alert_lose').show();
        }
    }, 1000)

};

function hard() {
    $('.card__inner').css('pointer-events', 'auto')
    $('.alert').hide();
    run = setInterval(function () {
        remainingTime--;
        document.getElementById('pro').value = remainingTime;
        if (remainingTime == 0) {
            clearInterval(run)
            $('.alert_lose').show();
            $('.card__inner').css('pointer-events', 'none');
        }
    }, 500)

};

const card = $('.card__inner');
let current = null;

card.click(function (e) {
    const _this = this;
    $(this).find('.back').toggleClass('new_back');
    $(this).find('.front').toggleClass('new_front');
    $(this).css('pointer-events', 'none');
    console.log(_this)

    if (!current) {
        current = $(this);
        // console.log(current);
    } else {
        if (current.attr('data-name') != $(this).attr('data-name')) {
            setTimeout(function () {
                current.find('.front').toggleClass('new_front');
                current.find('.back').toggleClass('new_back');
                $(_this).find('.front').toggleClass('new_front');
                $(_this).find('.back').toggleClass('new_back');
                current.find('.front').css('transition', '0.4s');
                current.find('.back').css('transition', '0.4s');
                $(_this).find('.front').css('transition', '0.4s');
                $(_this).find('.back').css('transition', '0.4s');
                document.getElementById('falsch').play();
                current = null;
                setTimeout(function () {
                    $('.card__inner').css('pointer-events', 'auto');
                }, 400)
            }, 400)
            $('.card__inner').css('pointer-events', 'none');
        } else {
            setTimeout(function () {
                current.css('opacity', '0');
                $(_this).css('opacity', '0');
                current.css('transition', '0.4s');
                $(_this).css('transition', '0.4s');
                current = null;
                setTimeout(function () {
                    $('.card__inner').css('pointer-events', 'auto');
                }, 400)
                document.getElementById('richtig').play();
                count++;
                if (count === 12) {
                    $('.alert_win').show();
                    clearInterval(run);
                }
             
            }, 500)
            $('.card__inner').css('pointer-events', 'none');
        }
    }
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

function replay() {
    window.location.href = 'index.html'
}