import CustomDynamicValue from '../lib/custom-dynamic-value.js'

// aspect-ratio: width/height;
export const aspect = new CustomDynamicValue({
  name: 'aspect',
  args: ['selector', 'ratio'],
  match: 'selector',
  target: 'tag',
  selector: '${selector}',
  rule: 'height: ${(tag.offsetWidth / ratio)}px'
})

// EW, EH, EMIN, EMAX units
export const eunit = new CustomDynamicValue({
  name: 'eunit',
  args: ['selector', 'rule'],
  match: 'selector',
  target: 'tag',
  selector: '',
  rule: `$\{
    rule.replace(
      /(\\d*\\.?\\d+)(?:\\s*)(ew|eh|emin|emax)/gi,
      (match, number, unit) => {
        switch(unit) {
          case 'ew':
            return tag.offsetWidth / 100 * number + 'px'
          case 'eh':
            return tag.offsetHeight / 100 * number + 'px'
          case 'emin':
            return Math.min(tag.offsetWidth, tag.offsetHeight) / 100 * number + 'px'
          case 'emax':
            return Math.max(tag.offsetWidth, tag.offsetHeight) / 100 * number + 'px'
        }
      }
    )
  }`
})

// --frontend: 'variables';
export const variable = new CustomDynamicValue({
  name: 'variable',
  args: ['selector', 'rule'],
  match: 'selector',
  target: 'tag',
  selector: '',
  rule: `$\{
    rule
      .replace(/--([^;]+):(.+)[;}]*/gm, (string, property, value) => {
        tag.setAttribute(\`data-$\{property}\`, value)
      })
      .replace(/var\\(--([^)]+)\\)/g, (string, match) => {
        if (tag.getAttribute(\`data-$\{match}\`) !== null) {
          return tag.getAttribute(\`data-$\{match}\`)
        } else if (
          tag.closest(\`[data-$\{match}]\`)
          && tag.closest(\`[data-$\{match}]\`).getAttribute(\`data-$\{match}\`) !== null
        ) {
          return tag.closest(\`[data-$\{match}]\`).getAttribute(\`data-$\{match}\`)
        } else {
          if (match in window) {
            return (new Function(\`return $\{match}\`))() || ''
          }
        }
      })
    }`
})