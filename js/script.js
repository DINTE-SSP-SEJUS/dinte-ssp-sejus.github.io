// Recolher sideBar

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("collapsed");

  var container = document.querySelector(".container");
  container.style.marginLeft = sidebar.classList.contains("collapsed")
    ? "60px"
    : "210px";
}



// Modal

var modalButtons = document.querySelectorAll(".modal-button");
var modal = document.querySelector(".modal");
var closeBtn = document.querySelector(".close");

var modalButtons = document.querySelectorAll(".modal-button");
var modals = document.querySelectorAll(".modal");
var closeBtns = document.querySelectorAll(".close");

modalButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    var targetModal = document.getElementById(button.dataset.modalTarget);
    targetModal.classList.add("show");
  });
});

closeBtns.forEach(function (closeBtn) {
  closeBtn.addEventListener("click", function () {
    var modal = closeBtn.parentElement.parentElement;
    modal.classList.remove("show");
  });
});

// Exibir as fotos
const inputFotos = document.getElementById("fotos");
const thumbnailsContainer = document.getElementById("thumbnails");

inputFotos.addEventListener("change", function () {
  thumbnailsContainer.innerHTML = "";

  const files = Array.from(inputFotos.files);

  files.forEach(function (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const thumbnail = document.createElement("img");
      thumbnail.classList.add("thumbnail");
      thumbnail.src = e.target.result;
      thumbnailsContainer.appendChild(thumbnail);
    };

    reader.readAsDataURL(file);
  });
});
