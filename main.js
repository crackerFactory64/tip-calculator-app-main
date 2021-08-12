let bill = 0;
let tip = 0;
let people = 0;
let tipPerPerson = 0;
let totalPerPerson = 0;

let buttons = document.getElementsByClassName("form__button--percentage");

let inputs = document.getElementsByClassName("form__input");

for (let i = 0; i < inputs.length; i++) {
  inputs[i].onfocus = () => {
    inputs[i].parentNode.style.borderColor = "#5BA89E";
  };
  inputs[i].onblur = () => {
    if (i == 1) {
      inputs[1].onchange = () => {
        for (let j = 0; j < buttons.length; j++) {
          buttons[j].classList.remove("form__button--percentage--selected");
        }
        if (inputs[1].value > 0) {
          tip = inputs[1].value / 100;
          inputs[1].parentNode.style.borderColor = "transparent";
          document.getElementById("error" + (i + 1)).style.visibility =
            "hidden";
        } else {
          inputs[1].parentNode.style.borderColor = "#FF5B33";
          document.getElementById("error" + (i + 1)).style.visibility =
            "visible";
        }
      };
      inputs[1].parentNode.style.borderColor = "transparent";
    } else {
      if (inputs[i].value <= 0) {
        inputs[i].parentNode.style.borderColor = "#FF5B33";
        document.getElementById("error" + (i + 1)).style.visibility = "visible";
      } else {
        inputs[i].parentNode.style.borderColor = "transparent";
        document.getElementById("error" + (i + 1)).style.visibility = "hidden";
      }
    }
  };
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = () => {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("form__button--percentage--selected");
    }
    buttons[i].classList.add("form__button--percentage--selected");
    inputs[1].parentNode.style.borderColor = "transparent";
    document.getElementById("error2").style.visibility = "hidden";
    if (i != 5) {
      tip = buttons[i].id / 100;
    }
    tipPerPerson = (bill / people) * tip;
    if (bill != 0 && people != 0) {
      document.getElementById("tip").innerHTML = "$" + tipPerPerson.toFixed(2);
      document.getElementById("total").innerHTML =
        "$" + (totalPerPerson + tipPerPerson).toFixed(2);
    }
  };
}

document.onkeyup = () => {
  bill = document.getElementById("bill").value;
  people = document.getElementById("people").value;
  tipPerPerson = (bill / people) * tip;
  totalPerPerson = bill / people;
  if (bill != 0 && people != 0) {
    document.getElementById("tip").innerHTML = "$" + tipPerPerson.toFixed(2);
    document.getElementById("total").innerHTML =
      "$" + (totalPerPerson + tipPerPerson).toFixed(2);
  }
};

document.getElementsByClassName("form__button--reset").onclick = () => {
  location.reload();
};
