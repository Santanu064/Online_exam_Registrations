import { LogUser } from "./Api/api.js";
function openReg() {
    window.location.href="./Registration/RegistrataionFrom.html";
}

// script.js

    const form = document.getElementById("loginForm"); // Select the form by its ID
    form.addEventListener("submit",async function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Create an object to hold form data
        const LogData = {
          email: document.getElementById("inputEmail4").value,
          mobileNumber: document.getElementById("inputNumber10").value,
          password: document.getElementById("inputPassword4").value,
          confirmPassword: document.getElementById("inputPassword3").value,
          city: document.getElementById("inputCity").value,
          state: document.getElementById("inputState").value,
          zip: document.getElementById("inputZip").value,
          agree: document.getElementById("gridCheck").checked,
        };

        // Log the form data as an object
        console.log("RegistrationData:", LogData);
        console.log();
        
        
        // You can add additional logic here, such as form validation or sending the data to a server
        await LogUser(LogData)
    });