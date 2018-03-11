# Styled Transition Group

Generate animation width styled-components and react-transition-group's CSSTransition

## Getting Started
```sh
npm install @dtdstudio/styled-transition-group -S
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
