
const bulp1 = '1'
const bulp2 = '2'

function light(sw, bulp) {
	var pic;
	if (sw == 0) {
		pic = "pic_bulboff.gif"
	} else {
		pic = "pic_bulbon.gif"
	}
	document.getElementById('myImage' + bulp).src = pic;
}

function hello() {
	window.alert("Hello! I am an alert box!!")
}

function myFunction(p1, p2) {
	return p1 * p2;              // The function returns the product of p1 and p2
}


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
	'when nerds makes memes be like...'
]

function randomMemes() {
	return memes[Math.floor(Math.random() * memes.length)];
}

