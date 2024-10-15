function validateForm() {
    // Clear previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("dobError").textContent = "";
    document.getElementById("genderError").textContent = "";
    document.getElementById("termsError").textContent = "";

    // Get form values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var terms = document.getElementById("terms").checked;

    var isValid = true;

    // Name validation
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required.";
        isValid = false;
    }

    // Email validation
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email format.";
        isValid = false;
    }

    // Date of birth validation
    if (dob === "") {
        document.getElementById("dobError").textContent = "Date of birth is required.";
        isValid = false;
    }

    // Gender validation
    if (gender === "") {
        document.getElementById("genderError").textContent = "Gender is required.";
        isValid = false;
    }

    // Terms and conditions validation
    if (!terms) {
        document.getElementById("termsError").textContent = "You must agree to the terms and conditions.";
        isValid = false;
    }

    if (isValid) {
        alert("Registration successful!");
    }
}

function isValidEmail(email) {
    // Simple email validation
    var atPosition = email.indexOf("@");
    var dotPosition = email.lastIndexOf(".");
    return (atPosition > 0 && dotPosition > atPosition + 1 && dotPosition < email.length - 1);
}
    