const btn = document.querySelector(".nav-btn");
const list = document.querySelector(".menu-list");
btn.addEventListener("click", addOpen);

function addOpen() {
    btn.classList.toggle('open');
    list.classList.toggle('close');
}