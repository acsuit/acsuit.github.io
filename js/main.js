$('#toggle').click(function() {
	$('#rules').toggle();
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