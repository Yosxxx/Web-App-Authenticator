from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2, numpy as np, base64
from mtcnn.mtcnn import MTCNN
from tensorflow.keras.models import load_model
from tensorflow import keras

app = Flask(__name__)
CORS(app)

# 1) Define exactly the same function name your model used:
def scaling(x, scale=1):
    return x * scale

# 2) Register it under the same key “Custom>scaling”
keras.utils.get_custom_objects()["Custom>scaling"] = scaling

# 3) Now load_model without re‐mapping, because get_custom_objects already has it:
model_path = "./facenet_finetuned.h5"
embedder = load_model(model_path)  # Keras finds “Custom>scaling” in get_custom_objects

detector = MTCNN()

def get_embedding(image):
    results = detector.detect_faces(image)
    if not results:
        return None, None
    x, y, w, h = results[0]["box"]
    face_crop = image[y:y+h, x:x+w]
    face_resized = cv2.resize(face_crop, (160, 160))
    face_resized = face_resized.astype("float32") / 255.0
    face_resized = np.expand_dims(face_resized, axis=0)
    embed = embedder.predict(face_resized)[0]
    return embed, (x, y, w, h)

@app.route("/get-embedding", methods=["POST"])
def get_embedding_endpoint():
    data = request.get_json() or {}
    img_b64 = data.get("image")
    if not img_b64:
        return jsonify({"error": "No image provided"}), 400

    try:
        raw = base64.b64decode(img_b64)
    except Exception:
        return jsonify({"error": "Failed to decode image"}), 400

    arr = np.frombuffer(raw, np.uint8)
    img = cv2.imdecode(arr, cv2.IMREAD_COLOR)
    if img is None:
        return jsonify({"error": "Failed to decode image"}), 400

    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    embedding, box = get_embedding(img_rgb)
    if embedding is None:
        return jsonify({"error": "No face detected"}), 400

    return jsonify({"embedding": embedding.tolist()})

if __name__ == "__main__":
    # Expose on all interfaces if you want to call from another machine:
    app.run(host="0.0.0.0", port=5000, debug=True)
