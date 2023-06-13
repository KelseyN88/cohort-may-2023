// Create the `series` variable
let series = [0, 1];

while (series.length < 10) {

  let second = series.pop() // 1

  let first = series.pop() // 0

  let sum = (first + second)

  series.push(first, second, sum)

}

// Print the Fibonacci sequence to the console
console.log(series);
// the first ten numbers should be
// 0 1 1 2 3 5 8 13 21 34

// [0, 1]
// 0 + 1 = 1
// [0, 1, 1]
// 1 + 1 = 2
// [0, 1, 1, 2]
// 1 + 2 = 3
// [0, 1, 1, 2, 3]
// 2 + 3 = 5
// [0, 1, 1, 2, 3, 5]
// 3 + 5 = 6