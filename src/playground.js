// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((number) => {
//   return number * number;
// });

// console.log(squares);

// lezione 110 BONUS - ES6 Review -- dynamic object keys

// const favoriteFood = 'sushi';

// const goodFoods = {
//   [favoriteFood]: true
// };

// console.log(goodFoods);

// lezione 136 REVIEW -- setTimeout, setInterval and clearInterval functions

// setTimeout(() => {
//   console.log('i will print 2 seconds after program starts');
// }, 2000);

const interval = setInterval(() => {
  console.log('i will print EVERY 2 seconds after program starts');
}, 2000);

setTimeout(() => {
  clearInterval(interval);
}, 10000);
