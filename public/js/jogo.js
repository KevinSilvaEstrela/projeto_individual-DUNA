var jogo = document.querySelector(".jogo");
var pontos_elemento = document.querySelector(".pontos");
var recorde_elemento = document.querySelector(".recorde");

var finalizar_jogo = false;

var comidaX, comidaY;
var cobraX = 5, cobraY = 5;
var cobra_corpo = [];

var velocidadeX = 0, velocidadeY = 0;
var setIntervalId;
var pontos = 0;

var audio = document.querySelector(".audio");
var pode_tocar = true;

var recorde = localStorage.getItem("recorde") || 0;
recorde_elemento.innerText = `Recorde: ${recorde}`;

var atualizar_posicao_comida = () => {
    comidaX = Math.floor(Math.random() * 30) + 1;
    comidaY = Math.floor(Math.random() * 30) + 1;
}

var encerrar_partida = () => {
    clearInterval(setIntervalId);
    alert("Fim de Jogo!");
    pode_tocar = true;
    enviarPontuacao();
    location.reload();
}

var mudar_direcao = e => {
    if (e.key === "w" || e.key === "ArrowUp" && velocidadeY != 1) {
        velocidadeX = 0;
        velocidadeY = -1;
    } else if (e.key === "s" || e.key === "ArrowDown" && velocidadeY != -1) {
        velocidadeX = 0;
        velocidadeY = 1;
    } else if (e.key === "a" || e.key === "ArrowLeft" && velocidadeX != 1) {
        velocidadeX = -1;
        velocidadeY = 0;
    } else if (e.key === "d" || e.key === "ArrowRight" && velocidadeX != -1) {
        velocidadeX = 1;
        velocidadeY = 0;
    }
}

var iniciarJogo = () => {

    if (finalizar_jogo) {
        return encerrar_partida();
    }

    var html = `<div class="comida" style="grid-area: ${comidaY} / ${comidaX}"></div>`;

    if (cobraX === comidaX && cobraY === comidaY) {
        atualizar_posicao_comida();
        cobra_corpo.push([comidaY, comidaX]);
        pontos++;

        if (pontos >= recorde) {
            recorde = pontos
            if (pode_tocar) {
                audio.play();
            }
            pode_tocar = false;
        }

        localStorage.setItem("recorde", recorde);
        pontos_elemento.innerText = `Pontos: ${pontos}`;
        recorde_elemento.innerText = `Recorde: ${recorde}`;
    }

    cobraX += velocidadeX;
    cobraY += velocidadeY;


    for (var i = cobra_corpo.length - 1; i > 0; i--) {
        cobra_corpo[i] = cobra_corpo[i - 1];
    }

    cobra_corpo[0] = [cobraX, cobraY];

    if (cobraX <= 0 || cobraX > 30 || cobraY <= 0 || cobraY > 30) {
        return finalizar_jogo = true;
    }

    for (var i = 0; i < cobra_corpo.length; i++) {
        html += `<div class="cabeca" style="grid-area: ${cobra_corpo[i][1]} / ${cobra_corpo[i][0]}"></div>`;
        if (i !== 0 && cobra_corpo[0][1] === cobra_corpo[i][1] && cobra_corpo[0][0] === cobra_corpo[i][0]) {
            finalizar_jogo = true;
        }
    }

    jogo.innerHTML = html;
}

atualizar_posicao_comida();
setIntervalId = setInterval(iniciarJogo, 100);
document.addEventListener("keyup", mudar_direcao);

function enviarPontuacao() {
    var recordeVar = recorde;
    var id_usuarioVar = sessionStorage.ID_USUARIO;

    fetch("http://localhost:3333/snakeGameRoutes/enviarPontuacao/" + id_usuarioVar, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            recordeServer: recordeVar,
	        id_jogoServer: 1
        })
    })

.then(res => {
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return res.json();
})
.then(data => console.log("Pontuação enviada:", data))
.catch(err => console.error("Erro ao enviar pontuação:", err));


}