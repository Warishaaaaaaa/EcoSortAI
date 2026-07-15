import { Brain, Recycle, History, Zap, ArrowRight } from "lucide-react";

import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "AI Waste Classification",
    description:
      "Our MobileNetV2 deep learning model classifies waste images quickly and accurately.",
  },
  {
    icon: Recycle,
    title: "5 Waste Categories",
    description:
      "Recognizes Cardboard, Glass, Metal, Paper and Plastic to support smarter recycling.",
  },
  {
    icon: History,
    title: "Prediction History",
    description:
      "Store every prediction with confidence scores and view them anytime from the dashboard.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Upload an image and receive an AI prediction in just a few seconds.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            FEATURES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Everything You Need for Smart Waste Classification
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            EcoSort AI combines Artificial Intelligence with an intuitive web
            interface to help users identify recyclable waste efficiently.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition-all duration-300 group-hover:bg-green-600">
                  <Icon
                    className="text-green-600 group-hover:text-white"
                    size={30}
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>

                <Link
                  to="/about"
                  className="mt-6 inline-flex items-center gap-2 font-medium text-green-600 transition-all duration-300 hover:gap-3 hover:text-green-700"
                >
                  Learn More
                  <ArrowRight size={18} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-24 rounded-3xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-14 text-white shadow-xl">
          <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold">90%</h3>
              <p className="mt-2">Model Accuracy</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">&lt;2s</h3>
              <p className="mt-2">Prediction Speed</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">5</h3>
              <p className="mt-2">Waste Categories</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">TensorFlow</h3>
              <p className="mt-2">AI Powered</p>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-green-100">
            Powered by a MobileNetV2 deep learning model trained for recyclable
            waste classification.
          </p>
        </div>
      </div>
    </section>
  );
}
