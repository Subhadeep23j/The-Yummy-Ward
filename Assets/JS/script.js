// about section
document.addEventListener("DOMContentLoaded", () => {
    const members = document.querySelectorAll('.team-member');
    members.forEach(member => {
        member.addEventListener('click', () => {
            alert(`You clicked on ${member.querySelector('h2').innerText}`);
        });
    });
});

// login page
// script.js
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});