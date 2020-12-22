"use strict"

// let sheepCounted = 0;
// while (sheepCounted < 10) {
// console.log("I have counted" + sheepCounted + "sheep!");
// sheepCounted++;
// } console.log('zzzzzzzz');


// for(let sheep = 0; sheep < 5; sheep++){
//     console.log("Oh my " + sheep)
// }

// let someNum = 6;
// for(let num = 0; num <= someNum; num++){
//     console.log(num);
// }
//-------------------------------ARR + FOR------------------
// let animals = ["Lion", "Flamingo", "Polar Bear", "Giraffe"];
// for (let any=0; any < animals.length; any++){
//     console.log("This is zoo for " + animals[any] + " !")
// }

let arr = [...Array(30)].map(_=>Math.round(Math.random()*20-10));
console.log(arr.length);
console.log(arr[0]);
console.log(arr[29]);


// let ar = ['a', 'b', 'c'];
// let ar2 = ar.map(function(item){
//     return item.toUpperCase();});
//     console.log(ar2);