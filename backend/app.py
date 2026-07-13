from flask import Flask
from flask_cors import CORS

from config import Config
from routes.prediction import prediction_bp

app = Flask(__name__)

app.config.from_object(Config)

CORS(app)


@app.route("/")
def home():
    return {
        "message": "EcoSort AI Backend Running"
    }


app.register_blueprint(prediction_bp)


if __name__ == "__main__":
    app.run(debug=True)