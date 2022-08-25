
//  Function Declaration

function temperatureInRoom(temp){
    const temperatureInRoomInFeranhite = 1.8*temp + 32;
    if(temperatureInRoomInFeranhite>=86)
    {
        return `${temperatureInRoomInFeranhite}F so AC is on `
    }
    else{
        return `${temperatureInRoomInFeranhite}F so AC is on `;
    }
}

const temperatureInRoomInCelcius = 30;
const tempIn = temperatureInRoom(temperatureInRoomInCelcius);
console.log(tempIn);

//  Function Expression
const foodMaker = function (pizza, salad){
return pizza+salad;
}
console.log(foodMaker(2,3))

// Arrow Function
const foodMaker1 = (a,b)=> a+b;
console.log(foodMaker1(2,3));

// Function Calling Function
function fruitMaker(fruit){
    return fruit*4;
}
function juiceMaker(apple,orange){
    const appleJuice = fruitMaker(apple);
    const orangeJuice = fruitMaker(orange);

    const juice = (appleJuice + orangeJuice)/10;

    return `${juice} ltr juice ready for eat. that are created by ${appleJuice} apple and ${orangeJuice} orrange`;
}

console.log(juiceMaker(10,20));

// ternary operator
const tempCheck = function(n){
    return n>=30 ? `AC on` : `AC off`;
}
console.log(tempCheck(25));

// brick calculation
/*
underground = 50000
1st to 10th = 10000 per floor
11th floor = 12000
12th to 21st = 10000 per floor
22th floor = 12000
73 floors = ??
*/

 function brickCalculation(totalFloors){
    let totalBricks;
    const undergroundBricks = 50000;
    let bricksForAllFloors = totalFloors * 1000;

    if(totalFloors>=11){
        const extraFloors = Math.trunc(totalFloors/11);
        const extraBricks = extraFloors * 2000;

        bricksForAllFloors += extraBricks;
        totalBricks = bricksForAllFloors + undergroundBricks;
    }else{
        return `${bricksForAllFloors + undergroundBricks}`
    }
    return `${totalBricks}`
}
console.log(brickCalculation(20));

// Hybrid Numerical Transformation
/* 
    index value for 2x2 : (1,-1)(2,-2)
    index value for 1x1 : (3,-3)
*/
const a = 1;
const b = -2;
const c = -1;
const d = 2;
const x = 3;
const y = -3;

function hybrid(a,b,c,d,x,y){
    const max = (a+d) * (b+c);
    console.log(max)
    const min  = x+y;
    console.log(min)
    const def = 2 * (max - min) * max;
    console.log(def);

    function defFinder(def){
        const dx = [1,-1];
        const dy = [1,1];

        dx.push(def);
        const dz = dx.concat(dy);
        return dz;
    }
    return result = defFinder(def);
}

console.log(hybrid(a,b,c,d,x,y));


// Arrays
// literal syntex
const friends = ["nasim", "rafi", "rasu", "bappy", "nishad", 10, 20, true, false]; 
console.log(friends);

// array function
const years = [1990, 2000, 2001, 2002, 2003]; // literal syntex
const birthYear = new Array(1990, 2000, 2001, 2002, 2003);
console.log(birthYear);

// array index
console.log(birthYear[0]);
console.log(birthYear[2]);
console.log(birthYear[1]);
console.log(years[4]);
console.log(friends[6]);
console.log(friends[16]); // index length er theke besi dile man asbe undefined

// array length
console.log(friends.length);

// array exercise
function myFriend(friends){
    console.log(friends);
}
myFriend(friends);

// array push, pop, shift, unshift
// push -  add element in the end
// unshift - add element at the beginning
// pop - remove element from the end
// shift - remove element from the beginning

function arrayPush(friends){
    let arrayLength= friends.length;
    for(let i=0; i<=arrayLength; i++){
        return friends[i];
    }
}
arrayPush(friends);

const mainArray = ["a", "b", "c"];
mainArray.push("o");
console.log(mainArray);
mainArray.pop();
console.log(mainArray);
mainArray.shift();
console.log(mainArray);
mainArray.unshift("amar");
console.log(mainArray);


// curry function
function multiplication(a){
    return function(b){
        return function(c,x,y){
            return function(d){
                return a*b*x*y*c*d;
            }
        }
    }
}
console.log(multiplication(1)(2)(3,4,5)(5));

// curry function by arraow function
const multiplicationPro =(a) =>(b)=>(c,x,y)=>(d)=> a*b*x*y*c*d; // Lamda Function
console.log(multiplicationPro(1)(2)(3,4,5)(5));



// array methods(push, pop,  shift, unshift, indexOf, includes)
const numbers = [11, 22, 33, 44, 45];
console.log(numbers.indexOf(50)); // index is -1 cause numbers has no include this value
console.log(numbers.indexOf(44)); // index is 3
console.log(numbers.includes(22)) // includes return boolean function that is true
console.log(numbers.includes(50)) // includes return boolean function that is false


// this function
const javaScript = {
    objName : "javaScript",
    libraries : ["React", "Angular", "Vue"],
     objLove : function(){
       return this.libraries;
    }
}
console.log(javaScript.objLove());


function testSum(a){
   let newArray = [];
    for(let i=0; i<=a.length-1; i++){
        newArray.push(a[i]);
    }
    return newArray;
   
}

const sum = [1,3]
console.log(testSum(sum));