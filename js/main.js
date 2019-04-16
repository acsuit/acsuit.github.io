$('#toggle').click(function() {
	$('.container').toggle();
});

var waterPercent = 0;

$('#reset-button').click(function() {
    $('.inner-glass').height(function(){
    	waterPercent = 0;
		waterLevel = waterPercent + '%';
      	return waterLevel;
    });
});

$('.3percent').click(function() {
    $('.inner-glass').height(function(){
    	waterPercent += 3;
    	rightPercent = waterPercent + '%';
    	return rightPercent;
    });
});

$('.7percent').click(function() {
    $('.inner-glass').height(function(){
    	waterPercent += 7;
    	rightPercent = waterPercent + '%';
    	return rightPercent;
    });
});

$('.10percent').click(function() {
    $('.inner-glass').height(function(){
    	waterPercent += 10;
    	rightPercent = waterPercent + '%';
    	return rightPercent;
    });
});

$('.17percent').click(function() {
	$('.inner-glass').height(function(){
    waterPercent += 17;
    rightPercent = waterPercent + '%';
    return rightPercent;
    });
});

$('.tasks button').click(function(){ 
	if (waterPercent < 30) {
		$('.score').html("<p>You're doing great! "  + waterPercent + '</p>');
	} else if (waterPercent < 70) {
		$('.score').html("<p>Don't give up! "  + waterPercent + '</p>');
	} else if (waterPercent < 90) {
		$('.score').html('<p>Almost there! '  + waterPercent + '</p>');
	} else if (waterPercent > 90) {
		$('.tasks button').attr('disabled', 'disabled');
		$('.score').html('<p>You filled it too much, try again? '  + waterPercent + '</p>');
	} else {
		$('.score').html('<p>Congrats, you filled your glass! '  + waterPercent + '</p>');
		$('.tasks button').attr('disabled', 'disabled');
		
	};
});


$('#reset-button').click(function() {
	waterPercent = 0;
    $('.inner-glass').height(function(){
		waterLevel = waterPercent + '%';
      	return waterLevel;
    });
    $('.score').html('<p>RESET!' + waterPercent + '</p>');
    $('.tasks button').attr('disabled', false);
});
