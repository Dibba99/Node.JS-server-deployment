const EventEmitter = require('events');

//create a class 
class MyEmitter extends EventEmitter {};

//initialize another object
const myEmitter = new MyEmitter();

//event listener
myEmitter.on('event', () => console.log("Event is fired!"))

//initailize an event
myEmitter.emit('event');

