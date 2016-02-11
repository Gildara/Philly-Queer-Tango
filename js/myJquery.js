$(document).ready(function() {
	$.get("includes/header.inc.html", function(data) {
		$("#header").html(data);
	});
	
	$.get("includes/footer.inc.html", function(data) {
		$("#footer").html(data);
	});


	$("li a").click (function (e) {
		$(this).addClass('active').siblings().removeClass('active');
	});

});








