//menu burger ----------------------------------------

var menu = document.querySelector('#nav-mobile');
var fechar = document.querySelector('#fechar-menu');
var ul = document.getElementById('ul-nav');

function openMenu() {
    menu.style.width = '100%';
    fechar.style.display = 'block';
    ul.style.display = 'flex';
}

function closeMenu() {
    menu.style.width = '0%';
    fechar.style.display = 'none';
    ul.style.display = 'none';
}

//------------------------------------------------------
//carroussel

var quadros = document.querySelector('#use-cases-quadros');

function carroussel1() {
    quadros.style.marginLeft = '20px';
}

function carroussel2() {
    quadros.style.marginLeft = '-290px';
}

function carroussel3() {
    quadros.style.marginLeft = '-600px';
}
