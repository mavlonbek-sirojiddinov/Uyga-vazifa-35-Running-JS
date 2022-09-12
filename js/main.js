var elResult = document.querySelector(".result");
var elSiteForm = document.querySelector(".site-form");
var elSiteInput = document.querySelector("#run-input");
var elSiteCheck = document.querySelector("#check-1");
var elSiteCheck2 = document.querySelector("#check-2");
var elBtn = document.querySelector(".btn");


elSiteForm.addEventListener("Submit", (e) => {
  e.preventDefault()
  var tempValue = elSiteInput.value;

  if (((tempValue >= 5 && tempValue <= 30) && elSiteCheck.Checked) && elSiteCheck2.Checked) {
    elResult.textContent = elSiteInput.value;
  } else {

  }
})