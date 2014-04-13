# bare-objects

> Shorthand notation for Object.create(null) via node module hook

[![NPM][bare-objects-icon]][bare-objects-url]

[![Build status][bare-objects-ci-image]][bare-objects-ci-url]
[![dependencies][bare-objects-dependencies-image]][bare-objects-dependencies-url]
[![devdependencies][bare-objects-devdependencies-image]][bare-objects-devdependencies-url]

[![endorse][endorse-image]][endorse-url]

*bare-objects* installs a Node loader hook that transforms each loaded JavaScript file
and expands `<>` syntax into `Object.create(null)`

```js
var foo = <>;
foo.bar = 'bar'; // use just like normal objects
```

Because bare objects do not inherit from Object, there are no weird cases like

```js
{} + {}     // NaN
var foo = <>;
foo + foo   // TypeError: Cannot convert object to primitive value
```

## why?

[Sweet naked objects](http://bahmutov.calepin.co/sweet-naked-objects.html)

## Small print

Author: Gleb Bahmutov &copy; 2014

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](http://glebbahmutov.com)
* [blog](http://bahmutov.calepin.co/)

License: [MIT](MIT-license.md) - do anything with the code,
but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet / open issue on Github

[bare-objects-icon]: https://nodei.co/npm/bare-objects.png?downloads=true
[bare-objects-url]: https://npmjs.org/package/bare-objects
[bare-objects-ci-image]: https://travis-ci.org/bahmutov/bare-objects.png?branch=master
[bare-objects-ci-url]: https://travis-ci.org/bahmutov/bare-objects
[bare-objects-dependencies-image]: https://david-dm.org/bahmutov/bare-objects.png
[bare-objects-dependencies-url]: https://david-dm.org/bahmutov/bare-objects
[bare-objects-devdependencies-image]: https://david-dm.org/bahmutov/bare-objects/dev-status.png
[bare-objects-devdependencies-url]: https://david-dm.org/bahmutov/bare-objects#info=devDependencies
[endorse-image]: https://api.coderwall.com/bahmutov/endorsecount.png
[endorse-url]: https://coderwall.com/bahmutov
