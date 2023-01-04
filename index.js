const btn = document.querySelector('.btn');
const textarea = document.getElementById('password');
const icon = document.querySelector('.text-container img');
const copiedTextEl = document.querySelector('.clipboard-text');
let clicked = false;

btn.addEventListener('click', () => {
    textarea.value = window.innerWidth + 'px';
});

icon.addEventListener('click', () => {
    copiedTextEl.style.opacity = '100%';
    navigator.clipboard.writeText(textarea.value);
    if (!clicked) {
        setTimeout(disableEl, 3000);
        clicked = true;
    }
});

function disableEl () {
    textarea.value = 'Width ?';
    copiedTextEl.style.opacity = '0%';
    clicked = false;
}