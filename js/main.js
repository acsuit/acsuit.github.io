$('#toggle').click(function() {
	$('#rules').toggle();
});

var waterPercent = 0;

$('.5percent').click(function() {
    $('.inner-glass').height(function(n,waterPercent){
      return waterPercent+5 + '%';
    });
});