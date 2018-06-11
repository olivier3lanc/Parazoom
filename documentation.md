---
title: Documentation
description: 'Options and method documentation for Parazoom'
order: 3
---

## Options

Here are the default options/parameters of Parazoom:

| Options               | Default value     | Description |
| --------------------- | ----------------- | ----------- |
| `scale`               | `1.2`             | `float` or `string` Amount of transform scale |
| `transitionTime`      | `0.3s`            | `string` CSS transition on mouse enter time |
| `transitionTimeLeave` | `1s`              | `string` CSS transition on mouse leave time |
| `opacity`             | `1`               | `float` or `string` Opacity of the image on mouse off |
| `opacityHover`        | `1`               | `float` or `string` Opacity of the image on mouse hover |
| `overflow`            | `hidden`          | `visible` or `visible` Display or not the overflow out of the image boundaries |
| `cursor`              | `default`         | `string` [CSS cursor property](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor) on mouse hover |
| `customCursorIcon`    | ``                | `string` URL of a custom cursor image (jpg, gif, png, svg). If set, display the custom cursor. |
| `customCursorSize`    | `20px`            | `string` CSS value to set the custom cursor icon. Available only if `customCursorIcon` is set. |
| `tilt`                | `false`           | `boolean` Enable or not the tilt effect |
| `tiltXamount`         | `10`              | `float` Amount of horizontal tilt effect |
| `tiltYamount`         | `10`              | `float` Amount of vertical tilt effect |
| `text`                | `false`           | `boolean` Display or not the alt text |
| `textPosition`        | `middle`          | `string` CSS position of the text |
| `textClass`           | ``                | `string` Add a CSS class to the text container |
| `textPosition`        | `middle`          | `string` CSS position of the text |
| `textAlignment`       | `center`          | `string` CSS alignment of the text |
| `textXParallax`       | `10`              | `float` Amount of horizontal tilt effect for the text |
| `textYParallax`       | `10`              | `float` Amount of vertical tilt effect for the text |
| `textOpacity`         | `0`               | `float` or `string` Opacity of the text on mouse off |
| `textOpacityHover`    | `1`               | `float` or `string` Opacity of the text on mouse hover |
| `onHover`             | ``                | `function` Callback function triggered on mouse hover |
| `onLeave`             | ``                | `function` Callback function triggered on mouse leave |
| `onClick`             | ``                | `function` Callback function triggered on mouse click |
| `onMove`              | ``                | `function` Callback function triggered on mouse move |


All options can be customized globally and individually via specific call or data-attributes.


## Javascript

Here you can set the global parameters.

```
//Change all default settings
jQuery('img').parazoom({
    scale:                  '1.2',
    transitionTime:         '0.3s',
    transitionTimeLeave:    '1s',
    opacity:                '1',
    opacityHover:           '1',
    overflow:               'hidden',
    cursor:                 'default',
    customCursorIcon:       '',
    customCursorSize:       '20px',
    tilt:                   false,
    tiltXamount:            10,
    tiltYamount:            10,
    text:                   false,
    textClass:              false,
    textPosition:           'middle',
    textAlignment:          'center',
    textXParallax:          10,
    textYParallax:          10,
    textOpacity:            0,
    textOpacityHover:       1,
    onHover: function(e){
        //Your mouse hover callbacks
    },
    onMove: function(e){
        //Your mouse move callbacks
    },
    onLeave: function(e){
        //Your mouse leave callbacks
    },
    onClick: function(e){
        //Your mouse click callbacks
    }
});

//Change only scale
jQuery('img').parazoom({
    scale: '2'
});
```

## Data attributes

Parazoom can be parametered for each element via data attributes: For example

```
<!-- Markup to set the scale of the element to 2 -->
<img src="your-image.jpg" data-prz-scale="2">
```


| Javascript options    | Data attribute                   |
| --------------------- | -------------------------------- |
| `scale`               | `data-prz-scale`                 |
| `transitionTime`      | `data-prz-transition-time`       |
| `transitionTimeLeave` | `data-prz-transition-time-leave` |
| `opacity`             | `data-prz-opacity`               |
| `opacityHover`        | `data-prz-opacity-hover`         |
| `overflow`            | `data-prz-overflow`              |
| `cursor`              | `data-prz-cursor`                |
| `customCursorIcon`    | `data-prz-custom-cursor`         |
| `customCursorSize`    | `data-prz-custom-cursor-size`    |
| `tilt`                | `data-prz-tilt`                  |
| `tiltXamount`         | `data-prz-tilt-x-amount`         |
| `tiltYamount`         | `data-prz-tilt-y-amount`         |
| `text`                | `data-prz-text`                  |
|                       | `data-prz-text-content`          |
| `textPosition`        | `data-prz-text-position`         |
| `textClass`           | `data-prz-text-class`            |
| `textPosition`        | `data-prz-text-position`         |
| `textAlignment`       | `data-prz-text-alignment`        |
| `textXParallax`       | `data-prz-text-x-parallax`       |
| `textYParallax`       | `data-prz-text-y-parallax`       |
| `textOpacity`         | `data-prz-text-opacity`          |
| `textOpacityHover`    | `data-prz-text-opacity-hover`    |
