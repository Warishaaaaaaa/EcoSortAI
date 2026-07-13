import { useState } from "react";

import UploadForm from "./UploadForm";
import PredictionCard from "../Prediction/PredictionCard";

export default function UploadPage() {
  const [prediction, setPrediction] = useState(null);

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Upload Waste Image</h1>

          <p className="mt-4 text-gray-600">
            Upload an image and classify it using AI.
          </p>
        </div>

        <div className="mt-16">
          <UploadForm setPrediction={setPrediction} />

          <PredictionCard prediction={prediction} />
        </div>
      </div>
    </section>
  );
}
