# naked-objects

> Shorthand notation for Object.create(null) via node module hook

[![NPM][naked-objects-icon]][naked-objects-url]

[![Build status][naked-objects-ci-image]][naked-objects-ci-url]
[![dependencies][naked-objects-dependencies-image]][naked-objects-dependencies-url]
[![devdependencies][naked-objects-devdependencies-image]][naked-objects-devdependencies-url]

[![endorse][endorse-image]][endorse-url]

*naked-objects* installs a Node loader hook that transforms each loaded JavaScript file
and expands `<>` syntax into `Object.create(null)`

```js
var foo = <>;
foo.bar = 'bar'; // use just like normal objects
```

Because naked objects do not inherit from Object, there are no weird cases like

```js
{} + {}     // NaN
var foo = <>;
foo + foo   // TypeError: Cannot convert object to primitive value
```

## why?

[Sweet naked objects](http://bahmutov.calepin.co/sweet-naked-objects.html)

## Small print

Author: Gleb Bahmutov &copy; 2014

* [Changelog](History.md)
* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: [MIT](MIT-license.md) - do anything with the code,
but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet / open issue on Github

[naked-objects-icon]: https://nodei.co/npm/naked-objects.png?downloads=true
[naked-objects-url]: https://npmjs.org/package/naked-objects
[naked-objects-ci-image]: https://travis-ci.org/bahmutov/naked-objects.png?branch=master
[naked-objects-ci-url]: https://travis-ci.org/bahmutov/naked-objects
[naked-objects-dependencies-image]: https://david-dm.org/bahmutov/naked-objects.png
[naked-objects-dependencies-url]: https://david-dm.org/bahmutov/naked-objects
[naked-objects-devdependencies-image]: https://david-dm.org/bahmutov/naked-objects/dev-status.png
[naked-objects-devdependencies-url]: https://david-dm.org/bahmutov/naked-objects#info=devDependencies
[endorse-image]: https://api.coderwall.com/bahmutov/endorsecount.png
[endorse-url]: https://coderwall.com/bahmutov
