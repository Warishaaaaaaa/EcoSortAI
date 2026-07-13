import { CheckCircle2 } from "lucide-react";

export default function PredictionCard({ prediction }) {
  if (!prediction) return null;

  return (
    <div className="mt-10 rounded-3xl border border-green-200 bg-green-50 p-8 shadow">
      <div className="flex items-center gap-3">
        <CheckCircle2 size={32} className="text-green-600" />

        <h2 className="text-2xl font-bold">Prediction Result</h2>
      </div>

      <div className="mt-6 space-y-3">
        <p>
          <span className="font-semibold">Category:</span>{" "}
          {prediction.prediction}
        </p>

        <p>
          <span className="font-semibold">Confidence:</span>{" "}
          {prediction.confidence}%
        </p>
      </div>
    </div>
  );
}
