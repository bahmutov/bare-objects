var dotdot = require('../src/dotdot');
var prop = dotdot.prop;
var fn = dotdot.fn;

// taken from lodash
var objectTypes = {
  'boolean': false,
  'function': true,
  'object': true,
  'number': false,
  'string': false,
  'undefined': false
};
var regexpClass = '[object RegExp]';
function isRegExp(value) {
  return value && objectTypes[typeof value] && toString.call(value) == regexpClass || false;
}

gt.module('testing foo..bar( detection');

gt.test('dotdot regexp', function () {
  gt.ok(isRegExp(prop), 'regexp');
});

gt.test('foo..bar(', function () {
  gt.ok(prop.test('foo..bar('));
});

gt.test('f100..bar(', function () {
  gt.ok(prop.test('f100..bar('));
});

gt.test('! 100..bar', function () {
  gt.ok(!prop.test('100..bar'));
});

gt.test('! 100..bar(', function () {
  gt.ok(!prop.test('100..bar('));
});

gt.test('! f100.bar(', function () {
  gt.ok(!prop.test('f100.bar('));
});

gt.test('variables f100..bar(', function () {
  var matches = prop.exec('f100..bar(');
  gt.equal(matches[1], 'f100', 'reference');
  gt.equal(matches[2], 'bar', 'property');
});

gt.test('variables f100..bar(something)', function () {
  var matches = prop.exec('f100..bar(something)');
  gt.equal(matches[1], 'f100', 'reference');
  gt.equal(matches[2], 'bar', 'property');
});

gt.test('variables (f100..bar(', function () {
  var matches = prop.exec('(f100..bar(');
  gt.equal(matches[1], 'f100', 'reference');
  gt.equal(matches[2], 'bar', 'property');
});

gt.module('testing foo..( detection');

gt.test('dotdot regexp', function () {
  gt.ok(isRegExp(fn), 'regexp');
});

gt.test('foo..(', function () {
  gt.ok(fn.test('foo..('));
});

gt.test('f100..(', function () {
  gt.ok(fn.test('f100..('));
});

gt.test('! 100..', function () {
  gt.ok(!fn.test('100..'));
});

gt.test('! 100..(', function () {
  gt.ok(!fn.test('100..('));
});

gt.test('! f100.(', function () {
  gt.ok(!fn.test('f100.('));
});

gt.test('variables f100..(', function () {
  var matches = fn.exec('f100..(');
  gt.equal(matches[1], 'f100', 'function name');
});

gt.test('variables f100..(something)', function () {
  var matches = fn.exec('f100..(something)');
  gt.equal(matches[1], 'f100', 'function name');
});
