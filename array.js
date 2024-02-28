const cars=["BMW","Benz","Volvo","Ferrari","Koinenseg","Lamborghini"];
        //   0     1      2      3         4              5
const car1="BMW"
const car2="Benz"
const car3="Volvo"
const car4="ferrari"

// console.log(cars[3],cars[2]);

// for(let i=0;i<=5;i++){
//     console.log(cars[i]);
// }
// for(let i=5;i>=0;i--){
//     console.log(cars[i]);
// }
const students=[
    {name:"Arthi", Clg:"SKCT",Dept:"EEE"},
    {name:"Vinnie",Clg:"PSG",Dept:"Bcom"}
];

const arthiName =students.filter(students=>students.name == "Arthi").map(student=>student.name);
console.log(arthiName);