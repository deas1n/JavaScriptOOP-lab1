const persons = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'Alice', age: 21, city: 'New York' },
  { name: 'Bob', age: 25, city: 'Chicago' },
  { name: 'Emma', age: 22, city: 'Los Angeles' },
  { name: 'David', age: 24, city: 'Miami' }
];

const currentYear = new Date().getFullYear();

const textFragments = persons.map(person => {
  const birthYear = currentYear - person.age;
  return `${person.name} from ${person.city} born in ${birthYear}`;
});

console.log("--- Масив текстових фрагментів ---");
textFragments.forEach(line => console.log(line));
