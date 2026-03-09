from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings

from openai import OpenAI
import asyncio
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Enable CORS (allows React frontend to call the API)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # For development. Later restrict to your domain.
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Check API key
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
if not OPENAI_API_KEY:
    raise ValueError("OPENAI_API_KEY is missing in .env file")

# Initialize OpenAI client
client = OpenAI(api_key=OPENAI_API_KEY)

# Initialize embeddings model
embeddings = HuggingFaceEmbeddings(
    model_name="sentence-transformers/all-mpnet-base-v2"
)

# Load vector database
db = Chroma(
    persist_directory="./db",
    embedding_function=embeddings
)

# Request model
class ChatRequest(BaseModel):
    message: str


# Root route
@app.get("/")
def root():
    return {"message": "AI Portfolio Assistant API is running 🚀"}


# AI chat endpoint
@app.post("/ai")
async def chat_ai(data: ChatRequest):

    # Search relevant portfolio content
    docs = db.similarity_search(data.message, k=3)

    context = "\n".join([doc.page_content[:800] for doc in docs])

    prompt = f"""
You are Sonu Kumar's AI portfolio assistant.

Your job is to answer questions about Sonu's:
- skills
- projects
- experience
- services

Use the provided context from the portfolio to answer the question.

Context:
{context}

User Question:
{data.message}

Answer clearly and professionally. Keep responses concise.
"""

    async def generate():

        try:
            stream = client.chat.completions.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": "You are a helpful portfolio assistant."},
                    {"role": "user", "content": prompt}
                ],
                stream=True
            )

            for chunk in stream:
                if chunk.choices and chunk.choices[0].delta.content:
                    token = chunk.choices[0].delta.content
                    yield token
                    await asyncio.sleep(0.01)

        except Exception as e:
            yield f"\nError: {str(e)}"

    return StreamingResponse(generate(), media_type="text/plain")