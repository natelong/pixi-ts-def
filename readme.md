# PIXI TypeScript Definition

This is just a basic definition file to make it easier to use the [PIXI](https://github.com/GoodBoyDigital/pixi.js) library in TypeScript.

In my experience, it's easiest to keep the main PIXI.js file separate from my own scripts and just reference it inside my TypeScript like so:

```TypeScript
///<reference path="PIXI.d.ts"/>

(function() {
var renderer = new PIXI.WebGLRenderer(800, 600);
var stage    = new PIXI.Stage();

document.body.appendChild(renderer.view);

animate();

function animate() {
    renderer.render(stage);
    requestAnimationFrame(animate);
}
}());
```

Then your HTML file should just include the PIXI.js file then your main TypeScript output:

```HTML
<script src="js/Pixi.js"></script>
<script src="js/main.js"></script>
```