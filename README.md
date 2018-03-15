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

### duration

* Type: `Number`
* Default: `1000`

