import { Router } from "express";
import { pythonClient } from "../services/pythonClient";

const router = Router();

router.post("/", async (req, res) => {
  const { playlistId } = req.body;

  try {
    const data = await pythonClient.analyzePlaylist(playlistId);
    return res.json(data);
  } catch (err) {
    return res.status(500).json({ error: "Erro no Python" });
  }
});

export default router;
