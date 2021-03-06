var assert = require('../../lib/assert');
var fs = require('../../lib/fs-base');

var tests;
tests = [['', '.'], ['.', '.'], ['foo', '.'], ['foo/bar', 'foo']];

tests.forEach(function(dirs) {
	exports['test "' + dirs[0] + '"'] = function() {
		var actual = fs.directory(dirs[0]);
		assert.strictEqual(dirs[1], actual);
	};
});

if(require.main == module) {
	require("../../lib/test").run(exports);
}
