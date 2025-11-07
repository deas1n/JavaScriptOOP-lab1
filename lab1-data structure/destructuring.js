const person = {
  name: 'John',
  age: 23,
  city: 'Boston'
};

const { name, city } = person;

console.log('Ім’я (з об’єкта):', name);
console.log('Місто (з об’єкта):', city);

const persons = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'Alice', age: 21, city: 'New York' },
  { name: 'Bob', age: 25, city: 'Chicago' }
];

const [firstPerson] = persons;

console.log('\nПерший елемент масиву:', firstPerson);
console.log(`Ім’я: ${firstPerson.name}, Вік: ${firstPerson.age}, Місто: ${firstPerson.city}`);
