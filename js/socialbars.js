$(document).ready(function() {
	
	// ["Label" , "website link" , "bar color" , "bar image"]
	var social = [
	
	 ["facebook", 	"http://fb.com", 			"#3B5998", "images/facebook.png"],

	 ["google+", 	"http://google.com", 		"#dd4b39", "images/google_plus.png"],

	 ["linkedin", 	"https://www.linkedin.com/","#0e76a8", "images/linkedin.png"],

	 ["rss", 		"http://postrss.com/", 		"#ee802f", "images/rss.png"],

	 ["twitter", 	"https://twitter.com/", 	"#55acee", "images/twitter.png"],

	 ["youtube", 	"http://youtube.com", 		"#c4302b", "images/youtube.png"],

	 ];

////////////////////////////////////////////////	
//// DO NOT EDIT ANYTHING BELOW THIS LINE! /////
////////////////////////////////////////////////
		
	$("#socialside").append('<ul class="mainul"></ul>');
	
	/// generating bars
	for(var i=0;i<social.length;i++){
	$(".mainul").append("<li>" + '<ul class="scli" style="background-color:' + social[i][2] + '">' +
						'<li>' + social[i][0] + '<img src="' + social[i][3] + '"/></li></ul></li>');
	 				}
	
	/// bar click event
	$(".scli").click(function(){
		var link = $(this).text();		
		for(var i=0;i<social.length;i++){
			if(social[i][0] == link){
				window.open(social[i][1]);
			}
		}		
	});
	
	/// mouse hover event
	$(".scli").mouseenter(function() {	
		$(this).stop(true);	
		$(this).clearQueue();
			$(this).animate({
				left : "140px"
			}, 300);
				
	});

	/// mouse out event
	$(".scli").mouseleave(function(){
		$(this).animate({
			left:"0px"
		},700,'easeOutBounce');
	});

});
