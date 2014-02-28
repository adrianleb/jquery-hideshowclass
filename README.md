jquery-hideshowclass
====================

Pair of simple jQuery plugins for modifying display property and later adding a class on the element for smooth transitions.

uses the power of requestAnimationFrame and listens to transition events


# Usage:


1. Include jQuery:

	```html
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
	```

2. Include plugin's code:

	```html
	<script src="dist/jquery.hideshowclass.min.js"></script>
	```
3. .showClass() and .hideClass() are now available

  ```javascript
  $(function() {
    // for adding
    $("#element").showClass('class_name');

    // for removing
    $("#element").hideClass('class_name');

    // if element to show/hide is different than the one the class is being applied to, set classElement param
    $("#element").showClass('class_name', 'body');

    // if element to show/hide is different than the one the class is being applied to, set classElement param
    $("#element").hideClass('class_name', 'body');


    // if you're more familiar with using objects, you can also do
    $("#element").showClass({
      className:'class_name', 
      classElement:'body'
    );

    // if you're more familiar with using objects, you can also do
    $("#element").hideClass({
      className:'class_name', 
      classElement:'body'
    );

  });
  ```


# TODO
 - improve browser compatibility with requestAnimationFrame and transitionend event
