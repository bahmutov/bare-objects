var foo = <>,
  bar = <>;

console.assert(!Object.isPrototypeOf(foo));
console.assert(typeof foo.constructor === 'undefined');

foo.foo = 'foo';
console.assert(foo.foo === 'foo', 'dot notation');

bar['bar'] = 'bar';
console.assert(bar['bar'] === 'bar', 'array notation');

