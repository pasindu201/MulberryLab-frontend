import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Leaf, Menu, X } from "lucide-react";
import LoginModal from "../login/LoginModal";
import RegisterModal from "../registor/RegisterModal";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLogged, setIslogged] = useState(false);

  const isActive = (path: string) => location.pathname === path;
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#0C4105] shadow-sm shadow-gray-800 z-20">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-row ml-2 items-center">
              <Leaf className="h-10 w-10 text-yellow-400" />
              <div className="flex flex-col pl-4">
                <h2 className="text-xl font-bold text-yellow-400">
                  MulberryLab
                </h2>
                <span className="text-xs font-normal text-yellow-400">
                  Where Nature Meets Innovation
                </span>
              </div>
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links */}
          <div
            className={`md:flex md:space-x-4 absolute md:relative bg-[#21581a] md:bg-[#0C4105] w-full md:w-auto top-16 left-0 md:top-0 transition-all duration-300 ease-in-out 
      ${
        menuOpen
          ? "flex flex-col space-y-4 pl-10 py-4 md:p-0"
          : "hidden md:flex"
      }`}
          >
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/") ? "text-yellow-400" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/upload"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/upload") ? "text-yellow-400" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Fruit ID
            </Link>
            <Link
              to="/upload-leaf"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/upload-leaf") ? "text-yellow-400" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Leaf Disease
            </Link>
            <Link
              to="/info"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/info") ? "text-yellow-400" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Information
            </Link>
            <Link
              to="/recipe"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/recipe") ? "text-yellow-400" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Recipe
            </Link>
            <Link
              to="/community"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/community") ? "text-yellow-400" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Community
            </Link>
            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/about") ? "text-yellow-400" : "text-white"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            {isLogged ? (
              <div>
                <img src="https://randomuser.me/api/portraits" />
              </div>
            ) : (
              <button
                onClick={() => {
                  setShowLoginModal(true);
                }}
                className="px-2 text-sm font-medium text-white border border-white rounded-2xl flex items-center space-x-2"
              >
                <img
                  src={"assets/default-avatar-profile-icon.jpg"}
                  alt="Profile Preview"
                  className="w-5 h-5 rounded-full border-2 border-white shadow-md object-cover"
                />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </nav>
      {/* Login & Register Modals */}
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        openRegister={() => {
          setShowLoginModal(false);
          setShowRegisterModal(true);
        }}
      />

      <RegisterModal
        show={showRegisterModal}
        onClose={() => setShowRegisterModal(false)}
        openLogin={() => {
          setShowRegisterModal(false);
          setShowLoginModal(true);
        }}
      />
    </header>
  );
};

export default Header;
