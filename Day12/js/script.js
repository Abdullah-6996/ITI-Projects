// for(var i=1 ; i <= 10 ; i++) {
//     console.log(`for-Counter: ${i}`);
// }

// var x = 1;
// while(x <= 10){
//     console.log(`while-Counter: ${x}`);
//     x += 1;
// }

// var y = 1;
// do {
//     console.log(`do_while-Counter: ${y}`);
//     y += 1;
// }   while(y <= 10)

// -------------------------- \\

// function numAvg(a, b) {
//     var sum = a + b;
//     var avg = sum / 2;
//     console.log(avg);
// }
// numAvg(11, 24);


// -------------------------- \\

var user = {
    firstName: "Abdullah",
    secondName: "Mohsen",
    gender: "Male",
    age: 19,
    Hobbies: {
        football: "pro",
        Chess: "Grand Master",
    },
};

console.table(user);
console.log(user.Hobbies.Chess);