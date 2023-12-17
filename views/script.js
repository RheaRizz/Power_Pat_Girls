
document.addEventListener("DOMContentLoaded", function() {
    const createAccountLink = document.getElementById("createAccountLink");
    const loginLink = document.getElementById("loginLink");
    const createAccountForm = document.getElementById("createAccountForm");
    const loginForm = document.getElementById("loginForm");

    createAccountLink.addEventListener("click", function(event) {
        event.preventDefault();
        createAccountForm.classList.remove("hidden");
        loginForm.classList.add("hidden");
    });

    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.classList.remove("hidden");
        createAccountForm.classList.add("hidden");
    });
});
