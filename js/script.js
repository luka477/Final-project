const faBars = document.getElementsByClassName('toggle-button')[0]
const nav = document.getElementsByClassName('nav-ul')[0]

faBars.addEventListener('click', () => {
	nav.classList.toggle('active')
});