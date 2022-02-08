let script = document.createElement('script');
script.src = 'gibberish.js';
script.async = false;
document.body.appendChild(script);
// enable strict mode
'use strict';
document.addEventListener('DOMContentLoaded', () => {
  console.log('defer1');
});