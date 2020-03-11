
var button = document.querySelector(".modal-btn");

var popup = document.querySelector(".form-show");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  });

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-close");
  });
