var n = 0;
var livros = [`<img src="./assets/livro 1.jpg" alt="">`, `<img src="./assets/livro 2.jpg" alt="">`,
    `<img src="./assets/livro 3.jpg" alt="">`, `<img src="./assets/livro 4.jpg" alt="">`,
    `<img src="./assets/livro 5.jpg" alt="">`, `<img src="./assets/livro 6.jpg" alt="">`
]

var descricoes = [`<p>Duna (1965): Livro 1</p>`,
    `<p>O Messias de Duna (1969): Livro 2</p>`,
    `<p>Os Filhos de Duna (1976): Livro 3</p>`,
    `<p>O Imperador Deus  de Duna (1976): Livro 4</p>`,
    `<p>Os Hereges de Duna (1976): Livro 5</p>`,
    `<p>As Herdeiras de Duna (1976): Livro 6</p>`]

function carrossel() {
    livro.innerHTML = livros[n]

    if (n == 0) {
        livro.innerHTML += descricoes[n]
    } else if (n == 1) {
        livro.innerHTML += descricoes[n]
    } else if (n == 2) {
        livro.innerHTML += descricoes[n]
    } else if (n == 3) {
        livro.innerHTML += descricoes[n]
    } else if (n == 4) {
        livro.innerHTML += descricoes[n]
    } else if (n == 5) {
        livro.innerHTML += descricoes[n]
    }
}



function trocar(nomeDiv) {
    nomeDiv.src = './assets/planeta1.png'
}

function aumentar() {
    n++
    if (n > 5) {
        n = 0
    }
    carrossel()
}

function diminuir() {
    n--
    if (n < 0) {
        n = 5
    }
    carrossel()
}