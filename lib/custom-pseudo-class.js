export default class CustomPseudoClass {

  constructor(options = {
    name: '',
    args: [],
    match: '',
    filter: '',
    target: '',
    selector: ''
  }) {

    return new Function(
      ...options.args,
      'rule',
      `return Array.from(document.querySelectorAll(${options.match}))
        .reduce((styles, tag, count) => {
          const attr = (${options.args.join(' + ')}).replace(/\\W/g, '')
          if (${options.filter}) {
            ${options.target}.setAttribute(\`data-${options.name}-$\{attr}\`, count)
            styles += \`${options.selector}[data-${options.name}-$\{attr}="$\{count}"] { $\{rule} }\n\`
            count++
          } else {
            ${options.target}.setAttribute(\`data-${options.name}-$\{attr}\`, '')
          }
          return styles
        }, '')
      `
    )

  }

}