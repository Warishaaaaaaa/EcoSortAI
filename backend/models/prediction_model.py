from database.database import get_connection


def save_prediction(image_name, prediction, confidence):
    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute(
        """
        INSERT INTO predictions
        (
            image_name,
            prediction,
            confidence
        )
        VALUES (?, ?, ?)
        """,
        (
            image_name,
            prediction,
            confidence,
        ),
    )

    connection.commit()
    connection.close()


def get_all_predictions():
    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute(
        """
        SELECT *
        FROM predictions
        ORDER BY id DESC
        """
    )

    predictions = cursor.fetchall()

    connection.close()

    return [dict(row) for row in predictions]


def delete_prediction(prediction_id):
    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute(
        """
        DELETE FROM predictions
        WHERE id = ?
        """,
        (prediction_id,),
    )

    connection.commit()

    connection.close()
def clear_history():
    connection = get_connection()

    cursor = connection.cursor()

    cursor.execute(
        """
        DELETE FROM predictions
        """
    )

    connection.commit()

    connection.close()   