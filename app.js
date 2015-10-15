var person1 = {
		name : "Scott",
		location: "Bloomington",
		occupation: "Teacher"
	};
var person2 = {
		name : "Kris",
		location: "Richfield",
		occupation: "Teacher"
	};
var person3 = {
		name : "Dana",
		location: "Roseville",
		occupation: "Teacher"
	};

function someNumber(){
	return 5;
}

var array = [person1, person2, person3];	

$(document).ready(function(){
	// $("#sampleButton").click(function(){
	// 	console.log("Button is indeed being clicked");
	// });

	//vars
	//event listeners
	//functions
	//execution

	$("#container").on('click', '.someButton',function(){
		console.log("Button is indeed being clicked");
	});

	for(var i = 0; i < array.length; i++){
		$("#container").append("<div class='userContainer'></div>");
		var $el = $("#container").children().last();

		$el.append("<p>" + array[i].name + "</p>");
		$el.append("<p>" + array[i].location + "</p>");
		$el.append("<p>" + array[i].occupation + "</p>");
		$el.append("<button class='someButton'>Click me</button>");
	}
});


//.append() - Adds as the last child to the ref. parent
//.prepend() - Adds as the first child to the ref. parent