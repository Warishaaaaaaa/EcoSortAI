export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-green-700">EcoSort AI</h2>

            <p className="mt-3 text-gray-600 leading-7 max-w-md">
              EcoSort AI is an AI-powered waste classification system designed
              to promote smarter recycling and sustainable waste management
              through deep learning.
            </p>
          </div>

          <div className="md:text-right">
            <h3 className="font-semibold text-gray-900">Technology Stack</h3>

            <p className="mt-3 text-gray-600">
              React • Flask • TensorFlow • SQLite
            </p>

            <p className="mt-6 text-sm text-gray-500">
              © {new Date().getFullYear()} EcoSort AI
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Built for Sustainable Waste Management
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
