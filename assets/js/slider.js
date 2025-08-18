document.addEventListener("DOMContentLoaded", function () {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slider-wrapper .slide");
  const prevBtn = document.querySelector(".custom-prev");
  const nextBtn = document.querySelector(".custom-next");

  let currentIndex = 0;
  const totalSlides = slides.length;

  function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentIndex = index;

    const offset = -index * 100;
    sliderWrapper.style.transform = `translateX(${offset}%)`;
  }

  prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
  nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));

  showSlide(0);
});
