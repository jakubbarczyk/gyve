[![build](https://travis-ci.org/jakubbarczyk/gyve.svg?branch=master)](https://travis-ci.org/jakubbarczyk/gyve)
[![dependencies](https://david-dm.org/jakubbarczyk/gyve.svg)](https://david-dm.org/jakubbarczyk/gyve)
[![npm package](https://badge.fury.io/js/gyve.svg)](https://badge.fury.io/js/gyve)
[![vulnerabilities](https://snyk.io/test/github/jakubbarczyk/gyve/badge.svg)](https://snyk.io/test/github/jakubbarczyk/gyve)

# Gyve

Prototypal delegation made simple.

## Installation

Install the package with npm:

```shell
npm install gyve
```

Include it in your project:

```javascript
const gyve = require("gyve");
```

## Documentation

Given two objects, `car` (delegatee) and `bmw` (delegator), use `gyve` to prototype-chain them:

```javascript
const car = {
    start() { ... },
    stop() { ... },
    wheels: 4
};

const electric = {
    charge() { ... }
};

// car <-- electric
const electricCar = gyve(car, electric);
```

Since `gyve` is a curried function, partial application is possible:
```javascript
const car = { ... };

const delegateToCar = gyve(car);

const f1 = { ... };

// car <-- f1
const f1Car = delegateToCar(f1);
```

## License

[MIT](http://ilee.mit-license.org)
