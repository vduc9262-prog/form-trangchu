const slides = document.querySelectorAll(".hero-slider img");

let currentSlide = 0;

function changeSlide() {
    if (!slides.length) return;

    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
}

// Tự động chuyển ảnh sau mỗi 4 giây
setInterval(changeSlide, 4000);
