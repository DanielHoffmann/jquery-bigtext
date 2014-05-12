jquery-bigtext
==============
jQuery plugin that makes HTML text tags as big as possible while still fitting on the parent.

Requirements
==============
jQuery 1.3.1 or higher

Browser Compatibility
==============
Internet Explorer 9 or higher (might work on older versions)

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

See more examples in https://rawgithub.com/DanielHoffmann/jquery-bigtext/master/examples/examples.html


Usage
==============

```javascript
$("#div").bigText({
	rotateText: {Number}, (null)
	fontSizeFactor: {Number}, (0.8)
	maximumFontSize: {Number}, (null)
	limitingDimension: {Number}, ("both")
	horizontalAlign: {String}, ("center")
	verticalAlign: {String}, ("center")
	textAlign: {String}, ("center")
});
```

Options
==============
rotateText: Rotates the text inside the element by X degrees.

fontSizeFactor: This option is used to give some vertical spacing for letters that overflow the line-height (like 'g', 'Á' and most other accentuated uppercase letters). This does not affect the font-size if the limiting factor is the width of the parent div. The default is 0.8

maximumFontSize: maximum font size to use.

limitingDimension: In which dimension the font size should be limited. Possible values: "width", "height" or "both". Defaults to both. Using this option with values different than "both" overwrites the element parent width or height.

horizontalAlign: Where to align the text horizontally. Possible values: "left", "center", "right". Defaults to "center".

verticalAlign: Where to align the text vertically. Possible values: "top", "center", "bottom". Defaults to "center".

textAlign: Sets the text align of the element. Possible values: "left", "center", "right". Defaults to "center". This option is only useful if there are linebreaks (<br> tags) inside the text.


License
==============
This project is released under the MIT license.
