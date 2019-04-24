$(document).ready(function(){
	//URL of specific tweet with the oddbox team
	embedurl="https://twitter.com/TriGameNight/status/914997083492335616"
	$.ajax({
		type: "get",
		//appends the url to the twitter api which allows returns a json with
		//it's own html formatting that makes it embeddable
		url: "https://api.twitter.com/1/statuses/oembed.json?url="+embedurl,
		//allows for cross-origin resources
		dataType: "jsonp",
		//error message on page with details in console
		error: function(status, error){
			$("#embeddedTweet").html("Unable to load tweet")
			console.log(status)
			console.log(error)
		},
		success: function(data){
			//clears the element and then appends the html from the twitter json
			$("#embeddedTweet").html("").append(data.html)
		}
	});
});
