from flask import Flask, request, jsonify
from flask_cors import CORS  # Add this import
import cv2
import numpy as np
import base64
from mtcnn.mtcnn import MTCNN
from keras_facenet import FaceNet

app = Flask(__name__)
CORS(app)  # Enable CORS

# Initialize MTCNN for face detection and FaceNet for embedding generation
detector = MTCNN()
embedder = FaceNet()

def get_embedding(image):
    results = detector.detect_faces(image)
    print("Detected faces:", len(results))  # Debug: see how many faces were detected
    if len(results) == 0:
        return None, None  # No face detected
    # Use the first detected face
    face = results[0]
    x, y, width, height = face['box']
    face_crop = image[y:y + height, x:x + width]
    face_resized = cv2.resize(face_crop, (160, 160))
    embedding = embedder.embeddings([face_resized])[0]
    return embedding, (x, y, width, height)


@app.route('/get-embedding', methods=['POST'])
def get_embedding_endpoint():
    data = request.get_json()
    image_base64 = data.get('image')
    if not image_base64:
        return jsonify({'error': 'No image provided'}), 400

    try:
        # Decode the base64 image
        image_data = base64.b64decode(image_base64)
    except Exception as e:
        return jsonify({'error': 'Failed to decode image'}), 400

    np_arr = np.frombuffer(image_data, np.uint8)
    img = cv2.imdecode(np_arr, cv2.IMREAD_COLOR)
    if img is None:
        return jsonify({'error': 'Failed to decode image'}), 400

    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    
    # (Optional) Log the image shape to help debugging
    print("Received image with shape:", img_rgb.shape)
    
    embedding, _ = get_embedding(img_rgb)
    if embedding is None:
        return jsonify({'error': 'No face detected'}), 400

    return jsonify({'embedding': embedding.tolist()})

if __name__ == '__main__':
    app.run(debug=True)
