let warned = {} // eslint-disable-line prefer-const

export function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message) // eslint-disable-line no-console
    }
    warned[message] = true
  }
}

export function deprecated(propType, explanation) {
  return function validate(props, propName, componentName, ...rest) {
    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
      warnOnce(`"${propName}" property of "${componentName}" has been deprecated.\n${explanation}`)
    }

    return propType(props, propName, componentName, ...rest)
  }
}
