var dotdot = require('../src/dotdot');
var fs = require('fs');
var path = require('path');

gt.module('dotdot replacement');

// foo..bar( => foo.bar.bind(foo,
gt.test('dotdot basics', function () {
  gt.func(dotdot, 'is a function');
  gt.string(dotdot('something'), 'returns a string');
});

gt.test('foo..bar() -> foo.bar.bind(foo)', function () {
  var replaced = dotdot('foo..bar()');
  gt.equal(replaced, 'foo.bar.bind(foo)');
});

gt.test('foo..bar(10) -> foo.bar.bind(foo, 10)', function () {
  var replaced = dotdot('foo..bar(10)');
  gt.equal(replaced, 'foo.bar.bind(foo, 10)');
});

gt.module('e2e');

gt.test('e2e source', function () {
  var src = fs.readFileSync(path.join(__dirname, 'e2e.js'), 'utf-8');
  gt.throws(function () {
    eval(str);
  }, 'Error', 'expected parser to choke on .. syntax');
  var replaced = dotdot(src);
  eval(replaced); // should be fine now
});
