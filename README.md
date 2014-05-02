jquery-bigtext
==============
jQuery plugin that makes HTML text tags as big as possible while still fitting on the parent.

Requirements
==============
jQuery 1.3.1 or higher

Browser Compatibility
==============
Internet Explorer 9 or higher

Opera

Firefox

Google Chrome

Safari


Examples
==============

```html
<div style="width: 300px, height: 200px">
  <span id="span">BigText</span>
</div>
```
```javascript
$("#span").bigText();
```

With one simple line the text "BigText" will now have its font-size increased but without overflowing the div.

See more examples in https://rawgithub.com/DanielHoffmann/jquery-bigtext/master/example.html


Usage
==============

```javascript
$("#div").bigText({
    padding: {Number},
    rotateText: {Number},
    fontSizeFactor: {Number}, (0.8)
    maximumFontSize: {Number},
    minimumFontSize: {Number},
    limitingDimension: {String}, ("both")
    center: {Boolean}, (true)
    centerVertically: {Boolean}, (true)
    wrapAfterMin: {Boolean} (false)
});
```

Options
==============
padding: Add X pixels of padding to the parent element. The plugin understands padding added through CSS, this is only a convenience feature

rotateText: Rotates the text inside the element by X degrees. Note: The plugin, unlike padding on the parent element, does not support setting the rotation of the text element in CSS. You must set it through the $.bigText() options.

fontSizeFactor: default is 0.8, it's used to give some vertical spacing for letters that overflow the line-height (like 'g', 'Á' and most other accentuated uppercase letters). This does not affect the font-size if the limiting factor is the width of the parent div. 

maximumFontSize: maximum font size to use.

minimumFontSize: minimum font size to use.

limitingDimension: in which dimension the font size should be limited. Possible values: "width", "height" or "both". Defaults to both. Using this option overwrites the element parent width or height.

center: Centers the text horizontally. Defaults to true.

centerVertically: Centers the text vectically. Defaults to true.

wrapAfterMin: Allows wrapping of the text once the minimumFontSize is reached.


