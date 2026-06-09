from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import os

app = FastAPI(title="Pabbathi Sathwika Portfolio Server")

# Mount assets folder to serve images, PDFs, etc.
if os.path.exists("assets"):
    app.mount("/assets", StaticFiles(directory="assets"), name="assets")

@app.get("/")
async def read_index():
    return FileResponse("index.html")

@app.get("/style.css")
async def read_style():
    return FileResponse("style.css")

@app.get("/script.js")
async def read_script():
    return FileResponse("script.js")
