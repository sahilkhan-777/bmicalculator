const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");
const bmi = document.querySelector("#bmi");
const calculateBtn = document.querySelector("#calculate-button");


let finalBmi = 0;

// debugger;
calculateBtn.onclick = calculateBMI;

function calculateBMI() {
    let heightValue = parseFloat(heightInput.value) / 100;
    let weightValue = parseFloat(weightInput.value);
    // let bmiMessage = "";

    finalBmi = weightValue / (heightValue * heightValue);
    finalBmi = finalBmi.toFixed(2);
    console.log(finalBmi);
    bmi.textContent = finalBmi;
}

