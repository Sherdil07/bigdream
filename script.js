function initializeSlider() {
    const sliderContainer = document.getElementById('slider');
    const slides = sliderContainer.querySelectorAll('.slide');
  
    let currentSlide = 0;
  
    function showSlide() {
      slides.forEach((slide, index) => {
        slide.style.display = index === currentSlide ? 'flex' : 'none';
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide();
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide();
    }
  
    // Show the initial slide
    showSlide();
  
    // Set up event listeners for next and previous buttons
    const nextBtn = sliderContainer.querySelector('.next-btn');
    const prevBtn = sliderContainer.querySelector('.prev-btn');
  
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
  }
  