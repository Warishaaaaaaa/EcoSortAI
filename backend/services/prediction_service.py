import tensorflow as tf
import numpy as np
from PIL import Image
import os

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

    image = image.resize((224, 224))

    image = np.array(image)

    image = image.astype("float32")

    image = np.expand_dims(image, axis=0)

    return image


def predict_image(image_path):
    image = preprocess_image(image_path)

    prediction = model.predict(image, verbose=0)

    index = np.argmax(prediction)

    confidence = float(np.max(prediction)) * 100

    predicted_class = CLASS_NAMES[index]

    if confidence < 80:
        predicted_class = "Unknown"

    image_name = os.path.basename(image_path)

    save_prediction(
        image_name=image_name,
        prediction=predicted_class,
        confidence=round(confidence, 2),
    )

    return {
        "prediction": predicted_class,
        "confidence": round(confidence, 2),
    }