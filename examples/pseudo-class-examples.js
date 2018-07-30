const CustomPseudoClass = require('../lib/custom-pseudo-class.js')

// :ancestor()
module.exports.ancestor = new CustomPseudoClass({
  name: 'ancestor',
  args: ['selector', 'ancestor'],
  match: 'ancestor',
  filter: 'tag.querySelector(selector)',
  target: 'tag',
  selector: '${ancestor}'
})

// :closest()
module.exports.closest = new CustomPseudoClass({
  name: 'closest',
  args: ['selector', 'ancestor'],
  match: 'selector',
  filter: 'tag.closest(ancestor)',
  target: 'tag.closest(ancestor)',
  selector: '${ancestor}'
})

// :has()
module.exports.has = new CustomPseudoClass({
  name: 'has',
  args: ['selector', 'child'],
  match: 'selector',
  filter: 'tag.querySelector(child)',
  target: 'tag',
  selector: '${selector}'
})

// :not(:has())
module.exports.hasNot = new CustomPseudoClass({
  name: 'hasNot',
  args: ['selector', 'child'],
  match: 'selector',
  filter: 'tag.querySelector(child) === null',
  target: 'tag',
  selector: '${selector}'
})

// :parent
module.exports.parent = new CustomPseudoClass({
  name: 'parent',
  args: ['selector'],
  match: 'selector',
  filter: 'tag.parentElement',
  target: 'tag.parentElement',
  selector: ''
})

// :previous
module.exports.previous = new CustomPseudoClass({
  name: 'previous',
  args: ['selector'],
  match: 'selector',
  filter: 'tag.previousElementSibling',
  target: 'tag.previousElementSibling',
  selector: ''
})

// :contains-regex()
module.exports.containsRegex = new CustomPseudoClass({
  name: 'containsRegex',
  args: ['selector', 'regex'],
  match: 'selector',
  filter: 'regex.test(tag.textContent)',
  target: 'tag',
  selector: '${selector}'
})

// :contains-text()
module.exports.containsText = new CustomPseudoClass({
  name: 'containsText',
  args: ['selector', 'string'],
  match: 'selector',
  filter: 'tag.textContent.includes(string)',
  target: 'tag',
  selector: '${selector}'
})

// :excludes-regex()
module.exports.excludesRegex = new CustomPseudoClass({
  name: 'excludesRegex',
  args: ['selector', 'regex'],
  match: 'selector',
  filter: 'regex.test(tag.textContent) === false',
  target: 'tag',
  selector: '${selector}'
})

// :excludes-text()
module.exports.excludesText = new CustomPseudoClass({
  name: 'excludesText',
  args: ['selector', 'string'],
  match: 'selector',
  filter: 'tag.textContent.includes(string) === false',
  target: 'tag',
  selector: '${selector}'
})

// :grandparent
module.exports.grandparent = new CustomPseudoClass({
  name: 'grandparent',
  args: ['selector'],
  match: 'selector',
  filter: 'tag.parentElement.parentElement',
  target: 'tag.parentElement.parentElement',
  selector: ''
})

// :in-viewport()
module.exports.inViewport = new CustomPseudoClass({
  name: 'inViewport',
  args: ['selector', 'option'],
  match: 'selector',
  filter: `
    {
      fully: tag.getBoundingClientRect().top >= 0
        && tag.getBoundingClientRect().left >= 0
        && tag.getBoundingClientRect().right <= innerWidth
        && tag.getBoundingClientRect().bottom <= innerHeight,
      partly: tag.getBoundingClientRect().top + tag.offsetHeight >= 0
        && tag.getBoundingClientRect().left + tag.offsetWidth >= 0
        && tag.getBoundingClientRect().right - tag.offsetWidth <= innerWidth
        && tag.getBoundingClientRect().bottom - tag.offsetHeight <= innerHeight
    }[option]
  `,
  target: 'tag',
  selector: '${selector}'
})

// :overflowed()
module.exports.overflowed = new CustomPseudoClass({
  name: 'overflowed',
  args: ['selector', 'options'],
  match: 'selector',
  filter: `
    options.every(option => ({
      top: tag.scrollTop > 0,
      right: tag.scrollLeft + tag.offsetWidth < tag.scrollWidth,
      bottom: tag.scrollTop + tag.offsetHeight < tag.scrollHeight,
      left: tag.scrollLeft > 0
    })[option])
  `,
  target: 'tag',
  selector: '${selector}'
})

// :min-aspect-ratio()
module.exports.minAspectRatio = new CustomPseudoClass({
  name: 'minAspectRatio',
  args: ['selector', 'number'],
  match: 'selector',
  filter: 'number <= tag.offsetWidth / tag.offsetHeight',
  target: 'tag',
  selector: '${selector}'
})

// :max-aspect-ratio()
module.exports.maxAspectRatio = new CustomPseudoClass({
  name: 'maxAspectRatio',
  args: ['selector', 'number'],
  match: 'selector',
  filter: 'number >= tag.offsetWidth / tag.offsetHeight',
  target: 'tag',
  selector: '${selector}'
})

