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

//---------------------------------------------------------------------------------------------------
//abrir quadros - our working process


/*function abrirQuadro(bg, simb, line, par) {

    if (bg.style.backgroundColor = '#f3f3f3') {
        bg.style.backgroundColor = '#b9ff66';
        bg.style.height = '279px';

        for (let i = 0 ; i < simb.length ; i++) {
            simb[i].style.transform = 'rotate(180deg)';
        }

        for (let i = 0 ; i < line.length ; i++) {
            line[i].style.display = 'block';
            
        }

        for (let i = 0 ; i < par.length ; i++) {
            par[i].style.display = 'block';
        }
    }
}

function fecharQuadro(bg, simb, line, par) {

    if (bg.style.backgroundColor = '#b9ff66'){
        bg.style.backgroundColor = '#f3f3f3';
        bg.style.height = '159px';

        for (let i = 0 ; i < simb.length ; i++) {
            simb[i].style.transform = 'rotate(90deg)';
        }

        for (let i = 0 ; i < line.length ; i++) {
            line[i].style.display = 'none';
            
        }

        for (let i = 0 ; i < par.length ; i++) {
            par[i].style.display = 'none';
        }
    }
}

var bg = document.querySelector('#sec5-quadro');
var simb = document.getElementsByClassName('traco-1');
var line = document.getElementsByClassName('sec5-quadro-line');
var par = document.getElementsByClassName('sec5-quadro-bottom');


abrirQuadro(bg, simb, line, par); // Abre o quadro
fecharQuadro(bg, simb, line, par); // Fecha o quadro*/

function abrirQuadro1() {
    let classe = document.querySelector('#sec5-quadro1');

    abrirQuadro(classe);
}

function abrirQuadro2() {
    let classe = document.querySelector('#sec5-quadro2');

    abrirQuadro(classe);
}

function abrirQuadro3() {
    let classe = document.querySelector('#sec5-quadro3');

    abrirQuadro(classe);
}

function abrirQuadro4() {
    let classe = document.querySelector('#sec5-quadro4');

    abrirQuadro(classe);
}

function abrirQuadro5() {
    let classe = document.querySelector('#sec5-quadro5');

    abrirQuadro(classe);
}

function abrirQuadro6() {
    let classe = document.querySelector('#sec5-quadro6');

    abrirQuadro(classe);
}

function abrirQuadro(classe) {

        if (classe.classList.contains('sec5-quadro-fechado')) {
            classe.classList.add('sec5-quadro-aberto');
            classe.classList.remove('sec5-quadro-fechado');
        } else {
            classe.classList.remove('sec5-quadro-aberto');
            classe.classList.add('sec5-quadro-fechado');
        }
}

//baloes

var prev = document.querySelector('#prev');
var next = document.querySelector('#next');
var b1 = document.querySelector('#b1');
var b2 = document.querySelector('#b2');
var b3 = document.querySelector('#b3');
var b4 = document.querySelector('#b4');
var b5 = document.querySelector('#b5');
var balao1 = document.querySelector('#balao1');
var balao2 = document.querySelector('#balao2');
var balao3 = document.querySelector('#balao3');
var balao4 = document.querySelector('#balao4');
var balao5 = document.querySelector('#balao5');

function balao1() {
    if (balao1.classList.contais('')) {
        
    }
}