import { useRef, useState } from "react";
import { UploadCloud, AlertCircle } from "lucide-react";
import ImagePreview from "./ImagePreview";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_TYPES = ["image/jpeg", "image/jpg", "image/png"];

export default function UploadForm({ setPrediction }) {
  const inputRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");

  function validateFile(file) {
    if (!ALLOWED_TYPES.includes(file.type)) {
      setError("Only JPG, JPEG and PNG images are allowed.");
      return false;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("Image size must be less than 5 MB.");
      return false;
    }

    setError("");
    return true;
  }

  function processFile(file) {
    if (!file) return;

    if (!validateFile(file)) return;

    setSelectedImage(file);
    setPrediction(null);
  }

  function handleImageChange(event) {
    processFile(event.target.files[0]);
  }

  function handleDrop(event) {
    event.preventDefault();
    setDragActive(false);

    processFile(event.dataTransfer.files[0]);
  }

  function removeImage() {
    setSelectedImage(null);
    setPrediction(null);
    setError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  return (
    <div className="rounded-3xl bg-white p-10 shadow-lg">
      <input
        ref={inputRef}
        hidden
        type="file"
        accept="image/png,image/jpeg,image/jpg"
        onChange={handleImageChange}
      />

      {!selectedImage ? (
        <div
          onClick={() => inputRef.current.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`cursor-pointer rounded-3xl border-2 border-dashed p-20 text-center transition ${
            dragActive
              ? "border-green-600 bg-green-100"
              : "border-green-300 bg-green-50"
          }`}
        >
          <UploadCloud size={70} className="mx-auto text-green-600" />

          <h2 className="mt-6 text-2xl font-bold">Drag & Drop Your Image</h2>

          <p className="mt-3 text-gray-600">or click to browse</p>

          <p className="mt-6 text-sm text-gray-500">
            JPG • PNG • JPEG (Maximum 5 MB)
          </p>

          {error && (
            <div className="mt-6 flex items-center justify-center gap-2 text-red-600">
              <AlertCircle size={18} />
              {error}
            </div>
          )}
        </div>
      ) : (
        <ImagePreview
          image={selectedImage}
          onRemove={removeImage}
          setPrediction={setPrediction}
        />
      )}
    </div>
  );
}
