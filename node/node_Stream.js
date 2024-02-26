const fs = require('fs');

const readingStream = fs.createReadStream('node_intro.js');
readingStream.on('data',(chunk)=>{
    console.log(chunk.toString());
})