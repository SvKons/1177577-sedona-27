var popup = document.querySelector(".form"); 
   
if (popup) {
  popup.classList.toggle("form-show");
}

var button = document.querySelector(".modal-btn");

var dateon = popup.querySelector("[name=dateon]");
var dateoff = popup.querySelector("[name=dateoff]");
var amount-adult = popup.querySelector("[name=amount-adult]");
var amount-child = popup.querySelector("[name=amount-child]");
var form = popup.querySelector("modal-form");

button.addEventListener("click", function (evt) {
    
    evt.preventDefault();
    popup.classList.toggle("form-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!dateon.value || !dateoff.value || !amount-adult.value) {
      evt.preventDefault();
      popup.classList.remove("modal-error");
      form.offsetWidth = form.offsetWidth;
      popup.classList.add("modal-error")
  }
}
);
