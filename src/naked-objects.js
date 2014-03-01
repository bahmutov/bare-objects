// foo..bar() - binding object property
var prop = /([a-zA-Z]\w+)\.\.([a-zA-Z]\w+)\(/;
var fn = /([a-zA-Z]\w+)\.\.\(/;

// foo..bar() -> foo.bar.bind(foo)
function replaceProp(str) {
  do {
    var matches = prop.exec(str);
    // console.log('matches', matches);
    if (!matches) {
      return str;
    }
    var before = str.substr(0, matches.index);
    // console.log('before', before);
    var after = str.substr(matches.index + matches[0].length);
    // console.log('after', after);
    var reference = matches[1];
    var functionName = matches[2];
    var bound = before + reference + '.' + functionName + '.bind(' + reference;
    if (after[0] === ')') {
      str = bound + after;
    } else {
      str = bound + ', ' + after;
    }
  } while (matches);
}

// foo..() -> foo.bind(null)
function replaceFn(str) {
  do {
    var matches = fn.exec(str);
    // console.log('matches', matches);
    if (!matches) {
      return str;
    }
    var before = str.substr(0, matches.index);
    // console.log('before', before);
    var after = str.substr(matches.index + matches[0].length);
    // console.log('after', after);
    var functionName = matches[1];
    var bound = before + functionName + '.bind(null';
    if (after[0] === ')') {
      str = bound + after;
    } else {
      str = bound + ', ' + after;
    }
  } while (matches);
}

function dotdot(str) {
  if (typeof str !== 'string') {
    throw new Error('expected a string to replace .. syntax');
  }
  str = replaceProp(str);
  str = replaceFn(str);
  return str;
}

dotdot.prop = prop;
dotdot.fn = fn;

module.exports = dotdot;
