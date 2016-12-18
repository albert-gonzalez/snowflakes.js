# Snowflakes.js

[![NPM](https://nodei.co/npm/snowflakes.png)](https://nodei.co/npm/snowflakes/)

Customizable snowflakes for your site, HO! HO! HO!

## Install

```
npm install snowflakes
```

## Usage

### JS Script

```html
<script src="dist/snowflakes.min.js"></script>
<script>
    snowflakes.init(/* { you can pass an options object here } */);
</script>
```

### ES6 Import

```js
import { init } from "snowflakes";
init(/* { you can pass an options object here } */);
```

or 

```js
import snowflakes from "snowflakes";
snowflakes.init(/* { you can pass an options object here } */);
```

### CommonJS require

```js
let snowflakes = require('snowflakes');
snowflakes.init(/* { you can pass an options object here } */);
```

## Options

* background: Snowflakes background. It can be any CSS background property. Default value: 'rgba(150,150,200,0.8)'
* borderRadius: Border radius for round corners. Default value: '10px'
* width: CSS Property. Default value: '5px'
* height: CSS Property. Default value: '5px'
* boxShadow: Shadow for the snowflakes. CSS Property: Default value: '1px 1px .5px rgba(0,0,0,0.8)'
* zIndex: CSS Property. Default value: 10
* addSnowflakeFrequency: Frequency in milliseconds for adding new snowflakes. Default value: 800
* moveSnowflakeFrequency: Frequency in milliseconds for moving the snowflakes. Default value: 50
* removeSnowFlakeFrequency: Frequency in milliseconds for removing the snowflakes that are out of the screen. Default value: 1000
* horizontalSpeed: Speed for the horizontal movement in pixels: Default value: 1
* horizontalMovement: Max offset in pixels for the horizontal movement. Default value: 10
* verticalSpeed: Speed for the vertical. Default value: 1
* maxSnowflakes. Max count of snowflakes in the screen. Default value: 200


## Demo

You can see snowflakes in action [here](https://albert-gonzalez.github.io/snowflakes.js/demo.html)
