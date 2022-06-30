let menuIcon = document.querySelector('.fa-solid.fa-bars');
menuIcon.addEventListener('click',function (e) {
    menuIcon.nextElementSibling.classList.toggle('d-none');
})