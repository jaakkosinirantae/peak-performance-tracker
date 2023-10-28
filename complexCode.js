/* 
   Filename: complexCode.js
   Content: Complex code example demonstrating advanced concepts in JavaScript.
*/

// Define the class 'Person'
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Define a method to get the person's name
  getName() {
    return this.name;
  }
  
  // Define a method to get the person's age
  getAge() {
    return this.age;
  }
}

// Define the class 'Employee' that extends 'Person'
class Employee extends Person {
  constructor(name, age, designation, salary) {
    super(name, age);
    this.designation = designation;
    this.salary = salary;
  }
  
  // Define a method to get the employee's designation
  getDesignation() {
    return this.designation;
  }
  
  // Define a method to get the employee's salary
  getSalary() {
    return this.salary;
  }
}

// Create an array of employee objects
const employees = [
  new Employee("John Doe", 32, "Manager", 50000),
  new Employee("Jane Smith", 28, "Engineer", 40000),
  new Employee("Mike Johnson", 35, "Analyst", 45000)
];

// Define a function to calculate the average salary of employees
function calculateAverageSalary() {
  let totalSalary = 0;
  
  for (let i = 0; i < employees.length; i++) {
    totalSalary += employees[i].getSalary();
  }
  
  return totalSalary / employees.length;
}

// Call the function to calculate the average salary
const averageSalary = calculateAverageSalary();

// Output the average salary
console.log("Average Salary: $" + averageSalary.toFixed(2));