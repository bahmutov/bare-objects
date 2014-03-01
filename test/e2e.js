var foo = {
  n: 101,
  bar: function() {
    console.assert(this.n === 101, 'invalid value of n, this =', this);
  }
};

foo.bar();
foo.bar.bind(foo)();

var foobar = foo.bar;
try {
  foobar();
  console.log('hmm, no exception thrown!');
  process.exit(-1);
} catch (err) {};

foobar = foo..bar();
foobar();

// do it again for fun
foobar = foo..bar();
foobar();

// function without an object
function add(a, b) { return a + b; }
console.assert(add(2, 3) === 5, '2+3 = 5');
console.assert(add..(2)(3) === 5, '..2+3 = 5');
console.assert(add..(10, 11)() === 21, '..10,11 = 21');
