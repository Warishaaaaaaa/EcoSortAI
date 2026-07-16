import os

import numpy as np
import tensorflow as tf
from PIL import Image

try:
    from tensorflow.keras.applications.mobilenet_v2 import preprocess_input
except ImportError:
    from keras.applications.mobilenet_v2 import preprocess_input

from config import MODEL_PATH
from models.prediction_model import save_prediction


print("Loading AI Model...")

model = tf.keras.models.load_model(MODEL_PATH)

print("Model Loaded Successfully.")


CLASS_NAMES = [
    "cardboard",
    "glass",
    "metal",
    "paper",
    "plastic",
]


def preprocess_image(image_path):
    image = Image.open(image_path)

    image = image.convert("RGB")

    # Same image size expected by the loaded model
    image = image.resize((224, 224))

    image = np.array(image).astype("float32")

    # Same preprocessing used during training
    image = preprocess_input(image)

    image = np.expand_dims(image, axis=0)

    return image


def predict_image(image_path):
    image = preprocess_image(image_path)

    prediction = model.predict(image, verbose=0)

    index = np.argmax(prediction)

    confidence = float(np.max(prediction)) * 100

    predicted_class = CLASS_NAMES[index]

    # Lower confidence threshold
    if confidence < 60:
        predicted_class = "Unknown"

    image_name = os.path.basename(image_path)

    save_prediction(
        image_name=image_name,
        prediction=predicted_class,
        confidence=round(confidence, 2),
    )

    # Debug information
    print("=" * 60)
    print("Prediction Probabilities:")
    print(prediction)
    print(f"Predicted Class : {predicted_class}")
    print(f"Confidence      : {confidence:.2f}%")
    print("=" * 60)

    return {
        "prediction": predicted_class,
        "confidence": round(confidence, 2),
    }