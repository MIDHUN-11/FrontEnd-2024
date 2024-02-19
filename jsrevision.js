// js=>javaScript

// C
// int a=20;
// float b=30.5;
// String c="midhun98";
// char d='8';
// printf("%d",a);
// C++ 
// Cout<<a;


// js
// var,let,const
// var =es1
// var a=20;
// var a=30.5;
// var a="midhun"
// var a='1995';
// var a=`back tick tild
// multi line string
// template literal`
// var a;
// console.log(a);

// let=es6

// let a=20;
//  a=30.5;
//  a="midhun"
//  a='1995';
//  a=`back tick tild
// multi line string
// template literal`
//  let a;
// console.log(a);

// var=global or functional scope
// var a=30;
// fname();
// function fname(){
//     var a="inside function";
//     console.log(a);
// }
// fname();
// var b="outside function"
// console.log(a); //gives reference error
// var c=20;
// if(c==20){
//     var d="inside if block"
// }
// console.log(d);
// let=block scope
// if(c==20){
//     let e="inside block";
//     console.log(e);
// }
// console.log(e);

// functions=>block of code which is reusable
// eg=> lets assume i have 100 lines of code that needs to be executed twice
// named function
// function fname(){
//     console.log("this is named function");
// }
// fname();
// synchronous vs asynchronus
// js is synchronous by default
// sync
// console.log("1");
// console.log("2");
// console.log("3");
// async
// setTimeout is async by default
// console.log("1");
// setTimeout(()=>{
//     console.log("inside settimeout");
// },0);

// console.log("2");
// async function fname(){
//     // console.log("this is async function");
//     setTimeout(()=>{
//             console.log("inside settimeout");
//         },0);
// }
// fname();
// console.log("this is sync");

// setInterval(()=>{
//     console.log("this is interval");
// },4000);
// readfile
// writefile
// fetch