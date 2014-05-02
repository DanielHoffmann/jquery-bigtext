/*
jQuery BigText v1.2.0, 31 April 2014

Usage: 
$("#div").bigText({
    padding: {Number},
    rotateText: {Number},
    fontSizeFactor: {Number},
    maximumFontSize: {Number},
    minimumFontSize: {Number}
    limitingDimension: {String},
    center: {Boolean}, (TRUE)
    vCenter: {Boolean}, (TRUE)
    wrapAfterMin: {Boolean} (FALSE)
});

https://github.com/DanielHoffmann/jquery-bigtext

Options:
padding: Add X pixels of padding to the parent element. You can also set this directly on the CSS of the parent element. 
rotateText: Rotates the text inside the element by X degrees. Note: BigText, unlike padding on the parent element, does not support setting the rotation of the text element on CSS. You must set through the $.bigText() options.
fontSizeFactor: default is 0.8, it's used to give some vertical spacing for letters that overflow the line-height (like 'g', 'Á' and most other accentuated uppercase letters). This does not affect the font-size if the limiting factor is the width of the parent div. 
maximumFontSize: maximum font size to use.
minimumFontSize: The minimum font size to shrink down to.
limitingDimension: in which dimension the font size should be limited. Possible values: "width", "height" or "both". Defaults to both. Using this option overwrites the element parent width or height.
center: Centers the big text.
vCenter: Vertically centers the big text.
wrapAfterMin: Allows you to wrap big text once it crosses the mininumFontSize threshold.


Copyright (C) 2013 Daniel Hoffmann Bernardes, Ícaro Technologies

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

 "use strict"; 

(function($){
    var defaultOptions = {
        rotateText: null,
        padding: null,
        fontSizeFactor: 0.8,
        maximumFontSize: null,
        minimumFontSize: null,
        limitingDimension: "both",
        center: true,
        vCenter: true,
        wrapAfterMin: false
    }
    
    $.fn.bigText = function(options) {
        return this.each(function() {
            options = $.extend({}, defaultOptions, options);
            var $this= $(this);
            $this.css('display', "inline-block");
            $this.css('clear', "both");
            $this.css('float', "left"); //the need to set this is very odd, its due to margin-collapsing. See https://developer.mozilla.org/en-US/docs/Web/CSS/margin_collapsing
            $this.css('font-size', (1000 * options.fontSizeFactor) + "px");
            $this.css('line-height', "1000px");
            $this.css('position', "relative");
            $this.css('white-space', "nowrap");
            if (options.vCenter) {
                $this.css('top', "50%");
            }
            if (options.center) {
               $this.css('left', "50%"); 
            }
            $this.css('padding', 0);
            $this.css('margin', 0);
            
            // $this.parent().css("overflow", "hidden");
            
            if (options.padding !== null) {
                if (typeof options.padding === "number") {
                    options.padding = options.padding;
                } else {
                    throw "bigText error: Padding value must be a number";
                }
                $this.parent().css("padding", options.padding + "px");
            }
            
            var box = {};
            if (options.rotateText !== null) {
                if (typeof options.rotateText !== "number") {
                    throw "bigText error: Rotate value must be a number";
                }
                var rotate = "rotate(" + options.rotateText + "deg)";
                $this.css("-webkit-transform", rotate);
                $this.css("-ms-transform", rotate);
                $this.css("-moz-transform", rotate);
                $this.css("-o-transform", rotate);
                $this.css("transform", rotate);
                //calculating bounding box of the rotated element
                var w = $this.width();
                var h = $this.height();
                var sin = Math.abs(Math.sin(options.rotateText * Math.PI / 180));
                var cos = Math.abs(Math.cos(options.rotateText * Math.PI / 180));
                box.width = w * cos + h * sin;
                box.height = w * sin + h * cos;
            } else {
                box.width = $this.outerWidth();
                box.height = $this.outerHeight();
                //box.height = 1000; //we know this for sure because of line-height
            }

            var padding = {
                left: parseInt($this.css('padding-left')),
                top: parseInt($this.css('padding-top')),
                right: parseInt($this.css('padding-right')),
                bottom: parseInt($this.css('padding-bottom'))
            };
            var widthFactor = ($this.parent().innerWidth() - padding.left - padding.right) / box.width;
            var heightFactor = ($this.parent().innerHeight() - padding.top - padding.bottom) / box.height;
            var lineHeight;
            
            if (options.limitingDimension.toLowerCase() === "width") {
                lineHeight = Math.floor(widthFactor * 1000);
                $this.parent().height(lineHeight);
            } else if (options.limitingDimension.toLowerCase() === "height") {
                lineHeight = Math.floor(heightFactor * 1000);
            } else if (widthFactor < heightFactor) {
                lineHeight = Math.floor(widthFactor * 1000);        
            } else if (widthFactor >= heightFactor) {
                lineHeight = Math.floor(heightFactor * 1000);
            }
            
            var fontSize= lineHeight * options.fontSizeFactor;
            if (options.maximumFontSize !== null && fontSize > options.maximumFontSize) {
                fontSize= options.maximumFontSize;
                lineHeight= fontSize / options.fontSizeFactor;
            }
            if (options.minimumFontSize !== null && fontSize < options.minimumFontSize) {
                fontSize= options.minimumFontSize;
                lineHeight= fontSize / options.fontSizeFactor;
            }

            $this.css('font-size', fontSize  + "px");
            $this.css('line-height', lineHeight  + "px");
            //centralizing text, top and left are defined as 50% on the CSS
            if (options.center) {
               $this.css('margin-left', (-$this.width() / 2) + "px"); 
            }
            if (options.vcenter) {
                $this.css('margin-top', (-$this.height() / 2) + "px");
            }
            $this.css('margin-right', 0);
            $this.css('margin-bottom', 0);
            if (options.limitingDimension.toLowerCase() === "height") {
                $this.parent().width($this.width());
            }
            if (options.wrapAfterMin) {
                $this.css('white-space', "normal");
            }
            
        });
    } 
})(jQuery);
