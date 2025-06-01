function cadastrar() {
  // aguardar();

  //Recupere o valor da nova input pelo nome do id
  // Agora vá para o método fetch logo abaixo
  var nomeVar = nome_usuario.value;
  var emailVar = email_usuario.value;
  var senhaVar = senha_usuario.value;
  var confirmacaoSenhaVar = confirmar_senha.value;

  // Verificando se há algum campo em branco
  if (
    nomeVar == "" ||
    emailVar == "" ||
    senhaVar == "" ||
    confirmacaoSenhaVar == ""
  ) {
    swal("Erro!", "Campos estão em branco!");
    setInterval("...", 2000);
    return false;
  } else if (!(emailVar.includes("@")) || !(emailVar.includes("."))) {
    swal("Ops!", "Formato inválido de e-mail!")
  } else if (senhaVar.length < 4 ) {
    swal("Ops!", "Senha precisa ter no mínimo 4 caracteres!")
  } else {
    swal("Usuario cadastrado com sucesso!")
    setInterval(sumirMensagem, 5000);

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // crie um atributo que recebe o valor recuperado aqui
        // Agora vá para o arquivo routes/usuario.js
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
      }),
    })
      .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
          cardErro.style.display = "block";

          mensagem_erro.innerHTML =
            "Cadastro realizado com sucesso! Redirecionando para tela de Login...";

          setTimeout(() => {
            window.location = "login.html";
          }, "2000");

          limparFormulario();
          finalizarAguardar();
        } else {
          throw "Houve um erro ao tentar realizar o cadastro!";
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
      });

    return false;
  }
}


function sumirMensagem() {
  cardErro.style.display = "none";
}