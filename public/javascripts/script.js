$(document).ready(function() {

	console.log("javascript loaded");

	$('.videoDiv').hover(function() {
		console.log("test");
		$(this).children("video")[0].play();
	}, function() {
		var el = $(this).children("video")[0];
		el.pause();
		el.currentTime = 0;
	});

	$('#editButton').click(function(e) {
		e.preventDefault();
		$('.hiddenButton').toggle();
		if ($('.editable').attr('disabled')) {
			$('.editable').removeAttr('disabled');
			$('.editable').addClass('editMode');
		} else {
			$('.editable').attr('disabled', 'disabled');
			$('.editable').removeClass('editMode');
		}
	});
});