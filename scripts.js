const toggleButton = document.getElementById('toggle-button');
const sideNavbar = document.getElementById('side-navbar');
const closeButton = document.getElementById('close-button');

toggleButton.onclick = () => {
    sideNavbar.classList.toggle('hidden');
};

closeButton.onclick = () => {
    sideNavbar.classList.add('hidden');
};