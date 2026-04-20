function convertTemp() {
  let input = document.getElementById("tempInput").value;
  let unit = document.getElementById("unit").value;
  let result = document.getElementById("result");

  // Validation
  if (input === "" || isNaN(input)) {
    result.innerHTML = "❌ Please enter a valid number";
    return;
  }

  input = Number(input);

  let c, f, k;

  if (unit === "c") {
    c = input;
    f = (c * 9/5) + 32;
    k = c + 273.15;
  } 
  else if (unit === "f") {
    f = input;
    c = (f - 32) * 5/9;
    k = c + 273.15;
  } 
  else {
    k = input;
    c = k - 273.15;
    f = (c * 9/5) + 32;
  }

  result.innerHTML = `
    🌡 Celsius: ${c.toFixed(2)} °C <br>
    🌡 Fahrenheit: ${f.toFixed(2)} °F <br>
    🌡 Kelvin: ${k.toFixed(2)} K
  `;
}