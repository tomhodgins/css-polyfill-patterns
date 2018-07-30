const CustomAtRule = require('../lib/custom-at-rule.js')

// @element selector (conditions) {}
module.exports.element = new CustomAtRule({
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
module.exports.overflow = new CustomAtRule({
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
module.exports.viewport = new CustomAtRule({
  name: 'overflow',
  features: {
    fully: tag => tag.getBoundingClientRect().top >= 0
      && tag.getBoundingClientRect().left >= 0
      && tag.getBoundingClientRect().right <= innerWidth
      && tag.getBoundingClientRect().bottom <= innerHeight,
    partly: tag => tag.getBoundingClientRect().top + tag.offsetHeight >= 0
      && tag.getBoundingClientRect().left + tag.offsetWidth >= 0
      && tag.getBoundingClientRect().right - tag.offsetWidth <= innerWidth
      && tag.getBoundingClientRect().bottom - tag.offsetHeight <= innerHeight
  },
  attribute: ['selector', 'conditions'],
  test: 'features[conditions](tag)'
})