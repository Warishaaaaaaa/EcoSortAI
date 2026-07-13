import { Brain, Recycle, History, Zap, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Waste Classification",
    description:
      "Our CNN model identifies waste categories from uploaded images with high accuracy.",
  },
  {
    icon: Recycle,
    title: "5 Waste Categories",
    description:
      "Supports Plastic, Paper, Cardboard, Glass, and Metal for smart recycling.",
  },
  {
    icon: History,
    title: "Prediction History",
    description:
      "Access all previous predictions from one place with timestamps.",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Receive predictions in just a few seconds after uploading an image.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            FEATURES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Everything You Need for Smart Waste Classification
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            EcoSort AI combines Artificial Intelligence with an intuitive
            interface to help users classify waste quickly and accurately.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 transition group-hover:bg-green-600">
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

                <div className="mt-6 flex items-center gap-2 font-medium text-green-600">
                  Learn More
                  <ArrowRight size={18} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Statistics */}

        <div className="mt-24 rounded-3xl bg-green-600 px-8 py-14 text-white">
          <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-4">
            <div>
              <h3 className="text-4xl font-bold">95%</h3>
              <p className="mt-2">Model Accuracy*</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">&lt;2s</h3>
              <p className="mt-2">Prediction Time</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">5</h3>
              <p className="mt-2">Waste Categories</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold">24/7</h3>
              <p className="mt-2">Available Online</p>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-green-100">
            *Replace this value with the actual accuracy achieved by your
            trained model.
          </p>
        </div>
      </div>
    </section>
  );
}
