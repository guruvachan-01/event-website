

let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};


var swiper = new Swiper(".home-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".review-slider", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1050: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
});

function openPopup() {
  document.getElementById("popup").style.display = "block";
}
window.onclick = function(event) {
  if (event.target == document.getElementById("popup")) {
      document.getElementById("popup").style.display = "none";
  }
}