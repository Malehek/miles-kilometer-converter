( function (){

    "use strict";

    var convertType = "miles";
		var header =  document.querySelector ('h1');
		var intro = document. querySelector ('p');
		var answer = document.getElementById ('answer');
		var form = document.getElementById ('convert');

		document.addEventListener ('keydown', function(event){
			var key = event.code;
			
			if (key === 'KeyK'){
				//change the header
				header.innerHTML = "Kilometers to miles converter";

				//change the intro paragraph
				intro.innerHTML = "Type in a number of kilometers and click the button to convert the distance to miles";

				//change the value of the convertType variable
				convertType = "Kilometers";
			}
			else if (key === 'KeyM'){
				//change the header
				header.innerHTML = "Miles to kilometers converter";

				//change the intro paragraph
				intro.innerHTML = "Type in a number of miles and click the button to convert the distance to kilometers";

				//change the value of the convertType variable
				convertType = "miles";

			}
		});

		form.addEventListener ('submit', function (event){

			event.preventDefault();

			var distance = parseFloat(document.getElementById ('distance').value);

			if (distance){
				//convert M to k rate is 1.609344
				if (convertType === 'miles'){
					var convertedDistance = (distance * 1.609344).toFixed(3);
					answer.innerHTML = `${distance} miles is converted to ${convertedDistance} kilometers`;
				}
				else{
				//convert K to M rate is 0.621371192
				    var convertedDistance = (distance * 0.621371192).toFixed(3);
					answer.innerHTML = `${distance} kilometers is converted to ${convertedDistance} miles`;
				}
				
			}

			else {
				answer = "please enter a number!";
			}
		});
})();