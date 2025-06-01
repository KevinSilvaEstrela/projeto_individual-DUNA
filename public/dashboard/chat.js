import { GoogleGenerativeAI } from "@google/generative-ai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";


import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// const API_KEY = process.env.GEMINI_API_KEY;
const API_KEY = "AIzaSyCctE0rncKjrZa2aYgOBu_v-dRAi555bfk"
const genAI = new GoogleGenerativeAI(API_KEY);

const model = genAI.getGenerativeModel({ model: "embedding-001" });

const documents = [
  {
    input: "Fale sobre o livro Duna.",
    output: "Duna foi escrito por Frank Herbert..."
  },
  {
    input: "Conte sobre o filme Duna (2021).",
    output: "Duna (2021) foi dirigido por Denis Villeneuve..."
  },
  // Adicione os outros documentos aqui
];

let embeddings = [];

async function generateEmbeddings() {
  for (let doc of documents) {
    const result = await model.embedContent({
      content: {
        parts: [{ text: doc.output }]
      },
      taskType: "RETRIEVAL_DOCUMENT"
    });

    // Corrigido: use `.embedding.values`
    embeddings.push({ ...doc, vector: result.embedding.values });

  }
}

async function findClosestMatch(query) {
  const queryEmbedding = (await model.embedContent({
    content: {
      parts: [{ text: query }]
    },
    taskType: "RETRIEVAL_QUERY"
  })).embedding.values;


  const scores = embeddings.map((doc) => {
    const dot = doc.vector.reduce((acc, val, idx) => acc + val * queryEmbedding[idx], 0);
    return { score: dot, output: doc.output };
  });

  scores.sort((a, b) => b.score - a.score);
  return scores[0].output;
}




// API para consulta
app.post("/consult", async (req, res) => {
  const { question } = req.body;
  const answer = await findClosestMatch(question);
  res.json({ answer });
});

// Inicializa servidor
app.listen(3000, async () => {
  try {
    await generateEmbeddings();
    console.log("Servidor rodando em http://localhost:3000");
  } catch (err) {
    console.error("Erro ao gerar embeddings:", err);
  }
});
