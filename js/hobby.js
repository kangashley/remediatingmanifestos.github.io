/* 
JQUERY & ANOTHER LIBRARY 
wrapped in jQuery ready event
use jQuery syntax to 
- access elements
- update element attributes
- element content
- apply effect to element
use 1 additional library
*/

$(document).ready(function() {
	$('nav').hide().delay(1000).fadeIn(1000);
	$('main').hide().delay(1000).fadeIn(1000);
	$('footer').hide().delay(1000).fadeIn(1000);
		
	/* jQUERY UI */
	$('img.drag').draggable({stack: 'img.drag'}, function(){
		// Extend jQuery feature detection
    		$.extend($.support, {
			touch: "ontouchend" in document
    		});

    		// Hook up touch events
		$.fn.addTouch = function() {
        		if ($.support.touch) {
            			this.each(function(i, el) {
                			el.addEventListener("touchstart", iPadTouchHandler, false);
                			el.addEventListener("touchmove", iPadTouchHandler, false);
                			el.addEventListener("touchend", iPadTouchHandler, false);
                			el.addEventListener("touchcancel", iPadTouchHandler, false);
            	});
        }
        
        return this;
	
	});

	$('.about').eq(0).on('click', function() {
		$('.about').removeClass('selected');
		$(this).addClass('selected');
		$('aside').empty();
		var $text = "<p>My mom hasn't stopped yelling at me for the time I waste online,<br>but here are some gems I've found.<br>(Don't just stare, click or drag!)</p>";
		$('aside').html($text);
	})

	$('.about').eq(1).on('click', function () {
		$('.about').removeClass('selected');
		$(this).addClass('selected');
		$('aside').empty();
		var $text = '<p>My Uncle Alex Vonnegut...<br>taught me something very important.<br>He said that when things are going really well<br>we should be sure to notice it.<br>He was talking about very simple occasions,<br>not great victories. <br>Maybe drinking lemonade under a shade tree,<br>or smelling the aroma of a bakery,<br>or fishing,<br>or listening to music coming from a concert hall<br>while standing in the dark outside,<br>or, dare I say, after a kiss.<br>He told me it was important at such times<br>to say out loud,<br><em>If this isn’t nice, what is?</em><br>KURT VONNEGUT</p>';
		$('aside').html($text);
	})
    }
});
