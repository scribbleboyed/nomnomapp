$(document).ready(function() {

	$('.videoDiv').hover(function() {
		$(this).children("video")[0].play();
	}, function() {
		var el = $(this).children("video")[0];
		el.pause();
		el.currentTime = 0;
	});

	$('#editButton').click(function(e) {
		e.preventDefault();
		if ($('.editable').attr('disabled')) {
			$('.editable').removeAttr('disabled');
			$('.editable').addClass('editMode');
		} else {
			$('.editable').attr('disabled', 'disabled');
			$('.editable').removeClass('editMode');
			$('#updateButton').toggle();
		}
	});
});