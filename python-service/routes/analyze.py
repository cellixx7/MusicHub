from fastapi import APIRouter

router = APIRouter()

@router.post("/analyze")
def analyze(data: dict):
    playlist_id = data.get("id")
    
    # processamento inicial
    return {"playlist_id": playlist_id, "status": "ok"}
