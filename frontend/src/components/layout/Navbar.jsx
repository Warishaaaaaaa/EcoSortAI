import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { Leaf, Upload, Menu, X, Home, History, Info } from "lucide-react";

const navigation = [
  {
    name: "Home",
    path: "/",
    icon: Home,
  },
  {
    name: "Upload",
    path: "/upload",
    icon: Upload,
  },
  {
    name: "History",
    path: "/history",
    icon: History,
  },
  {
    name: "About",
    path: "/about",
    icon: Info,
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md shadow-sm">
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

        {/* Desktop Navigation */}

        <nav className="hidden md:flex items-center gap-2">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-green-100 text-green-700 font-semibold"
                      : "text-gray-700 hover:bg-gray-100 hover:text-green-600"
                  }`
                }
              >
                <Icon size={18} />

                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Desktop CTA */}

        <Link
          to="/upload"
          className="hidden md:flex items-center gap-2 rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:scale-105"
        >
          <Upload size={18} />
          Upload Waste
        </Link>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {mobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-white shadow-lg">
          <nav className="flex flex-col p-4 gap-2">
            {navigation.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                      isActive
                        ? "bg-green-100 text-green-700 font-semibold"
                        : "hover:bg-gray-100"
                    }`
                  }
                >
                  <Icon size={20} />

                  {item.name}
                </NavLink>
              );
            })}

            <Link
              to="/upload"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white hover:bg-green-700 transition"
            >
              <Upload size={18} />
              Upload Waste
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
