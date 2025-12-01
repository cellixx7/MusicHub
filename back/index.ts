import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());

// 🔥 AQUI — antes das suas rotas
app.use(cors({
  origin: "http://localhost:5173"
}));

app.get("/", (req, res) => {
  res.json({ message: "Backend OK!" });
});

app.listen(3333, () => {
  console.log("Backend rodando na porta 3333");
});

