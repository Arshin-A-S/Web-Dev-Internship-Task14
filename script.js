
function toggleForm() {
    const reg = document.getElementById('register-form');
    const login = document.getElementById('login-form');
    reg.style.display = reg.style.display === 'none' ? 'block' : 'none';
    login.style.display = login.style.display === 'none' ? 'block' : 'none';
}

function registerUser() {
    const user = document.getElementById('reg-username').value;
    const pass = document.getElementById('reg-password').value;

    if (user && pass) {
        localStorage.setItem(user, pass); 
        alert("Registration Successful! Please login.");
        toggleForm();
    } else {
        alert("Please fill in all fields.");
    }
}

function loginUser() {
    const user = document.getElementById('login-username').value;
    const pass = document.getElementById('login-password').value;
    const storedPass = localStorage.getItem(user);

    if (storedPass && storedPass === pass) {
        localStorage.setItem('isLoggedIn', 'true');
        checkAuth();
    } else {
        alert("Invalid username or password.");
    }
}

function checkAuth() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const authUI = document.getElementById('auth-container');
    const dashboard = document.getElementById('dashboard');

    if (isLoggedIn === 'true') {
        authUI.style.display = 'none';
        dashboard.style.display = 'block';
    } else {
        authUI.style.display = 'block';
        dashboard.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('isLoggedIn');
    checkAuth();
}

window.onload = checkAuth;