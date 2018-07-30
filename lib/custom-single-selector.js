module.exports = class CustomSingleSelector {

  constructor(options = {
    name: '',
    match: '',
    target: ''
  }) {

    return new Function(
      'selector',
      'rule',
      `
        const tag = document.${options.match}
        if (tag) {
          const attr = selector.replace(/\\W/g, '')
          ${options.target}.setAttribute(\`data-${options.name}-$\{attr}\`, '')
          return \`[data-${options.name}-$\{attr}] { $\{rule} }\`
        } else {
          return ''
        }
      `
    )

  }

}