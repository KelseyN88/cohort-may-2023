/*
! Arrays -----------------------
    - Denoted with Square Brackets [ ]
    - Indices start at zero
*/

let list = [ 'milk', 'bread', 'chicken', 'coffee' ];
//             0        1          2        3

console.log(list[2]);
list[0] = 'chocolate milk'
console.log(list);

//-------------challange-----------------------

let avengers = [
    "Nick", 2, false, "Steve", "Bruce",
    ['Tony', 8, true]
];

// console.log(typeof avengers)
// console.log(avengers instanceof Array)

/*
Using the console.log();
    - target "Bruce"
    - target "true"
    - using string interpolation, return "Hello, Nick" and "Hello, Tony".
*/

console.log(avengers[4])
console.log(avengers[5][2])
console.log(`Hello, ${avengers[0]}`)
console.log(`Hello, ${avengers[5][0]}`)

//! Methods -----------------------

//* .push() - ADDS our value to the END of the array
let food = [
    'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hot dog'
];

// for (item of food) {
//     console.log(item)
// }

food.push('pizza')
console.log(`Push: ${food}`)


//* .splice() - can REMOVE and/or INSERT at specific locations
//takes in 3 requirements - .splice(position, number to remove, new info)
food.splice(1, 1, "Tacos")
console.log(`Splice 1: ${food}`);
//look at whats in position 1, and replace position 1 with Tacos

food.splice(1, 0, "Steak")
console.log(`Splice 2: ${food}`);
//look at what its position 1, DONT remove it but insert Steak where
//position 1 is. Keeps tacos and puts steak in the 1 index spot


//* .pop() REMOVE from the end of an array
food.pop()
console.log(`Pop: ${food}`)

//* .shift() - REMOVES the first element in an array
food.shift()
console.log(`Shift: ${food}`)

//* .unshift() - ADD new value to array
food.unshift("Hamburger,", "Salad")
console.log(`Unshift: ${food}`);

//* .length - Returns a numeric value of HOW MANY items are IN the array
let count = [0,1,2,3,4,5,6,7,8,9]
console.log(count.length)
console.log(count[count.length - 1]); // to get how long the array is or what the last value is


//! Iteration Methods
/*
    - .filter() & .includes()
    - does not destroy the original array
    - stores the filter array in a new variable.
    - takes a callback function that returns either true/false
    - loops through an array
    - MUST have a return
*/

let fruits = ['apple', 'pear', 'mango', 'orange', 'pineapple']

// how can i use a .filter to remove the mango?
// const filteredFruit = fruits.filter(fruit => {
//     let result = fruit !== 'mango'
//     console.log(result); // is a true/false value
//     return result
// })

let fruitExample = fruit => {
    let result = fruit !== 'mango'
    console.log(result)
    return result
}
const filteredFruit = fruits.filter(fruitExample)

console.log(filteredFruit);

//another example
let newArray = [1,2,3,4]
let even = newArray.filter(evenFunction)

function evenFunction(num) {
    let evenNumber = num % 2 == 0
    return evenNumber
}

let checkNumber = evenFunction(8)

console.log(even)
console.log(checkNumber)

let fruits2 = ['apple', 'pear', 'mango', 'orange', 'pineapple']
// remove any fruit that has the word "apple" in it?

let checkFruit = 'pineapple'
console.log(checkFruit.includes("apple")) // returns boolean

const filterNewFruits = fruits2.filter(fruit => !fruit.includes('apple'))
console.log(filterNewFruits);

let people = ['Bob', 'Jane', 'Jack', 'Barbara', 'Ruby']
const checkNames = people.filter( n => n.includes('B' && 'b'))
console.log(checkNames);

// .forEach() 
/*
    - It runs 3 arguments
        - The value
        - The Index
        - The array object itself

*/

let items = [ 'a', 'b', 'c', 'd']
for (let i = 0; i < items.length; i++){
console.log(items[i])
}

items.forEach(item => console.log("For Each ", item))
items.forEach((x,i) => console.log("For Each: ", x, i))



//* .find()
/*
    .find((parameter, index) => {code block})
        - index: optional
        - parameter is always a string
*/
let tmnt = [
    'Mikey,', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter'
]

let character = "Leo"
console.log('Find:', tmnt.find(c => c == character));

character = "April"
console.log('Find:', tmnt.find(c => c == character));

character = 'Splinter'
tmnt.find((c,i) => console.log(c == character, "index: ", i))

let leader = tmnt = tmnt.find((c,i) => {
    if(c == character) {
        return tmnt[i]
    }
})

console.log('Leader: ', leader);



//* .map()
/*
    - cycle through an array of items and re adjust how we would like it
    to dislay.
*/
let numArray = []
let fizzBuzzArray = []

for(let i = 1; i < 101; i ++) numArray.push(i)
// console.log(numArray);

numArray.map(x => {
    if(x % 15 === 0) fizzBuzzArray.push(x)
})

console.log(fizzBuzzArray);