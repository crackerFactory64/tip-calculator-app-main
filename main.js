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
    inputs[i].parentNode.style.borderColor = "transparent";
  };
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = () => {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("form__button--percentage--selected");
    }
    buttons[i].classList.add("form__button--percentage--selected");
    tip = buttons[i].id / 100;
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
