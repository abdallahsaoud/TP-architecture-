function calculer() {
  const a = parseFloat(document.getElementById('inputA').value);
  const b = parseFloat(document.getElementById('inputB').value);
  const result = a + b;

  if (!isNaN(result)) {
      document.getElementById('result').textContent = result;
  } else {
      document.getElementById('result').textContent = 'Erreur';
  }
}