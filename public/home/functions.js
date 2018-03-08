// Array of strings
const memes = [
	'Cheese bags can be hard to open for teenage slackers', 
	'Ham is an important engredient in a nerd toast', 
	'Lettuce is too healthy', 
	'Bread is not a color that resembles cyan', 
	'Tomato is the prefered color in most web examples', 
	'Mustard is totally deept fried', 
	'Ketchup is like tomato, pretty bloody', 
	'Pickles is like being in a jam ... pickle',
	'Thorlord is one deep fried teenage slacker hacker ... ',
	'When nerds makes memes be like...'
]

// Function named with camelcase - first letter always small, consecutive words uppercased first letter. 
function randomMemes() {
	return memes[Math.floor(Math.random() * memes.length)];
}

function displayMemes(id) {
	document.getElementById('memes').innerHTML = randomMemes()
}
