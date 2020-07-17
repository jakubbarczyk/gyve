[![Build Status](https://travis-ci.org/jakubbarczyk/gyve.svg?branch=master)](https://travis-ci.org/jakubbarczyk/gyve)

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

Given two objects, _car_ (delegatee) and _bmw_ (delegator), use _gyve_ to prototype-chain them:

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

Since _gyve_ is a curried function, partial application is possible:
```javascript
const car = { ... };

const delegateToCar = gyve(car);

const f1 = { ... };

// car <-- f1
const f1Car = delegateToCar(f1);
```

## License

[MIT](http://ilee.mit-license.org)
