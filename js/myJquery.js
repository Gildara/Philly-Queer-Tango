$(document).ready(function() {
	$.get("includes/header.inc.html", function(data) {
		$("#header").html(data);
		var pageId = $("body").attr("id");
		var navId = "#" + pageId + "-nav-link";
		$(navId).parent().addClass("active");
	});
	
	$.get("includes/footer.inc.html", function(data) {
		$("#footer").html(data);
	});


});



