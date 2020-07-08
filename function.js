function convert() {
    let number, fahrenheit, answer;
    number = Number(document.getElementById("input").value);
    fahrenheit = document.getElementById("fahrenheit");
    answer = document.getElementById("output-display");
    
       answer.value = (number * 9/5) + 32  + "deg Fahrenheit";
}

function convertTwo() {
    let number2, celsius, answer2;
    number = Number(document.getElementById("input").value);
    celsius = document.getElementById("celsius")
    answer = document.getElementById("output-display");

    answer.value = (number - 32) * 5/9 + "deg Celsius";
}

function resetValues() {
    document.getElementById("output-display").value = "";
    document.getElementById("input").value = "";
    document.getElementById("answers").value = "";
    document.getElementById("operation").value = "Add";
}