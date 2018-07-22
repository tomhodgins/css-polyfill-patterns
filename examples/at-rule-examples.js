import CustomAtRule from '../lib/custom-at-rule.js'

// @element selector (conditions) {}
export const element = new CustomAtRule({
  name: 'element',
  features: {
    minWidth: (el, number) => number <= el.offsetWidth,
    maxWidth: (el, number) => number >= el.offsetWidth,
    minHeight: (el, number) => number <= el.offsetHeight,
    maxHeight: (el, number) => number >= el.offsetHeight,
    minChildren: (el, number) => number <= el.children.length,
    children: (el, number) => number === el.children.length,
    maxChildren: (el, number) => number >= el.children.length,
    minCharacters: (el, number) =>
      number <= ((el.value && el.value.length)
      || el.textContent.length),
    characters: (el, number) =>
      number === ((el.value && el.value.length)
      || el.textContent.length),
    maxCharacters: (el, number) =>
      number >= ((el.value && el.value.length)
      || el.textContent.length),
    minScrollX: (el, number) => number <= el.scrollLeft,
    maxScrollX: (el, number) => number >= el.scrollLeft,
    minScrollY: (el, number) => number <= el.scrollTop,
    maxScrollY: (el, number) => number >= el.scrollTop,
    minAspectRatio: (el, number) => number <= el.offsetWidth / el.offsetHeight,
    maxAspectRatio: (el, number) => number >= el.offsetWidth / el.offsetHeight,
    orientation: (el, string) => {
      switch (string) {
        case 'portrait': return el.offsetWidth < el.offsetHeight
        case 'square': return el.offsetWidth === el.offsetHeight
        case 'landscape': return el.offsetWidth > el.offsetHeight
      }
    }
  },
  attribute: ['selector', 'Object.keys(conditions)', 'Object.values(conditions)'],
  test: 'Object.entries(conditions).every(test => features[test[0]](tag, test[1]))'
})

// @overflow selector (condition) {}
export const overflow = new CustomAtRule({
  name: 'overflow',
  features: {
    top: tag => tag.scrollTop > 0,
    right: tag => tag.scrollLeft + tag.offsetWidth < tag.scrollWidth,
    bottom: tag => tag.scrollTop + tag.offsetHeight < tag.scrollHeight,
    left: tag => tag.scrollLeft > 0
  },
  attribute: ['selector', 'conditions.join(``)'],
  test: 'conditions.every(test => features[test](tag))'
})

// @in-viewport selector (condition) {}
export const viewport = new CustomAtRule({
  name: 'overflow',
  features: {
    partly: tag =>
      tag.offsetTop - innerHeight < scrollY
      && tag.offsetTop - innerHeight + tag.offsetHeight
      < scrollY + tag.offsetHeight
      && scrollY < tag.offsetTop + tag.offsetHeight,
    fully: tag =>
      tag.offsetTop - innerHeight < scrollY
      && tag.offsetTop - innerHeight + tag.offsetHeight < scrollY
      && scrollY < tag.offsetTop
  },
  attribute: ['selector', 'conditions'],
  test: 'features[conditions](tag)'
})