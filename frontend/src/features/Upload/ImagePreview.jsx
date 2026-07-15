import wasteInfo from "../Prediction/wasteInfo";

export default function ImagePreview({
  selectedImage,
  prediction,
  clearPrediction,
}) {
  if (!selectedImage) return null;

  const info = prediction
    ? wasteInfo[prediction.prediction] || wasteInfo.Unknown
    : null;

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      {/* Uploaded Image */}

      <img
        src={URL.createObjectURL(selectedImage)}
        alt="Uploaded"
        className="w-80 mx-auto rounded-2xl shadow-md"
      />

      {!prediction && (
        <div className="text-center mt-8">
          <p className="text-slate-500">
            Click <strong>Predict Waste</strong> to analyze this image.
          </p>
        </div>
      )}

      {prediction && (
        <div className="mt-10">
          {/* Category */}

          <h2 className="text-4xl font-bold text-center text-green-600 capitalize">
            {prediction.prediction}
          </h2>

          {/* Confidence */}

          <div className="mt-8">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">Confidence</span>

              <span className="font-bold">
                {prediction.confidence.toFixed(1)}%
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-green-600 h-4 rounded-full transition-all duration-700"
                style={{
                  width: `${prediction.confidence}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Information Card */}

          <div className="bg-slate-50 rounded-2xl p-6 mt-8 space-y-5">
            <div className="flex justify-between">
              <span className="font-semibold">Recyclable</span>

              <span
                className={`font-bold ${
                  info.recyclable ? "text-green-600" : "text-red-600"
                }`}
              >
                {info.recyclable ? "Yes" : "No"}
              </span>
            </div>

            <div>
              <h3 className="font-semibold">Recommended Bin</h3>

              <p className="text-slate-600 mt-1">{info.bin}</p>
            </div>

            <div>
              <h3 className="font-semibold">Description</h3>

              <p className="text-slate-600 mt-1 leading-7">
                {info.description}
              </p>
            </div>

            <div className="bg-green-100 border border-green-300 rounded-xl p-4">
              <h3 className="font-semibold text-green-700">🌱 Eco Tip</h3>

              <p className="mt-2 text-green-900">{info.tip}</p>
            </div>
          </div>

          {/* Button */}

          <button
            onClick={clearPrediction}
            className="mt-8 w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition font-semibold"
          >
            Upload Another Image
          </button>
        </div>
      )}
    </div>
  );
}
