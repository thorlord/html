// Array of strings
const imageMemes = [
	'https://i.imgur.com/BKsoNEr.png',
	'https://www.humortimes.com/wp-content/uploads/2017/01/trump-once-called-bnd7mo.jpg',
	'https://i.ytimg.com/vi/I_cd2THVfgc/maxresdefault.jpg',
	'http://worldwideinterweb.com/wp-content/uploads/2016/03/all-the-memes-in-the-world.jpg',
	'http://politicalpunchline.com/wp-content/uploads/2017/08/trump-joke-bar.jpg',
	'https://www.humortimes.com/wp-content/uploads/2017/02/hi-there-donny.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX0r5EjROqX83Fsy_2iPvfkRhRRw1EkHkIDIVVF2lfwrkVz1GN',
	'http://www.dumpaday.com/wp-content/uploads/2016/11/119.jpg',
	'http://i0.kym-cdn.com/photos/images/newsfeed/001/154/781/e7f.jpg',
	'https://heavyeditorial.files.wordpress.com/2016/11/screen-shot-2016-11-08-at-11-44-23-pm.jpg?quality=65&strip=all&w=780',
	'https://i.ytimg.com/vi/9mv17I9mGKw/maxresdefault.jpg',
	'https://i2.wp.com/picsdownloadz.com/wp-content/uploads/2016/09/their-yard-sign-said-trump-momma-hates-trump-Funny-hilarious-trump-Memes.jpg?resize=600%2C451',
	'http://www.funnybeing.com/wp-content/uploads/2017/02/Mexicans-Training-For-Donald-Trumps-Wall.png',
	'https://pics.me.me/donald-trumps-hair-finally-runs-off-to-seek-a-better-12189603.png',
	''
]

// Function named with camelcase - first letter always small, consecutive words uppercased first letter. 
function randomImageMemes() {
	return imageMemes[Math.floor(Math.random() * imageMemes.length)];
}

function displayImageMemes() {
	document.getElementById("imagememes").src = randomImageMemes()
}
