function entrar() {
    aguardar();

    var emailVar = email_usuario.value;
    var senhaVar = senha_usuario.value;

    if (emailVar == "" || senhaVar == "") {
        swal("Erro!", "Campos estão em branco!");
        setInterval("...", 2000);
        return false;
    }
    else {
        setInterval(sumirMensagem, 5000)
    }

    console.log("FORM LOGIN: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        swal("Login realizado com Sucesso!");
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
                sessionStorage.ID_USUARIO = json.id_usuario;

                if (emailVar == 'adm@gmail.com' && senhaVar == '1234') {

                    setTimeout(function () {
                        window.location = "./dashboard/dashboard.html";
                    }, 1000); // apenas para exibir o loading
                } else {
                    setTimeout(function () {
                        window.location = "./jogo-cobra/tela_inicial.html";
                    }, 1000);
                }

            });

        } else {
            swal("Ops!", "Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
                finalizarAguardar(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function sumirMensagem() {
    cardErro.style.display = "none"
}