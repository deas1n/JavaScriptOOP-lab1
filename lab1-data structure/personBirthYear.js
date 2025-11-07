const person = {
  name: "John",
  age: 23,
  city: "Boston",

  get birthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
};

console.log("Ім'я:", person.name);
console.log("Вік:", person.age);
console.log("Місто:", person.city);
console.log("Рік народження:", person.birthYear);

person.birthYear = 2000;
console.log("Після спроби змінити birthYear:", person.birthYear);
