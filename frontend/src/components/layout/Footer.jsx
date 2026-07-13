export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <div>
          <h2 className="font-semibold text-gray-900">EcoSort AI</h2>

          <p className="mt-1 text-sm text-gray-500">
            AI-powered waste classification system.
          </p>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} EcoSort AI
        </p>
      </div>
    </footer>
  );
}
