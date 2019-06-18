require('./sidebar.js');

function filterElements() {
	let isInherited = !$("#show-inherited").hasClass("deselected");
	let isPublic = !$("#show-public").hasClass("deselected");
	let isProtected = !$("#show-protected").hasClass("deselected");
	let isPrivate = !$("#show-private").hasClass("deselected");

	$("div.public").each(function(index, val) {
		$(val).toggle(
			isPublic && !($(val).hasClass("inherited_from") && !isInherited)
		);
	});
	$("div.protected").each(function(index, val) {
		$(val).toggle(
			isProtected && !($(val).hasClass("inherited_from") && !isInherited)
		);
	});
	$("div.private").each(function(index, val) {
		$(val).toggle(
			isPrivate && !($(val).hasClass("inherited_from") && !isInherited)
		);
	});
}

$(document).ready(function() {
	$("#show-public, #show-protected, #show-private, #show-inherited")
		.css("cursor", "pointer")
		.click(function() {
			$(this).toggleClass("deselected");
			if ($(this).hasClass("deselected")) {
				$(this).fadeTo("fast", "0.4");
			} else {
				$(this).fadeTo("fast", "1.0");
			}
			filterElements();
			return false;
		});
	$("#show-protected, #show-private").click();
});
