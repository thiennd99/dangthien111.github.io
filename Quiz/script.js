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
    count = 1;
