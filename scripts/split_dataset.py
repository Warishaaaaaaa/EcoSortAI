import os
import random
import shutil
from pathlib import Path

# -----------------------------
# Configuration
# -----------------------------

random.seed(42)

SOURCE_DIR = Path("dataset/dataset-resized")
DEST_DIR = Path("dataset")

CLASSES = [
    "cardboard",
    "glass",
    "metal",
    "paper",
    "plastic",
]

TRAIN_RATIO = 0.70
VAL_RATIO = 0.15
TEST_RATIO = 0.15


# -----------------------------
# Create folders
# -----------------------------

for split in ["train", "validation", "test"]:

    for cls in CLASSES:

        folder = DEST_DIR / split / cls

        folder.mkdir(parents=True, exist_ok=True)


# -----------------------------
# Split images
# -----------------------------

for cls in CLASSES:

    images = list((SOURCE_DIR / cls).glob("*"))

    random.shuffle(images)

    total = len(images)

    train_end = int(total * TRAIN_RATIO)
    val_end = train_end + int(total * VAL_RATIO)

    train = images[:train_end]
    validation = images[train_end:val_end]
    test = images[val_end:]

    splits = {
        "train": train,
        "validation": validation,
        "test": test,
    }

    for split_name, image_list in splits.items():

        for image in image_list:

            shutil.copy(
                image,
                DEST_DIR / split_name / cls / image.name,
            )

print("Dataset split completed successfully!")