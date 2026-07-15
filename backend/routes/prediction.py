import os

from flask import Blueprint
from flask import jsonify
from flask import request

from werkzeug.utils import secure_filename

from config import UPLOAD_FOLDER
from utils.validators import allowed_file
from services.prediction_service import predict_image

prediction_bp = Blueprint("prediction", __name__)


@prediction_bp.route("/predict", methods=["POST"])
def predict():

    # Check file exists
    if "image" not in request.files:
        return jsonify({
            "error": "No image uploaded."
        }), 400

    file = request.files["image"]

    # Empty filename
    if file.filename == "":
        return jsonify({
            "error": "Please choose an image."
        }), 400

    # Invalid extension
    if not allowed_file(file.filename):
        return jsonify({
            "error": "Only JPG, JPEG and PNG are allowed."
        }), 400

    # Secure filename
    filename = secure_filename(file.filename)

    image_path = os.path.join(
        UPLOAD_FOLDER,
        filename
    )

    # Save image
    file.save(image_path)

    # Predict
    result = predict_image(image_path)

    # Delete uploaded file
    os.remove(image_path)

    return jsonify(result)