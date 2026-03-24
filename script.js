let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let fullValue = "";   
let resetNext = false;

function updateDisplay() {
  let maxLength = 10;

  if (fullValue.length > maxLength) {
    input.value = fullValue.slice(-maxLength); 
  } else {
    input.value = fullValue;
  }
}

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    if (value === "AC") {
      fullValue = "";
      input.value = "";
    }

    else if (value === "DEL") {
      fullValue = fullValue.slice(0, -1);
      updateDisplay();
    }

    else if (value === "=") {
      try {
        fullValue = eval(fullValue).toString();
        updateDisplay();
        resetNext = true;
      } catch {
        input.value = "Error";
        fullValue = "";
      }
    }

    else {
      if (resetNext) {
        fullValue = "";
        resetNext = false;
      }

      fullValue += value;
      updateDisplay();  
    }
  });
});