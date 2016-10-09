var temp = 0;

populate();

document.getElementById("submit").onclick = function() {
	temp = parseInt(document.getElementById("weather").value);
	temp = ((temp * 1.8) + 32);
	document.getElementById("weather-conversion").innerHTML = temp;
	showImage();
}


function populate () {
	document.getElementById("weather-conversion").innerHTML = temp;
}

function showImage () {
	console.log( "here" );
	if (temp < 31) {
		document.getElementById("weather-image").style.backgroundImage = "url('images/winter.jpg')";
		console.log("Winter is coming");
	} else if ( (temp > 30) && (temp < 51) ) {
		document.getElementById("weather-image").style.backgroundImage = "url('images/fall.jpg')";
		console.log("Fall is in the air");
	} else if ( (temp > 50) && (temp < 71) ) {
		document.getElementById("weather-image").style.backgroundImage = "url('images/spring.jpg')";
		console.log("Springtime for Hitler");
	} else if (temp > 70) {
		document.getElementById("weather-image").style.backgroundImage = "url('images/summer.jpg')";
		console.log("Summer is hawt");
	} else {
		console.log("WTF did you do?!");
	}
}




// conversion formula F = (C * 1.8) + 32