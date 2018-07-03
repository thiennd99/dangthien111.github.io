let i = 0;
function getValue(e) {
  if (i == 1) {
    document.getElementById('display').value = '';
    document.getElementById('display').value += e.value;
    i = 0;
  } else {
    document.getElementById("display").value += e.value;
  }
}

function clearAll() {
  document.getElementById("display").value = '';
}
function equal() {
  var a = document.getElementById("display").value;
  let b = eval(a);
  i = 1;
  if (b < 1) {
    document.getElementById("display").value = b.toFixed(1);

  }
  else {
    document.getElementById("display").value = b;

  }

}
function square() {
  var a = document.getElementById("display").value;
  var b = a * a;
  document.getElementById("display").value = b;
}
function factorialize() {
  let a = document.getElementById("display").value;
  console.log(typeof a);
  let b = parseInt(a);
  if (b == 1 || b == 0) {
    document.getElementById('display').value = "1"
  } else {
    for (let i = b - 1; i >= 1; i--) {
      b *= i;
    }
    document.getElementById('display').value = b;
  }
}
function squareRoot() {
  let a = document.getElementById('display').value;
  let b = parseInt(a);
  let c = Math.sqrt(b)
  document.getElementById('display').value = c;

}
function percent() {
  let a = document.getElementById('display').value;
  let b = a / 100;
  document.getElementById('display').value = b;
}
function fraction(){
  let a = document.getElementById('display').value;
  let b = 1 / a;
  document.getElementById('display').value = b;
}

