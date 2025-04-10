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