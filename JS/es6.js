// Var 

// console.log("..........Var.............");
// var hello = "World!!!";
// function greeting (){
//     var hello = "There";
//      console.log(`From inside the function: ${hello}`);
// };

// var j = 13;
// if(true){
//     for (var j=0; j<5;j++){
//         console.log(`Inside: ${j}`);
//     }
// }
// console.log(`Outside: ${j}`);

// greeting();
// console.log(`From outside the function: ${hello}`);

// // let 
// console.log("............Let...........");
// let hello1 = "Universe?";
// function greet(){
//     let hello1 = "There";
//     return `Inside the function: ${hello1}`;
// };

// console.log(greet());
// console.log(`Outside the function: ${hello1}`);

// let i = 12;
// if(true){
//     for (let i=0; i<5;i++){
//         console.log(`Inside: ${i}`);
//     }
// }
// console.log(`Outside: ${i}`);


// const

// console.log(".........const...........");
// const num = 10;
// const num2 = 12;
// let sum = num+num2;
// console.log(sum);
// num = 12; const so cant change the value
// console.log(num);  ----> so will give error.

// Template literals

// productName = "Laptop";
// quantity = 2;
// console.log("Before template literals: Bought " + quantity + "laptop\'s from \"ABC\"");
// console.log("..................");
// console.log(`After template literals:
//  Bought ${quantity} laptop's from 
//  "ABC". `);

function address(){
    return "Delievery address is baneshwor.";
};

let productStatus = "pending";
let stat = "Product status is: "
stat += (productStatus === "delivered"?"green":"red");
console.log(stat);
console.log(`Product Status delivered is white and Pending is black.
The status is ${productStatus==="delivered"?"white":"black"}.
${address()}`);
