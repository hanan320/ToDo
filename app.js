function myFunction() {
    
    var name = prompt("Please enter your name:");

    
    var gender = prompt("Please enter your gender (male or female):");

    
    var age = parseInt(prompt("Please enter your age:"));
    if (age <= 0) {
        alert("Age cannot be less than or equal to zero.");
    }

    
    var skip_Welcome = confirm("Do you want to skip the welcoming message?");

   
    if (!skip_Welcome) {
        var welcomeMessage = "Welcome";
        if (gender.toLowerCase() === 'male') {
            welcomeMessage += " Mr";
        } else if (gender.toLowerCase() === 'female') {
            welcomeMessage += " Ms";
        }
        welcomeMessage += " " + name;
        alert(welcomeMessage);
    }
}
