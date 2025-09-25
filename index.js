const heightInput = $("#height");
const weightInput = $("#weight");
const bmi = $("#bmi");
const bmiText = $("#bmi-text");

let finalBmi = 0;

// debugger;
$("#calculate-button").click(calculateBMI);

function calculateBMI() {
    let heightValue = parseFloat(heightInput.val()) / 100;
    let weightValue = parseFloat(weightInput.val());
    
    finalBmi = weightValue / (heightValue * heightValue);
    finalBmi = finalBmi.toFixed(2);
    // console.log(finalBmi);
    bmiText.text("Your BMI is:");
    bmi.text(finalBmi);
}

