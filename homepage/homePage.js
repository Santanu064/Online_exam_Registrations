let lastname = JSON.parse(localStorage.getItem("testObject"));
let dateOfBirth = new Date(lastname.dateOfBirth);

document.querySelector("#inputNamel4").value = lastname.name;
document.querySelector("#inputGardName4").value = lastname.guardiansName;
document.querySelector("#inputEmail14").value = lastname.email;
document.querySelector("#inputMobNumber4").value = lastname.mobile_no;
document.querySelector("#inputGendl4").value = lastname.gender;
document.querySelector("#inputDOB4").value = dateOfBirth.toISOString().split("T")[0];
document.querySelector("#inputSolCate4").value = lastname.cast
document.querySelector("#inputNation4").value = lastname.nationality;
document.querySelector("#inputAdrs4").value =lastname.address; 
document.querySelector("#inputSte4").value = lastname.state;
document.querySelector("#inputZp4").value = lastname.zip;
document.querySelector("#inputClgNAme4").value = lastname.collage;
document.querySelector("#inputClgCode12").value = lastname.collageCode;
document.querySelector("#inputclglProName4").value = lastname.programeName;
document.querySelector("#inputAwrName").value = lastname.Awar_name;
document.querySelector("#inputCty4").value = lastname.city


function generatePdf() {
  const { jsPDF } = window.jspdf;

  // Create a new PDF document
  const pdf = new jsPDF();

  // Sample data object (you can replace this with your actual data)

  // Add a title
  const title = "Michael Madhusudan Memorial College";
  pdf.setFontSize(30);
  const titleWidth = pdf.getTextWidth(title);
  const pageWidth = pdf.internal.pageSize.getWidth();
  const x = (pageWidth - titleWidth) / 2; // Calculate x to center the title
  const titleY = 20;

  // Set background color for title
  pdf.setFillColor(200, 220, 255); // Light blue color
  pdf.rect(x - 5, titleY - 10, titleWidth + 10, 15, "F"); // Draw rectangle

  pdf.text(title, x, titleY);
  // Add a subtitle
  const subtitle = "Registration Certificates";
  pdf.setFontSize(20);
  const subtitleWidth = pdf.getTextWidth(subtitle);
  const subtitleY = 32;

  // Set background color for subtitle
  pdf.setFillColor(200, 220, 255); // Light blue color
  pdf.rect(x - 5, subtitleY - 10, titleWidth + 10, 15, "F"); // Use titleWidth for the subtitle background

  // Center the subtitle text
  const subtitleX = (pageWidth - subtitleWidth) / 2; // Calculate x to center the subtitle
  pdf.text(subtitle, subtitleX, subtitleY); // Center the subtitle text
  // Set font size for the data
  pdf.setFontSize(13);

  // Add data from the object to the PDF
  let yPosition = 45; // Starting y position for the text
  const keyWidth = 80;
  for (const [key, value] of Object.entries(lastname)) {
    pdf.text(`${key}:`, 30, yPosition);
    pdf.text(`${value}`, 20 + keyWidth, yPosition);
    yPosition += 12; // Move down for the next line
  }

  // Save the PDF
  pdf.save("Registration_Certificates.pdf");
}