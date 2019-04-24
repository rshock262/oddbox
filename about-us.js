$(document).ready(function(){
	$.getJSON("about-us-content.json", function(data){
			//clears the element before looping through the received json
			$("#contentTarget").html("");
			//loops through the json file and adds the data from the fields
			$.each(data.info, function(k,v){
				$("#contentTarget").append(
					"<h1 class='pageHeading'>" + v.head + "</h1>"
					+"<p>" + v.text + "</p>"
				)
			});
	});
});
