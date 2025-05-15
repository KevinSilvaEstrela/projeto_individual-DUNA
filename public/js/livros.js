var n = 1;

function carrossel() {
    livro.innerHTML = `<img src="./assets/livro ${n}.jpg" alt="">`

    if (n == 1) {
        livro.innerHTML += `<p>Duna (1965): Livro 1</p>`
    } else if (n == 2) {
        livro.innerHTML += `<p>O Messias de Duna (1969): Livro 2</p>`
    } else if (n == 3) {
        livro.innerHTML += `<p>Os Filhos de Duna (1976): Livro 3</p>`
    } else if (n == 4) {
        livro.innerHTML += `<p>O Imperador Deus  de Duna (1976): Livro 4</p>`
    } else if (n == 5) {
        livro.innerHTML += `<p>Os Hereges de Duna (1976): Livro 5</p>`
    } else if (n == 6) {
        livro.innerHTML += `<p>As Herdeiras de Duna (1976): Livro 6</p>`
    }
}



function trocar(nomeDiv) {
    nomeDiv.src = './assets/planeta1.png'
}

function aumentar() {
    n++
    if (n > 6) {
        n = 1
    }
    carrossel()
}

function diminuir() {
    n--
    if (n < 1) {
        n = 6
    }
    carrossel()
}