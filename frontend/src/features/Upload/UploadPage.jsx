import { useState } from "react";

import UploadForm from "./UploadForm";
import ImagePreview from "./ImagePreview";

export default function UploadPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  function clearPrediction() {
    setSelectedImage(null);
    setPrediction(null);
  }

  return (
    <main className="min-h-screen bg-slate-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Heading */}

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-900">
            AI Waste Classification
          </h1>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Upload an image of waste material and let EcoSortAI identify its
            category using our trained Artificial Intelligence model.
          </p>
        </div>

        {/* Main Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Upload Card */}

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <UploadForm
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
              setPrediction={setPrediction}
            />
          </div>

          {/* Preview Card */}

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <ImagePreview
              selectedImage={selectedImage}
              prediction={prediction}
              clearPrediction={clearPrediction}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
