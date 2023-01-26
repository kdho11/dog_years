const myAge = 37;
// establishing a variable for my age

const earlyYears = 2 * 10.5;
// variable for the first two years of your life

var laterYears = myAge - 2;
// establishing a variable for later years (anything after year 2)

laterYears *= 4;
// anything after 2 years is multiplied by 4

var myAgeInDogYears = earlyYears + laterYears;
// adding up the early years and later years to get my total age in dog years

const myName = 'Kendall'.toLowerCase();
// getting my name in lowercase

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
// string interpolation to use my variables in a string

