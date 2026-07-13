import { Link } from "react-router-dom";
import { Upload, ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-green-600 to-green-700 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
          READY TO TRY?
        </span>

        <h2 className="mt-8 text-5xl font-extrabold leading-tight text-white">
          Start Classifying Waste
          <br />
          Using Artificial Intelligence
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
          Upload an image, receive an AI-powered prediction, and help make
          recycling smarter and more efficient.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link
            to="/upload"
            className="flex items-center gap-2 rounded-xl bg-white px-7 py-4 font-semibold text-green-700 transition hover:scale-105"
          >
            <Upload size={20} />
            Upload Waste
          </Link>

          <Link
            to="/about"
            className="flex items-center gap-2 rounded-xl border border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-green-700"
          >
            Learn More
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
