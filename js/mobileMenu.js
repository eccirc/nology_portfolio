window.onload = function () {
  const button = document.getElementById("menu_button");
  const nav = document.getElementById("nav_links");
  const icon = document.getElementById("menu_icon");
  let toggle = false;

  button.onclick = function (event) {
    toggle = !toggle;

    if (toggle) {
      nav.classList.add("show-menu");
      icon.src = "./assets/close-line.svg";
    } else {
      nav.classList.remove("show-menu");
      icon.src = "./assets/menu.svg";
    }
  };
};
