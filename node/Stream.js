const fs = require('fs');

const readingStream = fs.createReadStream('intro.js');
readingStream.on('data',(chunk)=>{
    console.log(chunk.toString());
})