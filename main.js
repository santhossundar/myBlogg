let body = document.body;
const menuIcon = document.querySelector('.mobile-menu-icon');
const menuList = document.querySelector('.mobile-menu-list');

menuIcon.addEventListener('click', function () {
    menuList.style.visibility = menuList.style.visibility === 'visible' ? 'hidden' : 'visible';
    body.style.overflow = body.style.overflow === "hidden" ? "scroll" : "hidden";
});