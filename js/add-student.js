const form = document.querySelector(".add-student-form");
const submitButton = form.querySelector(".submit-button");
const loadingMessage = document.querySelector(".loading-dots");
const errormessage = document.querySelector("#successMessage");
const hiddenSections = document.querySelectorAll(".hidden-section");

// Create separate constants for each hidden section
const section1 = hiddenSections[0]; // Access the first hidden section
const section2 = hiddenSections[1]; // Access the second hidden section

// You can access more sections in a similar manner if you have more


form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Disable submit button
  submitButton.disabled = true;
  loadingMessage.style.display = "block";

  // Get form data
  const formData = new FormData(form);

  // Convert form data to JSON
  const json = JSON.stringify(Object.fromEntries(formData.entries()));
  console.log(json);

  // Make HTTP POST request to save student details
  fetch(
    API_URL + "?action=add-student",
    {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: json,
    }
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        section2.style.display = "none";
        console.log("Project Not saved:", data);
        section1.style.display = "block";
        submitButton.disabled = false;
        loadingMessage.style.display = "none";      

      }
      else{
        section1.style.display = "none";
        console.log("Project saved:", data);
        section2.style.display = "block";
        submitButton.disabled = false;
        loadingMessage.style.display = "none";
        form.reset();
      }
      
      
    })
    .catch((error) => {
      console.error("Error saving project:", error);
      // TODO: Handle error
    })
    
});