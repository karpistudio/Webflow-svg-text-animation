# Webflow-svg-text-animation

Custom code snippets to animate SVG text on Webflow by giving it a 'drawn in' effect when scrolled into view. 

We are using an Intersection Observer to detect when an element is scrolled into view, and then animating the specified element with a stroke animation by adding a class to the element. 

### How to implement this project in webflow ? 

There are two files here that we will use to create this animation effect. The javascript code will be found in main.js, the css styling will be found in main.css. 

#### We can follow these steps to replicate this effect on Webflow: 

* **Copy the code found here in main.js to the custom code section on the  Webflow page where you would like the svg elements to be animated. Add it into a <script> </script> tag.** 
* **Copy the code found here in main.css to the custom code section on the  Webflow page where you would like the svg elements to be animated. Add it into a <style> </style> tag.**
* **Add the class '.svg' to the svg text element/s you want to animate. (We have used the class '.svg', but you can name this class anything)**



