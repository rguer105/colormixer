const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");

const redValue = document.getElementById("redValue");
const greenValue = document.getElementById("greenValue");
const blueValue = document.getElementById("blueValue");

const colorBox = document.getElementById("colorBox");
const rgbValue = document.getElementById("rgbValue");

function updateColor() {
    let r = red.value;
    let g = green.value;
    let b = blue.value;

    redValue.textContent = r;
    greenValue.textContent = g;
    blueValue.textContent = b;

    let color = `rgb(${r}, ${g}, ${b})`;

    colorBox.style.backgroundColor = color;
    rgbValue.textContent = color;
}

red.addEventListener("input", updateColor);
green.addEventListener("input", updateColor);
blue.addEventListener("input", updateColor);