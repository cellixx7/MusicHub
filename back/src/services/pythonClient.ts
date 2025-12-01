import axios from "axios";

const PYTHON_URL = "http://localhost:8000";

export const pythonClient = {
  async analyzePlaylist(id: string) {
    const response = await axios.post(`${PYTHON_URL}/analyze`, { id });
    return response.data;
  }
};
