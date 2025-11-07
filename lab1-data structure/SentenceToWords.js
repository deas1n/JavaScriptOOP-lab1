function sentenceToWords(sentence) {
  if (typeof sentence !== 'string' || sentence.trim() === '') {
    throw new Error('Аргумент повинен бути непорожнім рядком');
  }

  const words = sentence.trim().split(/\s+/);
  return words;
}

const example = "JavaScript is a powerful programming language";
const result = sentenceToWords(example);

console.log("Речення:", example);
console.log("Масив слів:", result);