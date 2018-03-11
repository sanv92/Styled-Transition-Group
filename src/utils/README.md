# Utils

### Deprecated
```js
import { deprecated } from './utils'

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string])

const columnProps = PropTypes.oneOfType([
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    push: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
    pull: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
    order: stringOrNumberProp,
    offset: stringOrNumberProp,
  })
])
```
