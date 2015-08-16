'use strict';

var serialize = require( './../lib' );

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
