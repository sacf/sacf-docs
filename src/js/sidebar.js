 (function($){

	$(document).ready(function(){
		const sidebarNav = $('#sidebar-nav');
		const sidebarNavSections = sidebarNav.children('.sidebar-section');
		const sidebarNavSectionTriggers = sidebarNav.children('h3');

		sidebarNavSections.slideUp(0);
		sidebarNav.find('#sidebar-packages').next('.sidebar-section').slideDown(0);


		sidebarNavSectionTriggers.click( function(e) {

			e.preventDefault();
			if($(this).hasClass('section-open')){
				$(this).removeClass('section-open');
				$(this).next('.sidebar-section').slideUp(300);
			}else{
				sidebarNavSectionTriggers.filter('.section-open').removeClass('section-open');
				$(this).addClass('section-open');
				sidebarNavSections.slideUp(300);
				$(e.target).next('.sidebar-section').slideDown(300);
			}
			
		});


	});

 })(jQuery);