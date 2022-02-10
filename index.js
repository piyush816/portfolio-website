hambtn = document.querySelector(".hambtn");
menu = document.querySelector(".menu");

hambtn.addEventListener("click", openMenu);

function openMenu() {
  if (menu.style.left == "0px") {
    menu.style.left = "-500px";
    hambtn.innerHTML = `
    <i class="fas fa-bars "></i>
    `;
  } else {
    menu.style.left = "0px";
    hambtn.innerHTML = `
      <i class="fas fa-times "></i>
      `;
  }
}
