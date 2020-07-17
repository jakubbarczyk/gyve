const test = require('ava');
const isObject = require('./is-object');

test('isObject', t => {
	t.false(isObject(undefined));
	t.false(isObject(null));
	t.false(isObject(true));
	t.false(isObject(false));
	t.false(isObject(NaN));
	t.false(isObject(0));
	t.false(isObject(1));
	t.false(isObject(""));
	t.false(isObject("foo"));
	t.false(isObject([]));
	t.false(isObject(["bar"]));
	t.false(isObject(new Array()));
	t.false(isObject(() => {}));
	t.false(isObject(function () {}));
	t.true(isObject({}));
    t.true(isObject({ foo: 0 }));
    t.true(isObject(new Object()));
    t.true(isObject(Object.create(null)));
});
