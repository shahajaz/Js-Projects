const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

function updateCarousel(index) {
  track.style.transform = `translateX(-${index * 100}%)`;

  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel(currentIndex);
});

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    currentIndex = Number(dot.dataset.slide);
    updateCarousel(currentIndex);
  });
});




