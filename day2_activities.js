//VARIABLES

/* ACTIVITY 1 - Create a program that stores someone’s name, age and favourite colour and log it to the console in a complete
sentence using Template Literals. STRETCH - Update all of your variables and write out a new sentence underneath your original. */
/*
let name = 'Nathan';
let age = '26';
let favouriteColour = 'Claret';

name = 'Tom';
age = '30';
favouriteColour = 'Blue';

console.log(`My name is ${name}. My age is ${age}. My favourite colour is ${favouriteColour}`); */


/* ACTIVITY 2 - Create a program that stores what you eat today for breakfast, lunch and dinner. Log these to the console.
STRETCH - Update each of these variables to what you will eat tomorrow. Log these to the console. */

//today
/*
let breakfast = 'egg on toast';
let lunch = 'chicken wrap';
let dinner = 'spag bol';

//tomorrow
breakfast = 'cereal';
lunch = 'soup';
dinner = 'pizza';

console.log(`Tommorow I will have ${breakfast} for breakfast. I will have ${lunch} for lunch and ${dinner} for dinner`); */


/* ACTIVITY 3 - Create a program that calculates the number of days from today to your birth date. Look for ‘Javascript Date’ on MDN.*/

/*
//Checks to see how many days until my birthday is this year
let todaysDate = new Date().getTime() // gets todays date and turns it into a milliseconds format
let birthday = new Date(`September 1 ${new Date().getFullYear()}`).getTime() // gets Birthday from current year and turns it into a milliseconds format

// finds the difference between todays date and birthday and converts it from milliseconds to days
let dateDifference = Math.ceil((birthday - todaysDate)/(1000 * 60 * 60 * 24)) //Math.ceil() function rounds number up to the next largest integer

// checks to see if birthday this year has passed
if(dateDifference < 0){
    // update birthday to next year and calculate difference again
    birthday = new Date(`September 1 ${new Date().getFullYear() + 1}`).getTime()
    dateDifference = Math.ceil((birthday - todaysDate)/(1000 * 60 * 60 * 24))  
}
// console.log how many days until next birthday
console.log(`My birthday is in ${dateDifference} days`) */

/* ACTIVITY 4 - > Create 9 variables: space1, space2… space9.
                > Assign either the value ‘x’,’o’,’ ‘, to each of these variables.
                > Insert the variables into your board using the ${varName} syntax and make it look like the displayed board.  */

/*
let space1 = 'x';
let space2 = 'o';
let space3 = '';
let space4 = 'x';
let space5 = 'x';
let space6 = '';
let space7 = 'o';
let space8 = '';
let space9 = '';
console.log (
    `
      |   |   
    ${space1} | ${space2} | ${space3} 
      |   |   
   -----------
      |   |   
    ${space4} | ${space5} | ${space6} 
      |   |   
   -----------
      |   |   
    ${space7} | ${space8}  | ${space9} 
      |   |   
     `
) */

//If Else Switch 

/*ACTIVITY 1 - Create a variable called age. Write an if statement that logs “Yes I can serve you” if the age is greater
than 17 and else logs “You aren’t old enough”. STRETCH - Take your if statement and add a variable called country in.
Eg. if age > 17 and country == “UK”. */

/*
let age = 17;
let country = "UK"

if(age > 17 && country == "UK") {
    console.log("Yes I can serve you.")
} else {
    console.log("You aren't old enough.")
} */


/* ACTIVITY 2 - Create a variable for any pizza topping. Create a switch statement, if the topping is one of your favourite ingredients,
log to the console “These are important ingredients for my pizza.” If you don’t mind having Pepperoni for example log to the console
“I don’t mind having ${topping} on my pizza. Finally, for any topping you don’t like log “${topping} should not be on a pizza.” */

/*
let pizzaTopping = "pepperoni";
switch (pizzaTopping) {
    case "pepperoni":
    case "salami":
        console.log(`${pizzaTopping} is delicious`)
        break;
    case "onions":
    case "peppers":
        console.log(`${pizzaTopping} are not for me`)
        break;
    case "pineapple":
        console.log(`${pizzaTopping} is a big no no`)
        break;
    default:
        console.log(`Your ${pizzaTopping} does not exist`)
} */


/*ACTIVITY 3 - Create a variable called password. Check how many letters are in the password, if there are less than 8, log to the console
that the password is too short. Otherwise log the password to the console. STRETCH - Create a variable called num. Check if the variable is
divisible by 3 or 5. If it is, log “This number is divisible by 3 or 5”. Otherwise log something else. */

