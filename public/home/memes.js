// Array of strings
const imageMemes = [
	'https://i.imgur.com/BKsoNEr.png',
	'https://www.humortimes.com/wp-content/uploads/2017/01/trump-once-called-bnd7mo.jpg',
	'https://i.ytimg.com/vi/I_cd2THVfgc/maxresdefault.jpg',
]

// Function named with camelcase - first letter always small, consecutive words uppercased first letter. 
function randomImageMemes() {
	return imageMemes[Math.floor(Math.random() * imageMemes.length)];
}

function displayImageMemes() {
	document.getElementById("imagememes").src = randomImageMemes()
}
