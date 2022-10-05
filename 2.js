let names = require('./app.js')
let sayHi = require('./1.js')
require('./3')

console.log(names.ourPersons);
sayHi(names.john)
// sayHi(names.peter)
sayHi('ahmed')
