const enquiryLabels = document.querySelectorAll(".query-type-wrapper label");
const enquiryRadioButton = document.querySelectorAll(
  ".query-type-wrapper input"
);

enquiryRadioButton.forEach((radio, i) => {
  radio.addEventListener("change", () => {
    enquiryLabels.forEach((label) => label.classList.remove("selected")); //remove class "selected" first
    if (radio.checked) {
      radio.parentElement.classList.add("selected"); // check the radio button and give its parent/label class "selected"
    }
  });
});

const firstNameInput = document.querySelector(".first-name input");
const lastNameInput = document.querySelector(".last-name input");
const emailInput = document.querySelector(".email-input-wrapper input");
const messageInput = document.querySelector(".message-wrapper textarea");
const checkboxInput = document.querySelector(".checkbox input");

const errorMessages = document.querySelectorAll(".error-message");

const arrInputs = [
  firstNameInput,
  lastNameInput,
  emailInput,
  messageInput,
  checkboxInput,
]; // create array that contain inputs

document.querySelector(".submit-btn").addEventListener("click", (e) => {
  e.preventDefault(); // form prevent load

  arrInputs.forEach((input) => input.classList.remove("error")); // remove class error from all inputs first
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => message.classList.remove("active")); // remove all error messages first

  let isValid = true; // flag if inputs have class "error"

  if (firstNameInput.value == "") {
    firstNameInput.classList.add("error");
    document
      .querySelector(".first-name .error-message")
      .classList.add("active"); // check input name has value, if not then shows errors message
    isValid = false;
  }
  if (lastNameInput.value == "") {
    lastNameInput.classList.add("error");
    document.querySelector(".last-name .error-message").classList.add("active"); // check input name has value, if not then shows errors message
    isValid = false;
  }

  const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // regex email validation
  if (emailInput.value == "") {
    emailInput.classList.add("error");
    document
      .querySelectorAll(".email-input-wrapper .error-message")[0]
      .classList.add("active"); // if email input empty
    isValid = false;
  } else if (!emailValidation.test(emailInput.value)) {
    document
      .querySelectorAll(".email-input-wrapper .error-message")[1]
      .classList.add("active"); // if email input value not valid
    isValid = false;
  }

  if (!enquiryRadioButton[0].checked && !enquiryRadioButton[1].checked) {
    document
      .querySelector(".query-type-wrapper .error-message")
      .classList.add("active"); // if one on radio button is not checked, then shows error message
    isValid = false;
  }

  if (messageInput.value == "") {
    messageInput.classList.add("error");
    document
      .querySelector(".message-wrapper .error-message")
      .classList.add("active");
    isValid = false;
  }

  if (!checkboxInput.checked) {
    document
      .querySelector(".checkbox-wrapper .error-message")
      .classList.add("active");
    isValid = false;
  }

  if (isValid) {
    document.querySelector(".popup-success").classList.add("active"); // shows pop up success
  }
});

// const enquiryLabels = document.querySelectorAll(".query-type-wrapper label");
// const enquiryRadioButton = document.querySelectorAll(
//   ".query-type-wrapper input"
// );

// enquiryRadioButton.forEach((radio, i) => {
//   radio.addEventListener("change", () => {
//     enquiryLabels.forEach((label) => label.classList.remove("selected")); // Remove "selected" from all labels
//     if (radio.checked) {
//       radio.parentElement.classList.add("selected"); // Add "selected" to the checked radio's label
//     }
//   });
// });

// const form = document.querySelector(".contact-form"); // Select the entire form

// form.addEventListener("submit", (event) => {
//   event.preventDefault(); // Prevent default form submission

//   const inputs = [
//     document.querySelector(".first-name input"),
//     document.querySelector(".last-name input"),
//     document.querySelector(".email-input-wrapper input"),
//     document.querySelector(".message-wrapper textarea"),
//     document.querySelector(".checkbox input"),
//   ];

//   const errorMessages = document.querySelectorAll(".error-message");
//   errorMessages.forEach((message) => message.classList.remove("active")); // Remove all error messages

//   let isValid = true; // Flag for validation

//   inputs.forEach((input) => {
//     input.classList.remove("error"); // Remove "error" class from all inputs

//     if (input.required && input.value.trim() === "") { // Check for required & empty fields
//       input.classList.add("error");
//       document.querySelector(`.${input.parentElement.classList[0]} .error-message`).classList.add("active"); // Find error message for the input's parent
//       isValid = false;
//     }
//   });

//   const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Email regex
//   if (inputs[2].required && !emailValidation.test(inputs[2].value)) { // Validate email if required
//     inputs[2].classList.add("error");
//     document.querySelectorAll(".email-input-wrapper .error-message")[1].classList.add("active");
//     isValid = false;
//   }

//   if (!enquiryRadioButton[0].checked && !enquiryRadioButton[1].checked) { // Check for selected query type
//     document.querySelector(".query-type-wrapper .error-message").classList.add("active");
//     isValid = false;
//   }

//   if (isValid) {
//     // Form is valid, submit or display success message (implementation not shown here)
//   }
// });
