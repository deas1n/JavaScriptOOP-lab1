function textToLetters(text) {
  if (typeof text !== 'string') {
    throw new Error('Argument must be a string');
  }

  return text.split('');
}

const example = "Hello World";
const letters = textToLetters(example);

console.log("Текст:", example);
console.log("Масив літер:", letters);