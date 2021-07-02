const pathname = require('path');

//Base file name
console.log(pathname.basename(__filename));

//Directory file name
console.log(pathname.dirname(__filename));


//extension
console.log(pathname.extname(__filename));


//object (you can also look for what you want in that object)
console.log(pathname.parse(__filename).ext);

//concatenating paths
console.log(pathname.join(__dirname, 'test', 'hello.html'));