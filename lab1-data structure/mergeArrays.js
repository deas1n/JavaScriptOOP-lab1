const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const merged1 = arr1.concat(arr2);
console.log("1. Використання concat():", merged1);

const merged2 = [...arr1, ...arr2];
console.log("2. Використання spread (...):", merged2);

