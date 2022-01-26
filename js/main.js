const burgerBtn = document.querySelector('.hamburger')
const navMob = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer__year')



const handleCurrenYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year
}

const navSlide = () => {
burgerBtn.classList.toggle('is-active')

    navMob.classList.toggle('nav-mobile--active')
}






burgerBtn.addEventListener('click', navSlide)




handleCurrenYear()