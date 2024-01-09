function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var gender = document.getElementById('gender').value;

    if (weight && height) {
        var bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
        displayResult(bmi, gender);
    } else {
        alert('Wprowadź poprawne wartości.');
    }
}

function displayResult(bmi, gender) {
    var resultElement = document.getElementById('result');
    var interpretation = '';

    if (gender === 'male') {
        interpretation = 'mężczyzny';
    } else {
        interpretation = 'kobiety';
    }

    resultElement.innerHTML = `Twoje BMI wynosi: ${bmi}. To jest interpretacja dla ${interpretation}.`;
}