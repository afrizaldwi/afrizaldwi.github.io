// navbar
const navbar = document.querySelector("nav");

window.onscroll = () => {
  if (this.scrollY > 10) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

// back to top
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0 });
});

// certificate
const certificateImg = document.querySelectorAll("#certificateImg");
const modalSm = document.getElementById("modalSm");
const modalClose = document.getElementById("modalClose");
const certificatePreview = document.getElementById("certificatePreview");

certificateImg.forEach((image) => {
  image.addEventListener("click", () => {
    modalSm.classList.toggle("show");
    certificatePreview.src = image.src;
    document.body.style.overflow = "hidden";
  });
});

modalClose.addEventListener("click", () => {
  modalSm.classList.toggle("show");
  document.body.style.overflow = "auto";
});
