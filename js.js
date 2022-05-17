let menuIcon = document.querySelector(".menu-icon");
let closeMenu = document.querySelector(".menu-close-icon");
let dropdownMenu = document.querySelector("#dropdown-menu");
let greyBackround = document.querySelector(".grey-backround");

menuIcon.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  dropdownMenu.style.opacity = "1";
  dropdownMenu.style.right = "0";
  menuIcon.style.display = "none";
  closeMenu.style.display = "flex";
  greyBackround.style.opacity = "1";
}

function close() {
  dropdownMenu.style.opacity = "0";
  dropdownMenu.style.right = "-300px";
  menuIcon.style.display = "flex";
  closeMenu.style.display = "none";
  greyBackround.style.opacity = "0";
}

//

let featuresDropDown = document.querySelector(".features-drop-down");
let featuresLink = document.querySelector("#features-link");
let mobileArrowDown1 = document.querySelector("#mobile-arrow-down-1");

function showFeaturesDropDown() {
  featuresDropDown.classList.toggle("active");
  mobileArrowDown1.classList.toggle("active");
}

featuresLink.addEventListener("click", showFeaturesDropDown);
//

let companyLink = document.querySelector("#company-link");
let companyDropDown = document.querySelector(".company-drop-down");
let mobileArrowDown2 = document.querySelector("#mobile-arrow-down-2");

function showCompanyDropDown() {
  companyDropDown.classList.toggle("active");
  mobileArrowDown2.classList.toggle("active");
}

companyLink.addEventListener("click", showCompanyDropDown);
