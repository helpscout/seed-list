// Test :: Modifier :: Bullet
'use strict';

var assert = require('chai').assert;
var barista = require('seed-barista');

describe('seed-list: modifier: bullet', function() {

  var style = `
    @import "./_index";
  `;
  var output = barista({ content: style });
  var $o = output.$('.c-list--bullet');

  it('should have a bullet modifier', function() {
    assert.isOk($o.exists());
  });

  it('should have the correct list-style-type', function() {
    assert.equal($o.getProp('list-style-type'), 'disc');
  });

  it('should have a left offset', function() {
    assert.equal($o.getProp('padding-left'), '12px');
  });
});
