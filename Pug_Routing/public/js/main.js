window.onload = function() {
    const formsel = document.querySelector("form[name='loginForm']")
    const emailInput = document.querySelector("form[name='email']")
    const passwordInput = document.querySelector("form[name='password']")

    formsel.addEventListener("submit", e=> {
        if(emailInput.value !== "" && passwordInput !== "")
        {
            return true;
        }
        else
        {
            alert("Please fill the email id an password");
            e.preventDefault();
            return false;
        }
    });
};