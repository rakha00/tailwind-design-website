document.addEventListener("DOMContentLoaded", () => {
  // Dropdown Menu
  const menuBtn = document.getElementById("menuBtn");
  const menuDropdown = document.getElementById("menuDropdown");
  let isMenuOpen = false;

  menuBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      menuDropdown.style.transform = "translateY(0)";
    } else {
      menuDropdown.style.transform = "translateY(-100%)";
    }
  });
});
