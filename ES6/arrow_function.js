// Arrow Functions


// Syntax

    // Normal Functions

//     function greeting(){
//     console.log("Good Morning");
// }
//     greeting();

    // Arrow Functions

//     const addNum = (a,b) =>{
//         return a+b;
//     };
// console.log(`Sum is ${addNum(2,3)}`);

    // One liner

    // const subNum = (a,b) => a-b;
    // console.log(`Difference is ${subNum(4,2)}`);
    

// 'arguments' keyword

    // Normal Fucnitons

    // function displayNum(){
    //     console.log(arguments);
    // }

    // displayNum(1,2,3,4,5,6,7);

    // arrow functions - we use spread operator

    // const rangeOfNum = (...nums)=>{
    //     console.log(nums);
    // }

    // rangeOfNum(2,4,6,8,10);


// Hoisting
    // Normal Functions - calling the function before initailizing.

    // helloUser();
    // function helloUser(){
    //     console.log("Hello User, How are you.");
    // }


    // arrow functions - doesnt support hoisitng, will give error.
    
    // welcomeUser();
    // const welcomeUser = () =>{
    //     return "Welcome User!!!";
    // }
    // console.log(welcomeUser);


// This keyword

    // Normal functions

    // function something(){
    //     const obj = {
    //         value:10,
    //         myFunction: function(){
    //             console.log(`Value is: ${this.value}`);
    //         }
    //     }
    //     return obj.myFunction();
    // }
    // something();

    // arrow functions
    
    const nothing = () => {
        const obj = {
            value:15,
            
            myFunction: ()=>{
                // console.log(`Value is: ${this.value}`);
                console.log(` ${this}`);
            }
        }
        obj.myFunction();
    }

    nothing();