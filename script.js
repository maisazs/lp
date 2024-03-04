//menu burger ----------------------------------------

var menu = document.querySelector('#nav-mobile');
var fechar = document.querySelector('#fechar-menu');
var li = document.getElementsByClassName('options-nav');
var li2 = document.querySelector('li#btn-nav');

function openMenu() {
    menu.style.width = '100%';
    fechar.style.display = 'block';

    for (let i = 0 ; i < li.length ; i++) {
        li[i].style.display = 'flex';
    }
    li2.style.display = 'flex';
}

function closeMenu() {
    menu.style.width = '0%';

    fechar.style.display = 'none';

    for (let i = 0 ; i < li.length ; i++) {
        li[i].style.display = 'none';
    }
    li2.style.display = 'none';
}

//------------------------------------------------------
//carroussel

var quadros = document.querySelector('#use-cases-quadros');

function carroussel1() {
    quadros.style.marginLeft = '10px';
}

function carroussel2() {
    quadros.style.marginLeft = '-290px';
}

function carroussel3() {
    quadros.style.marginLeft = '-600px';
}
