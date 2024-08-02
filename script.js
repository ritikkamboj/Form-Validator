// firstly we have to get all required  elements in DOM :

const form = document.getElementById("form");
// remaining four alos

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
// const formControl = document.querySelector(".form-control");
// const userError = document.getElementById('username-error')
// console.log(username, email, password, password2);

// applying that functionality in ewhcih when we don';t enter any name then it ngiver error
// how to apply add event listener

function showError(input, message) {
  const formControl = input.parentElement;
  // console.log(formControl);
  formControl.className = "form-control error";
  // userError.textContent = message;
  const small = formControl.querySelector("small");
  console.log(small);
  small.textContent = message;
}
function showSuccess(input) {
  const formControl = input.parentElement;
  console.log(formControl);
  formControl.className = "form-control success";
}
function checkEmail(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if(emailRegex.test(input.value))
 {
    showSuccess(input);
 }
 else
 showError(input,`${getReqName(input.id)} not in required format`)
}
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value === "")
      showError(input, `${getReqName(input.id)} is Required`);
    else {
      showSuccess(input);
    }
  });
}

function getReqName(curName) {
  return curName.charAt(0).toUpperCase() + curName.slice(1);
}
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${getReqName(input.id)} must be greater than ${min}`);
  } else if (input.value.length > max) {
    showError(input, `length must be less than ${max}`);
  } else
  showSuccess(input);
}
function checkPasswordMatch(input1 , input2)
{
    if(input1.value !== input2.value)
    {
        showError(input2,'Passwords are not matching with each other');
    }

}

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (username.value === "") {
//     showError(username, "Username is not defined ");
//   } else {
//     showSuccess(username);
//   }
//   if (email.value === "") {
//     showError(email, "email is not defined");
//   } else if(!validateEmail(email.value)){
//     showError(email,'written text is not in email format');
//   }
//   else {
//     showSuccess(email);
//   } if (password.value === "") {
//     showError(password, "password is not defined ");
//   } else {
//     showSuccess(password);
//   } if (password2.value === "") {
//     showError(password2, "confirm password is not present ");
//   } else {
//     showSuccess(password2);
//   }
// });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 16);
  checkLength(password, 3, 10);
  checkEmail(email);
  checkPasswordMatch(password,password2);
});
