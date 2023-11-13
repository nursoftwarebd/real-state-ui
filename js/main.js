function toggleMenu() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
    hamburger.style.display = "block";
    close.style.display = "none";
  } else {
    menu.style.display = "block";
    hamburger.style.display = "none";
    close.style.display = "block";
  }
}
