const prompt = require("prompt-sync")();

// SET PAYMENT PROMPTS
const person1 = Number(prompt("How much did person 1 one pay? "));
const person2 = Number(prompt("How much did person 2 one pay? "));

// PERSON 2 OWES PERSON 1
if (person1 > person2) {
    const balanceDue = person1 - person2;
    console.log("Person 2 owes person 1 " + balanceDue + " Dollars");
}

// PERSON 1 OWES PERSON 2
else if (person2 > person1) {
    const balanceDue = person2 - person1;
    console.log("Person 1 owes person 2 " + balanceDue + " Dollars");
}

//ERROR
else {
    console.log("Error please enter valid number")
}