const prompt = require("prompt-sync")();

// PIN CODE
const pinCode = 2468;

//PIN CODE PROMPT
const pinPrompt = Number(prompt("Please enter passcode: "))

// PIN CODE CHECK

if (pinPrompt === pinCode) {
    console.log("Success!");
}

else {
    console.log("failure.")
}