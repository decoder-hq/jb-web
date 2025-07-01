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
const footer = document.querySelector(".footer")
const loc = document.querySelector(".contact-1")
const email = document.querySelector(".contact-2")
const insta = document.querySelector(".contact-3")

var isActive = false

document.addEventListener("DOMContentLoaded", (event) => {

    header.classList.toggle('active', window.scrollY > 0);

    // gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.normalizeScroll(true);

    ScrollTrigger.defaults({
        toggleActions: "play none reverse none",
        ease: "circ.out",
    })

    gsap.from('.about-heading', {
        y: 100,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        scrollTrigger: {
            trigger: '.about-heading',
            start: "top 90%",
            end: "bottom 90%",
        }
    })

    gsap.from('.sub-heading', {
        y: 100,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        scrollTrigger: {
            trigger: '.sub-heading',
            start: "top 90%",
            end: "bottom 95%",
        }
    })

    gsap.from('.para-1', {
        y: 100,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
            trigger: '.para-1',
            start: "top 90%",
            end: "bottom 95%",
        }
    })

    gsap.from('.para-2', {
        y: 100,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        scrollTrigger: {
            trigger: '.para-2',
            start: "top 90%",
            end: "bottom 95%",
        }
    })

    gsap.from('.para-3', {
        y: 100,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
            trigger: '.para-3',
            start: "top 95%",
            end: "bottom 95%",
        }
    })

    gsap.from('.image', {
        x: 100,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
            trigger: '.para-1',
            start: "top 90%",
            end: "top 95%",
        }
    })

    gsap.from('.cat-heading', {
        y: 100,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        scrollTrigger: {
            trigger: '.cat-heading',
            start: "top 90%",
            end: "bottom 90%",
        }
    })

    gsap.from('.cat-description', {
        y: 100,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.4,
        scrollTrigger: {
            trigger: '.cat-description',
            start: "top 90%",
            end: "bottom 95%",
        }
    })

    gsap.from('.swiper', {
        y: 100,
        rotateX: -45,
        opacity: 0,
        duration: 1.2,
        delay: 0.6,
        scrollTrigger: {
            trigger: '.swiper',
            start: "top 90%",
            end: "top 98%",
        }
    })

    gsap.from('.con-heading', {
        y: 100,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        scrollTrigger: {
            trigger: '.footer',
            start: "top 85%",
            end: "top 85%",
        }
    })

    gsap.from('.fa-location-dot', {
        y: 50,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        clearProps: "all",
        scrollTrigger: {
            trigger: '.fa-location-dot',
            start: "top 95%",
            end: "top 95%",
        }
    })

    gsap.from('.text-1', {
        y: 50,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.4,
        clearProps: "all",
        scrollTrigger: {
            trigger: '.text-1',
            start: "top 95%",
            end: "top 95%",
        }
    })

    gsap.from('.fa-envelope', {
        y: 50,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.5,
        clearProps: "all",
        scrollTrigger: {
            trigger: '.text-1',
            start: "top 95%",
            end: "top 95%",
        }
    })

    gsap.from('.text-2', {
        y: 50,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.6,
        clearProps: "all",
        scrollTrigger: {
            trigger: '.text-1',
            start: "top 95%",
            end: "top 95%",
        }
    })

    gsap.from('.fa-instagram', {
        y: 50,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.7,
        clearProps: "all",
        scrollTrigger: {
            trigger: '.text-1',
            start: "top 95%",
            end: "top 95%",
        }
    })

    gsap.from('.text-3', {
        y: 50,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.8,
        clearProps: "all",
        scrollTrigger: {
            trigger: '.text-1',
            start: "top 95%",
            end: "top 95%",
        }
    })

    gsap.from('.photo', {
        y: 50,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 0.9,
        clearProps: "all",
        scrollTrigger: {
            trigger: '.text-1',
            start: "top 95%",
            end: "top 95%",
        }
    })

    gsap.from('.text-4', {
        y: 50,
        rotateX: -90,
        skewX: 10,
        opacity: 0,
        duration: 1.2,
        delay: 1,
        clearProps: "all",
        scrollTrigger: {
            trigger: '.text-1',
            start: "top 95%",
            end: "top 95%",
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

function footerSection() {
    hamburger.classList.remove('active')
    header.classList.remove('expand');
    footer.scrollIntoView()
}

var swiper = new Swiper(".swiper", {
    effect: 'coverflow',
    roundLengths: true,
    grabCursor: true,
    centeredSlides: true,
    initialSlide: 3,
    slidesPerView: 'auto',
    preventClicks: true,
    speed: 200,
    spaceBetween: 0,
    coverflowEffect: {
        rotate: 40,
        slideShadows: true,
    },
    on: {
        click(event) {
            swiper.slideTo(this.clickedIndex)
        },
    }
});