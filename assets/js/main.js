// MOBILE MENU
$(document).ready(function () {
  $(".MobBtn").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("active");
    $(".MobileNav").toggleClass("active");
  });

  $(".MobileNav").click(function (e) {
    e.stopPropagation();
  });

  $(document).click(function () {
    $(".MobileNav").removeClass("active");
    $(".MobBtn").removeClass("active");
  });
});
// menu totgle
document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.querySelector(".Dropdown");

  dropdown.addEventListener("click", function (e) {
    // Prevent the link from navigating
    e.preventDefault();

    // Toggle active class
    this.classList.toggle("active");
  });
});
const counters = document.querySelectorAll(".counter");
const speed = 200; // lower is faster

const startCounting = () => {
  counters.forEach((counter) => {
    const target = +counter.getAttribute("data-target");
    const span = counter.querySelector("span");
    const updateCount = () => {
      const current = +counter.textContent.replace(/\D/g, "");
      const increment = Math.ceil(target / speed);
      if (current < target) {
        counter.firstChild.textContent = current + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.firstChild.textContent = target;
      }
      if (span) counter.appendChild(span); // re-attach span
    };
    updateCount();
  });
};

// Detect when section is in viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        startCounting();
        observer.disconnect(); // run once
      }
    });
  },
  { threshold: 0.5 }
);

const section = document.querySelector(".HomeAbout");
observer.observe(section);

// LEFT AND RIGHT COROUSEL

$(document).ready(function () {
  $(".slider-left").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    infinite: true,
    responsive: [
      { breakpoint: 1500, settings: {} },
      { breakpoint: 1333, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });

  $(".slider-right").slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000,
    cssEase: "linear",
    infinite: true,
    responsive: [
      { breakpoint: 1500, settings: {} },
      { breakpoint: 1333, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });

  // Important: Re-initialize AOS after sliders are rendered
  AOS.init({
    once: true,
    duration: 1000,
  });
});
$(document).ready(function () {
  const $slider = $(".slider-wrapper");
  const $navigation = $(".Navigation");

  function buildNavigation() {
    $navigation.empty(); // Clear old
    const totalSlides = $slider
      .find(".slick-slide")
      .not(".slick-cloned").length;
    for (let i = 0; i < totalSlides; i++) {
      const slideNum = (i + 1).toString().padStart(2, "0");
      $navigation.append(`<div><span></span><p>${slideNum}</p></div>`);
    }
  }

  // Initialize Slick
  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    adaptiveHeight: true,
    cssEase: "linear",
    fade: true,
    prevArrow: $(".custom-prev"),
    nextArrow: $(".custom-next"),
  });

  // Build initial Navigation
  buildNavigation();

  // Update Navigation on slide change
  $slider.on("init reInit afterChange", function (event, slick, currentSlide) {
    let index = currentSlide || 0;
    $(".Navigation div").removeClass("active");
    $(".Navigation div").eq(index).addClass("active");
  });

  // Trigger manually for initial state
  $slider.trigger("init");

  // Optional: If you dynamically add a new slide
  // Use this function after adding slide:
  // Example:
  // $('.slider-wrapper').slick('slickAdd', '<div><img src="new.jpg"></div>');
  // buildNavigation(); // 👈 Rebuild nav after adding

  // Important: Re-initialize AOS after sliders are rendered
  AOS.init({
    once: true,
    duration: 1000,
  });
});

$(document).ready(function () {
  $(".slider-services").slick({
    arrows: true,
    prevArrow: $(".slick-prev"),
    nextArrow: $(".slick-next"),
    dots: false,
    infinite: true,
    speed: 500,
    cssEase: "linear",
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  AOS.init({
    once: true,
    duration: 1000,
  });
});

$(document).ready(function () {
  $(".insights-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false, // you can enable if you want pagination dots
    infinite: true,
    speed: 600,
    fade: true,
    adaptiveHeight: true,
    prevArrow: $(".custom-prev"),
    nextArrow: $(".custom-next"),
  });

  // Re-init AOS so animations trigger properly
  AOS.init({
    once: true,
    duration: 1000,
  });
});

// Apply form popup

