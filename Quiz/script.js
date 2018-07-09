var combo_1 = {
    question: "Julia hat ihrem Kind vor dem Schlafen ______ interessante Geschichten vorgelesen.",
    first_answer: 'einigen',
    second_answer: 'einiges',
    third_answer: 'einige',
    fourth_answer: 'einigem',
    correct_answer: '3'
}
var combo_2 = {
    question: 'Ich ______ heute keinen Fisch essen, denn ich habe Durchfall.',
    first_answer: 'darfe',
    second_answer: 'dürfe',
    third_answer: 'durfe',
    fourth_answer: 'darf',
    correct_answer: '1'
}
var combo_3 = {
    question: 'Das Synonym von „Reinigung“ ist ______.',
    first_answer: 'Konditorei',
    second_answer: 'Metzgerei',
    third_answer: 'Fleischerei',
    fourth_answer: 'Wäscherei',
    correct_answer: '4'
}
var combo_4 = {
    question: 'Marie möchte in der Schweiz arbeiten, ______ ihre Familie möchte das nicht.',
    first_answer: 'sondern',
    second_answer: 'oder',
    third_answer: 'und',
    fourth_answer: 'aber',
    correct_answer: '4'
}
var combo_5 = {
    question: 'Seit den 50er Jahren gibt es viele ______ Radiosender, z. B. den HR und den WDR.',
    first_answer: 'regionalen',
    second_answer: 'regionales',
    third_answer: 'regionale',
    fourth_answer: 'regionaler',
    correct_answer: '3'
}
var fullQuestions = [combo_1, combo_2, combo_3, combo_4, combo_5];
var question = document.getElementById('question_content'),
    ans_1 = document.getElementById('answer_content_1'),
    ans_2 = document.getElementById('answer_content_2'),
    ans_3 = document.getElementById('answer_content_3'),
    ans_4 = document.getElementById('answer_content_4')
var cur_question = 0,
    score = 0,
    user_choice = '',
    correct_choice = [];
function loadQues() {
    if (cur_question >= 0 && cur_question < fullQuestions.length) {
        // user_choice = document.getElementById('container');
        question.innerText = fullQuestions[cur_question].question;
        ans_1.innerText = fullQuestions[cur_question].first_answer;
        ans_2.innerText = fullQuestions[cur_question].second_answer;
        ans_3.innerText = fullQuestions[cur_question].third_answer;
        ans_4.innerText = fullQuestions[cur_question].fourth_answer;
    }
}
loadQues();

function next(a) {
    var b = a.value;
    console.log(b);
    correct_choice.push(b);
    cur_question++;
    // if (cur_question>= fullQuestions.length) {
    //     calculateScore();
    // }else{
    loadQues();
    calculateScore();
}
function calculateScore() {
    for (var i = 0; i < fullQuestions.length; i++) {
        if (correct_choice[i] == fullQuestions[i].correct_answer) {
            score++
            console.log(score)
        }

    }   
    if (score == fullQuestions.length) {
        window.location.href('congrat.html')
    } else {
        ans_1.display = 'none';
    }
}





