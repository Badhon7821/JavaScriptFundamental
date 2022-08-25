
console.log("Hello World");
console.log("Hi Badhon");

//variables
let herNAme = "Sharmin";
let myName = "Badhon";
console.log(herNAme);
//two string adding
console.log(herNAme +" " + myName)
// camel case : herName, heIsRani
let movieRating = 9;
console.log(movieRating);


/*  Data type : Data Type is two type that is Object type and Primitive type
Primitive type are 7 type that is
1. Number(integer and floating)  // let herAge= 10; let herAge = 10.5;
2. String // let herName = "Rokeya";
3. Boolean // let herAge = true; let herAge = false;
4. Undefined // let herAge = " ";
5. Null
6. Symbol
7.bigInt */


//Mathmatical term
const myBirthYear = 1999;
const herBirthYear = 2000;
const birthYearDistance = myBirthYear - herBirthYear;
const birthYearAddition = myBirthYear + herBirthYear;
const birthYearMultiplication = myBirthYear * herBirthYear;
const birthYearDivision = myBirthYear / herBirthYear;
console.log(birthYearDistance);
console.log(birthYearAddition);
console.log(birthYearMultiplication);
console.log(birthYearDivision);

//Long Sentence Writing
console.log("I am a student"+ " " + "My age 10");
let number = 10;
 number += 10;
 number -= 10;
 number *= 10;
 number /= 10;
 console.log(number);

 //Backtique javascript or template leteratue
 const bioData = `I am ${myName} and he is ${herNAme}.My birth year ${myBirthYear} and her birth year ${herBirthYear}`;
 console.log(bioData);

 //If else conditin
const bscPassYear = 2025;
const marriedPossiblity = 80;
if(bscPassYear<=2024)
{
    console.log(`${marriedPossiblity}%`);
}
else{
    console.log(`${100 - marriedPossiblity}%`);
}
// if, else if, else condition
// grade define
const herMark = 80;
if(herMark<=33){
    console.log("fail");
}else if(herMark>=33 && herMark<=60){
    console.log("A");
}else{
    console.log("A+");
}

// string + number and number + string data type automatically change so this is Coercion
const myAge = "23";
console.log(myAge+ 20);
console.log(myAge-10);
const herAge = 24;
console.log("23" + herAge);
console.log("42"- herAge);

// string to number & number to string data type conversion is called data type conversion
const testNumber = 12;
const testNumberToString = String(testNumber);
console.log(testNumberToString);
console.log(String(12));
console.log(Number("20"));


// Checking String Data Type 
console.log(typeof myAge);
console.log(typeof NaN); //This is JS bug cause Undefined but this string type Number

// Leap Year test
/* const year = Number(prompt("Enter choice your year : "));

if(year){
    if(year%400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
        console.log(`${year} is leap year `);
    }
    else{
        console.log(`${year} is no leap year`);
    }
}
else{
    const year = Number(prompt("Enter a valid year"));
    if(year%400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
        console.log(`${year} is leap year `);
    }
    else{
        console.log(`${year} is no leap year`);
    }
} */

//  Switch Case statement---Digit define

/* const digit = Number(prompt("Enter Choice Digit : "));

if(digit){
    switch(digit){
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
        case 6:
            console.log("Six");
            break;
        case 7:
            console.log("Seven");
            break;
        case 8:
            console.log("Eight");
            break;
            default:
            console.log("Nine");
    }    
}
else{
    const digit = Number(prompt("Enter a valid Digit : "));
    switch(digit){
        case 0:
            console.log("Zero");
            break;
        case 1:
            console.log("One");
            break;
        case 2:
            console.log("Two");
            break;
        case 3:
            console.log("Three");
            break;
        case 4:
            console.log("Four");
            break;
        case 5:
            console.log("Five");
            break;
        case 6:
            console.log("Six");
            break;
        case 7:
            console.log("Seven");
            break;
        case 8:
            console.log("Eight");
            break;
            default:
            console.log("Nine");
    } 
}
 */

// Boolean Data Type check
// Falsy value - 0 ,"", null, undefined, NaN
// Truth value - " ", 1, {}-this is object
console.log(Boolean(0)); //false
console.log(Boolean(" ")); // true
console.log(Boolean("")); // False
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(1)); // true
console.log(Boolean({})); // true



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