import '../scss/styles.scss'

const btnOpen = document.querySelector('#btnOpen')
const btnClose = document.querySelector('#btnClose')
const media = window.matchMedia('(max-width: 1110px)')
const navContent = document.querySelector('.nav__content')
const navOverlay = document.querySelector('.nav__overlay')

function openMobileMenu() {
	btnOpen.setAttribute('aria-expanded', 'true')
}

function closeMobileMenu() {
	btnOpen.setAttribute('aria-expanded', 'false')
}

function setupNav(e) {
	if (e.matches) {
		setTimeout(() => {
			navContent.style.display = 'block'
			navOverlay.style.display = 'block'
		}, 500)
	} else {
		navContent.style.display = ''
		navOverlay.style.display = ''
	}
}

setupNav(media)

btnOpen.addEventListener('click', openMobileMenu)
btnClose.addEventListener('click', closeMobileMenu)

media.addEventListener('change', function (e) {
	setupNav(e)
})

document.querySelectorAll('a').forEach((a) => {
	a.addEventListener('click', (e) => {
		e.preventDefault()
	})
})
