export default function About() {
  const technologies = [
    "React.js",
    "Tailwind CSS",
    "Flask",
    "TensorFlow",
    "MobileNetV2",
    "SQLite",
    "Axios",
    "Python",
  ];

  const features = [
    "AI-powered waste classification",
    "Image upload and instant prediction",
    "Prediction confidence score",
    "Prediction history",
    "Analytics dashboard",
    "Waste distribution visualization",
    "Responsive user interface",
  ];

  return (
    <main className="min-h-screen bg-slate-100 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-slate-800">About EcoSortAI</h1>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            EcoSortAI is an AI-powered web application that helps users identify
            recyclable waste using Deep Learning. Simply upload an image and the
            system predicts the waste category within seconds.
          </p>
        </div>

        {/* Project Overview */}

        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">
          <h2 className="text-3xl font-bold mb-5">Project Overview</h2>

          <p className="text-slate-600 leading-8">
            EcoSortAI combines Artificial Intelligence with Web Development to
            promote smarter waste management. The application uses a trained
            MobileNetV2 deep learning model to classify waste into recyclable
            categories and provides users with an intuitive interface for image
            upload, prediction history, and analytics.
          </p>
        </section>

        {/* Features */}

        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">Features</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 p-4 rounded-xl bg-slate-50"
              >
                <span className="text-green-600 text-xl">✔</span>

                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}

        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">
          <h2 className="text-3xl font-bold mb-6">Technology Stack</h2>

          <div className="flex flex-wrap gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="bg-green-100 text-green-700 px-5 py-3 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* AI Model */}

        <section className="bg-white rounded-3xl shadow-lg p-8 mb-10">
          <h2 className="text-3xl font-bold mb-5">AI Model</h2>

          <div className="space-y-4 text-slate-600 leading-8">
            <p>
              <strong>Architecture:</strong> MobileNetV2
            </p>

            <p>
              <strong>Training Accuracy:</strong> 90%
            </p>

            <p>
              <strong>Supported Categories:</strong> Cardboard, Glass, Metal,
              Paper and Plastic.
            </p>

            <p>
              <strong>Future Improvement:</strong> The model will be retrained
              on a larger dataset before deployment to improve prediction
              accuracy and support more waste categories.
            </p>
          </div>
        </section>

        {/* Future Roadmap */}

        <section className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Future Enhancements</h2>

          <ul className="list-disc ml-6 space-y-3 text-slate-600">
            <li>Retrain the AI model using a larger dataset.</li>
            <li>Add more waste categories.</li>
            <li>Support batch image prediction.</li>
            <li>Cloud database integration.</li>
            <li>User authentication.</li>
            <li>Real-time analytics dashboard.</li>
            <li>Mobile application.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
