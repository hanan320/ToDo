
function askQuestions() {
    const questions = ["Are you familiar with JavaScript ?", "Have you used version control systems like Git before?", "Do you prefer working on backend tasks?"];
    const answers = [];

    for (let question of questions) 
    {
        let answer = prompt(question + " (Yes/No)");
        let flag;
        flag = true;
       
        while(flag)
       {   
        if (answer == null||answer == ""||answer == " ")
         {
            answer="invaled";
            flag=false;
         }
        else if (answer !== "yes" && answer !== "no")
         {
            answer = prompt("Please enter a valid response for " + question + " (Yes/No)");
            flag=false;
         }
        else  
        flag = false; 
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


function main() {
    const answers = askQuestions();
    printAnswers(answers);
}


main();
