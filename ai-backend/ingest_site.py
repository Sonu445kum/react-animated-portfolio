import requests
from bs4 import BeautifulSoup

from langchain.vectorstores import Chroma
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.docstore.document import Document

urls = [
    "http://localhost:5173/",
    "http://localhost:5173/about",
    "http://localhost:5173/projects",
    "http://localhost:5173/services"
]

documents = []

for url in urls:

    html = requests.get(url).text
    soup = BeautifulSoup(html, "html.parser")

    text = soup.get_text()

    documents.append(Document(page_content=text))

embeddings = HuggingFaceEmbeddings()

db = Chroma.from_documents(
    documents,
    embeddings,
    persist_directory="./db"
)

db.persist()

print("Portfolio indexed successfully")