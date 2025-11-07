const persons = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'Alice', age: 21, city: 'New York' },
  { name: 'Bob', age: 25, city: 'Chicago' },
  { name: 'Emma', age: 22, city: 'Los Angeles' }
];

function getUserData(name) {
  const user = persons.find(person => person.name === name);
  if (!user) {
    throw new Error('Unable to find user');
  }
  return user;
}

function showUserInfo(name) {
  console.log('Loading...');
  try {
    const user = getUserData(name);
    console.log(`Ім’я: ${user.name}`);
    console.log(`Вік: ${user.age}`);
    console.log(`Місто: ${user.city}`);
  } catch (error) {
    console.log('Помилка:', error.message);
  } finally {
    console.log('Loading finished');
  }
}

showUserInfo('Alice');  
console.log('---');
showUserInfo('Michael'); 
