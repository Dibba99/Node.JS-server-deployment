const url = require("url");

const myURL = new URL('https://www.youtube.com/watch?v=fBNz5xF-Kx4&ab_channel=TraversyMedia');

//Serialized URL
console.log(myURL.href);

//Host (root domain and includes port if there is one)
console.log(myURL.host);

//Hostname (doesnt give port)
console.log(myURL.hostname);

//Pathname
console.log(myURL.pathname);

//serialized query
console.log(myURL.search);

//search params object
console.log(myURL.searchParams);

//Add a parameter
myURL.searchParams.append('abc','123');


