const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.some() // is at least one person 19?
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({isAdult});

// Array.prototype.every() // is everyone 19?
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({allAdults});

// Array.prototype.find()
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);

// comments.splice(index, 1);
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];
