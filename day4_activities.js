//FUNCTIONS and OBJECTS
//FUNCTIONS
//ACTIVITY 1 - Take this code and turn it into arrow function syntax:
/*
function factorial(n) {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}
console.log(factorial(33)); */

/*
const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n - 1));
    }
}
console.log(factorial(33)); */

/* ACTIVITY 2 - Edit the below snippet to include two parameters and a JS running order count updated when the function is called: */
/*
let orderCount = 0;

const takeOrder = (topping) => {
    console.log(`Pizza with ${topping}`);
    orderCount++;
    
}
takeOrder("pineapple"); */

/*
let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`)
    console.log((orderCount++) + 1) //plus one to start the count at 1 instead of 0
}

takeOrder("Pepperoni", "Peppers");
takeOrder("Beef", "Mushroom"); */


/* ACTIVITY 3 - Cash machine time! JS Let’s create one that: > Dispenses cash if your pin number is correct and your balance is equal to, 
or more than, the amount you’re trying to withdraw! */

/*
pinNum = 1234
funds = 10000

let withdraw = (pin, amount) => {
    if(pin == pinNum && funds >= amount) { //checks if pin matches, and funds do not exceed the amount.
        funds -= amount //if both the above are correct, then funds are taken from the account.
        console.log(`Dispensing £${amount}. New balance is £${funds}`) 
    } else if (pin != pinNum) { //if the pin does not match, incorrect pin is displayed.
        console.log("Incorrect PIN")
    } else {
        console.log("Insufficient Funds") //else insufficient funds is displayed.
    }
}

withdraw(1234, 1000);
withdraw(4321, 9000);
withdraw(1234, 9000);
withdraw(1234, 100000); */


//OBJECTS
/* ACTIVITY 1 - Let’s edit our person object to include… A function called sayHi and when it’s called, it should return
“Hello my name is ${this.name}” */
/*
const person = {
    name: "Nathan",
    age: 26, 
    movies: ["Hotrod", "Superbad"],
    sayHi() {
        let string = (`Hello my name is ${person.name}`);
        return string;
    }
}
person.food = ["Pizza", "chips"];
console.log(person.sayHi()); */


/*
const person = {
    name: "Nathan",
    sayHi() {
        let string = (`Hello my name is ${person.name}`);
        return string;
    }
}
console.log(person.sayHi()); */

/* ACTIVITY 2 - Create an object called pet with the key values of: name, typeOfPet, age, colour And methods called eat
and drink. They should return a string saying [Your Pet Name] is eating/drinking.  */

/*
const pet = {
    name: "Bob",
    typeOfPet: "Dog",
    age: 10,
    color: "Blue",
    eat() {
         return (`${pet.name} is eating`);
    },
    drink() {
        return (`${pet.name} is drinking`);
    }
}
console.log(pet.eat());
console.log(pet.drink()); */


/* ACTIVITY 3 -  Create an object called coffeeShop with key values of: branch, drinks with prices, food with prices
And methods called drinksOrdered and foodOrdered. They should return a string saying [Your order] is … with all items
chosen with costs and total costs.*/
/*
const coffeeShop = {
    branch: "Rossendale",
    drinks: [["Coffee", 1.50], ["Coke", 2.50], ["Beer", 3.50]],
    food: [["Cake", 2], ["Chips", 4], ["Burger", 6]]
}

let total = 0;
order = ["food-1", "food-2", "drinks-0"];

console.log("Your order is:") 

for(count = 0; count < order.length; count++) { //this for loop lists out your order
    let orderSplit = order[count].split("-"); //here the order is found and then .split method is used to split string into an array of substrings.
    //And returns the array.
    total += coffeeShop[orderSplit[0]][orderSplit[1]][1]; //here we write syntax to work out the total cost.
    console.log(`${coffeeShop[orderSplit[0]][orderSplit[1]][0]}: £${coffeeShop[orderSplit[0]][orderSplit[1]][1].toFixed(2)}`)
} //the console log uses the syntax to access the multi dimensional arrays to return the food/ drink then : and price..toFixed to two decimal places

console.log(`Your total is: £${total.toFixed(2)}`) //calculates total */

