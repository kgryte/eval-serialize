/* global require, describe, it */
'use strict';

// MODULES //

var chai = require( 'chai' ),
	serialize = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'serialize', function tests() {

	it( 'should export a function', function test() {
		expect( serialize ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a value to serialize', function test() {
		expect( foo ).to.throw( Error );
		function foo() {
			serialize();
		}
	});

	it( 'should throw an error if not provided a native function', function test() {
		expect( foo ).to.throw( Error );
		function foo() {
			serialize( Math.sqrt );
		}
	});

	it( 'should serialize positive infinity', function test() {
		assert.strictEqual( serialize( Number.POSITIVE_INFINITY ), 'Number.POSITIVE_INFINITY' );
	});

	it( 'should serialize negative infinity', function test() {
		assert.strictEqual( serialize( Number.NEGATIVE_INFINITY ), 'Number.NEGATIVE_INFINITY' );
	});

	it( 'should serialize a string', function test() {
		assert.strictEqual( serialize( 'beep' ), '\"beep\"' );
	});

	it( 'should serialize an array', function test() {
		assert.strictEqual( serialize( [1,2,3] ), '[1,2,3]' );
	});

	it( 'should serialize an object', function test() {
		assert.strictEqual( serialize( {'beep':'boop'} ), '{\"beep\":\"boop\"}' );
	});

	it( 'should serialize null', function test() {
		assert.strictEqual( serialize( null ), 'null' );
	});

	it( 'should serialize a boolean', function test() {
		assert.strictEqual( serialize( true ), 'true' );
		assert.strictEqual( serialize( false ), 'false' );
	});

	it( 'should serialize a number', function test() {
		assert.strictEqual( serialize( 5 ), '5' );
		assert.strictEqual( serialize( NaN ), 'NaN' );
	});

	it( 'should serialize undefined', function test() {
		assert.strictEqual( serialize( undefined ), 'undefined' );
	});

	it( 'should serialize a Buffer object', function test() {
		assert.strictEqual( serialize( new Buffer( 'beep' ) ), 'new Buffer("YmVlcA==","base64")' );
	});

	it( 'should serialize a typed array', function test() {
		assert.strictEqual( serialize( new Float32Array( [1,2,3,4] ) ), 'new Float32Array([1,2,3,4])' );
	});

	it( 'should serialize a regular expression', function test() {
		assert.strictEqual( serialize( /beep/gi ), '/beep/gi' );
	});

	it( 'should serialize a Date object', function test() {
		var date = new Date(),
			v = date.getTime();

		assert.strictEqual( serialize( date ), 'new Date('+v+')' );
	});

	it( 'should serialize a non-native function', function test() {
		assert.strictEqual( serialize( add ), 'function add( a, b ) {return a + b;}' );

		function add( a, b ) {return a + b;}
	});

});
