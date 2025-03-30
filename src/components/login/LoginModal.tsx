interface LoginModalProps {
  show: boolean;
  onClose: () => void;
  openRegister: () => void; // Function to open registration modal
}

const LoginModal: React.FC<LoginModalProps> = ({
  show,
  onClose,
  openRegister,
}) => {
  if (!show) return null; // Don't render if modal is hidden

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Login</h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-2 mt-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full p-2 mt-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />

        {/* Forgot Password Link */}
        <div className="text-center mt-2">
          <button className="text-blue-500 text-sm hover:underline">
            Forgot Password?
          </button>
        </div>

        {/* Login Button */}
        <button className="mt-4 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="w-full border-t border-gray-300"></div>
          <span className="px-3 text-gray-500">or</span>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        {/* Sign-Up Button */}
        <p className="text-center text-gray-600 text-sm">
          Don't have an account?{" "}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => {
              onClose(); // Close Login Modal
              openRegister(); // Open Register Modal
            }}
          >
            Sign up
          </button>
        </p>

        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl"
          onClick={onClose}
        >
          ✖
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
