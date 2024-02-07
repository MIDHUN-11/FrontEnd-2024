// synchronous vs asynchronous
//  JS by default is synchronous
// console.log("A");
// console.log("B");
// console.log("C");
// setTimeout(()=>{
//     console.log("this is executed in timeout after 3sec")
// },3000);
// async function nam(){
// }
// async
// timeout
// interval
// fetch
// readfile
// promise
// await=> used inside async

// console.log("A");
// console.log("B");

// setTimeout(()=>{
//     console.log("this is executed in timeout after 3sec")
// },3000);
// console.log("C");
const intervalid=setInterval(()=>{
    console.log("this is in regular interval")
},2000);
clearInterval(intervalid);