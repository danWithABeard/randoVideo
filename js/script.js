$( window ).load(function() {

	//declare video array with video titles
	var video = [ "beach", "ny", "rockclimb", "rockpool", "seattle", "snowboard3", "wind"];
	
	// Count the number of elements of an array
	Object.size = function(obj) {
    	var size = 0, key;
		for (key in obj) {
        	if (obj.hasOwnProperty(key)) size++;
		}
    	return size;
	};

	// Gets the size of the video array
	var size = Object.size(video);
	
	//picks random number between 0 and array's total size
	var numRand = Math.floor(Math.random()*size) + parseFloat(0);
	
    //sets image background css and video source attributes with selected video name	
	$("#video-source").attr("src",'video/' + video[numRand] + '.mp4');
	$("#introduction").css("background-image",'url(img/' + video[numRand] + '.png)');
		
	//Gets the inital size of the browser window
	var h = $(window).height();
	
	$("#introduction").css({"height" : h});
	
	//Adjusts slide height when window is resized
	$(window).resize(function() {
	
    	var h = $(window).height();
    	$("#introduction").css({"height": h});	
	});
});