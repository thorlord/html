

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
	'https://heavyeditorial.files.wordpress.com/2016/11/screen-shot-2016-11-08-at-11-44-23-pm.jpg',
	'https://i.ytimg.com/vi/9mv17I9mGKw/maxresdefault.jpg',
	'https://i2.wp.com/picsdownloadz.com/wp-content/uploads/2016/09/their-yard-sign-said-trump-momma-hates-trump-Funny-hilarious-trump-Memes.jpg',
	'https://cdn.pastemagazine.com/www/system/images/photo_albums/trump-memes/large/150714204025-moos-trump-your-cat-meme-erin-00000918-full-169.jpg?',
	'https://fthmb.tqn.com/hHDgGNVFaGS1ALYY09-NfHiQBYQ=/768x0/filters:no_upscale()/trump-wall-been-there-56dfa04f5f9b5854a9f6c87e.jpg',
	'https://heavyeditorial.files.wordpress.com/2017/06/cover20.jpg',
	'http://mojly.com/wp-content/uploads/2017/11/http3A2F2Fwww.fungur.com2Fuploads2F20162F092Ffunniest-Donald-Trump-Hillary-Clinton-Memes-5.jpg',
	'https://lgbtqnation-assets.s3.amazonaws.com/assets/2017/11/Capture-400x283.jpg',
	'https://s-media-cache-ak0.pinimg.com/originals/7c/5b/1a/7c5b1a580c2e22072da1fb784b7197bf.jpg',
	'http://www.funnybeing.com/wp-content/uploads/2017/02/So-You-Are-Saying-Donald-Trump-600x586.jpg',
	'https://img.buzzfeed.com/buzzfeed-static/static/2017-01/26/15/campaign_images/buzzfeed-prod-fastlane-02/14-memes-mexicans-are-using-to-deal-with-the-wall-2-32271-1485462846-2_dblbig.jpg',
	'https://us-east-1.tchyn.io/snopes-production/uploads/2015/08/bachmann.jpg',
	'https://fthmb.tqn.com/hpbraJnJIR0pIFhX9-BIcj1D5O4=/768x0/filters:no_upscale()/trump-hillary-deplorables-57d70f155f9b589b0a3f056b.jpg',
	'https://racistmemes.com/wp-content/uploads/2017/03/mexican-memes-jokes.jpg',
	'https://cdn-images-1.medium.com/max/1600/1*_IHjai_aoBoWYi0Bw_IANQ.png',
	'https://i.imgflip.com/1i01l4.jpg',
	'http://politicalpunchline.com/wp-content/uploads/2018/01/wall-mexico-pay-stupid.jpg',
]

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
function randomImageMemes() {
	return imageMemes[Math.floor(Math.random() * imageMemes.length)];
}
function displayImageMemes() {
	document.getElementById("imagememes").src = randomImageMemes()
}

function randomMemes() {
	return memes[Math.floor(Math.random() * memes.length)];
}

function displayMemes(id) {
	document.getElementById('memes').innerHTML = randomMemes()
}
