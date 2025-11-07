const persons = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'Alice', age: 21, city: 'New York' },
  { name: 'Bob', age: 25, city: 'Chicago' },
  { name: 'Emma', age: 22, city: 'Los Angeles' },
  { name: 'David', age: 24, city: 'Miami' }
];

persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = '2023';

console.log('--- Виведення через for ---');
for (let i = 0; i < persons.length; i++) {
  console.log(`${persons[i].name} (${persons[i].age}) from ${persons[i].city}`);
}

console.log('\n--- Виведення через for...of ---');
for (const person of persons) {
  console.log(`${person.name} (${person.age}) from ${person.city}`);
}

console.log('\n--- Виведення через forEach ---');
persons.forEach(person => {
  console.log(`${person.name} (${person.age}) from ${person.city}`);
});

console.log('\n--- Властивості масиву persons ---');
console.log(`groupName: ${persons.groupName}`);
console.log(`teacher: ${persons.teacher}`);
console.log(`year: ${persons.year}`);
