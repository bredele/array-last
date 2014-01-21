# array-last

  Return the last elements of an Array

## Installation

  Install with [component(1)](http://component.io):

    $ component install bredele/array-last

## Usage

```js
var last = require('last');
last(['olivier', 'bruno', 'amy']);
// ['amy']
```

Passing an index will return the N last elements.

```js
last(['olivier', 'bruno', 'amy'], 2);
//['bruno', 'amy']
```

## License

  MIT
