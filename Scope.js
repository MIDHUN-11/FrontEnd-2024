//  var is function scoped or global scope
// var b="outside function"
// function myfun(){
//     var a="inside fucntion";
//     // console.log(b);
//     var b="b is inside funciton"
//     {
//         var c="inside block";
//     }
//     console.log(c);
// }
// myfun();
// if(true){
//     var b="inside if";
// }
// console.log(b);

//let is block scope
// if(true){
//     let d="inside if";
// }
// // console.log(d);
// function letfun(){
//     let e="inside function";
// }
// console.log(e);

// hoisting=>using variables/functions before declaring
// temp dead zone
console.log(myval);
let myval="str"