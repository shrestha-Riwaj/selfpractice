// Arrow function

// before arrow function we created fucntion like this:

// function add(a, b){
//     return a+b;
// }

// sum = add(1,2);
// console.log(sum);

// using arrow function
 
// const sum = (a, b) => a+b;
// console.log(sum(1,3));

// no argument

// const add = ()=>3+3;
// console.log(add());

// one argument

// const sub = (x) => x-2;
// console.log(sub(8));

// multiple statement 
// const find = (num) =>{
//     if(num%2==0){
//         return `${num} is an even number.`;
//     }
//     return `${num} is an odd number.`;
// }
// console.log(find(13));

// object inside arrow function 

// const fruits = ()=>({
//     "apple":2,
//     "mango":3,
// });

// console.log(fruits());

// Before arrow, how we s=use this.

// function addToCart(){
//     this.productName = "phone";
//     this.getProduct = function(){
//         console.log(this);
//         const that = this
//     setTimeout(function(){
//         console.log(that.productName);
//         console.log(that);
//     },1000);
//     }
// }
// let obj = new addToCart;
// obj.getProduct();

// using arrow function

function addToCart(){
    this.productName = "phone";
    this.getProduct = function(){
        console.log(this);
        
    setTimeout(()=>{
        console.log(this.productName);
    },1000);
    }
}
let obj = new addToCart;
obj.getProduct();