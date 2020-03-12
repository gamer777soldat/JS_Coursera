var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();

emitter.on('hello', console.log);

emitter.emit('error', 'Hello!');
