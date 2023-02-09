let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector("header .flex .navbar");

menu.onclick = () => {
  console.log("clicked");
  menu.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// Show search form
let search = document.querySelector("#search-icon");
search.onclick = () => {
  let search_form = document.querySelector("#search-form");
  search_form.classList.toggle("active");
};

// Hide search form
let close_icon = document.querySelector("#close");
close_icon.onclick = () => {
  let search_form = document.querySelector("#search-form");
  search_form.classList.remove("active");
};
