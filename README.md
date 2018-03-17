# Styled Transition Group Animation
[![Build Status](https://travis-ci.org/SanderV1992/Styled-Transition-Group.svg?branch=master)](https://travis-ci.org/SanderV1992/Styled-Transition-Group)
[![Coverage Status](https://coveralls.io/repos/github/SanderV1992/Styled-Transition-Group/badge.svg)](https://coveralls.io/github/SanderV1992/Styled-Transition-Group)

Generate animation width styled-components and react-transition-group's CSSTransition

For more information about the angular-translate project, please visit our [website](https://sanderv1992.github.io/Styled-Transition-Group).


## Install
```sh
npm install styled-transition-group-animation -S
```

## Usage
```js
<TransitionGroup>
    {this.props.items.map((item) => (
        <Transition key={item} type="fade" duration={1000}>
    
          <div>
            <h6>{item}</h6>
          </div>
    
        </Transition>
    ))}
</TransitionGroup>
```

### Storybook
[https://sanderv1992.github.io/Styled-Transition-Group/public/storybook/](https://sanderv1992.github.io/Styled-Transition-Group/public/storybook/)

### API (props)
### type

* Type: `String`
* Default: `fade`
* Available types: `fade, zoom, rotate, roll`

### duration

* Type: `Number`
* Default: `1000`

### animation
* Type: `Any`
* Default: `null`

### Add more animation types (you can add more animations manually):

#### Transform
```js
const animation = {
  enter: {
    from: 'scale3d(0.3, 0.3, 0.3)',
    to: 'scale3d(2, 2, 2)',
  },
  exit: {
    from: 'initial',
    to: 'scale3d(0.3, 0.3, 0.3)',
  },
}

<TransitionGroup>
    {this.props.items.map((item) => (
        <Transition key={item} type="bounce" animation={animation} duration={1000}>

          <div>
            <h6>{item}</h6>
          </div>

        </Transition>
    ))}
</TransitionGroup>
```

#### Keyframes
```js
const animation = {
  keyframes: `
      @keyframes bounceInDown {
        from, 60%, 75%, 90%, to {
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        0% {
          opacity: 0;
          transform: translate3d(0, -3000px, 0);
        }

        60% {
          opacity: 1;
          transform: translate3d(0, 25px, 0);
        }

        75% {
          transform: translate3d(0, -10px, 0);
        }

        90% {
          transform: translate3d(0, 5px, 0);
        }

        to {
          transform: translate3d(0, 0, 0);
        }
      }

      @keyframes bounceOutDown {
        20% {
          transform: translate3d(0, 10px, 0);
        }

        40%, 45% {
          opacity: 1;
          transform: translate3d(0, -20px, 0);
        }

        to {
          opacity: 0;
          transform: translate3d(0, 2000px, 0);
        }
      }
    `,
  enter: 'bounceInDown',
  exit: 'bounceOutDown',
}

<TransitionGroup>
    {this.props.items.map((item) => (
        <Transition key={item} type="bounce" animation={animation} duration={1000}>

          <div>
            <h6>{item}</h6>
          </div>

        </Transition>
    ))}
</TransitionGroup>
```
