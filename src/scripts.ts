const menu = document.getElementById("ham-menu");
const menuButton = document.getElementById("ham-button");

function handleClicks() {
  if (menu?.classList.contains("hidden")) {
    menu?.classList.remove("hidden");
    setTimeout(() => {
      // small delay so that browser doesn't batch both remove hidden and remove opacity-0 and add opacity-100 in one batch defeating the purpose of fading animation.
      menu?.classList.remove("opacity-0");
      menu?.classList.add("opacity-100");
    }, 10);
    if (menuButton != null) menuButton.innerHTML = "&#10005;";
  } else {
    menu?.classList.add("opacity-0");
    menu?.classList.remove("opacity-100");
    menu?.classList.add("hidden");
    if (menuButton != null) menuButton.innerHTML = "&#9776;";
  }
}

menuButton?.addEventListener("click", handleClicks);
menu?.addEventListener("click", handleClicks);
