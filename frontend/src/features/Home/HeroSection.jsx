import { Link } from "react-router-dom";
import { Upload, Sparkles, ShieldCheck, Recycle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-16 px-6 py-20 lg:flex-row">
        {/* Left Content */}
        <div className="flex-1">
          <span className="inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            ♻ AI Powered Recycling Assistant
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Classify Waste
            <span className="block text-green-600">Smarter with AI</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Upload an image of waste and let EcoSort AI instantly classify it
            into the correct recyclable category using Deep Learning.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/upload"
              className="flex items-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              <Upload size={20} />
              Upload Waste
            </Link>

            <Link
              to="/about"
              className="rounded-xl border border-gray-300 px-6 py-4 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Learn More
            </Link>
          </div>

          {/* Small Badges */}

          <div className="mt-12 flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <Sparkles className="text-green-600" size={18} />
              <span className="text-gray-700">AI Powered</span>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="text-green-600" size={18} />
              <span className="text-gray-700">Instant Prediction</span>
            </div>

            <div className="flex items-center gap-2">
              <Recycle className="text-green-600" size={18} />
              <span className="text-gray-700">Eco Friendly</span>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="flex flex-1 justify-center">
          <div className="flex h-[420px] w-[420px] items-center justify-center rounded-3xl bg-gradient-to-br from-green-100 to-green-50 shadow-xl">
            <div className="text-center">
              <div className="text-8xl">♻</div>

              <h3 className="mt-4 text-2xl font-bold">EcoSort AI</h3>

              <p className="mt-2 text-gray-600">AI Waste Classification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
