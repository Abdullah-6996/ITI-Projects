// Part 4 - To Do
// 1) for ... of

const fruits1 = ['Apple', 'Banana', 'Orange'];
for (let fruit of fruits1) {
    console.log(fruit);
}

// 2) for ... in

const fruits2 = ['Apple', 'Banana', 'Orange'];
for (let index in fruits2) {
    console.log(index);
}

// 3) forEach

const fruits3 = ['Apple', 'Banana', 'Orange'];
fruits3.forEach((fruit, index) => {
    console.log(`${index} -> ${fruit}`);
});

// Part 5 - To Do
// Q1 - convert to arrow function

const sum = (a, b) => a + b;
console.log(sum(3, 17));

// Q2 - use destructuring

const user = {
    name: "Mostafa",
    age: 25
};
let {name, age} = user;
console.log(name, age);

// Q3 - use template literals

const myName = "Abdullah";
console.log(`Hello ${myName}`);

//Q4 - use spread operator

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const twoArrays = [...arr1, ...arr2];
console.log(twoArrays);

//Part 6 - Many Q

const students = [
    {name:"Ali", degree:70},
    {name:"Sara", degree:95},
    {name:"Ahmed", degree:40},
    {name:"Mona", degree:85},
    {name:"Omar", degree:55}
];

// 1)
let namesArray = students.map(student => student.name);
console.log(namesArray);

// 2)
let passedStudents = students.filter(student => student.degree >= 60);
console.log(passedStudents);

// 3)
let highestDegree = students.find(student => student.degree > 90);
console.log(highestDegree);

// 4)
let names = students.forEach(student => console.log(student.name));
