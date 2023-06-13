/* 
  midterm: 3.3,
  project: 4.0,
  final: 3.2
*/

// key value pair - grade and weight whos values represent a single decimal point grade.
// the weight on the midterm and project should be 1
// the weight on the final should be 2
//--------------------------------------------------------------------------------------

let grades = {
    midterm: {
      grade: 3.3,
      weight: 1
    },

    project: {
        grade: 4.0,
        weight: 1
    },

    final: {
        grade: 3.2,
        weight: 2
    }
  }
  
  function gpa(someGrades) {
    gradesToWeight = Object.keys(someGrades)
    let gradeSum = 0
    let weightSum = 0

    gradesToWeight.forEach(function(key) {

        gradeSum += grades[key]['grade'] * grades[key]['weight'];
        weightSum += grades[key]['weight'];

    })
    let weightedGrade = gradeSum / weightSum
    console.log(`The final GPA is ${weightedGrade}`); 
  }
 
  gpa(grades)















// this works too

// let grades = {
//   midterm: {
//     grade: 3.3,
//     weight: 1
//   },
//   project: {
//     grade: 4.0,
//     weight: 1
//   },
//   final: {
//     grade: 3.2,
//     weight: 2
//   }
// }

// function gpa(someGrades) {
//   gradesToWeight = Object.keys(someGrades);
  
//   let gradeSum = someGrades['midterm']['grade'] + someGrades['project']['grade'] + someGrades['final']['grade'];
//   let weightSum = someGrades['midterm']['weight'] + someGrades['project']['weight'] + someGrades['final']['weight'];
  
//   let weightedGrade = (someGrades['midterm']['grade'] * someGrades['midterm']['weight'] + someGrades['project']['grade'] * someGrades['project']['weight'] + someGrades['final']['grade'] * someGrades['final']['weight']) / weightSum;
  
//   console.log(`The final GPA is ${weightedGrade}`); 
// }

// gpa(grades);
   