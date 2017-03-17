
var moment = require ("moment");

var datetime = moment().startOf('day').fromNow();
console.log(datetime);

function test(x = 32) {
  console.log(x);
}
test();

console.log("Because I'm happy!");

