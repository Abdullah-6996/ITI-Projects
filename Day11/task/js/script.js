// -----------Activity----------- \\

// var num = window.prompt("Enter a number");
// if (num > 0) {
//     console.log("Number is positive");
//     if (num % 2 == 0) {
//         console.log("Even"); 
//     }
//     else console.log("Odd");
// }
// else if (num < 0) {
//         console.log("Number is negative");
//     if (num % 2 == 0) {
//         console.log("Even"); 
//     }
//     else console.log("Odd");
// }
// else if (num == 0) {
//     console.log("Number is zero");
// }
// else {
//     console.log("Not a number");
// }
// -----------Activity----------- \\

// -----------Exam grade task----------- \\

// var grade = window.prompt("Enter your grade");
// if (grade >= 90) {
//     console.log("Excellent");
// }
// else if (grade >= 80 && grade < 90) {
//     console.log("Good");
// }
// else if (grade >= 70 && grade < 80) {
//     console.log("Average");
// }
// else if (grade >= 60 && grade < 70) {
//     console.log("Pass");
// }
// else if (grade < 60) {
//     console.log("Fail");
// }
// -----------Exam grade task----------- \\

// -----------Rock Paper Scissors task----------- \\

var PlayerOneChoice = window.prompt('Player one\'s turn');
var PlayerTwoChoice = window.prompt("Player two's turn");

if (PlayerOneChoice == "rock" && PlayerTwoChoice == "paper") {
    console.log("Player Two wins!");
}
else if (PlayerOneChoice == "rock" && PlayerTwoChoice == "scissors") {
    console.log("Player One wins!");
}
else if (PlayerOneChoice == "paper" && PlayerTwoChoice == "scissors") {
    console.log("Player Two wins!");
}
else if (PlayerOneChoice == "paper" && PlayerTwoChoice == "rock") {
    console.log("Player One wins!");
}
else if (PlayerOneChoice == "scissors" && PlayerTwoChoice == "rock") {
    console.log("Player Two wins!");
}
else if (PlayerOneChoice == "scissors" && PlayerTwoChoice == "paper") {
    console.log("Player One wins!");
}
else if (PlayerOneChoice == "scissors" && PlayerTwoChoice == "scissors") {
    console.log("It's A Tie!");
}
else if (PlayerOneChoice == "paper" && PlayerTwoChoice == "paper") {
    console.log("It's A Tie!");
}
else if (PlayerOneChoice == "rock" && PlayerTwoChoice == "rock") {
    console.log("It's A Tie!");
}
else {
    console.log("Invalid Input");
}
// -----------Rock Paper Scissors task----------- \\
