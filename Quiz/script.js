var combo_1 = {
    question: "Julia hat ihrem Kind vor dem Schlafen ______ interessante Geschichten vorgelesen.",
    first_answer: 'einigen',
    second_answer: 'einiges',
    third_answer: 'einige',
    fourth_answer: 'einigem',
    correct_answer: 'einige'
}
var combo_2 = {
    question: 'Ich ______ heute keinen Fisch essen, denn ich habe Durchfall.',
    first_answer: 'darfe',
    second_answer: 'dürfe',
    third_answer: 'durfe',
    fourth_answer: 'darf',
    correct_answer: 'darfe'
}
var combo_3 = {
    question: 'Das Synonym von „Reinigung“ ist ______.',
    first_answer: 'Konditorei',
    second_answer: 'Metzgerei',
    third_answer: 'Fleischerei',
    fourth_answer: 'Wäscherei',
    correct_answer: 'Wäscherei'
}
var combo_4 = {
    question: 'Marie möchte in der Schweiz arbeiten, ______ ihre Familie möchte das nicht.',
    first_answer: 'sondern',
    second_answer: 'oder',
    third_answer: 'und',
    fourth_answer: 'aber',
    correct_answer: 'aber'
}
var combo_5 = {
    question: 'Seit den 50er Jahren gibt es viele ______ Radiosender, z. B. den HR und den WDR.',
    first_answer: 'regionalen',
    second_answer: 'regionales',
    third_answer: 'regionale',
    fourth_answer: 'regionaler',
    correct_answer: 'regionale'
}
var Arr = [combo_1, combo_2, combo_3, combo_4, combo_5],
    q = document.getElementById('question_content'),
    a1 = document.getElementById('answer_content_1'),
    a2 = document.getElementById('answer_content_2'),
    a3 = document.getElementById('answer_content_3'),
    a4 = document.getElementById('answer_content_4'),
    mark = 0,
    count = 1
    ;
q.innerHTML = Arr[0].question;
a1.innerHTML = Arr[0].first_answer;
a2.innerHTML = Arr[0].second_answer;
a3.innerHTML = Arr[0].third_answer;
a4.innerHTML = Arr[0].fourth_answer;
for (var answerGroup = document.getElementsByClassName("answer_item"), i = 0; i < answerGroup.length; i++)
    answerGroup[i].addEventListener("click", function() {
        if (this.innerText == arr[count-1].answer && (mark += 1),
        count < arr.length)
            
            q.innerHTML = arr[temp].question,
            a1.innerHTML = arr[temp].choose1,
            a2.innerHTML = arr[temp].choose2,
            a3.innerHTML = arr[temp].choose3,
            a4.innerHTML = arr[temp].choose4,
            foot.innerHTML = "<p class='foot'>Câu số " + (temp + 1) + " / " + arr.length + "</p>";
        else if (6 == mark)
            window.location.href = "win.html";
        else {
            document.getElementById("questions").style.display = "none",
            document.getElementById("answer").style.display = "none",
            document.getElementById("footer").style.display = "none",
            document.getElementById("resAlert1").innerHTML = "<h1>Rất tiếc bạn đã thất bại!</h1>";
            for (var e = 0; e < mark; e++)
                document.getElementById("resAlert2").innerHTML += "<img src='image/success-icon.png' style='width:50px' />";
            document.getElementById("resAlert3").innerHTML = "<button id='back' onclick='clickBtnBack()'>Chơi lại nào</button>"
        }
        temp += 1
    });



