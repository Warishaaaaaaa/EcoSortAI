from config import ALLOWED_EXTENSIONS


def allowed_file(filename):
    """
    Check whether the uploaded file
    has an allowed extension.
    """

    if "." not in filename:
        return False

    extension = filename.rsplit(".", 1)[1].lower()

    return extension in ALLOWED_EXTENSIONS