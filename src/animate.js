export const bounce = ({
  name = 'bounce',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}

@keyframes ${name}  {
  from,
  20%,
  53%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0);
    transform: translate3d(0, -30px, 0);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0);
    transform: translate3d(0, -15px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
`

export const flash = ({
  name = 'flash',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}

@keyframes ${name}  {
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const pulse = ({
  name = 'pulse',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const rubberBand = ({
  name = 'rubberBand',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const shake = ({
  name = 'shake',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

@keyframes ${name}  {
  from,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const headShake = ({
  name = 'headShake',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

@keyframes ${name}  {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}

.${name} {
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const swing = ({
  name = 'swing',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

@keyframes ${name}  {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
  }
}

.${name} {
  -webkit-transform-origin: top center;
  transform-origin: top center;
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const tada = ({
  name = 'tada',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const wobble = ({
  name = 'wobble',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const jello = ({
  name = 'jello',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from,
  11.1%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

@keyframes ${name}  {
  from,
  11.1%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
  -webkit-transform-origin: center;
  transform-origin: center;
}
`

export const heartBeat = ({
  name = 'heartBeat',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes ${name}  {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
  -webkit-animation-duration: 1.3s;
  animation-duration: 1.3s;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
}
`

export const bounceIn = ({
  name = 'bounceIn',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

@keyframes ${name}  {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.${name} {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const bounceInDown = ({
  name = 'bounceInDown',
  duration,
  distance = '3000px'
}) => `
@-webkit-keyframes ${name}  {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -${distance}, 0);
    transform: translate3d(0, -${distance}, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ${name}  {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -${distance}, 0);
    transform: translate3d(0, -${distance}, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const bounceInLeft = ({
  name = 'bounceInLeft',
  duration,
  distance = '3000px'
}) => `
@-webkit-keyframes ${name}  {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-${distance}, 0, 0);
    transform: translate3d(-${distance}, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ${name}  {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-${distance}, 0, 0);
    transform: translate3d(-${distance}, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const bounceInRight = ({
  name = 'bounceInRight',
  duration,
  distance = '3000px'
}) => `
@-webkit-keyframes ${name}  {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(${distance}, 0, 0);
    transform: translate3d(${distance}, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ${name}  {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(${distance}, 0, 0);
    transform: translate3d(${distance}, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const bounceInUp = ({
  name = 'bounceInUp',
  duration,
  distance = '3000px'
}) => `
@-webkit-keyframes ${name}  {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, ${distance}, 0);
    transform: translate3d(0, ${distance}, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ${name}  {
  from,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, ${distance}, 0);
    transform: translate3d(0, ${distance}, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const bounceOut = ({
  name = 'bounceOut',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

@keyframes ${name}  {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

.${name} {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const bounceOutDown = ({
  name = 'bounceOutDown',
  duration,
  distance = '2000px'
}) => `
@-webkit-keyframes ${name}  {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, ${distance}, 0);
    transform: translate3d(0, ${distance}, 0);
  }
}

@keyframes ${name}  {
  20% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, ${distance}, 0);
    transform: translate3d(0, ${distance}, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const bounceOutLeft = ({
  name = 'bounceOutLeft',
  duration,
  distance = '2000px'
}) => `
@-webkit-keyframes ${name}  {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-${distance}, 0, 0);
    transform: translate3d(-${distance}, 0, 0);
  }
}

@keyframes ${name}  {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-${distance}, 0, 0);
    transform: translate3d(-${distance}, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const bounceOutRight = ({
  name = 'bounceOutRight',
  duration,
  distance = '2000px'
}) => `
@-webkit-keyframes ${name}  {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(${distance}, 0, 0);
    transform: translate3d(${distance}, 0, 0);
  }
}

@keyframes ${name}  {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0);
    transform: translate3d(-20px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(${distance}, 0, 0);
    transform: translate3d(${distance}, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const bounceOutUp = ({
  name = 'bounceOutUp',
  duration,
  distance = '2000px'
}) => `
@-webkit-keyframes ${name}  {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -${distance}, 0);
    transform: translate3d(0, -${distance}, 0);
  }
}

@keyframes ${name}  {
  20% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -${distance}, 0);
    transform: translate3d(0, -${distance}, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const fadeIn = ({
  name = 'fadeIn',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes ${name}  {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const fadeInDown = ({
  name = 'fadeInDown',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -${distance}, 0);
    transform: translate3d(0, -${distance}, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -${distance}, 0);
    transform: translate3d(0, -${distance}, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const fadeInLeft = ({
  name = 'fadeInLeft',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-${distance}, 0, 0);
    transform: translate3d(-${distance}, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-${distance}, 0, 0);
    transform: translate3d(-${distance}, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const fadeInRight = ({
  name = 'fadeInRight',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: translate3d(${distance}, 0, 0);
    transform: translate3d(${distance}, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: translate3d(${distance}, 0, 0);
    transform: translate3d(${distance}, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const fadeInUp = ({
  name = 'fadeInUp',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const fadeOut = ({
  name = 'fadeOut',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@keyframes ${name}  {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const fadeOutDown = ({
  name = 'fadeOutDown',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes ${name}  {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const fadeOutLeft = ({
  name = 'fadeOutLeft',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-${distance}, 0, 0);
    transform: translate3d(-${distance}, 0, 0);
  }
}

@keyframes ${name}  {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-${distance}, 0, 0);
    transform: translate3d(-${distance}, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const fadeOutRight = ({
  name = 'fadeOutRight',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(${distance}, 0, 0);
    transform: translate3d(${distance}, 0, 0);
  }
}

@keyframes ${name}  {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(${distance}, 0, 0);
    transform: translate3d(${distance}, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const fadeOutUp = ({
  name = 'fadeOutUp',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -${distance}, 0);
    transform: translate3d(0, -${distance}, 0);
  }
}

@keyframes ${name}  {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -${distance}, 0);
    transform: translate3d(0, -${distance}, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const flip = ({
  name = 'flip',
  duration,
  distance = '400px'
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, -360deg);
    transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(${distance}) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(${distance}) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, -360deg);
    transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(${distance}) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(${distance}) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    transform: perspective(${distance}) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

.${name} {
  -webkit-backface-visibility: visible;
  backface-visibility: visible;
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const flipInX = ({
  name = 'flipInX',
  duration,
  distance = '400px'
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: perspective(${distance}) rotate3d(1, 0, 0, 90deg);
    transform: perspective(${distance}) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(${distance}) rotate3d(1, 0, 0, -20deg);
    transform: perspective(${distance}) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(${distance}) rotate3d(1, 0, 0, 10deg);
    transform: perspective(${distance}) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(${distance}) rotate3d(1, 0, 0, -5deg);
    transform: perspective(${distance}) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(${distance});
    transform: perspective(${distance});
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: perspective(${distance}) rotate3d(1, 0, 0, 90deg);
    transform: perspective(${distance}) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(${distance}) rotate3d(1, 0, 0, -20deg);
    transform: perspective(${distance}) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(${distance}) rotate3d(1, 0, 0, 10deg);
    transform: perspective(${distance}) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(${distance}) rotate3d(1, 0, 0, -5deg);
    transform: perspective(${distance}) rotate3d(1, 0, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(${distance});
    transform: perspective(${distance});
  }
}

.${name} {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const flipInY = ({
  name = 'flipInY',
  duration,
  distance = '400px'
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: perspective(${distance}) rotate3d(0, 1, 0, 90deg);
    transform: perspective(${distance}) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(${distance}) rotate3d(0, 1, 0, -20deg);
    transform: perspective(${distance}) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(${distance}) rotate3d(0, 1, 0, 10deg);
    transform: perspective(${distance}) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(${distance}) rotate3d(0, 1, 0, -5deg);
    transform: perspective(${distance}) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(${distance});
    transform: perspective(${distance});
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: perspective(${distance}) rotate3d(0, 1, 0, 90deg);
    transform: perspective(${distance}) rotate3d(0, 1, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(${distance}) rotate3d(0, 1, 0, -20deg);
    transform: perspective(${distance}) rotate3d(0, 1, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(${distance}) rotate3d(0, 1, 0, 10deg);
    transform: perspective(${distance}) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(${distance}) rotate3d(0, 1, 0, -5deg);
    transform: perspective(${distance}) rotate3d(0, 1, 0, -5deg);
  }

  to {
    -webkit-transform: perspective(${distance});
    transform: perspective(${distance});
  }
}

.${name} {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const flipOutX = ({
  name = 'flipOutX',
  duration,
  distance = '400px'
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: perspective(${distance});
    transform: perspective(${distance});
  }

  30% {
    -webkit-transform: perspective(${distance}) rotate3d(1, 0, 0, -20deg);
    transform: perspective(${distance}) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(${distance}) rotate3d(1, 0, 0, 90deg);
    transform: perspective(${distance}) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: perspective(${distance});
    transform: perspective(${distance});
  }

  30% {
    -webkit-transform: perspective(${distance}) rotate3d(1, 0, 0, -20deg);
    transform: perspective(${distance}) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(${distance}) rotate3d(1, 0, 0, 90deg);
    transform: perspective(${distance}) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.flipOutX {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-animation-name: flipOutX;
  animation-name: flipOutX;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
}
`

export const flipOutY = ({
  name = 'flipOutY',
  duration,
  distance = '400px'
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: perspective(${distance});
    transform: perspective(${distance});
  }

  30% {
    -webkit-transform: perspective(${distance}) rotate3d(0, 1, 0, -15deg);
    transform: perspective(${distance}) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(${distance}) rotate3d(0, 1, 0, 90deg);
    transform: perspective(${distance}) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: perspective(${distance});
    transform: perspective(${distance});
  }

  30% {
    -webkit-transform: perspective(${distance}) rotate3d(0, 1, 0, -15deg);
    transform: perspective(${distance}) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(${distance}) rotate3d(0, 1, 0, 90deg);
    transform: perspective(${distance}) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
}

.${name} {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const lightSpeedIn = ({
  name = 'lightSpeedIn',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: translate3d(${distance}, 0, 0) skewX(-30deg);
    transform: translate3d(${distance}, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: translate3d(${distance}, 0, 0) skewX(-30deg);
    transform: translate3d(${distance}, 0, 0) skewX(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
  -webkit-animation-timing-function: ease-out;
  animation-timing-function: ease-out;
}
`

export const lightSpeedOut = ({
  name = 'lightSpeedOut',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(${distance}, 0, 0) skewX(30deg);
    transform: translate3d(${distance}, 0, 0) skewX(30deg);
    opacity: 0;
  }
}

@keyframes ${name}  {
  from {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(${distance}, 0, 0) skewX(30deg);
    transform: translate3d(${distance}, 0, 0) skewX(30deg);
    opacity: 0;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
  -webkit-animation-timing-function: ease-in;
  animation-timing-function: ease-in;
}
`

export const rotateIn = ({
  name = 'rotateIn',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const rotateInDownLeft = ({
  name = 'rotateInDownLeft',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const rotateInDownRight = ({
  name = 'rotateInDownRight',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const rotateInUpLeft = ({
  name = 'rotateInUpLeft',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const rotateInUpRight = ({
  name = 'rotateInUpRight',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const rotateOut = ({
  name = 'rotateOut',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform-origin: center;
    transform-origin: center;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const rotateOutDownLeft = ({
  name = 'rotateOutDownLeft',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const rotateOutDownRight = ({
  name = 'rotateOutDownRight',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const rotateOutUpLeft = ({
  name = 'rotateOutUpLeft',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: left bottom;
    transform-origin: left bottom;
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const rotateOutUpRight = ({
  name = 'rotateOutUpRight',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    opacity: 1;
  }

  to {
    -webkit-transform-origin: right bottom;
    transform-origin: right bottom;
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const hinge = ({
  name = 'hinge',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  0% {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}

@keyframes ${name}  {
  0% {
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-transform-origin: top left;
    transform-origin: top left;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}

.${name} {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const jackInTheBox = ({
  name = 'jackInTheBox',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const rollIn = ({
  name = 'rollIn',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-${distance}, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-${distance}, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-${distance}, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-${distance}, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const rollOut = ({
  name = 'rollOut',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(${distance}, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(${distance}, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

@keyframes ${name}  {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(${distance}, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(${distance}, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const zoomIn = ({
  name = 'zoomIn',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const zoomInDown = ({
  name = 'zoomInDown',
  duration,
  distance = '1000px'
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -${distance}, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -${distance}, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -${distance}, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -${distance}, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const zoomInLeft = ({
  name = 'zoomInLeft',
  duration,
  distance = '1000px'
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-${distance}, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-${distance}, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-${distance}, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-${distance}, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const zoomInRight = ({
  name = 'zoomInRight',
  duration,
  distance = '1000px'
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(${distance}, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(${distance}, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(${distance}, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(${distance}, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const zoomInUp = ({
  name = 'zoomInUp',
  duration,
  distance = '1000px'
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, ${distance}, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, ${distance}, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes ${name}  {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, ${distance}, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, ${distance}, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const zoomOut = ({
  name = 'zoomOut',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

@keyframes ${name}  {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const zoomOutDown = ({
  name = 'zoomOutDown',
  duration,
  distance = '2000px'
}) => `
@-webkit-keyframes ${name}  {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, ${distance}, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, ${distance}, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes ${name}  {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, ${distance}, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, ${distance}, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const zoomOutLeft = ({
  name = 'zoomOutLeft',
  duration,
  distance = '2000px'
}) => `
@-webkit-keyframes ${name}  {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-${distance}, 0, 0);
    transform: scale(0.1) translate3d(-${distance}, 0, 0);
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
}

@keyframes ${name}  {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-${distance}, 0, 0);
    transform: scale(0.1) translate3d(-${distance}, 0, 0);
    -webkit-transform-origin: left center;
    transform-origin: left center;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const zoomOutRight = ({
  name = 'zoomOutRight',
  duration,
  distance = '2000px'
}) => `
@-webkit-keyframes ${name}  {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(${distance}, 0, 0);
    transform: scale(0.1) translate3d(${distance}, 0, 0);
    -webkit-transform-origin: right center;
    transform-origin: right center;
  }
}

@keyframes ${name}  {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(${distance}, 0, 0);
    transform: scale(0.1) translate3d(${distance}, 0, 0);
    -webkit-transform-origin: right center;
    transform-origin: right center;
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const zoomOutUp = ({
  name = 'zoomOutUp',
  duration,
  distance = '2000px'
}) => `
@-webkit-keyframes ${name}  {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -${distance}, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -${distance}, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes ${name}  {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -${distance}, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -${distance}, 0);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const slideInDown = ({
  name = 'slideInDown',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: translate3d(0, -${distance}, 0);
    transform: translate3d(0, -${distance}, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: translate3d(0, -${distance}, 0);
    transform: translate3d(0, -${distance}, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const slideInLeft = ({
  name = 'slideInLeft',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: translate3d(-${distance}, 0, 0);
    transform: translate3d(-${distance}, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: translate3d(-${distance}, 0, 0);
    transform: translate3d(-${distance}, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const slideInRight = ({
  name = 'slideInRight',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: translate3d(${distance}, 0, 0);
    transform: translate3d(${distance}, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: translate3d(${distance}, 0, 0);
    transform: translate3d(${distance}, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const slideInUp = ({
  name = 'slideInUp',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const slideOutDown = ({
  name = 'slideOutDown',
  duration,
  distance
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const slideOutLeft = ({
  name = 'slideOutLeft',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-${distance}, 0, 0);
    transform: translate3d(-${distance}, 0, 0);
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-${distance}, 0, 0);
    transform: translate3d(-${distance}, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const slideOutRight = ({
  name = 'slideOutRight',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(${distance}, 0, 0);
    transform: translate3d(${distance}, 0, 0);
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(${distance}, 0, 0);
    transform: translate3d(${distance}, 0, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const slideOutUp = ({
  name = 'slideOutUp',
  duration,
  distance = '100%'
}) => `
@-webkit-keyframes ${name}  {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -${distance}, 0);
    transform: translate3d(0, -${distance}, 0);
  }
}

@keyframes ${name}  {
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -${distance}, 0);
    transform: translate3d(0, -${distance}, 0);
  }
}

.${name} {
  -webkit-animation-name: ${name};
  animation-name: ${name};
}
`

export const animated = ({
  name = 'animated',
  duration = 0.5,
  delay = 0.5,
  infinite = 1
}) => `
.${name} {
  -webkit-animation-duration: ${duration}s;
  animation-duration: ${duration}s;
  -webkit-animation-delay: ${delay}s;
  animation-delay: ${delay}s;
  -webkit-animation-iteration-count: ${infinite};
  animation-iteration-count: ${infinite};
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@media (print), (prefers-reduced-motion: reduce) {
  .${name} {
    -webkit-animation-duration: 1ms !important;
    animation-duration: 1ms !important;
    -webkit-transition-duration: 1ms !important;
    transition-duration: 1ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
  }
}
`
