// mutable and immutable objects

a=10;
b=a;
console.log(a);
console.log(b);
console.log(b+1);

fruits = ["apple", "mango", "guava"];
// fruit = fruits.conca÷t();
fruit = [...fruits];

fruit.pop();


console.log(fruits);
console.log(fruit);

data = {
    name:"Hello",
    age:24,
}
// data.age = 20;

info = data;
console.log(data);
console.log(info);

// let info2 = Object.assign({}, data);
let info2 = {...data};
info2.age=22;
console.log(info2);