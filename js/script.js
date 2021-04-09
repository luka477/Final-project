const faBars = document.getElementsByClassName('fa-bars')[0]
const nav = document.getElementsByClassName('nav')[0]

faBars.addEventListeren('click', () => {
	nav.classList.fa('active')
})