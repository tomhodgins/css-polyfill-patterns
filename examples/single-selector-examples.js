import CustomSingleSelector from '../lib/custom-single-selector.js'

// :first
export const first = new CustomSingleSelector({
  name: 'first',
  match: 'querySelector(selector)',
  target: 'tag'
})

// :last
export const last = new CustomSingleSelector({
  name: 'last',
  match: 'querySelectorAll(selector)',
  target: 'tag[tag.length - 1]'
})

// :first-of-class()
export const firstOfClass = new CustomSingleSelector({
  name: 'firstOfClass',
  match: 'getElementsByClassName(selector)',
  target: 'tag[0]'
})