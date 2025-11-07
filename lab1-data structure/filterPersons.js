const persons = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'Alice', age: 19, city: 'New York' },
  { name: 'Bob', age: 25, city: 'Chicago' },
  { name: 'Emma', age: 20, city: 'Los Angeles' },
  { name: 'David', age: 27, city: 'Miami' }
];

const olderThan20 = persons.filter(person => person.age > 20);

console.log("--- Люди старші за 20 років ---");
olderThan20.forEach(person => {
  console.log(`${person.name}, ${person.age} років, ${person.city}`);
});
