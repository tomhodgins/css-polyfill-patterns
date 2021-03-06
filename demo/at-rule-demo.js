import jsincss from 'jsincss'

import {
  element,
  overflow,
  viewport
} from '../examples/at-rule-examples.js'

jsincss(()=>`

  /* @element selector (conditions) {} */
  ${element('.element-query input', {minCharacters: 6}, `
    :self {
      background: hotpink;
    }
  `)}

`)

/* @overflow selector (conditions) {} */
let stylesheet = () => `

  .overflow {
    margin: 1em;
    position: relative;
    border-radius: 3px;
    border: 1px solid;
  }

  .overflow pre {
    margin: 0;
    padding: 2em;
    white-space: pre;
    overflow: auto;
    overflow-x: scroll;
  }

  .overflow .left,
  .overflow .right {
    display: block;
    width: 50px;
    height: 100%;
    position: absolute;
    top: 0;
    opacity: 0;
    pointer-events: none;
    transition: .5s ease-in-out;
  }

  .overflow .left {
    left: 0;
    background: linear-gradient(
      90deg,
      rgba(0,0,0,.3) 0%,
      rgba(0,0,0,0) 100%
    );
  }

  .overflow .right {
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,.3) 100%
    );
  }

  ${overflow('.overflow pre', ['left'], `
    :self ~ .left {
      opacity: 1;
    }
  `)}

  ${overflow('.overflow pre', ['right'], `
    :self ~ .right {
      opacity: 1;
    }
  `)}

`
jsincss(stylesheet)
jsincss(stylesheet, '.overflow pre', ['scroll'])

/* @in-viewport (condition) {} */
jsincss(()=>`

  p.viewport {
    margin: 10vh 0;
    height: 30px;
    border: 1px doted currentColor;
  }

  ${viewport('p', 'partly', `
    :self {
      background: lime;
    }
  `)}

  ${viewport('p', 'fully', `
    :self {
      color: red;
    }
  `)}

`, window, ['load', 'resize', 'scroll'])