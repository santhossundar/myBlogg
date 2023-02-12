let body = document.body;
let menuIcon = document.querySelector('.mobile-menu-icon');
let menuList = document.querySelector('.mobile-menu-list');

menuIcon.addEventListener('click', function () {
    menuList.style.visibility = menuList.style.visibility === 'visible' ? 'hidden' : 'visible';
    body.style.overflow = body.style.overflow === "hidden" ? "scroll" : "hidden";
});

let searchIcon = document.querySelector('.search-icon');

searchIcon.addEventListener('click', () => {
    console.log("Searching ...");
});