// REGISTER
function register() {
    const username = regUsername.value;
    const password = regPassword.value;

    if (!username || !password) {
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("user", JSON.stringify({ username, password }));
    alert("Registration successful!");
    window.location.href = "login.html";
}

// LOGIN
function login() {
    const username = loginUsername.value;
    const password = loginPassword.value;

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.username !== username || user.password !== password) {
        alert("Invalid credentials");
        return;
    }

    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
}

// CHECK AUTH
function checkAuth() {
    if (!localStorage.getItem("loggedIn")) {
        window.location.href = "login.html";
    }
}

// LOGOUT
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

// RESET PASSWORD
function resetPassword() {
    const username = fpUsername.value;
    const newPassword = newPasswordInput = document.getElementById("newPassword").value;

    if (!username || !newPassword) {
        alert("Please fill all fields");
        return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || user.username !== username) {
        alert("User not found");
        return;
    }

    user.password = newPassword;
    localStorage.setItem("user", JSON.stringify(user));
    alert("Password reset successful!");
    window.location.href = "login.html";
}
