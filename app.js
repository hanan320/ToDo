document.addEventListener('DOMContentLoaded', function() {
    // Ask user for name
    var name = prompt("Please enter your name:");

    // Ask user for gender
    var gender = prompt("Please enter your gender (M/m==male or F/f=female):");

    // Ask user for age and validate
    var age = parseInt(prompt("Please enter your age:"));
    if (age <= 0) {
        alert("Age cannot be less than or equal to zero.");
    }

    // Ask user to confirm skipping welcoming message
    var skip_Welcome = confirm("Do you want to skip the welcoming message?");

    // Display welcoming message
    if (!skip_Welcome) {
        var welcomeMessage = "Welcome";
        if (gender.toLowerCase() === 'm') {
            welcomeMessage += " Mr";
        } else if (gender.toLowerCase() === 'f') {
            welcomeMessage += " Ms";
        }
        welcomeMessage += " " + name;
        alert(welcomeMessage);
    }
});
