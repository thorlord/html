// Array of strings
const imageMemes = [
	'https://i.imgur.com/BKsoNEr.png',
	'https://www.humortimes.com/wp-content/uploads/2017/01/trump-once-called-bnd7mo.jpg',
	'https://i.ytimg.com/vi/I_cd2THVfgc/maxresdefault.jpg',
	'http://worldwideinterweb.com/wp-content/uploads/2016/03/all-the-memes-in-the-world.jpg',
	'http://politicalpunchline.com/wp-content/uploads/2017/08/trump-joke-bar.jpg',
	'https://www.humortimes.com/wp-content/uploads/2017/02/hi-there-donny.jpg',
]

// Function named with camelcase - first letter always small, consecutive words uppercased first letter. 
function randomImageMemes() {
	return imageMemes[Math.floor(Math.random() * imageMemes.length)];
}

function displayImageMemes() {
	document.getElementById("imagememes").src = randomImageMemes()
}
