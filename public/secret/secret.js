
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

