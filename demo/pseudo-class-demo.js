import jsincss from 'jsincss'

import {
  ancestor,
  closest,
  has,
  hasNot,
  parent,
  previous,
  containsRegex,
  containsText,
  excludesText,
  excludesRegex,
  grandparent,
  inViewport,
  overflowed,
  minAspectRatio,
  maxAspectRatio,
  minCharacters,
  characters,
  maxCharacters,
  minChildren,
  children,
  maxChildren,
  minHeight,
  maxHeight,
  minScrollX,
  maxScrollX,
  minScrollY,
  maxScrollY,
  minWidth,
  maxWidth,
  orientation,
  attrGreater,
  attrLess,
  empty,
  computed
} from '../examples/pseudo-class-examples.js'

jsincss(()=>`

  /* :ancestor() */
  ${ancestor('.ancestor span', '.ancestor li', `
    background: orange;
  `)}

  /* :closest() */
  .closest,
  .closest div {
    border: 1px solid;
    padding: 1em;
  }

  ${closest('.closest .target', '.demo', `
    border: 4px dashed red;
  `)}

  /* :has() */
  .has span {
    background: red;
  }

  ${has('.has ul', 'li:nth-child(3)', `
    background: cyan;
  `)}

  ${has('.has *', 'span', `
    padding-top: 5px;
    padding-bottom: 5px;
    border: 4px dashed red;
  `)}

  /* :not(:has()) */
  ${hasNot('.hasNot ul', 'li:nth-of-type(2)', `
    border: 4px dashed red;
  `)}

  /* :parent */
  ${parent('.parent .target', `
    border: 4px dashed red;
  `)}

  /* :previous */
  ${previous('.prev .target', `
    background: teal;
  `)}

  /* :contains-regex() */
  ${containsRegex('.regex li', /M/i, `
    background: plum;
  `)}

  /* :contains-text() */
  ${containsText('.includes li', 'target', `
    background: blue;
  `)}

  /* :excludes-regex() */
  ${excludesRegex('.excludesRegex li', /test/, `
    background: yellow;
  `)}

  /* :excludes-text() */
  ${excludesText('.excludesText li', 'test', `
    background: lime;
  `)}

  /* :grandparent */
  .grandparent,
  .grandparent div {
    padding: 1em;
    border: 1px dotted lightskyblue;
    margin-top: 1em;
  }
  ${grandparent('.grandparent .target', `
      border: 4px dashed turquoise;
  `)}

  /* :min-aspect-ratio() */
  .min-aspect-ratio {
    height: 40vw;
    border: 1px dotted lime;
  }

  ${minAspectRatio('.min-aspect-ratio', 16/9, `
    background: lime;
  `)}

  /* :max-aspect-ratio() */
  .max-aspect-ratio {
    height: 40vw;
    border: 1px dotted purple;
  }

  ${maxAspectRatio('.max-aspect-ratio', 16/9, `
    background: purple;
  `)}

  /* :min-characters() */
  ${minCharacters('.min-characters', 5, `
    background: dodgerblue;
  `)}

  /* :characters() */
  ${characters('.characters', 5, `
    background: hotpink;
  `)}

  /* :max-characters() */
  ${maxCharacters('.max-characters', 5, `
    background: turquoise;
  `)}

  /* :min-children() */
  ${minChildren('.min-children > ul', 2, `
    border: 1px dashed green;
  `)}

  /* :children() */
  ${children('.children > ul', 2, `
    border: 1px dashed red;
  `)}

  /* :max-children() */
  ${maxChildren('.max-children > ul', 2, `
    border: 1px dashed blue;
  `)}

  /* :min-height() */
  .min-height {
    width: 100%;
    resize: vertical;
  }

  ${minHeight('.min-height', 150, `
    background: gold;
  `)}

  /* :max-height() */
  .max-height {
    width: 100%;
    resize: vertical;
  }

  ${maxHeight('.max-height', 150, `
    background: teal;
  `)}

  /* :min-scroll-x() */
  .min-scroll-x {
    overflow-x: scroll;
    border: 1px dotted orange;
  }

  .min-scroll-x p {
    width: 200%;
  }

  ${minScrollX('.min-scroll-x', 50, `
    background: orange;
  `)}

  /* :max-scroll-x() */
  .max-scroll-x {
    overflow-x: scroll;
    border: 1px dotted hotpink;
  }

  .max-scroll-x p {
    width: 200%;
  }

  ${maxScrollX('.max-scroll-x', 50, `
    background: hotpink;
  `)}

  /* :min-scroll-y() */
  .min-scroll-y {
    height: 100px;
    border: 1px dotted dodgerblue;
    overflow-y: scroll;
  }

  ${minScrollY('.min-scroll-y', 50, `
    background: dodgerblue;
  `)}

  /* :max-scroll-y() */
  .max-scroll-y {
    height: 100px;
    border: 1px dotted orangered;
    overflow-y: scroll;
  }

  ${maxScrollY('.max-scroll-y', 50, `
    background: orangered;
  `)}

  /* :orientation() */
  ${orientation('.orientation', 'portrait', `
    background: magenta;
  `)}

  ${orientation('.orientation', 'square', `
    background: yellow;
  `)}

  ${orientation('.orientation', 'landscape', `
    background: cyan;
  `)}

  /* :min-width() */
  .minWidth {
    height: 30px;
    border: 1px dotted lime;
  }
  ${minWidth('.minWidth', 300, `
    background: lime;
  `)}

  /* :max-width() */
  .maxWidth {
    height: 30px;
    border: 1px dotted purple;
  }
  ${maxWidth('.maxWidth', 300, `
    background: purple;
  `)}

  /* :attr-greater-than() */
  ${attrGreater('.attr-greater', 'value', '5', `
      background: lime;
    `
  )}

  /* :attr-less-than() */
  ${attrLess('.attr-less', 'value', '5', `
      background: orange;
    `
  )}

  /* :empty */
  .empty {
    min-height: 2em;
  }
  ${empty('.empty', `
    border: 10px solid slateblue;
  `)}

`)

