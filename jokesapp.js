$(document).ready( function() {

	$('button').click( function() {
		$('.jokeAnswer').hide();
		$(this).parent().find('.jokeAnswer').show();
	});



});