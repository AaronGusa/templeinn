function openSlideMenu() {
    document.getElementById('side-menu').style.width = '250px';
    document.querySelector('main').style.marginLeft = '250px';
}

function closeSlideMenu() {
    document.getElementById('side-menu').style.width = '0';
    document.querySelector('main').style.marginLeft = '0';
}