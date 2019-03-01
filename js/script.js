
$(document).ready(function(){
	$('a').click(function(){

		var selected = $(this);
		$('a').removeClass('active');
		$(selected).addClass('active');			
	});

	var $a = $('.a'),
	$b = $('.b'),
	$c = $('.c'),
	$d = $('.d'),
	$home = $('.home'),
	$habilidades = $('.habilidades'),
	$intereses = $('.intereses'),
	$contacto = $('.contacto');

	$a.click(function(){
		$home.fadeIn();
		$habilidades.fadeOut();
		$intereses.fadeOut();
		$contacto.fadeOut();
	});
	$b.click(function(){
		$habilidades.fadeIn();
		$home.fadeOut();
		$intereses.fadeOut();
		$contacto.fadeOut();
	});
	$c.click(function(){
		$intereses.fadeIn();
		$home.fadeOut();
		$habilidades.fadeOut();
		$contacto.fadeOut();
	});
	$d.click(function(){
		$contacto.fadeIn();
		$home.fadeOut();
		$intereses.fadeOut();
		habilidades.fadeOut();
	});
});