'use strict';

const eq = require('assert').strictEqual;
const unwrap = require('./index.js'); // require('unwrap-single-prop')

const toast = { bacon: 3, eggs: 1, cheese: 1 };
const lunch = [toast];
const dinner = [toast, 'cookies'];
const menu = { default: lunch };

let k = 'eggs';
eq(unwrap(k), undefined);
eq(unwrap(k, toast),   toast);
eq(unwrap(k, lunch),   lunch);
eq(unwrap(k, dinner),  dinner);
eq(unwrap(k, menu),    menu);

k = '0';
eq(unwrap(k), undefined);
eq(unwrap(k, toast),   toast);
eq(unwrap(k, lunch),   toast);
eq(unwrap(k, dinner),  dinner);
eq(unwrap(k, menu),    menu);

k = 0;
eq(unwrap(k), undefined);
eq(unwrap(k, toast),   toast);
eq(unwrap(k, lunch),   toast);
eq(unwrap(k, dinner),  dinner);
eq(unwrap(k, menu),    menu);



const symbols = { undefined: '(-)' };

k = undefined;
eq(unwrap(k, toast),   toast);
eq(unwrap(k, lunch),   lunch);
eq(unwrap(k, dinner),  dinner);
eq(unwrap(k, menu),    menu);
eq(unwrap(k, symbols), symbols);

k = String(k);
eq(k, 'undefined'); // Runtime sanity check
eq(unwrap(k, toast),   toast);
eq(unwrap(k, lunch),   lunch);
eq(unwrap(k, dinner),  dinner);
eq(unwrap(k, menu),    menu);
eq(unwrap(k, symbols), '(-)');













console.info('+OK usage tests passed.');
