from flask import Blueprint, request

from services.prediction_service import predict_image
from utils.validators import allowed_file

prediction_bp = Blueprint(
    "prediction",
    __name__,
)


@prediction_bp.route(
    "/predict",
    methods=["POST"],
)
def predict():

    image = request.files.get("image")

    if image is None:
        return {
            "error": "Image is required."
        }, 400

    if not allowed_file(image.filename):
        return {
            "error": "Invalid image type."
        }, 400

    result = predict_image(image)

    return result