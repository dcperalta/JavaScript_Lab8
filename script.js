// Creating an object to represent a student with properties
const student = {
    name: "Divine Peralta",
    age: 27,
    enrolled: true,
    courses: ["JavaScript", "Web Programming", "Algorithms", "Database Management"],
    info: function() {
        console.log(`Hello, my name is ` + this.name);
    },
    enrolment: function() {
        console.log('It is ' + this.enrolled + ' that ' + this.name + ' is enrolled in these courses: ' + this.courses);
    }
};

console.log(student.name + ' is ' + student.age + ' years old.'); // Log name and age properties
student.info(); // Call info method
student.enrolment(); // Call enrolment method

// Convert student object to JSON string
let jsonString = JSON.stringify(student);
console.log(jsonString); // Log JSON string

// Convert JSON string back to object
let jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // Log JSON object
console.log(jsonObject.name); // Log name property from JSON object
console.log(jsonObject.age); // Log age property from JSON object
console.log(jsonObject.courses); // Log courses property from JSON object

// Destructuring to extract name and courses properties from student object
let {name, courses} = student;
console.log(name); // Output name property  
console.log(courses[0]); // Log first course -> JavaScript
console.log(courses[1]); // Log second course -> Web Programming
console.log(courses[2]); // Log third course -> Algorithms
console.log(courses[3]); // Log fourth course -> Database Management

// Create an array of score and destructure the first two scores from the array and log them
let score = [80, 90, 95, 100];
let [firstScore, secondScore] = score;
console.log(firstScore); // Output first score
console.log(secondScore); // Output second score   

// Clone student object using spread operator
let studentClone = {...student};
console.log(studentClone); // Log cloned student object 

studentClone = {...studentClone, graduationYear: 2025}; // Add new property to cloned object
console.log(studentClone); // Log cloned object with new property

// Merge two arrays using spread operator 
let newCourses = ["Technical Writing", "Operating Systems"]; // New array of courses
let mergeCourses = [...student.courses, ...newCourses]; // Merge arrays using spread operator
console.log(mergeCourses); // Console log merged array of courses

// Add method to student object to dynamically add a new course to the courses array
student.addCourse = function(course) {
    this.courses.push(course); // Add new course to courses array
    console.log(this.name + ' has added ' + course + ' to their courses.'); // Log confirmation of course added
};
student.addCourse("Software Engineering"); // Call addCourse method which adds Software Engineering to courses array 
console.log(student.courses); // Log updated courses array

// Add method to calculate and return total number of courses
student.allCourses = function() {
    return this.courses.length; // Return length of courses array
}
console.log(student.allCourses()); // Log total number of courses
