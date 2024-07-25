let menubar = document.querySelector("#menubar");
let mynav = document.querySelector(".navbar");

menubar.onclick = () => {
  menubar.classList.toggle("fa-times");
  mynav.classList.toggle("active");
};
function changeBg() {
  var navbar = document.getElementById(`navbar`);
  var scrollvalue = window.scrollY;
  // console.log(scrollvalue);
  if (scrollvalue < 150) {
    navbar.classList.remove("bgcolor");
  } else {
    navbar.classList.add("bgcolor");
  }
}
window.addEventListener(`scroll`, changeBg);
