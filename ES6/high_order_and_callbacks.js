// High Order Functions and Callback

// addNum = (a,b,cb) =>{
//     let sum = a+b;
//     cb(sum);

//     return () => console.log(sum);
// }

// addNum(10,2,(val)=>{
//     console.log(val);
// });

// let resultFunction = addNum(101,2,(val)=>{});
// resultFunction();

// Examples

// Basic Callback Function
//  applyCallback = (value, callback)=>{
//     callback(value);
//  }

//  applyCallback(10, (val)=>{
//     console.log(`Value is: ${val}`);
//  });


// Asynchronous Callback
// simulateAsync = (message, callback) => {
//     setTimeout(
//         ()=>{
//             callback(message);
//         }, 1000
//     );
// }
// simulateAsync("Hello World", (msg)=>{
//     console.log(msg);
// });

// Callback with Error Handling

// safeDivide = (numerator, denominator, callback) => {
//     try{
//         let divide = numerator/denominator;
//         callback(divide);
//     }catch(e){

//         callback(console.log(`Error message ${e}`));
//     }
// }

// safeDivide(10, 4, (res)=>{
//     console.log(`Result is: ${res}`);
// })

// safeDivide = (numerator, denomirator, callback)=>{
//     if(denomirator === 0){
//         callback("Can't divide by zero.")
//     }
//     else{
//         let result = numerator/denomirator;
//         callback(result);
//     }

// }

// safeDivide(10,0, (res)=>{
//     console.log(`Result is ${res}`);
// })

// Filtering with Callback

// filterNumbers = (numbers, callback) =>{
//     callback(numbers);
// }

// filterNumbers( [2,3,4,5],  (num)=>{
//     for(var i in num){
//         if (i%2 == 0){
//             console.log(i);
//         }
//     }
//     console.log(num);
// });

filterNumbers = (numbers, callback) =>{
    const newNum = [];
    for(const num of numbers){
        if(callback(num)){
            newNum.push(num);
        }
    }
    return newNum;
}

let filteredNumbers = filterNumbers([1,2,3,4,5], (num)=>{
    return num%2===0
})

console.log(filteredNumbers);

// Sorting with Callback

sortItems = (items, compareFunction)=>{
    const sortedNum = [...items];
    sortedNum.sort(compareFunction);
    return sortedNum;
}

const numbers = [1,2,5,4,0];
const ascend = (a,b)=>a-b;
console.log(sortItems(numbers, ascend));

const descend = (a,b)=>b-a;
console.log(sortItems(numbers, descend));

// Redo filter and sort...



