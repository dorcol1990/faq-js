const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(el =>{
    el.addEventListener('click', toggleActive);
});

function toggleActive(){
    this.parentNode.classList.toggle('active');
}


