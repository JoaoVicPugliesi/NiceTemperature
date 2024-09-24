function border_color () {
    const inputField = document.getElementById('textBox');

inputField.addEventListener('input', function() {
    inputField.classList.remove('filled');
});

inputField.addEventListener('blur', function() {
    if (inputField.value.trim() !== "") {
        inputField.classList.add('filled');
    }
});

}

border_color();


const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;

function convert() {
    if(toFahrenheit.checked) {
       temp = Number(textBox.value);
       temp = temp * 9 / 5 + 32;
       result.textContent = temp + "°F";
    } else if (toCelsius.checked) {
       temp = Number(textBox.value);
       temp = (temp - 32) * 5 / 9;
       result.textContent = temp + "°C";
    } else {
        result.textContent = "Select a unit";
    }
}