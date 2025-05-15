function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function showScreen(screenId) {
    document.querySelectorAll('.menu').forEach(menu => menu.style.display = 'none');
    document.getElementById(screenId).style.display = 'block';
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('active'); // Open sidebar to show user picture
}

function backToMain() {
    document.querySelectorAll('.menu').forEach(menu => menu.style.display = 'none');
}

function saveInfo() {
    document.getElementById('savePopup').style.display = 'block';
    setTimeout(() => {
        document.getElementById('savePopup').style.display = 'none';
    }, 2000);
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.add('active'); // Open sidebar for Save action
}

function logout() {
    window.location.href = 'main.html';
}