var angleBrackets = /<>/g;

// <> -> Object.create(null)
function replaceAll(str) {
  return str.replace(angleBrackets, 'Object.create(null)');
}

function transform(str) {
  if (typeof str !== 'string') {
    throw new Error('expected a string to replace <> syntax');
  }
  return replaceAll(str);
}

transform.replace = replaceAll;

module.exports = transform;
