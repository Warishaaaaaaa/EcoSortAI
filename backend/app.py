from flask import Flask
from flask_cors import CORS

from routes.prediction import prediction_bp
from routes.history import history_bp

from database.database import initialize_database

app = Flask(__name__)

CORS(app)

initialize_database()

app.register_blueprint(prediction_bp)
app.register_blueprint(history_bp)

if __name__ == "__main__":
    app.run(debug=True)