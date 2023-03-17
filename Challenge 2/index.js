// Prompt the user to input the car speed
const carSpeed = prompt("Please enter the car speed in km/h:");

// Calculate the number of demerit points
const speedLimit = 70;
const kmPerPoint = 5;
let demeritPoints = 0;
if (carSpeed > speedLimit) {
  demeritPoints = Math.floor((carSpeed - speedLimit) / kmPerPoint);
}

// Output the result
if (demeritPoints <= 0) {
  console.log("Ok");
} else if (demeritPoints >= 12) {
  console.log("License suspended");
} else {
  console.log(`Points: ${demeritPoints}`);
}
