$(document).ready(function(){
	$(".table-person-list tr").click(function(){
		location.href = $(this).attr('data-href');
		return false;
	});
});
