//sol e arco iris
const sol = document.getElementById('sol');
const sol_fundo = document.getElementById('sol-fundo');
const arcoIris = document.getElementById('arco-iris');

//nuvem da 3° camada 
const nuvemFundo_fundo = document.getElementById('fundo-fundo');

//nuvens da 2° camada
const nuvemFundoDireita = document.getElementById('nuvem-fundo-direita');
const nuvemFundoESquerda = document.getElementById('nuvem-fundo-esquerda');

//nuvens da 1° camada 
const nuvemFrenteDireita = document.getElementById('nuvem-frente-direita');
const nuvemFrenteEsquerda = document.getElementById('nuvem-frente-esquerda');

//fotos da maria
const maria1 = document.getElementById('maria1');
const maria2 = document.getElementById('maria2');
const maria3 = document.getElementById('maria3');
const maria4 = document.getElementById('maria4');


window.addEventListener('scroll', () => {
    let valor = window.scrollY;

    nuvemFrenteDireita.style.left = valor * 0.3 + 'px';
    nuvemFrenteEsquerda.style.left = valor * -0.3 + 'px';

    nuvemFundo_fundo.style.marginTop = valor * 0.3 + 'px';

    nuvemFundoDireita.style.left = valor * 0.1 + 'px';
    nuvemFundoESquerda.style.left = valor * -0.1 + 'px';


    arcoIris.style.marginTop = valor * -0.5 + 'px';

    sol.style.left = valor * -0.2 + 'px';
    sol.style.marginTop = valor * 0.5 + 'px';
    sol_fundo.style.left = valor * -0.2 + 'px';
    sol_fundo.style.marginTop = valor * 0.5 + 'px';

    
    maria1.style.left = valor * -0.3 + 'px';
    maria2.style.left = valor * -0.3 + 'px';
    maria3.style.left = valor * 0.3 + 'px';
    maria3.style.marginTop = valor * 0.3 + 'px';
    maria4.style.left = valor * 0.3 + 'px';

})
