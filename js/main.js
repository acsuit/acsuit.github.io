$('#toggle').click(function() {
	console.log($('.rules').css('display'));
	console.log('click');
	$('.rules').toggle();
});

var waterPercent = 0;

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