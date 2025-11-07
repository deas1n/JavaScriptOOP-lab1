function isJsFile(filename) {
  
  if (typeof filename !== 'string' || filename.trim() === '') {
    return false;
  }

  
  return filename.toLowerCase().endsWith('.js');
}


const files = ['app.js', 'index.html', 'script.JS', 'data.json', 'readme.md'];

for (const file of files) {
  console.log(`${file} → ${isJsFile(file)}`);
}
