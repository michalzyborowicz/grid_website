const burgerBtn = document.querySelector('.hamburger')
const navMob = document.querySelector('.nav-mobile')
const footerYear = document.querySelector('.footer__year')
const navLink = document.querySelectorAll('a.nav__link')

const handleCurrenYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}



function enableScroll() {
    window.onscroll = function() {};
}

const navSlide = () => {
	burgerBtn.classList.toggle('is-active')

	navMob.classList.toggle('nav-mobile--active')


}
const navRemover = () => {
	navMob.classList.remove('nav-mobile--active')
}

burgerBtn.addEventListener('click', navSlide)
//window.addEventListener('scroll', navSlide)
navLink.addEventListener('click', navSlide)

handleCurrenYear()
