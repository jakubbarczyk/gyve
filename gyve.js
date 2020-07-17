const isObject = require('./is-object');

const gyve = (...args) => {
    const [delegatee, delegator] = args;

    if (isObject(delegatee)) {
        if (isObject(delegator)) {
            return Object.create(delegatee, Object.getOwnPropertyDescriptors(delegator));
        } else if (args.length === 1) {
            return __ => gyve(delegatee, __);
        } else {
            throw TypeError('delegator must be an object');
        }
    } else {
        throw TypeError('delegatee must be an object');
    }
};

module.exports = gyve;
