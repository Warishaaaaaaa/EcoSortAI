import { useRef, useState } from "react";
import { Upload, Image as ImageIcon, Loader2 } from "lucide-react";
import { uploadImage } from "./UploadService";

export default function UploadForm({
  selectedImage,
  setSelectedImage,
  setPrediction,
}) {
  const [loading, setLoading] = useState(false);
  const [dragging, setDragging] = useState(false);

  const inputRef = useRef(null);

  function validateFile(file) {
    const allowed = ["image/jpeg", "image/png", "image/jpg"];

    if (!allowed.includes(file.type)) {
      alert("Only JPG, JPEG and PNG images are allowed.");
      return false;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Maximum file size is 10 MB.");
      return false;
    }

    return true;
  }

  function selectFile(file) {
    if (!validateFile(file)) return;

    setSelectedImage(file);
    setPrediction(null);
  }

  function handleImageChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    selectFile(file);
  }

  function handleDrop(e) {
    e.preventDefault();

    setDragging(false);

    const file = e.dataTransfer.files[0];

    if (!file) return;

    selectFile(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!selectedImage) {
      alert("Please upload an image.");
      return;
    }

    try {
      setLoading(true);

      const result = await uploadImage(selectedImage);

      setPrediction(result);
    } catch (error) {
      alert(
        error.response?.data?.error ||
          "Unable to classify the image. Please make sure the server is running and try again.",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Upload Waste Image</h2>

        <p className="text-gray-500 mt-2">
          Upload a clear image of cardboard, paper, plastic, glass or metal for
          AI-powered waste classification.
        </p>
      </div>

      <div
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-3xl p-12 cursor-pointer transition-all duration-300
        ${
          dragging
            ? "border-green-600 bg-green-50 scale-[1.02]"
            : "border-gray-300 hover:border-green-500 hover:bg-green-50"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          hidden
          accept="image/*"
          onChange={handleImageChange}
        />

        <div className="flex flex-col items-center">
          <div className="bg-green-100 rounded-full p-5">
            <Upload size={40} className="text-green-700" />
          </div>

          <h3 className="mt-6 text-xl font-semibold">Drag & Drop Image Here</h3>

          <p className="text-gray-500 mt-2">or click to browse your files</p>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              inputRef.current?.click();
            }}
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl transition"
          >
            Browse Files
          </button>

          <p className="text-sm text-gray-400 mt-6">
            Supported: JPG • JPEG • PNG (Maximum 10 MB)
          </p>
        </div>
      </div>

      {selectedImage && (
        <div className="bg-slate-100 rounded-2xl p-4 flex items-center gap-4">
          <div className="bg-green-100 rounded-full p-3">
            <ImageIcon className="text-green-700" size={24} />
          </div>

          <div>
            <p className="font-semibold">Selected File</p>

            <p className="text-gray-500 text-sm break-all">
              {selectedImage.name}
            </p>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-4 rounded-2xl font-semibold transition flex justify-center items-center gap-3"
      >
        {loading && <Loader2 size={22} className="animate-spin" />}

        {loading ? "Analyzing Waste..." : "Predict Waste"}
      </button>
    </form>
  );
}
