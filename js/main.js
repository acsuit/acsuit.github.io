// toggle the info tray

$('#toggle').click(function() {
	$('.tray').toggle();
});

var waterPercent = 0; //global variable to control the water height

//resets the whole page so you can try again

$('#reset-button').click(function() {
	waterPercent = 0;
    $('.water-left').height(function(){
		waterLevel = waterPercent + '%';
      	return waterLevel;
    });
    $('.water-right').height(function(){
		waterLevel = waterPercent + '%';
      	return waterLevel;
    });

    $('.encourage').html("<p>Let's try again</p>");
    $('.water-left').removeClass('win-water-left');
    $('.water-right').removeClass('win-water-right');
    console.log('current: ' + waterPercent);
    $('.tasks button').attr('disabled', false);
});

//water for the 3% buttons

$('.3percent').click(function() {
	waterPercent += 3;
    $('.water-left').height(function(){
    	rightPercent = waterPercent + '%';
    	return rightPercent;
    });
    $('.water-right').height(function(){
    	rightPercent = waterPercent + '%';
    	return rightPercent;
    });
});

//water for the 7% buttons

$('.7percent').click(function() {
	waterPercent += 7;
    $('.water-left').height(function(){	
    	rightPercent = waterPercent + '%';
    	return rightPercent;
    });
    $('.water-right').height(function(){	
    	rightPercent = waterPercent + '%';
    	return rightPercent;
    });
});

//water for the 10% buttons

$('.10percent').click(function() {
	waterPercent += 10;
    $('.water-left').height(function(){
    	rightPercent = waterPercent + '%';
    	return rightPercent;
    });
    $('.water-right').height(function(){
    	rightPercent = waterPercent + '%';
    	return rightPercent;
    });
});

//water for the 17% buttons

$('.17percent').click(function() {
	waterPercent += 17;
	$('.water-left').height(function(){
	    rightPercent = waterPercent + '%';
	    return rightPercent;
    });
	$('.water-right').height(function(){
	    rightPercent = waterPercent + '%';
	    return rightPercent;
    });
});

/* controls the message above the glass, if the buttons are disabled
and applies win conditions */

$('.tasks button').click(function(){ 
	if (waterPercent < 30) {
		$('.encourage').html("<p>You're doing great!</p>");
		console.log('current: ' + waterPercent);
	} else if (waterPercent < 70) {
		$('.encourage').html("<p>Don't give up!</p>");
		console.log('current: ' + waterPercent);
	} else if (waterPercent < 90) {
		$('.encourage').html('<p>Almost there!</p>');
		console.log('current: ' + waterPercent);
	} else if (waterPercent > 90) {
		$('.tasks button').attr('disabled', 'disabled');
		$('.encourage').html('<p>You filled it too much, try again?</p>');
		console.log('current: ' + waterPercent);
	} else {
		$('.encourage').html('<p>Congrats, you filled your glass!</p>');
		$('.water-left').addClass('win-water-left');
		$('.water-right').addClass('win-water-right');
		$('.tasks button').attr('disabled', 'disabled');
		console.log('current: ' + waterPercent);		
	};
});
