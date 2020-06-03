const output = document.getElementById('output')

window.log = (input) => {
	output.innerHTML += `${input || ''}<br>`
}