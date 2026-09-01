function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let correctUsername = "admin";
    let correctPassword = "password";

    if (username === correctUsername && password === correctPassword) {

        document.getElementById("message").textContent =
            "Welcome, " + username + "!";

    } else {

        document.getElementById("message").textContent =
            "Invalid username or password";
    }
}