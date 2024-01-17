// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map((number) => {
//   return number * number;
// });

// console.log(squares);

////////////// lezione 110 BONUS - ES6 Review -- dynamic object keys

// const favoriteFood = 'sushi';

// const goodFoods = {
//   [favoriteFood]: true
// };

// console.log(goodFoods);

///////////// lezione 136 REVIEW -- setTimeout, setInterval and clearInterval functions

// setTimeout(() => {
//   console.log('i will print 2 seconds after program starts');
// }, 2000);

// const interval = setInterval(() => {
//   console.log('i will print EVERY 2 seconds after program starts');
// }, 2000);

// setTimeout(() => {
//   clearInterval(interval);
// }, 10000);

///////////// lezione 221 AXIOS
/*
import axios from 'axios';

const url = 'http://localhost:3000/jobs';

const fetchJobsV1 = () => {
  axios.get(url).then((response) => {
    console.log(response.data);
  });
};

const fetchJobsV2 = async () => {
  const response = await axios.get(url);
  console.log(response.data);
};

fetchJobsV2();
*/

////////////// LEZIONE 235 SLICE METHOD

/*
const sushi = ['Tuna', 'Salmon', 'Yellowtail', 'Eel', 'Shrimp', 'Octopus', 'Uni'];
console.log(sushi.slice(2, 4));
*/

//
//
//
//
//
//
////////////// LEZIONE 314 review of javascript sets

/*
const numbers = new Set();
numbers.add(5);
numbers.add(10);
numbers.add(15);

console.log(numbers);
*/

////////////// LEZIONE 325 filter method on an array

/*
const numbers = [1, 3, 5, 7, 2, 9, 11, 6];

const newNumbers = numbers.filter((number) => {
  return number > 6;
});

console.log(newNumbers);
*/

////////////// LEZIONE 353 what is reactivity
//const { ref } = require('vue');

import { ref, reactive, computed } from 'vue';

/*
let a = 1;
let b = 2;
let c = a + b;
console.log(c);

a = 8;
b = 12;
console.log(c);
*/

/*
let a = ref(1);
let b = ref(2);

let c = computed(() => a.value + b.value);
console.log(c.value);
*/

/*
let name = 'Boris';
let title = name + ' the Great';
console.log(title);
*/

const person = reactive({
  name: 'Boris'
});

const title = computed(() => person.name + ' the Great');
console.log(title.value);

person.name = 'Peter';
console.log(title.value);
