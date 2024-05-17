var menus = document.getElementById("menu-tool");
var sidemenu = document.querySelector(".side-menus");
var closemenu = document.querySelector(".close-menu");

menus.addEventListener("click", function (event) {
  event.preventDefault();
  sidemenu.style.left = "0%";
});

closemenu.addEventListener("click", function (event) {
  event.preventDefault();
  sidemenu.style.left = "-40%";
})