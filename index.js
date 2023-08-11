let subscribeBtn = document.querySelector(".subscribeBtn");

subscribeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let emailInput = document.getElementById("email").value;
  // console.log(emailInput)

  if (emailFormat.test(emailInput)) {
    document.querySelector(".index_main").style.display = "none";
    document.querySelector(".successmain").style.display = "block";

    let successMsg = document.querySelector(".successMsg p");
    successMsg.innerHTML = `A confirmation email has been sent to ${emailInput}.
         Please open it and click the button inside to confirm your subscription.`;
    return;
  } else {
    let emailError = document.querySelector("#emailError");
    emailError.style.display = "block";
  }
});
