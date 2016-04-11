$(document).ready(function() {
	/* jQUERY UI */
	$('img.drag').draggable({stack: 'img.drag'});
    
    /* jQuery UI Touch Punch
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
    } 
    */
});