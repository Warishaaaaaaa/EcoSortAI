import {
  UploadCloud,
  BrainCircuit,
  ScanSearch,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: UploadCloud,
    title: "Upload Image",
    description: "Upload a clear image of waste from your device.",
  },
  {
    icon: BrainCircuit,
    title: "AI Processing",
    description: "Our trained CNN model analyzes the uploaded image.",
  },
  {
    icon: ScanSearch,
    title: "Classification",
    description:
      "The model predicts the waste category with a confidence score.",
  },
  {
    icon: CheckCircle2,
    title: "Get Result",
    description: "View the prediction and recycling recommendation instantly.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Classify Waste in Four Simple Steps
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            EcoSort AI makes waste classification fast, accurate, and simple.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-3xl bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <Icon size={36} className="text-green-600" />
                </div>

                <h3 className="mt-6 text-2xl font-bold">{step.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {step.description}
                </p>

                {index < steps.length - 1 && (
                  <ArrowRight
                    className="absolute -right-5 top-20 hidden text-green-500 lg:block"
                    size={28}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
