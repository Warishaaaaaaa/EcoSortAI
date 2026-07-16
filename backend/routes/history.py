from flask import Blueprint
from flask import jsonify

from models.prediction_model import (
    get_all_predictions,
    delete_prediction,
    clear_history,
)

history_bp = Blueprint("history", __name__)


@history_bp.route("/history", methods=["GET"])
def history():

    predictions = get_all_predictions()

    return jsonify(predictions)


@history_bp.route("/history/<int:prediction_id>", methods=["DELETE"])
def delete_history(prediction_id):

    delete_prediction(prediction_id)

    return jsonify({
        "message": "Prediction deleted successfully."
    })
@history_bp.route("/history", methods=["DELETE"])
def delete_all_history():

    clear_history()

    return jsonify({
        "message": "History cleared successfully."
    })