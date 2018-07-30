module.exports = class CustomDynamicValue {

  constructor(options = {
    name: '',
    args: [],
    match: '',
    logic: '',
    target: '',
    selector: '',
    rule: ''
  }) {

    return new Function(
      ...options.args,
      `
        return Array.from(document.querySelectorAll(${options.match}))
          .reduce((styles, tag, count) => {
            ${options.logic}
            const attr = (${options.args.join(' + ')}).replace(/\\W/g, '')
              ${options.target}.setAttribute(\`data-${options.name}-$\{attr}\`, count)
              styles += \`
                ${options.selector}[data-${options.name}-$\{attr}="$\{count}"] {
                  ${options.rule}
                }
              \`
              count++
              return styles
          }, '')
      `
    )

  }

}