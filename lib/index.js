'use strict';

// MODULES //

var isString = require( 'validate.io-string-primitive' ),
	isObject = require( 'validate.io-object' ),
	isArray = require( 'validate.io-array' ),
	isDate = require( 'validate.io-strict-date' ),
	isRegExp = require( 'validate.io-regexp' ),
	isTypedArray = require( 'validate.io-typed-array' ),
	isBuffer = require( 'validate.io-buffer' ),
	isNativeFcn = require( 'validate.io-native-function' ),
	date2str = require( 'eval-serialize-date' ).raw,
	pinf2str = require( 'eval-serialize-positive-infinity' ),
	ninf2str = require( 'eval-serialize-negative-infinity' ),
	typedarray2str = require( 'eval-serialize-typed-array' ).raw,
	buffer2str = require( 'eval-serialize-buffer' ).raw;


// VARIABLES //

var PINF = Number.POSITIVE_INFINITY,
	NINF = Number.NEGATIVE_INFINITY;


// SERIALIZE //

/**
* FUNCTION: serialize( value )
*	Serializes a value as a string for dynamic code evaluation.
*
* @param {Number|String|Array|Object|Null|Undefined|Boolean} value - value to serialize
* @returns {String} serialized value
*/
function serialize( value ) {
	if ( !arguments.length ) {
		throw new Error( 'insufficient input arguments. Must provide a value to serialize.' );
	}
	if ( value === PINF ) {
		return pinf2str();
	}
	if ( value === NINF ) {
		return ninf2str();
	}
	if ( isDate( value ) ) {
		return date2str( value );
	}
	if ( isRegExp( value ) ) {
		return value.toString();
	}
	if ( isBuffer( value ) ) {
		return buffer2str( value );
	}
	if ( isTypedArray( value ) ) {
		return typedarray2str( value );
	}
	if (
		isString( value ) ||
		isArray( value ) ||
		isObject( value )
	) {
		return JSON.stringify( value );
	}
	if (
		value === void 0 ||
		value === null
	) {
		return '' + value;
	}
	if ( isNativeFcn( value ) ) {
		throw new TypeError( 'invalid input argument. Native functions are not supported. Value: `' + value + '`.' );
	}
	return value.toString();
} // end FUNCTION serialize()


// EXPORTS //

module.exports = serialize;
