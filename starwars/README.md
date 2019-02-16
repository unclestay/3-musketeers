# starwars

> Get random names from Star Wars characters.

![starwars-names](other/starwars-names.gif)

## Installation

```sh
❯ npm install
```

## Usage

```js
const starWars = require('starwars');

const allNames = starWars.all;
const randomName = starWars.random();
const threeRandomNames = starWars.random(3);
```
