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

fetch('/create-account',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
    if (data.redirect) {
        window.location.href = data.redirect;
    }
})
.catch((error) => {
    console.error('Error:', error);
});