/* :in-viewport() */
jsincss(()=>`

  .inViewport {
    padding: 2em;
    border: 1px solid currentColor;
  }

  ${inViewport('.inViewport', 'partly', `
    color: purple;
    font-weight: bolder;
  `)}

  ${inViewport('.inViewport', 'fully', `
    background: lime;
  `)}

`, window, ['load', 'resize', 'scroll'])

/* :overflowed */
const stylesheet = () => `

  .overflowed {
    border: 1px solid currentColor;
    overflow: auto;
    height: 100px;
  }

  .overflowed div {
    width: 200%;
    height: 300px;
  }

  ${overflowed('.overflowed', ['left'], `
    background: red;
  `)}

  ${overflowed('.overflowed', ['right'], `
    color: green;
  `)}

  ${overflowed('.overflowed', ['top'], `
    text-decoration: underline;
  `)}

  ${overflowed('.overflowed', ['bottom'], `
    box-shadow: yellow 10px 10px 0;
  `)}

`
jsincss(stylesheet, window, ['load', 'resize'])
jsincss(stylesheet, '.overflowed', ['scroll', ''])

document.querySelectorAll('[class$="-height"]').forEach(tag => {
  tag.addEventListener('mouseup', e =>
    window.dispatchEvent(new Event('reprocess'))
  )
  tag.addEventListener('mousemove', e =>
    window.dispatchEvent(new Event('reprocess'))
  )
})

document.querySelectorAll('[class*="-scroll-"]').forEach(tag => {
  tag.addEventListener('scroll', e =>
    window.dispatchEvent(new Event('reprocess'))
  )
})

document.querySelectorAll('[class$="attr-"]').forEach(tag =>
  tag.addEventListener('input', e =>
    window.dispatchEvent(new Event('reprocess'))
  )
)