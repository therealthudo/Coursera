$(document).ready(function(){
	var paused = false;
			
	/* Link thumbnail images and big image */
	$(".thumbnail-image").click(function(){
		$("#big-image").attr('src',
			$(this).attr('src'));
	});

	var counter = 1;

	$("#image"+counter).click();
			
	/* Button functionalities */
	$("#backward").click(function(){
		counter = counter - 1;
		if(counter < 1){
			counter = 6;
		}
		$("#image"+counter).click();
	});

	$("#forward").click(function(){
		counter = counter + 1;
		if(counter > 6){
			counter = 1;
		}
		$("#image"+counter).click();
	});

	/* Set Intervals */
	$("#big-image").click(function(){
		paused = !paused;
	});

	setInterval(function(){
		if(!paused){
			$("#forward").click();
		};
	},4000);
});