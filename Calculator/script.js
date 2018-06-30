function getValue(e){
    document.getElementById("display").value += e.value;
    
}
var theNum = '',
    oldNum = '',
    resultNum,
    operators;
function clearAll() {
    document.getElementById("display").value = '';
}