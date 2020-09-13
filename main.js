function toggleMenu() {
  let menu = document.querySelector(".links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function slides() {
  const images = document.querySelectorAll(".carousel-wrapper img");
  const carousel = document.querySelector(".carousel-wrapper");
  const next = document.querySelector("#nextBtn");
  const prev = document.querySelector("#prevBtn");

  let imageWidth = 0;

  setInterval(() => {
    imageWidth += 1000;
    images.forEach((image) => {
      image.style.transform = `translateX(${-imageWidth}px)`;
    });
    if (imageWidth === (images.length - 1) * 1000) {
      imageWidth = -1000;
    }
  }, 3000);
}

slides();

function popup() {
  const items = document.querySelectorAll(".animation");
  const screenHeight = window.innerHeight / 1.3;

  items.forEach((item) => {
    const itemHeight = item.getBoundingClientRect().top;

    if (itemHeight < screenHeight) {
      item.classList.add("animation-appear");
    }
  });
}
window.addEventListener("scroll", popup);
