const EventEmitter = require('events');
const uuid = require('uuid');

console.log(uuid.v4());

class Logger extends EventEmitter {
    log(msg){
        this.emit('message', { id: uuid.v4(), msg});
    }
}; 


//module.exports = Logger;

const logger = new Logger();
logger.on('messege', data => console.log('Called Listener:', data));
logger.log('sup');