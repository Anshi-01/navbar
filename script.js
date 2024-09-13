const full = document.querySelector("#full");

document.querySelector("#nav2 a:nth-child(3)").addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("clicked");
    subfull1.style.display = "none";
    subfull2.style.display = "none";
    full.style.display=="block"?full.style.display="none":full.style.display="block";
})


const subfull1 = document.querySelector("#subfull1");

document.querySelector("#full ul li:nth-child(1)").addEventListener("click",(e)=>{
    e.preventDefault();
    subfull2.style.display = "none";
    subfull1.style.display == "none"?subfull1.style.display="block":subfull1.style.display="none";
})

const subfull2 = document.querySelector("#subfull2");

document.querySelector("#full ul li:nth-child(3)").addEventListener("click",(e)=>{
    e.preventDefault();
    subfull1.style.display = "none";
    subfull2.style.display == "none"?subfull2.style.display="block":subfull2.style.display="none";
})

    // Slider functionality
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.slider-dots');

    let currentIndex = 0;
    let slidesPerView = 3;

    function updateSlidesPerView() {
        if (window.innerWidth <= 480) {
            slidesPerView = 1;
        } else if (window.innerWidth <= 768) {
            slidesPerView = 2;
        } else {
            slidesPerView = 3;
        }
        updateSlider();
    }

    function updateSlider() {
        const totalSlides = slides.length;
        const totalDots = Math.ceil(totalSlides / slidesPerView);

        // Clear existing dots
        dotsContainer.innerHTML = '';

        // Create new dots
        for (let i = 0; i < totalDots; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            dot.addEventListener('click', () => goToSlide(i * slidesPerView));
            dotsContainer.appendChild(dot);
        }

        slider.style.transform = `translateX(-${currentIndex * (100 / slidesPerView)}%)`;
        updateDots();
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === Math.floor(currentIndex / slidesPerView));
        });
    }

    function goToSlide(index) {
        const totalSlides = slides.length;
        currentIndex = index;
        if (currentIndex < 0) currentIndex = totalSlides - slidesPerView;
        if (currentIndex > totalSlides - slidesPerView) currentIndex = 0;
        updateSlider();
    }

    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

    // Automatic sliding
    setInterval(() => goToSlide(currentIndex + 1), 5000);

    // Initial setup and window resize handling
    window.addEventListener('resize', updateSlidesPerView);
    updateSlidesPerView();

    const hamburger = document.querySelector("#hamburger");
    hamburger.addEventListener("click",()=>{
      document.querySelector("#hamburger-menu").style.display == "flex"?document.querySelector("#hamburger-menu").style.display = "none":document.querySelector("#hamburger-menu").style.display = "flex";
      
    })

    document.querySelector("#hamburger-menu a:nth-child(3)").addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector(".div").style.display == "flex"?document.querySelector(".div").style.display = "none":document.querySelector(".div").style.display = "flex";
    })