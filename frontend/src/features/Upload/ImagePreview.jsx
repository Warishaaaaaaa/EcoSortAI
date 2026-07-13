import { useEffect, useState } from "react";
import { Trash2, LoaderCircle } from "lucide-react";
import { classifyWaste } from "./UploadService";

export default function ImagePreview({ image, onRemove, setPrediction }) {
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const imageUrl = URL.createObjectURL(image);

    setPreview(imageUrl);

    return () => {
      URL.revokeObjectURL(imageUrl);
    };
  }, [image]);

  async function handlePrediction() {
    try {
      setLoading(true);

      const result = await classifyWaste(image);

      setPrediction(result);
    } catch (error) {
      console.error(error);

      alert("Prediction failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="text-center">
      <img
        src={preview}
        alt="Selected Waste"
        className="mx-auto h-80 rounded-2xl object-cover shadow-lg"
      />

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={onRemove}
          className="flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 text-white transition hover:bg-red-600"
        >
          <Trash2 size={18} />
          Remove
        </button>

        <button
          onClick={handlePrediction}
          disabled={loading}
          className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <LoaderCircle size={18} className={loading ? "animate-spin" : ""} />

          {loading ? "Predicting..." : "Classify Waste"}
        </button>
      </div>
    </div>
  );
}
