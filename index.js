
var element = document.getElementById("thanks_card");
console.log(element);

var element2 = document.getElementById("signup");
console.log(element2);


function hide() {
  element.classList.toggle("hidden");
  element2.classList.toggle("hidden");
}

function changeMessage() {
  let element3 = document.getElementById("messageInfo");
  element3.innerHTML = message1;
}



let form = document.getElementById("form");


form.addEventListener("submit", (e) => {
  e.preventDefault();

  var email = document.getElementById("Email");
  console.log(email.value);
  message1 =
    "A confirmation email has been sent to <b>" +
    email.value +
    ".</b> Please open it and click the button inside to confirm your subscription.";

  if (email.value == "") {
    alert("Please fill in an valid email-Id to proceed. ");
  } else {
    changeMessage();
    hide();
  }
});


