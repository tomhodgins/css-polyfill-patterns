!function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){const r=n(1);e.exports.aspect=new r({name:"aspect",args:["selector","ratio"],match:"selector",target:"tag",selector:"${selector}",rule:"height: ${(tag.offsetWidth / ratio)}px"}),e.exports.eunit=new r({name:"eunit",args:["selector","rule"],match:"selector",target:"tag",selector:"",rule:"${\n    rule.replace(\n      /(\\d*\\.?\\d+)(?:\\s*)(ew|eh|emin|emax)/gi,\n      (match, number, unit) => {\n        switch(unit) {\n          case 'ew':\n            return tag.offsetWidth / 100 * number + 'px'\n          case 'eh':\n            return tag.offsetHeight / 100 * number + 'px'\n          case 'emin':\n            return Math.min(tag.offsetWidth, tag.offsetHeight) / 100 * number + 'px'\n          case 'emax':\n            return Math.max(tag.offsetWidth, tag.offsetHeight) / 100 * number + 'px'\n        }\n      }\n    )\n  }"}),e.exports.variable=new r({name:"variable",args:["selector","rule"],match:"selector",target:"tag",selector:"",rule:"${\n    rule\n      .replace(/--([^;]+):(.+)[;}]*/gm, (string, property, value) => {\n        tag.setAttribute(`data-${property}`, value)\n      })\n      .replace(/var\\(--([^)]+)\\)/g, (string, match) => {\n        if (tag.getAttribute(`data-${match}`) !== null) {\n          return tag.getAttribute(`data-${match}`)\n        } else if (\n          tag.closest(`[data-${match}]`)\n          && tag.closest(`[data-${match}]`).getAttribute(`data-${match}`) !== null\n        ) {\n          return tag.closest(`[data-${match}]`).getAttribute(`data-${match}`)\n        } else {\n          if (match in window) {\n            return (new Function(`return ${match}`))() || ''\n          }\n        }\n      })\n    }"})},function(e,t){e.exports=class{constructor(e={name:"",args:[],match:"",logic:"",target:"",selector:"",rule:""}){return new Function(...e.args,`\n        return Array.from(document.querySelectorAll(${e.match}))\n          .reduce((styles, tag, count) => {\n            ${e.logic}\n            const attr = (${e.args.join(" + ")}).replace(/\\W/g, '')\n              ${e.target}.setAttribute(\`data-${e.name}-\${attr}\`, count)\n              styles += \`\n                ${e.selector}[data-${e.name}-\${attr}="\${count}"] {\n                  ${e.rule}\n                }\n              \`\n              return styles\n          }, '')\n      `)}}},function(e,t,n){"use strict";n.r(t);var r=n(0);!function(e="",t=window,n=["load","resize","input","click","reprocess"]){function r(e,t,n,r){return e.addEventListener(t,e=>(function(e,t){let n=document.querySelector(`#jsincss-${e}`);n||((n=document.createElement("style")).id=`jsincss-${e}`,document.head.appendChild(n));const r=n.textContent,a=t();if(!r||a!==r)return n.textContent=a})(n,r))}let a=Date.now()+Math.floor(100*Math.random());t===window?n.forEach(t=>r(window,t,a,e)):document.querySelectorAll(t).forEach(t=>n.forEach(n=>r(t,n,a,e)))}(()=>`\n\n  /* aspect-ratio: width/height; */\n  ${Object(r.aspect)(".aspect",16/9)}\n  .aspect {\n    background: lime;\n  }\n\n  /* EW, EH, EMIN, EMAX units */\n  ${Object(r.eunit)(".eunit .ew","\n    font-size: 10ew;\n  ")}\n  ${Object(r.eunit)(".eunit .eh","\n    font-size: 90eh;\n    max-height: 100px;\n  ")}\n  ${Object(r.eunit)(".eunit .emin","\n    font-size: 90emin;\n    max-height: 100px;\n  ")}\n  ${Object(r.eunit)(".eunit .emax","\n    font-size: 10emax;\n  ")}\n\n  /* --frontend: 'variables'; */\n  ${Object(r.variable)(".variables ","\n    --color: blue\n  ")}\n\n  ${Object(r.variable)(".variables li","\n    color: var(--color);\n    background: var(--background);\n  ")}\n\n`)}]);