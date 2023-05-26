jQuery(function () {
	jQuery("a[href$='.pdf']").each(function() {
	jQuery(this).click(function() {
		window.open(jQuery(this).attr("href"));
		return false;
	});
	});

	//URL
	var urlHash = location.hash;
	if (urlHash) {
		jQuery('body,html').stop().scrollTop(0);
		setTimeout(function () {
			scrollToAnker(urlHash) ;
		}, 100);
	}

	//usual click
	jQuery('a[href^="#"]').click(function() {
		var href= jQuery(this).attr("href");
		var hash = href == "#" || href == "" ? 'html' : href;
		scrollToAnker(hash);
		return false;
	});
	function scrollToAnker(hash) {
		var windowWidth = jQuery(window).width();
		var target = jQuery(hash);
			if(windowWidth > 736){ //PC
				var position = target.offset().top-150;
			}else{//SP
				var position = target.offset().top-20;
			}
		jQuery('body,html').stop().animate({scrollTop:position}, 500);
	}

	jQuery(window).scroll(function () {
		//totop
		if (jQuery(this).scrollTop() > 200 ) {
			jQuery('#totop').fadeIn();
		} else {
			jQuery('#totop').fadeOut();
		}
	});

});
