# Styled Transition Group Animation [![Build Status](https://travis-ci.org/SanderV1992/Styled-Transition-Group.svg?branch=master)](https://travis-ci.org/SanderV1992/Styled-Transition-Group) [![Coverage Status](https://coveralls.io/repos/github/SanderV1992/Styled-Transition-Group/badge.svg)](https://coveralls.io/github/SanderV1992/Styled-Transition-Group)

Generate animation width styled-components and react-transition-group's CSSTransition

## Getting Started
```sh
npm install styled-transition-group-animation -S
```

## Examples
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

### Storybook Link
[https://sanderv1992.github.io/Styled-Transition-Group/public/storybook/](https://sanderv1992.github.io/Styled-Transition-Group/public/storybook/)
