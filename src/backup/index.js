'use strict';

require('file?name=main/index.html!./index.html');
require('normalize.css/normalize.css');
require('./index.less');
require('initialize');

var Deck = require('lib/deck');
require('bespoke-keys');
require('bespoke-loop');
require('bespoke-scale');

var deck = Deck.create().push('<h1>Hello</h1>').push('<h2>About Myself</h2>').start({
  keys: true,
  loop: true,
  scale: true
});
