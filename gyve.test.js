const test = require('ava');
const gyve = require('./gyve');

test('gyve', t => {
    const delegatee = { foo: 0 };
    const delegateeTypeError = {
        instanceOf: TypeError,
        message: 'delegatee must be an object'
    };

    const delegator = { bar: 1 };
    const delegatorTypeError = {
        instanceOf: TypeError,
        message: 'delegator must be an object'
    };

    t.throws(() => gyve(), delegateeTypeError);
    t.assert(typeof gyve(delegatee) === 'function');
    t.throws(() => gyve(delegatee)(), delegatorTypeError);
    t.assert(typeof gyve(delegatee)(delegator) === 'object');
    t.assert(typeof gyve(delegatee, delegator) === 'object');
    t.deepEqual(gyve(delegatee)(delegator), gyve(delegatee, delegator));
    t.assert(Object.getPrototypeOf(gyve(delegatee, delegator)) === delegatee);
});
