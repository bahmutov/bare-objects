var transform = require('../src/naked-objects');
var fs = require('fs');
var path = require('path');

gt.module('<> replacement');

gt.test('basics', function () {
  gt.func(transform, 'is a function');
  gt.string(transform('something'), 'returns a string');
});

gt.test('<> -> Object.create(null)', function () {
  var replaced = transform('<>');
  gt.equal(replaced, 'Object.create(null)');
});

gt.test('var foo <>; -> ?', function () {
  var replaced = transform('var foo = <>;');
  gt.equal(replaced, 'var foo = Object.create(null);');
});
