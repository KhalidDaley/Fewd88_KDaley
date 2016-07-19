
$(document).ready(function(){
	var total = 0;

	$('#a10').click(function(){
		total = total + 10;
		$('#out').html(total);
		$('#out').css('background-color', 'brown');
	});

	$('#a20').click(function(){
		total = total + 20;
		$('#out').html(total);
		$('#out').css('background-color', 'pink');
	});

	$('#a30').click(function(){
		total = total + 30;
		$('#out').html(total);
		$('#out').css('background-color', 'orange');
	});

	$('#n10').click(function(){
		total = total - 10;
		$('#out').html(total);
		$('#out').css('background-color', 'blue');
	});

	$('#n20').click(function(){
		total = total - 20;
		$('#out').html(total);
		$('#out').css('background-color', 'purple');
	});

	$('#n30').click(function(){
		total = total - 30;
		$('#out').html(total);
		$('#out').css('background-color', 'red');
	});

	$('#green').click(function(){
		$('#out').css('background-color', 'green');
	});

	$('#yellow').click(function(){
		$('#out').css('background-color', 'yellow');
	});

	$('#out').click(function(){
		total = 0;
	});
		
	$('#out')
		.css('background-color', 'white')
		.html(total);
	});


