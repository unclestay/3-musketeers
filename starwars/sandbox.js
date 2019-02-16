const starWars = require('./src/index');

const HOW_MANY = 4;

const allNames = starWars.all;
const randomName = starWars.random();
const someRandomNames = starWars.random(HOW_MANY);

console.log(`👾 All names`);
console.log(allNames);
console.log(`\n`);

console.log(`🔀 A random name`);
console.log(randomName);
console.log(`\n`);

console.log(`🌌 ${HOW_MANY} random names`);
console.log(someRandomNames);
