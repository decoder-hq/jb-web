const body = document.querySelector('.content');
const loader = document.getElementById('loader')
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const home = document.querySelector(".home")
const about = document.querySelector(".about")
const parent = document.querySelector('.parent');
const parentHeading = document.querySelector('.about-heading')
const subHeading = document.querySelector('.sub-heading')
const catalogue = document.querySelector(".catalogue")
const contact = document.querySelector(".contact")

var isActive = false

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.about-heading', {
        y: 100,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "circ.out",
        scrollTrigger: {
            trigger: '.about-heading',
            start: "top 90%",
            end: "bottom 90%",
            toggleActions: "play none reverse none",
        }
    })

    gsap.from('.sub-heading', {
        y: 100,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "circ.out",
        scrollTrigger: {
            trigger: '.sub-heading',
            start: "top 90%",
            end: "bottom 95%",
            toggleActions: "play none reverse none",
        }
    })

    gsap.from('.para-1', {
        y: 100,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "circ.out",
        scrollTrigger: {
            trigger: '.para-1',
            start: "top 90%",
            end: "bottom 95%",
            toggleActions: "play none reverse none",
        }
    })

    gsap.from('.para-2', {
        y: 100,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "circ.out",
        scrollTrigger: {
            trigger: '.para-2',
            start: "top 90%",
            end: "bottom 95%",
            toggleActions: "play none reverse none",
        }
    })

    gsap.from('.para-3', {
        y: 100,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "circ.out",
        scrollTrigger: {
            trigger: '.para-3',
            start: "top 95%",
            end: "bottom 95%",
            toggleActions: "play none reverse none",
        }
    })

    gsap.from('.image', {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "circ.out",
        scrollTrigger: {
            trigger: '.para-1',
            start: "top 90%",
            end: "top 95%",
            toggleActions: "play none reverse none",
        }
    })

    gsap.from('.cat-heading', {
        y: 100,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "circ.out",
        scrollTrigger: {
            trigger: '.cat-heading',
            start: "top 90%",
            end: "bottom 90%",
            toggleActions: "play none reverse none",
        }
    })

    gsap.from('.cat-description', {
        y: 100,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.4,
        ease: "circ.out",
        scrollTrigger: {
            trigger: '.cat-description',
            start: "top 90%",
            end: "bottom 95%",
            toggleActions: "play none reverse none",
        }
    })

    gsap.from('.swiper', {
        y: 100,
        rotateX: -45,
        opacity: 0,
        duration: 1.2,
        delay: 0.6,
        ease: "circ.out",
        scrollTrigger: {
            trigger: '.swiper',
            start: "top 90%",
            end: "top 98%",
            toggleActions: "play none reverse none",
        }
    })
});

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrollY > 0);
})

hamburger.addEventListener('click', function () {
    isActive = !isActive
    hamburger.classList.toggle('active')
    header.classList.toggle('expand');
})

window.addEventListener("load", () => {
    var caption1 = document.querySelector('.caption-1');
    caption1.innerHTML = caption1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({ loop: false })
        .add({
            targets: '.caption-1 .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: "easeOutExpo",
            duration: 2500,
            delay: (el, i) => 500 + 60 * i
        })
    setTimeout(() => {
        caption1.innerHTML = "Get water<span class='word'>clean</span> <span class='word'>fresh</span> <span class='word'>pure</span>"
        caption1.classList.add('spacing')
    }, 3000)
})

var caption2 = document.querySelector('.caption-2');
caption2.innerHTML = caption2.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.caption-2 .letter',
        translateX: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2500,
        delay: (el, i) => 500 + 60 * i
    })

var brandName = document.querySelector('.brand-name');
brandName.innerHTML = brandName.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.brand-name .letter',
        translateX: [-40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2500,
        delay: (el, i) => 500 + 60 * i
    })

function homeSection() {
    hamburger.classList.remove('active')
    header.classList.remove('expand');
    window.scrollTo(0, 0)
}

function aboutSection() {
    hamburger.classList.remove('active')
    header.classList.remove('expand');
    about.scrollIntoView()
}

function catalogueSection() {
    hamburger.classList.remove('active')
    header.classList.remove('expand');
    catalogue.scrollIntoView()
}

// const items = document.querySelectorAll('.slider .item');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// let active = 3

// function loadShow() {
//     let display = 0
//     items[active].style.transform = `none`;
//     items[active].style.filter = 'none';
//     items[active].style.opacity = 1;
//     for (var i = active + 1; i < items.length; i++) {
//         display++;
//         items[i].style.transform = `translateX(${250 * display}px) scale(${1 - 0.2 * display}) perspective(16px) rotateY(1deg)`;
//         items[i].style.filter = 'blur(1px)';
//         items[i].style.opacity = display > 1 ? 0 : 0.6;
//     }

//     display = 0
//     for (var i = active - 1; i >= 0; i--) {
//         display++;
//         items[i].style.transform = `translateX(${-250 * display}px) scale(${1 - 0.2 * display}) perspective(16px) rotateY(-1deg)`;
//         items[i].style.filter = 'blur(1px)';
//         items[i].style.opacity = display > 1 ? 0 : 0.6;
//     }

//     if (active < 1) {
//         prevBtn.disabled = true
//     }
//     if (active >= 1) {
//         prevBtn.disabled = false
//     }
//     if (active > 4) {
//         nextBtn.disabled = true
//     }
//     if (active <= 4) {
//         nextBtn.disabled = false
//     }
// }

// loadShow()

// function prev() {
//     active = active - 1 >= 0 ? active - 1 : active;
//     loadShow()
// }

// function next() {
//     active = active + 1 < items.length ? active + 1 : active;
//     loadShow();
// }

var swiper = new Swiper(".swiper", {
    effect: 'coverflow',
    roundLengths:true,
    grabCursor: true,
    centeredSlides:true,
    initialSlide: 3,
    slidesPerView: 'auto',
    preventClicks: true,
    speed: 400,
    spaceBetween: 0,
    coverflowEffect: {
        rotate: 40,
        slideShadows: true,
    },
    on: {
        click(event){
            swiper.slideTo(this.clickedIndex)
        },
    }
});




