const path = require('path')

// console.log(path);
// console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt')

console.log(path.resolve(__dirname, 'content', 'subfolder', 'test.txt'));