## web 动画实现

通常我们在写前端动画效果的时候，JavaScript / CSS3 / HTML5 均有实现方式。

1. JavaScript 主要通过定时器 setTimeout 和 setInterval 来实现，也可以使用 requestAnimationFrame ；
2. CSS3 可以通过 transition 和 animation 实现；
3. HTML5 则使用 CANVAS / SVG / webGL 来实现。

下面我们从 CSS3 开始，来一一讲解下 web 动画的实现。

[css-animation-editor](https://xquotes.github.io/css-animation-editor/) 是一个 CSS3 动画编辑器，可以访问先体验下。

### CSS3 动画

#### Transition

CSS transition 提供了一种在更改 CSS 属性时控制动画速度的方法。

其主要有以下几个属性：
1. transition
2. transition-delay
3. transition-duration
4. transition-property
5. transition-timing-function



参考
- [使用 CSS transitions](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions#Browser_compatibility)
- [前端动画大乱炖](https://juejin.im/entry/5a1c32626fb9a0451b044633)