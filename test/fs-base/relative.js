var assert = require('../../lib/assert');
var fs = require('../../lib/fs-base');
var separator = '/';

var tests;
tests = [['', '', ''], ['.', '', ''], ['', '.', ''], ['.', '.', ''],
		['', '..', '../'], ['', '../', '../'], ['a', 'b', 'b'],
		['../a', '../b', 'b'], ['../a/b', '../a/c', 'c'], ['a/b', '..', '../../'],
		['a/b', 'c', '../c'], ['a/b', 'c/d', '../c/d'], ];

tests.forEach(function(args) {
	var source = args[0], target = args[1], expected = args[2];
	var name = '"' + source + '" -> "' + target + '" = "' + expected + '"';
	exports['test ' + name] = function() {
		var actual = fs.relative(source, target);
		// expect returned paths to use system-dependent file separator
		assert.strictEqual(expected.replace(/\//g, separator), actual);
	};
});

if(require.main == module) {
	require("../../lib/test").run(exports);
}
