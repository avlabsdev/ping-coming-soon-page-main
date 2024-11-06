let submitBtn = document.querySelector('#submit-btn');
let emailInput = document.querySelector('#email');
let atSignCheck = "@";
let form = document.querySelector('#form');
let errorMsg = document.querySelector('.error-msg');
let errorMsgMobile = document.querySelector('.error-msg-mobile');
let successMsg = document.querySelector('.success-msg');

submitBtn.addEventListener("click", function (e) {
    if (document.clientWidth || window.innerWidth > 768) {
        if (emailInput.value == "" || emailInput.value.includes(atSignCheck) == false) {

            errorMsg.style.display = "block";
            emailInput.style.borderColor = "hsl(354, 100%, 66%)";

            e.preventDefault();
        }

        if (emailInput.value !== "" || emailInput.value.includes(atSignCheck) == true) {

            errorMsg.style.display = "none";
            emailInput.style.borderColor = "hsl(0, 0%, 59%)";

            successMsg.style.display = "block";

            setTimeout(function () {
                successMsg.style.display = "none";
            }, 2500)

            e.preventDefault();
            form.reset();
        }
    } else {
        if (emailInput.value == "" || emailInput.value.includes(atSignCheck) == false) {

            errorMsgMobile.style.display = "block";
            emailInput.style.borderColor = "hsl(354, 100%, 66%)";

            e.preventDefault();
        }

        if (emailInput.value !== "" || emailInput.value.includes(atSignCheck) == true) {

            errorMsgMobile.style.display = "none";
            emailInput.style.borderColor = "hsl(0, 0%, 59%)";

            successMsg.style.display = "block";

            setTimeout(function () {
                successMsg.style.display = "none";
            }, 2500)

            e.preventDefault();
            form.reset();
        }
    }
});