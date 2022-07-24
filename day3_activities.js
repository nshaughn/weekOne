//ARRAYS and LOOPS
/* ACTIVITY 1 - Make an array of your favourite songs, 3 of them. Log them to the console. STRETCH - Can you add another two songs to the
list using a method and then remove the last one added? */

/*
let favSongs = [
    "Hero",
    "Believe",
    "Hello"
]

//stretch 
favSongs.push("Delete", "Intro");
favSongs.pop();
console.log(favSongs); */

/* ACTIVITY 2 - Using MDN choose one of the following methods: map(), shift(), unshift(), splice(), unsplice(). Create a program to 
demonstrate the use of the method. (Note: Not all methods would permanently update/make changes to the arrays themselves.) */

//.map method creates a new array populated with the results of calling a provided function on every every element in the calling array. 
/*
const array = [5, 10, 15, 20];
const map = array.map(x => x * 5);
console.log(map); */


//.shift method removes first element from array and returns the removed element and changes the length of the array.
/* const array = [10, 20, 30];
const firstElement = array.shift();
console.log(array);
console.log(firstElement); */


//.unshift method adds elements to the beginning of an array and returns the new length of it. 
/* const array = [11, 22, 33];
console.log(array.unshift(44, 55));
console.log(array); */


//.splice method changes contents of array by removing or replacing existing elements, and/ or adding new elements in place. 
/* const months = ['Jan', 'March', 'April', 'June']; //in this instance, adding Feb in at 1 (2 without 0 indexing) and removing nothing 
months.splice(1, 0, 'Feb');
console.log(months);

months.splice(4, 1, 'May'); //here May slots in at 4, and June is removed.
console.log(months); */


//LOOPS
/* ACTIVITY 1 - Create an array that lists your favourite films, up to 5 elements. Add 2 more using a method. Use a loop to cycle through
the array */

/*
let favFilms = [
    "Hot Rod",
    "The Other Guys",
    "Superbad"
]

favFilms.push("Saving Private Ryan", "Black Hawk Down");

for(let i = 0; i < favFilms.length; i++) { //.length checks number of array elements, not the characters.
    console.log(favFilms[i]); 
}; */


/* ACTIVITY 2 - Generate 6 random numbers between 1-50 */

/*
let nums = []
for(i = 0; i < 6; i++) {
    nums.push(Math.ceil(Math.random() * 50)) //Math.ceil function always rounds a number up, Math.random function returns number from 0 to just under 1, so we multiply this by 50.
}
console.log(nums) */


/* ACTIVITY 3 - If we can create a loop to put 0-9 on the screen, how can we count from 9-0? */

/*
let countdown = [];
for(let i = 9; i >= 0; i--) { //flip the i to 9 and the i >= to 0, and use a decrement operator to count down.
    countdown.push(i);
}
console.log(countdown); */


/* ACTIVITY 4 - Display 4 films stored in an array. Use a for loop to show each film in the array. Use an if statement to check if the
3rd film in the array is Ghostbusters. If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters! */

/*
let films = [
    "Hot Rod",
    "The Other Guys",
    "Ghostbusters",
    "Svaing Private Ryan"
]

for(let i = 0; i < films.length; i++) {
    console.log(films[i]);
} 

if(films[2] === "Ghostbusters") { //string equality operator used to see if 3rd film is Ghostbusters, if it is first console log runs, otherise the else does.
    console.log("Yay it's Ghostbusters")
} else {
    console.log("Boo! We want Ghostbusters")
}; */

/* ACTIVITY 5 - Create a variable, generate a random number between 1 and 30 six times, each random number generated, check if this
number of divisible by 7 or not. */

/*
let nums = 0;
let count = 0;
    while(count <= 6) {
        nums = (Math.ceil(Math.random() * 30)) //using Math.ceil and random again.

        if (nums % 7 === 0) {  //checking to see if the random numbers generated are divisible by 7
        console.log(`${nums} is divisible by 7.`); //template literals used to console log out the answers.
    } else {
        console.log(`${nums} is not divisible by 7.`);
    } 
    count++; //increments 6 times
    } */


/* ACTIVITY 6 - Imagine you’re a programmer for a social media platform! You have been tasked with building a prototype for a mutual
followers program. > Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. In these arrays place 4 names as strings. 
Make sure there are 2 names that are in BOTH arrays. > Using a nested loop iterate over both arrays and console.log out the matching
follower. */

/*
let bobsFollowers = ["Bill", "Ben", "Sam", "Pam", "Jim"];
let hannahsFollowers = ["Bill", "Phil", "Tim","Pam","Sam"];

let sameFollowers = [];

for(let i = 0; i < bobsFollowers.length; i++) {
    for(let j = 0; j < hannahsFollowers.length; j++) {
        if(bobsFollowers[i] === hannahsFollowers[j]) { //the code above checks the elements of these arrays, and the code here checks if any match
                sameFollowers.push(bobsFollowers[i]); //if they do they are pushed to the console
            
        }
    }
}

console.log(sameFollowers); */


/* ACTIVITY 7 - Research on do...while loop, find out about the difference between for loop, while loop and do...while loop. 
Give an example of each. What are the pros and cons? */

//The do...while statement creates a loop that executes a specified statement until the test condition evaluates to false.
//The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
/* A “do while” loop is a control flow statement that executes a block of code at least once, and then repeatedly executes the block,
 or not, depending on a given Boolean condition at the end of the block. */
/*
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result); */
// expected result: "12345" 
/*
let result = '';
let i = 0;
do {
  i += 1;
  result += i + ' ';
}
while (i > 0 && i < 5); 
// Despite i == 0 this will still loop as it starts off without the test

console.log(result); */

//A for loop repeats until a specified condition evaluates to false.
/*
for (let step = 0; step < 5; step++) {
    // Runs 5 times, with values of step 0 through 4.
    console.log('Walking east one step');
  } */

 /* 
Pros: It’s straightforward. You loop through every single element for a given string or array.

Cons: It’s very restricting, you can’t determine where to start or how long you want to go on for. 
Incrementing is always set to one at a time. */

//The while statement creates a loop that executes a specified statement as long as the test condition evaluates to true.
//The condition is evaluated before executing the statement.
/* A "While" Loop is used to repeat a specific block of code an unknown number of times, until a condition is met.
 For example, if we want to ask a user for a number between 1 and 10, we don't know how many times the user may enter a larger number, 
 so we keep asking "while the number is not between 1 and 10". */
/*
let n = 0;

while (n < 3) {
  n++;
}

console.log(n); */
// expected output: 3

/* So the only difference between While loop and Do while loop is that the while loop can end without executing any statement 
and Do while loop will end only after executing one statement.
A for-loop is a control flow statement for specifying iteration, which allows code to be executed repeatedly.
If we (or the computer) knows exactly how many times to execute a section of code (such as shuffling a deck of cards) we use a for loop.
*/