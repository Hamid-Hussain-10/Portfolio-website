// //  Header Scroll
// let nav = document.querySelector(".navbar");
// Window.onscroll = function () {
//     if (document.documentElement.scrolltop > 20) {
//         nav.classList.add("header-scrolled");
//     } else {
//         nav.classList.remove("header-scrolled");
//     }
// }

// nav hide
let navBAr = document.querySelectorAll(".nav-link");
let navCollaspe = document.querySelector(".navbar-collaspe.collaspe");
navBAr.forEach(function (a) {
    a.addEventListener("click", function (){
        navCollaspe.classList.remove("show");
    })
})