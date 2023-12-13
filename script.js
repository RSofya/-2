function calculateX() {
    var a = parseFloat(document.getElementById('inputA').value);
    var x;
  
    if (a < 62) {
      x = a**2 + 4 + 5;
    } else {
      x = 1/(a**2) + 4*a + 5;
    }
  
    document.getElementById('result').innerHTML = 'Результат: ' + x;
  }