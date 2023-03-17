// Prompt the user to input student marks
const marks = prompt("Please enter the student's marks (between 0 and 100):");

// Check if the input is valid
if (marks < 0 || marks > 100) {
  console.log("Invalid input, please enter a number between 0 and 100.");
} else {
  // Determine the grade based on the marks
  let grade;
  if (marks >= 80) {
    grade = "A";
  } else if (marks >= 60 && marks <= 79) {
    grade = "B";
  } else if (marks >= 50 && marks <= 59) {
    grade = "C";
  } else if (marks >= 40 && marks <= 49) {
    grade = "D";
  } else {
    grade = "E";
  }
  
  // Output the grade
  console.log(`The student's grade is ${grade}.`);
}
