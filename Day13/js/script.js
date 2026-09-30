var user = {
    firstName: "Abdullah",
    secondName: "Mohsen",
    gender: "Male",
    age: 19,
    Hobbies: [
        "football",
        "Chess"
    ],
};

// Object.entries(user).forEach(([key, value]) =>{
// console.log( `Key: ${key}`, `Value: ${value}`);
// });
// console.table(user)
// user.age = 20;
// console.table(user);
// user.study = `Front End`;
// console.table(user);
// delete user.secondName;
// console.table(user);


let tagName = document.getElementsByTagName("p");
console.log(tagName);

let className = document.getElementsByClassName("item");
console.log(className);

let id = document.getElementById("hero");
console.log(id);

let Name = document.getElementsByName("paragraph");
console.log(Name);

let selector = document.querySelector("#demo");
console.log(selector);

let selectorAll = document.querySelectorAll(".item");
console.log(selectorAll);