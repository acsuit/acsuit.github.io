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

$('.5percent').click(function() {
    $('.inner-glass').height(function(){
    	waterPercent += 5;
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

$('.15percent').click(function() {
    $('.inner-glass').height(function(){
    	waterPercent += 15;
    	rightPercent = waterPercent + '%';
    	return rightPercent;
    });
});

$('.tasks button').click(function(){ 
	if (waterPercent < 100) {
		$('.score').html('<p>KEEP GOING! '  + waterPercent + '</p>');
	} else if (waterPercent > 100) {
		$('.tasks button').attr('disabled', 'disabled');
		$('.score').html('<p>YOU LOSE! '  + waterPercent + '</p>');
	} else {
		$('.score').html('<p>YOU WIN! '  + waterPercent + '</p>');
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
