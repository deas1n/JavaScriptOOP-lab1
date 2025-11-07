function reverseWord(word) {
  if (typeof word !== 'string') {
    throw new Error('Argument must be a string');
  }

  return word.split('').reverse().join('');
}

const example = "Hello";
const reversed = reverseWord(example);

console.log("Початкове слово:", example);
console.log("У зворотному порядку:", reversed);
