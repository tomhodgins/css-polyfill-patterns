const CustomSingleSelector = require('../lib/custom-single-selector.js')

// :first
module.exports.first = new CustomSingleSelector({
  name: 'first',
  match: 'querySelector(selector)',
  target: 'tag'
})

// :last
module.exports.last = new CustomSingleSelector({
  name: 'last',
  match: 'querySelectorAll(selector)',
  target: 'tag[tag.length - 1]'
})

// :first-of-class()
module.exports.firstOfClass = new CustomSingleSelector({
  name: 'firstOfClass',
  match: 'getElementsByClassName(selector)',
  target: 'tag[0]'
})