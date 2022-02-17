//a variable is a box in which we can store a value 
 /* let js = 'amazing';
 console.log(40 +8 +23 -10);

 console.log('Jonas'); 
 console.log("Hunter");
 console.log('23');

 let firstName = "Hunter";

 console.log(firstName);


let country = 'United States of America';
console.log(country);

let continent = 'North America';
console.log(continent)

let population = '300 million people'; 
console.log(population); */

//remember that javascript has dynamic typing!!!!!!

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 2343);
// console.log(typeof 'Hunter');


// javascriptIsFun = 'Yes!'; 
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1997;
// console.log(typeof year);

// console.log(typeof null);

// let isIsland = false;
// console.log(isIsland);

// let language;
// console.log(language);

// console.log(typeof population);

// console.log(typeof country); 

/* let age = 24; 
age = 25; 

var job = 'programmer'; 
job = 'teacher'; */ 

/* const now = 2037; 
const ageHunter = now - 1997;
const ageCaitlin = now - 1998;  
console.log(now - ageHunter > now - ageCaitlin); */

// console.log(ageHunter * 2, ageCaitlin / 10, ageHunter ** 3); 

//const firstName = 'Hunter'; 
// const lastName = 'Estes'; 
// console.log(firstName + ' ' + lastName);

// Assignment Operators

// let x = 10 + 5; 
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x +* 4
// x++; // x = x + 1 

/* console.log(x); 

//comparison operatiors
console.log(ageHunter > ageCaitlin);  

console.log(ageCaitlin >= 18); 

const isFullAge = ageCaitlin >= 18; 
console.log(now - 1991);

let halfPopulation = 15000000 
console.log(halfPopulation); 

console.log(halfPopulation + 1); 

let finland = 6000000
console.log(halfPopulation > finland)

let averageCountryPopulation = 3400000
console.log(halfPopulation > averageCountryPopulation)

let desciption = 'Portugal is in Europe, and its 11 million people speak Portuguese'
console.log(desciption) */

//let x, y; 
//x = y = 25 -10 -5; 
// console.log(x, y) 

// const averageAge = (ageHunter + ageCaitlin) / 2; 
// console.log(ageHunter, ageCaitlin ,averageAge)

let markBodyMass = 78;
let markHeight = 1.69;

let johnBodyMass = 92;
let johnHeight = 1.95;

let bmiMark = markBodyMass / markHeight ** 2; 
console.log(bmiMark);

let bmiJohn  = johnBodyMass / johnHeight ** 2; 
console.log(bmiJohn);

let markHigherBmi = (bmiMark > bmiJohn);
console.log(markHigherBmi);

//temperate literals
const firstname = 'Hunter';
const job = 'programmer';
const birthYear = 1997
const year = 2022

const hunter = "I'm" + firstname + ", a " + (year - birthYear) + 'years old ' + job + "!";
console.log(hunter); 

const hunterNew = `I'm ${firstname}, a ${year - birthYear} year old ${job}!`
console.log(hunterNew);

console.log(`Just a regular string, just a regular string...`); 