/*
let password = 'password12345'
    if (password.length < 8) { //if statement checks the length to see if the password is long enough, if it isn't it'll log below.
        console.log('Password is too short')
    } else {
        console.log(password) //if password is long enough, it will log this.
    } */

/*
let num = 20
    if (num % 3 == 0 || num % 5 == 0) { // % checks to see if the num is divisible with no remainder, || or operator to see if one is true. 
        console.log(`${num} is divisible by either 3 or 5.`);
    } else {
        (console.log(`${num} is not divisible by either 3 or 5.`)) 
} */


/* ACTIVITY 4 - Create a variable called num. If num is divisible by 3 log “fizz” to the console, if it’s divisible by 5 log “buzz” to the
console, if it’s divisible by both 3 and 5 log “fizz buzz” to the console. Otherwise log num to the console. */

/*
let num = 10 
if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizz buzz")
} else if (num % 5 == 0) {
    console.log("buzz")
} else if (num % 3 == 0) {
    console.log("fizz") 
} else {
    console.log("num")
} */


/* ACTIVITY 5 - Create a variable called num. Check if the number is a palindrome (looks the same forward as it does backwards e.g. 1001 or
20202). */

/*
let num = 10000001;

let numArray = num.toString().split('');  //.toString() method returns a string, .split() method splits string into an array of substrings, with ('') being used as a seperator, the string is split between words.
let reversedNum = numArray.reverse().join(''); //.reverse() method reverses an array in place. .join() method creates and returns a new string by concatenating all of the elements in an array specified by a seperator string ('') in this case.

if(num == reversedNum) {   //if statement used to see if num == reversed num to find palindrome, else console log other statement.
  console.log("This is a palindrome");
} else {
  console.log("This is not a palindrome");
} */


/* ACTIVITY 6 - Create a variable called time, a variable called placeOfWork and a variable called townOfHome. Create an if statement that
logs to the console where someone is at times of the day. E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work. */

/*
let time = 7;
let townOfHome = 8;
let placeOfWork = 9
//if the first if statement doesn't match the command it will run the else if's to see if they match, if not, else console.log runs.
if (time == 7) {
    console.log("I'm at home")
} else if (time == townOfHome) {
    console.log("I'm commuting")
} else if (time == placeOfWork) {
    console.log("I'm at work")
} else {
    console.log("I've quit")
} */


/* ACTIVITY 7 - Take the string “jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. Find the
index of a last vowel in the string. */

/*
let myString = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwsh'
let vowels =  ['a','e','i','o','u'];

let arr = myString.split("").reverse(); //.split() method splits string into an array of substrings, with ("") being used as a seperator, the string is split between words. .reverse() method reverses an array into place.
let indexOfLastVowelInReverse = arr.findIndex(e => vowels.includes(e)) //.findIndex method returns the index of the first element in an array that satisfies the provided testing function.
// .includes method returns true if a string contains a specified string, in this case, all the vowels in the let vowels variable.
if(indexOfLastVowelInReverse != -1) { //The if statement uses the inequality operator to check if a vowel is at the end of the array, if there is not, it runs the code in the curly brackets.
  let index = myString.length-1-indexOfLastVowelInReverse 
  //because no vowel was found, this code checks myString. .length property returns the number of elements in that array.
    //the -1 starts looking from the back of the array, minusing the indexofLastVowelInReverse until a vowel is found. 
  console.log(`Last vowel found at index ${index}: ${myString[index]}`) //it then console logs the index character as a string and the index it was found in the array.
} */


/* ACTIVITY 8 - Create a variable called word that takes a string. Create an if statement that checks if the last letter is the same as
the first. If it is return true, otherwise return false. */

/*
let word = "man";

    if (word[0] == word[word.length-1]) {  //the if statment checks if the first letter (at 0 becuase of 0 indexing in js) is equal to the .length-1 (the last letter by using .length to check characters and -1 to check the last one)
        console.log('true');
    } else { 
         console.log('false')}; //it then returns either true or false */


/* ACTIVITY 9 - Create two variables called num1 and num2. Create an if statement that checks if the result of the sum is even. 
If it is return the number, otherwise return the numbers multiplied together. */

/*
let num1 = 4;
let num2 = 9;

if (num1 % 2 == 0 && num2 % 2 == 0){ //if both numbers are divisible by 2 with no remainders, the first constole log is run, if not they are multiplied together. 
  console.log("The numbers are even.");
}else{
  console.log(num1 * num2);
} */

