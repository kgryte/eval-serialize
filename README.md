Serialize
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> Serializes an input value for dynamic code evaluation.


## Installation

``` bash
$ npm install eval-serialize
```

## Usage

``` javascript
var serialize = require( 'eval-serialize' );
```

#### serialize( value )

Serializes an input value for dynamic code evaluation.

``` javascript
var str = serialize( 5 );
// returns '5'

str = serialize( 'beep' );
// returns '"beep"'

str = serialize( Uint16Array( 4 ) );
// returns 'new Uint16Array([0,0,0,0])'
```

__Note__: the following input value types are __not__ currently supported...

*	native `functions`
*	`Map`
*	`Set`


## Examples

``` javascript
var serialize = require( 'eval-serialize' );

console.log( serialize( 5 ) );
// returns '5'

console.log( serialize( 'beep' ) );
// returns '"beep"'

console.log( serialize( null ) );
// returns 'null'

console.log( serialize( undefined ) );
// returns 'undefined'

console.log( serialize( true ) );
// returns 'true'

console.log( serialize( false ) );
// returns 'false'

console.log( serialize( NaN ) );
// returns 'NaN'

console.log( serialize( Number.POSITIVE_INFINITY ) );
// returns 'Number.POSITIVE_INFINITY'

console.log( serialize( Number.NEGATIVE_INFINITY ) );
// returns 'Number.NEGATIVE_INFINITY'

console.log( serialize( [1,2,3] ) );
// returns '[1,2,3]'

console.log( serialize( {'beep':'boop'} ) );
// returns '{\"beep\":\"boop\"}'

console.log( serialize( new Buffer( 'beep' ) ) );
// returns 'new Buffer("YmVlcA==","base64")'

console.log( serialize( new Int32Array( [1,2,3,4] ) ) );
// returns 'new Int32Array([1,2,3,4])'

console.log( serialize( new Date() ) );
// returns 'new Date(<timestamp>)'

console.log( serialize( function add( a, b ) {
	return a + b;
}));
// returns 'function add( a, b ) {\n\treturn a + b;\n}'
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/eval-serialize.svg
[npm-url]: https://npmjs.org/package/eval-serialize

[travis-image]: http://img.shields.io/travis/kgryte/eval-serialize/master.svg
[travis-url]: https://travis-ci.org/kgryte/eval-serialize

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/eval-serialize/master.svg
[codecov-url]: https://codecov.io/github/kgryte/eval-serialize?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/eval-serialize.svg
[dependencies-url]: https://david-dm.org/kgryte/eval-serialize

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/eval-serialize.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/eval-serialize

[github-issues-image]: http://img.shields.io/github/issues/kgryte/eval-serialize.svg
[github-issues-url]: https://github.com/kgryte/eval-serialize/issues