// :min-characters()
module.exports.minCharacters = new CustomPseudoClass({
  name: 'minCharacters',
  args: ['selector', 'number'],
  match: 'selector',
  filter: `
    number <= (
      (tag.value && tag.value.length)
      || tag.textContent.length
    )
  `,
  target: 'tag',
  selector: '${selector}'
})

// :characters()
module.exports.characters = new CustomPseudoClass({
  name: 'characters',
  args: ['selector', 'number'],
  match: 'selector',
  filter: `
    number === (
      (tag.value && tag.value.length)
      || tag.textContent.length
    )
  `,
  target: 'tag',
  selector: '${selector}'
})

// :max-characters()
module.exports.maxCharacters = new CustomPseudoClass({
  name: 'maxCharacters',
  args: ['selector', 'number'],
  match: 'selector',
  filter: `
    number >= (
      (tag.value && tag.value.length)
      || tag.textContent.length
    )
  `,
  target: 'tag',
  selector: '${selector}'
})

// :min-children()
module.exports.minChildren = new CustomPseudoClass({
  name: 'minChildren',
  args: ['selector', 'number'],
  match: 'selector',
  filter: 'number <= tag.children.length',
  target: 'tag',
  selector: '${selector}'
})

// :children()
module.exports.children = new CustomPseudoClass({
  name: 'children',
  args: ['selector', 'number'],
  match: 'selector',
  filter: 'number === tag.children.length',
  target: 'tag',
  selector: '${selector}'
})

// :max-children()
module.exports.maxChildren = new CustomPseudoClass({
  name: 'maxChildren',
  args: ['selector', 'number'],
  match: 'selector',
  filter: 'number >= tag.children.length',
  target: 'tag',
  selector: '${selector}'
})

// :min-height()
module.exports.minHeight = new CustomPseudoClass({
  name: 'minHeight',
  args: ['selector', 'number'],
  match: 'selector',
  filter: 'number <= tag.offsetHeight',
  target: 'tag',
  selector: '${selector}'
})

// :max-height()
module.exports.maxHeight = new CustomPseudoClass({
  name: 'maxHeight',
  args: ['selector', 'number'],
  match: 'selector',
  filter: 'number >= tag.offsetHeight',
  target: 'tag',
  selector: '${selector}'
})

// :min-scroll-x()
module.exports.minScrollX = new CustomPseudoClass({
  name: 'minScrollX',
  args: ['selector', 'number'],
  match: 'selector',
  filter: 'number <= tag.scrollLeft',
  target: 'tag',
  selector: '${selector}'
})

// :max-scroll-x()
module.exports.maxScrollX = new CustomPseudoClass({
  name: 'maxScrollX',
  args: ['selector', 'number'],
  match: 'selector',
  filter: 'number >= tag.scrollLeft',
  target: 'tag',
  selector: '${selector}'
})

// :min-scroll-y()
module.exports.minScrollY = new CustomPseudoClass({
  name: 'minScrollY',
  args: ['selector', 'number'],
  match: 'selector',
  filter: 'number <= tag.scrollTop',
  target: 'tag',
  selector: '${selector}'
})

// :max-scroll-y()
module.exports.maxScrollY = new CustomPseudoClass({
  name: 'maxScrollY',
  args: ['selector', 'number'],
  match: 'selector',
  filter: 'number >= tag.scrollTop',
  target: 'tag',
  selector: '${selector}'
})

// :min-width()
module.exports.minWidth = new CustomPseudoClass({
  name: 'minWidth',
  args: ['selector', 'number'],
  match: 'selector',
  filter: 'number <= tag.offsetWidth',
  target: 'tag',
  selector: '${selector}'
})

// :max-width()
module.exports.maxWidth = new CustomPseudoClass({
  name: 'maxWidth',
  args: ['selector', 'number'],
  match: 'selector',
  filter: 'number >= tag.offsetWidth',
  target: 'tag',
  selector: '${selector}'
})

// :orientation()
module.exports.orientation = new CustomPseudoClass({
  name: 'orientation',
  args: ['selector', 'option'],
  match: 'selector',
  filter: `
    {
      portrait: tag.offsetWidth < tag.offsetHeight,
      square: tag.offsetWidth === tag.offsetHeight,
      landscape: tag.offsetWidth > tag.offsetHeight
    }[option]
  `,
  target: 'tag',
  selector: '${selector}'
})

// :attr-greater-than()
module.exports.attrGreater = new CustomPseudoClass({
  name: 'attrGreater',
  args: ['selector', 'attribute', 'number'],
  match: 'selector',
  filter: `
    parseFloat(
      attribute === 'value'
      ? tag.value
      : tag.getAttribute(attribute)
    ) > number
  `,
  target: 'tag',
  selector: '${selector}'
})

// :attr-less-than()
module.exports.attrLess = new CustomPseudoClass({
  name: 'attrLess',
  args: ['selector', 'attribute', 'number'],
  match: 'selector',
  filter: `
    parseFloat(
      attribute === 'value'
      ? tag.value
      : tag.getAttribute(attribute)
    ) < number
  `,
  target: 'tag',
  selector: '${selector}'
})

// :empty()
module.exports.empty = new CustomPseudoClass({
  name: 'empty',
  args: ['selector',],
  match: 'selector',
  filter: '(tag.value ? tag.value : tag.textContent).trim() === ``',
  target: 'tag',
  selector: '${selector}'
})