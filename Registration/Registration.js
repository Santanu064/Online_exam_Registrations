import { addUser } from "../Api/api.js";
const form = document.getElementById("Registration"); // Select the form by its ID
form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Create an object to hold form data
  const formData = {
    name: document.getElementById("inputName").value,
    guardiansName: document.getElementById("inputGuardiansName").value,
    email: document.getElementById("inputEmail").value,
    mobile_no: document.getElementById("inputMobileNo").value,
    password: document.getElementById("inputPassword").value,
    gender: document.getElementById("inputGender").value,
    dateOfBirth: document.getElementById("inputBirthday").value,
    cast: document.getElementById("inputCast").value,
    physically_challenged: document.getElementById("phy_disablity").value,
    nationality: document.getElementById("inputNationality").value,
    address: document.getElementById("inputAddress").value,
    city: document.getElementById("inputCity").value,
    state: document.getElementById("inputState").value,
    zip: document.getElementById("inputZip").value,
    collage: document.getElementById("inputCollage").value,
    programeName: document.getElementById("inputProgrameName").value,
    collageCode: document.getElementById("inputCollageCode").value,
    aggree: document.getElementById("gridCheck").checked,
  };

  // Log the form data as an object
//   console.log("RegistrationData:", formData);

// form validation



//  sending the data to a server
await addUser(formData);
});
