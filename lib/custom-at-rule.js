module.exports = class CustomAtRule {

  constructor(options = {
    name: '',
    features: {},
    logic: ``,
    attribute: [''],
    test: ''
  }) {

    return new Function(
      'selector',
      'conditions',
      'stylesheet',
      `
        const features = {
          ${new Object(
            Object.entries(options.features)
            .map(el => el[0] + ': ' + el[1].toString())
            .join(',\n')
          )}

        }
        ${options.logic ? options.logic : ''}
        return Array.from(document.querySelectorAll(selector))
        .reduce((styles, tag, count) => {
          const attr = (${options.attribute.join(' + ')}).replace(/\\W/g, '')
          if (${options.test}) {
            tag.setAttribute(\`data-${options.name}-$\{attr}\`, count)
            styles += stylesheet.replace(
              /:self|\$this/g,
              \`[data-${options.name}-$\{attr}="$\{count}"]\`
            )
          } else {
            tag.setAttribute(\`data-${options.name}-$\{attr}\`, '')
          }
          return styles
        }, '')
      `
    )

  }

}