process.env.NODE_ENV = 'test';

var jsdom = require('jsdom').jsdom;

require('babel/register')({stage: 0});

var doc = jsdom('<html><body></body></html>');

global.document = doc;
global.navigator = {userAgent: ''};
global.window = doc.defaultView;
global.window.navigator = global.navigator;

var expect = require('chai').expect;

global.expect = expect;
global.fail = function fail () {
    throw new Error('Explicit test failure');
};
