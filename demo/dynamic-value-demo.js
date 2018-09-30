import jsincss from 'jsincss'

import {
  aspect,
  eunit,
  variable
} from '../examples/dynamic-value-examples.js'

jsincss(()=>`

  /* aspect-ratio: width/height; */
  ${aspect('.aspect', 16/9)}
  .aspect {
    background: lime;
  }

  /* EW, EH, EMIN, EMAX units */
  ${eunit('.eunit .ew', `
    font-size: 10ew;
  `)}
  ${eunit('.eunit .eh', `
    font-size: 90eh;
    max-height: 100px;
  `)}
  ${eunit('.eunit .emin', `
    font-size: 90emin;
    max-height: 100px;
  `)}
  ${eunit('.eunit .emax', `
    font-size: 10emax;
  `)}

  /* --frontend: 'variables'; */
  ${variable('.variables ', `
    --color: blue
  `)}

  ${variable('.variables li', `
    color: var(--color);
    background: var(--background);
  `)}

`)