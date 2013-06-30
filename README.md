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
$("#span").bigText({
  padding: {Number},
  rotateText: {Number},
  fontSizeFactor: {Number}
});
```

Options
==============
padding: Add X pixels of padding to the parent element. You can also set this directly on the CSS of the parent element.

fontSizeFactor: default is 0.8, it's used to give some vertical spacing for letters that overflow the line-height (like 'g', 'Á' and most other accentuated uppercase letters). This does not affect the font-size if the limiting factor is the width of the parent div.

rotateText: Rotates the text inside the element by X degrees.

Note: BigText, unlike padding, does not support setting the rotation of the text element on CSS. You must set it through the $.bigText() options.


