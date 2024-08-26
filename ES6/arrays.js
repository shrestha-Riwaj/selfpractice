// Arrays


// Sum of array
sumNum = (arrayNum) =>{
    let sumArray = 0;
    for(let i = 0; i<arrayNum.length ; i++){
        sumArray += arrayNum[i];
    }
    return sumArray;
}

console.log(sumNum([2,3,6,4,8,9]));
console.log(sumNum([2,3,6]));


// maximum number in a array
maxNum = (maxArray) =>{
    max = maxArray[0];
    for (let i=0; i<maxArray.length; i++){
        if(maxArray[i]>max){
            max=maxArray[i];
        }
    }
    return max;
}

console.log(maxNum([4,1,13,7,9]));

// remove duplicate
dupNum = (num)=>{
    newArr = [];
    
    for(let i=0; i<num.length;i++){
        k=0;
        k++;
        for(let j=k; j<num.length;j++){
            if(num[i] == num[j]){
                num.pop(num[i]);
                
                break;
            }
            else{
                k++;
            }
            console.log("j: " +j);
            console.log("k: " +k);

        }
    }
    return num;
}

res = dupNum([1,2,4,2,3,1]);
console.log(res);

let numbers = [1,2,3,4,5];

const mapp = numbers.map(()=>{
    console.log(numbers*2);
});

