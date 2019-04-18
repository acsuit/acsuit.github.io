$('#toggle').click(function() {
	$('.tray').toggle();
});

var waterPercent = 0;

$('#reset-button').click(function() {
    $('.water-left').height(function(){
    	waterPercent = 0;
		waterLevel = waterPercent + '%';
      	return waterLevel;
    });
    $('.water-right').height(function(){
    	waterPercent = 0;
		waterLevel = waterPercent + '%';
      	return waterLevel;
    });

    $('.encourage').html("<p>Let's try again</p>");
    $('.water-left').removeClass('win-water-left');
    $('.water-right').removeClass('win-water-right');
    console.log('current: ' + waterPercent);
    $('.tasks button').attr('disabled', false);
});

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
