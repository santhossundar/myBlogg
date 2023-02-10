const menuIcon = document.querySelector('.mobile-menu-icon');
const menuList = document.querySelector('.mobile-menu-list');

menuIcon.addEventListener('click', function () {
    menuList.style.display = menuList.style.display === 'block' ? 'none' : 'block';
});