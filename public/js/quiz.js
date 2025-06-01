const quizData = [
    {
      question: "Você prefere liderar com...",
      answers: [
        { text: "Justiça e empatia", house: "Atreides" },
        { text: "Medo e controle", house: "Harkonnen" },
        { text: "Ordem e tradição", house: "Corrino" },
        { text: "Conhecimento e tecnologia", house: "Richese" }
      ]
    },
    {
      question: "Qual valor você mais preza?",
      answers: [
        { text: "Lealdade", house: "Atreides" },
        { text: "Poder", house: "Harkonnen" },
        { text: "Legado", house: "Corrino" },
        { text: "Inovação", house: "Vernius" }
      ]
    },
    {
      question: "Qual cenário você escolheria para viver?",
      answers: [
        { text: "Planeta oceânico com bons aliados", house: "Atreides" },
        { text: "Planeta sombrio e estratégico", house: "Harkonnen" },
        { text: "Capital imperial imponente", house: "Corrino" },
        { text: "Mundo industrial altamente tecnológico", house: "Richese" }
      ]
    },
    {
      question: "Como você resolve conflitos?",
      answers: [
        { text: "Diplomacia", house: "Atreides" },
        { text: "Manipulação", house: "Harkonnen" },
        { text: "Comando direto", house: "Corrino" },
        { text: "Inteligência técnica", house: "Vernius" }
      ]
    },
    {
      question: "Seu maior objetivo é...",
      answers: [
        { text: "Unir e proteger", house: "Atreides" },
        { text: "Conquistar tudo", house: "Harkonnen" },
        { text: "Controlar o império", house: "Corrino" },
        { text: "Avançar o conhecimento", house: "Richese" }
      ]
    }
  ];

  const houseImages = {
    Atreides: "../assets/img-quiz/house atreides.jpg",
    Harkonnen: "../assets/img-quiz/house harkonnen.jpg",
    Corrino: "../assets/img-quiz/house corrino.jpg",
    Richese: "../assets/img-quiz/house richese.jpg",
    Vernius: "../assets/img-quiz/house vernius.jpg"
  };

  let currentQuestion = 0;
  let scores = {
    Atreides: 0,
    Harkonnen: 0,
    Corrino: 0,
    Richese: 0,
    Vernius: 0
  };

  const quizContainer = document.getElementById("quiz");
  const nextButton = document.getElementById("next");
  const resultContainer = document.getElementById("result");

  function showQuestion() {
    const questionData = quizData[currentQuestion];
    quizContainer.innerHTML = `
    <h2>${questionData.question}</h2>
    <div class="answers">
      ${questionData.answers.map((ans, idx) =>
      `<button onclick="selectAnswer('${ans.house}')">${ans.text}</button>`).join('')}
    </div>
  `;
  }

  function selectAnswer(house) {
    scores[house]++;
    nextButton.style.display = 'block';
  }

  nextButton.addEventListener("click", () => {
    currentQuestion++;
    nextButton.style.display = 'none';
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  function showResult() {
    quizContainer.innerHTML = '';
    const topHouse = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    const imageURL = houseImages[topHouse];

    resultContainer.classList.remove("hidden");
    resultContainer.innerHTML = `
    <h2>Você pertence à Casa <strong>${topHouse}</strong>!</h2>
    <img src="${imageURL}" alt="Imagem da Casa ${topHouse}" class="house-image"/>
  `;
  }

  showQuestion();