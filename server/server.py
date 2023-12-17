from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import replicate

app = Flask(__name__)
CORS(app)

API_TOKEN1 = "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"
API_URL1 = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-large"
REPLICATE_API_TOKEN = "r8_68NJGidSrOXK5Ri2lkUchvGSL5JaN5q2hzJBY"

# Image to Text
headers = {"Authorization": f"Bearer {API_TOKEN1}"}

@app.route('/api/',methods=['GET'] )
def test():
    return jsonify({"message":"working"})


@app.route('/api/image', methods=['POST'])
def process_image():
    try:
        data = request.json
        image_base64 = data.get('image', '')
        prompt = data.get('prompt', '')
        response = query_image_captioning(image_base64)
        story_prompt=generate_prompt(response,prompt)
        story_output = generate_story(story_prompt)
        

        return jsonify({"message": "Data processed successfully", "result": story_output})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

def query_image_captioning(image_base64):
    response = requests.post(API_URL1, headers=headers, data=image_base64)
    return response.json()

def generate_story(story_prompt):
    output = replicate.run(
        "mistralai/mixtral-8x7b-instruct-v0.1:2b56576fcfbe32fa0526897d8385dd3fb3d36ba6fd0dbe033c72886b81ade93e",
        input={"prompt": f"{story_prompt}"}
    )
    return "".join(output)

def generate_prompt(response,prompt):
    story_prompt=f"Generate a story {prompt} with {response}"
    return story_prompt


if __name__ == '_main_':
    app.run(debug=True)