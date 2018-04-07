const { formatDate } = require('./util/format');

let arg = process.argv[2];
let date = new Date(arg);
let formattedDate = formatDate(date);

console.log(formattedDate);