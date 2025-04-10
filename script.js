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