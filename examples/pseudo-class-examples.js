import CustomPseudoClass from '../lib/custom-pseudo-class.js'

// :ancestor()
export const ancestor = new CustomPseudoClass({
  name: 'ancestor',
  args: ['selector', 'ancestor'],
  match: 'ancestor',
  filter: 'tag.querySelector(selector)',
  target: 'tag',
  selector: '${ancestor}'
})

// :closest()
export const closest = new CustomPseudoClass({
  name: 'closest',
  args: ['selector', 'ancestor'],
  match: 'selector',
  filter: 'tag.closest(ancestor)',
  target: 'tag.closest(ancestor)',
  selector: '${ancestor}'
})

// :has()
export const has = new CustomPseudoClass({
  name: 'has',
  args: ['selector', 'child'],
  match: 'selector',
  filter: 'tag.querySelector(child)',
  target: 'tag',
  selector: '${selector}'
})

// :parent
export const parent = new CustomPseudoClass({
  name: 'parent',
  args: ['selector'],
  match: 'selector',
  filter: 'tag.parentElement',
  target: 'tag.parentElement',
  selector: ''
})

// :previous
export const previous = new CustomPseudoClass({
  name: 'previous',
  args: ['selector'],
  match: 'selector',
  filter: 'tag.previousElementSibling',
  target: 'tag.previousElementSibling',
  selector: ''
})

// :contains-regex()
export const containsRegex = new CustomPseudoClass({
  name: 'containsRegex',
  args: ['selector', 'regex'],
  match: 'selector',
  filter: 'regex.test(tag.textContent)',
  target: 'tag',
  selector: '${selector}'
})

// :contains-text()
export const containsText = new CustomPseudoClass({
  name: 'containsText',
  args: ['selector', 'string'],
  match: 'selector',
  filter: 'tag.textContent.includes(string)',
  target: 'tag',
  selector: '${selector}'
})

// :min-width()
export const minWidth = new CustomPseudoClass({
  name: 'minWidth',
  args: ['selector', 'number'],
  match: 'selector',
  filter: 'tag.offsetWidth >= number',
  target: 'tag',
  selector: '${selector}'
})

// :max-width()
export const maxWidth = new CustomPseudoClass({
  name: 'maxWidth',
  args: ['selector', 'number'],
  match: 'selector',
  filter: 'tag.offsetWidth <= number',
  target: 'tag',
  selector: '${selector}'
})

// :excludes-text()
export const excludesText = new CustomPseudoClass({
  name: 'excludesText',
  args: ['selector', 'string'],
  match: 'selector',
  filter: '!tag.textContent.includes(string)',
  target: 'tag',
  selector: '${selector}'
})