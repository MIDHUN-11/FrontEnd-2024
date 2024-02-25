const fs=require('fs');
fs.readFile('intro.js','utf-8',(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("i read the followign data from intro.js file",data);
    }
})
console.log("this is the last line of the code");