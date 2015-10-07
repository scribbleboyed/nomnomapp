$(document).ready(function() {

	// $.get('https://api.doughnuts.ga/doughnuts/3').done(function(response) {
	// 	var results = response;
	// 	console.log(results);
	// });

	$.get('https://api.doughnuts.ga/doughnuts').done(function(response) {
		event.preventDefault();
		var results = response;
		// var button = $('<input type="button" value="delete"/>');
		for (var i = 0; i < results.length; i++) {
			$('#doughnuts').prepend('<li id="'+results[i].id+'">'+results[i].style+' - '+results[i].flavor+' - '+'</li>');
			var button = $('<button class="deleteButton" id="'+results[i].id+'"">X</button>');
			$('li#' + results[i].id).append(button);
		}

		$('.deleteButton').click(function(event){
			event.preventDefault();
			var id = $(this).attr('id');
			deleteDonut(id);
		});

		var deleteDonut = function(id) {
			$.ajax({
				url: "https://api.doughnuts.ga/doughnuts/"+id,
			    type: 'DELETE',
			    success: function(){
			    	$('li#'+id).remove();
				}
	    	});
		};

		var updateDonut = function(id) {
			$.ajax({
				url: "https://api.doughnuts.ga/doughnuts/"+id,
			    type: 'PUT',
			    success: function(){
			    	$('li#'+id).remove();
				}
	    	});
		}
	});


	$('#submitButton').click(function(event){
		event.preventDefault();

		var newDonut = {
			flavor: $('input#doughnut-flavor').val(),
			style: $('select#doughnut-style').val()
		};

		$.post('https://api.doughnuts.ga/doughnuts', newDonut).done(function(response){
			console.log(response);
			$('#doughnuts').prepend('<li>'+response.flavor+' - ' +response.style+'</li>');
		});
	});

});





