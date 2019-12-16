const nameNextBtn = document.querySelector(".input_name_next");
const inputName = document.querySelector("#input_name");
const inputNameLi = document.querySelector(".name");
const errName = document.querySelector("#err-name");

const emailNextBtn = document.querySelector(".input_email_next");
const errEmail = document.querySelector("#err-email");
const inputEmailLi = document.querySelector(".email");
const inputEmail = document.querySelector("#input_email");

const messageNextBtn = document.querySelector(".input_message_next");
const errMsg = document.querySelector("#err-message");
const inputMsgLi = document.querySelector(".message");
const inputMsg = document.querySelector("#input_message");

nameNextBtn.addEventListener("click", () => {
  console.log(inputName.value);
  if (!Boolean(inputName.value.trim())) {
    return (errName.textContent = "please input your name");
  }
  inputNameLi.style.display = "none";
  errName.style.display = "none";
  inputEmailLi.style.display = "block";
});
emailNextBtn.addEventListener("click", () => {
  console.log(inputEmail.value);
  if (!Boolean(inputEmail.value.trim())) {
    return (errEmail.textContent = "please input your Email");
  }
  inputEmailLi.style.display = "none";
  errEmail.style.display = "none";
  inputMsgLi.style.display = "block";
});
messageNextBtn.addEventListener("click", () => {
  console.log(inputMsg.value);
  if (!Boolean(inputMsg.value.trim())) {
    return (errMsg.textContent = "please input your Message");
  }
  inputMsgLi.style.display = "none";
  errMsg.style.display = "none";
  document.querySelector(".submitted").style.display = "block";
});
