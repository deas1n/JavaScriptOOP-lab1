function replaceWord(text, oldWord, newWord) {
  if (typeof text !== 'string' || typeof oldWord !== 'string' || typeof newWord !== 'string') {
    throw new Error('Усі аргументи повинні бути рядками');
  }

  const regex = new RegExp(`\\b${oldWord}\\b`, 'gi');
  const newText = text.replace(regex, newWord);

  return newText;
}

const example = "JavaScript is great. I love JavaScript because JavaScript is powerful!";
const replaced = replaceWord(example, "JavaScript", "Python");

console.log("Початковий текст:");
console.log(example);
console.log("\nПісля заміни:");
console.log(replaced);
