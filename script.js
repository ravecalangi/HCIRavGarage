function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        showPopup('Login Successful!');
        setTimeout(() => {
            window.location.href = 'main-menu.html';
        }, 2000);
    } else {
        showPopup('Please fill in all fields.');
    }
}

function showPopup(message) {
    const popup = document.getElementById('login_popup');
    popup.innerText = message;
    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 2000);
}