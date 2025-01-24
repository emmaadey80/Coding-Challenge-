// Task 1 Variables //
let employeeName = (JeighIves) // name of employee
const employeeID = "6543221" // employee ID
var isActive = true // employee status

console.log(employeeName);
console.log(typeof employeeName);
console.log(employeeID);
console.log(typeof employeeID);
console.log(isActive); 
console.log(typeof isActive);

// Task 2 Primitive Data Types //
let productName = "watches";
const productPrice = 20;
var isAvailable = true;

console.log(productName);
console.log(typeof productName);
console.log(productPrice);
console.log(typeof productPrice);
console.log(isAvailable);
console.log(typeof isAvailable);

// Task 3 Number Data Type //
let accountBalance = 400;

accountBalance += 200;
console.log(accountBalance);

accountBalance -= 300;
console.log(accountBalance);

accountBalance *= 2;
console.log(accountBalance);

accountBalance /= 2;
console.log(accountBalance);

// Task 4 String Data Types //
let customerName = "EmmaAdey"

let welcomeMessage = "Welcome back" + customerName;

console.log(welcomeMessage);

// Task 5 Boolean Data Type //
let isLoggedIn = true
let hasAccess = isLoggedIn && true;

if (hasAccess) {
    console.log("Access Granted: User is logged in.");
} else {
    console.log("Access Denied.");
}
