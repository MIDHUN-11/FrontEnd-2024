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
fname();
function fname(){
    var a="inside function";
    console.log(a);
}
// fname();
var b="outside function"
// console.log(a); //gives reference error
var c=20;
// if(c==20){
//     var d="inside if block"
// }
// console.log(d);
// let=block scope
if(c==20){
    let e="inside block";
    console.log(e);
}
console.log(e);