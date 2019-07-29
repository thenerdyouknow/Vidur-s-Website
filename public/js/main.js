
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 900);
            return false;
          }
        }
      });

	// affix the navbar after scroll below header
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});	

	// // skills chart
	// $(document).ready(function(e) {
	// //var windowBottom = $(window).height();
	// var index=0;
	// $(document).scroll(function(){
	// 	var top = $('#skills').height()-$(window).scrollTop();
	// 	if(top<-300){
	// 		if(index==0){	
			
	// 			$('.chart').easyPieChart({
	// 				easing: 'easeOutBounce',
	// 				onStep: function(from, to, percent) {
	// 					$(this.el).find('.percent').text(Math.round(percent));
	// 				}
	// 			});
			
	// 			}
	// 		index++;
	// 	}
	// })
	// //console.log(nagativeValue)
	// });

$(document).ready(function() {
        $('#target').hide();
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 300) { 
              $('#nav').addClass('solid');
              $('#target').show();
              } else {
              $('#nav').removeClass('solid');
              $("#target").hide();
          }
        });
});

// $(document).ready(function() {
//         // $('#target-videos').hide();
//         // Transition effect for navbar 
//         $(window).scroll(function() {
//           // checks if window is scrolled more than 500px, adds/removes solid class
//           if($(this).scrollTop() > 0) { 
//               $('#nav-videos').addClass('solid');
//               $('#target-videos').show();
//               } else {
//               $('#nav-videos').removeClass('solid');
//               $("#target-videos").hide();
//           }
//         });
// });

$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});
  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
	  	
    // CounterUp
	$(document).ready(function( $ ) {
		if($("span.count").length > 0){	
			$('span.count').counterUp({
					delay: 10, // the delay time in ms
			time: 1500 // the speed time in ms
			});
		}
	});
	

}());


}
main();

