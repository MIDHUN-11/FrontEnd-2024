const fs= require('fs');
// flowing mode
const flowingStream = fs.createReadStream('node_intro.js','utf-8');
flowingStream.on('data',(chunk)=>{
    console.log("flowing mode data read",chunk);
})

// non flowing mode
const nonFlowingStream = fs.createReadStream('node_intro.js','utf-8');
nonFlowingStream.on('readable',()=>{
    let mydata;
    while((mydata=nonFlowingStream.read())!=null){
        console.log("non flowing mode",mydata);
    }
});
nonFlowingStream.on('end',()=>{
    console.log("this is the end of the non flowing stream");
});