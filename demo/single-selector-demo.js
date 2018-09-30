import jsincss from 'jsincss'

import {
  first,
  last,
  firstOfClass
} from '../examples/single-selector-examples.js'


jsincss(()=>`

  /* :first */
  ${first('.first li', `
    background: lime;
  `)}

  /* :last */
  ${last('.last li', `
    background: purple;
  `)}

  /* :first-of-class() */
  ${firstOfClass('class', `
    background: turquoise;
  `)}

`)