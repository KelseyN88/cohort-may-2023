
function capitalize(myString) {
    //grab first letter of the word
    let firstLetter = myString[0]
    firstLetter = firstLetter.toUpperCase()
    //from the second index on... make lowercase
    let restOfWord = myString.slice(1).toLowerCase()
    let fullWord = firstLetter + restOfWord
    return fullWord
  }


let myString = 'the rain in spain falls MAINLY On The PLAIN'

// Your Code Goes Here
function titleize(myString) {
let splitArr = myString.split(' ')
let joinArr = splitArr.map(capitalize)
myString = joinArr.join(' ')
// console.log(joinArr)
return myString
}

console.log(titleize(myString))
console.log(titleize('jelly doNUTS'))
console.log(titleize('whats FOR DiNnER?'))

// Should print: 'The Rain In Spain Falls Mainly On The Plain'