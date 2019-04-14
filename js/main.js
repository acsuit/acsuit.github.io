$('#toggle').click(function() {
	console.log($('.rules').css('display'));
	console.log('click');
	$('.container').toggle();
});

var waterPercent = 0;

$('.buttons button').click( function(){ 
	console.log('work bitch');
	if (waterPercent < 100) {
		console.log('hi');
		$('.score').html('<p>KEEP GOING!'  + waterPercent + '</p>');
	} else if (waterPercent > 100) {
		console.log('lose');
		$('.score').html('<p>YOU LOSE!'  + waterPercent + '</p>');
	} else {
		$('.score').html('<p>YOU WIN!'  + waterPercent + '</p>');
		console.log('lose');
	};
});

$('.5percent').click(function() {
    $('.inner-glass').height(function(){
    	waterPercent += 5;
    	console.log(waterPercent);
    	rightPercent = waterPercent + '%';
      	return rightPercent;
    });
});

$('.10percent').click(function() {
    $('.inner-glass').height(function(){
    	waterPercent += 10;
    	console.log(waterPercent);
    	rightPercent = waterPercent + '%';
      	return rightPercent;
    });
});

$('.15percent').click(function() {
    $('.inner-glass').height(function(){
    	waterPercent += 15;
    	console.log(waterPercent);
    	rightPercent = waterPercent + '%';
      	return rightPercent;
    });
});

