import requests
from transformers import pipeline
from dotenv import load_dotenv,find_dotenv
import replicate
import openai
API_TOKEN1="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"
API_URL1 = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large"
REPLICATE_API_TOKEN="r8_68NJGidSrOXK5Ri2lkUchvGSL5JaN5q2hzJBY"


# Image to Text
headers = {"Authorization": f"Bearer {API_TOKEN1}"}
def query(url):
    response = requests.get(url)
    data = response.content
    response = requests.post(API_URL1, headers=headers, data=data)
    return response.json()

imgText = query("https://images.unsplash.com/photo-1702460804280-b11997b6896e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
print(imgText)


# Text to Story
output = replicate.run(
    "mistralai/mixtral-8x7b-instruct-v0.1:2b56576fcfbe32fa0526897d8385dd3fb3d36ba6fd0dbe033c72886b81ade93e",
    input={"prompt": f"generate a story  {imgText}"}
)
for item in output:
    print(item, end="")