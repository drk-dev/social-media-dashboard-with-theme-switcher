const btn = document.getElementById("checkbox")
const topBg = document.querySelector(".top-bg")
const header = document.querySelector(".header")
const darkBtn = document.querySelector('.dark')
const slider = document.querySelector('.slider')
const fcb = document.querySelector(".facebook")
const twt = document.querySelector(".twitter")
const inst = document.querySelector(".instagram")
const ytb = document.querySelector(".youtube")
const body = document.querySelector(".body-bg")
const ow = document.querySelector(".ow")
const card1 = document.querySelector(".card1")
const card2 = document.querySelector(".card2")
const card3 = document.querySelector(".card3")
const card4 = document.querySelector(".card4")
const card5 = document.querySelector(".card5")
const card6 = document.querySelector(".card6")
const card7 = document.querySelector(".card7")
const card8 = document.querySelector(".card8")






btn.addEventListener('click', () => {
    topBg.classList.toggle('light')
    header.classList.toggle('light-h1')
    darkBtn.classList.toggle("light-text")
    slider.classList.toggle("slider-light")
    fcb.classList.toggle("card-light")
    twt.classList.toggle("card-light")
    inst.classList.toggle("card-light")
    ytb.classList.toggle("card-light")
    body.classList.toggle("body-light")
    ow.classList.toggle("light-text")
    card1.classList.toggle("card-light")
    card2.classList.toggle("card-light")
    card3.classList.toggle("card-light")
    card4.classList.toggle("card-light")
    card5.classList.toggle("card-light")
    card6.classList.toggle("card-light")
    card7.classList.toggle("card-light")
    card8.classList.toggle("card-light")


})


