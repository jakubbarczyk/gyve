const isObject = value => typeof value === 'object' && !(value === null || value instanceof Array);

module.exports = isObject;
