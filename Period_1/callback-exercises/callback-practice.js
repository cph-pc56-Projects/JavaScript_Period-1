function getUserInput(firstName, lastName, gender, callback) {
    var fullName = firstName + " " + lastName;
    if (typeof callback === "function") {
        callback(fullName, gender);
    }
}

function greetUser(fullName, gender) {
    var salutation = gender == 'male' ? "Mr." : "Ms.";
    console.log("Hello, " + salutation + " " + fullName);
}

getUserInput("Petru", "Catana", "male", greetUser);