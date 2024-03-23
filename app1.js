
function askQuestions() {
    const questions = ["Are you familiar with JavaScript ?", "Have you used version control systems like Git before?", "Do you prefer working on backend tasks?"];
    const answers = [];

    for (let question of questions) {
        let answer = prompt(question + " (Yes/No)");

       
        while (answer === " "|| (answer.toLowerCase() !== 'yes'&& answer.toLowerCase() !=='no')) {
            answer = prompt("Please enter a valid response for " + question + " (Yes/No)");
        }

      
        answers.push(answer);
    }

    return answers;
}


function printAnswers(answers) {
    console.log("Answers:");
    for (let answer of answers) {
        console.log(answer);
    }
}

// Main function to execute the program
function main() {
    const answers = askQuestions();
    printAnswers(answers);
}

// Execute the main function
main();
