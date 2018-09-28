$(document).ready(function(){
	  $('.slider').slick({
	  infinite: true,
	  prevArrow: $('.prev'),
	  nextArrow: $('.next'),
	});

	 $('.tabs_menu a').click(function(e) {
        e.preventDefault();
        $('.tabs_menu .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });


		$(".tab_item").not(":first").hide();
		$(".wrapper .tab").click(function() {
			$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
			$(".tab_item").hide().eq($(this).index()).fadeIn()
		}).eq(0).addClass("active");

				
});