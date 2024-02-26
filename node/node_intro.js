// import {react} from 'react'

// const myvariable=require('package-name/module-name')
// http


const http= require('http');

const server = http.createServer((request,response)=>{
    console.log(request.url);
    if(request.url=='/midhun'){
        response.write("this is midhun's page");
        response.end();
    }
    else{
    response.end("this is the first code in node");
    }
});

server.listen(2020,()=>{
    console.log("connection established");
})