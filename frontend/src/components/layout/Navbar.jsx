import { Link, NavLink } from "react-router-dom";
import { Leaf, Upload } from "lucide-react";

const navigation = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Upload",
    path: "/upload",
  },
  {
    name: "History",
    path: "/history",
  },
  {
    name: "About",
    path: "/about",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-600 text-white shadow">
            <Leaf size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">EcoSort AI</h1>

            <p className="text-xs text-gray-500">Smart Waste Classification</p>
          </div>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}

        <Link
          to="/upload"
          className="hidden items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg md:flex"
        >
          <Upload size={18} />
          Upload Waste
        </Link>
      </div>
    </header>
  );
}
