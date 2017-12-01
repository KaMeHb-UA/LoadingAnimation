LoadingAnimation
===================

LoadingAnimation is a very simple class that allows you to create your loading anims.
----------
Simple using
````javascript
const LoadingAnimation = require('loading-animation');
let anim = new LoadingAnimation('Text before'); // animation starts automatically
setTimeout(()=>{
    anim.stop('Ok');
}, 3000);
````
Using `text-anim-text` model and [color](https://www.npmjs.com/package/colors)
````javascript
anim = new LoadingAnimation(['Text before', 'and text after'], 'green')
````
