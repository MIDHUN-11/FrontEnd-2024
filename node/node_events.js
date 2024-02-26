const EventEmitter =  require('events');
const newEvent = new EventEmitter();

newEvent.on('customEvent',(args)=>{
    console.log("this is the function executed on triggering my custom event and this is the argument passed into the function",args);
})

newEvent.emit('customEvent',"this is a arg passed from emitter");
