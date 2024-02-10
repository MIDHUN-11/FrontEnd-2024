// synchronous-high priority
// asynchronous

console.log("midhun");
setTimeout(()=>{
    console.log("inside timeout")
},3000);
console.log("last line")

let id=setInterval(()=>{
    console.log("interval");
},2000);
clearInterval(id);