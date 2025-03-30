import { useState } from "react";
import { Camera } from "lucide-react";

interface RegisterModalProps {
  show: boolean;
  onClose: () => void;
  openLogin: () => void; // Function to open login modal
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  show,
  onClose,
  openLogin,
}) => {
  if (!show) return null;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "male",
    username: "",
    email: "",
    profilePicture: "",
  });

  // Handle Gender Change
  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle profile picture upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData({ ...formData, profilePicture: imageUrl });
      setPreviewImage(imageUrl);
    }
  };

  const [previewImage, setPreviewImage] = useState<string | null>(
    "assets/default-avatar-profile-icon.jpg"
  );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex items-center justify-center z-50"
      onClick={onClose} // Close when clicking outside
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96 relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Create an Account
        </h2>

        {/* Profile Picture */}
        <div className="flex justify-center relative">
          <label htmlFor="profilePicture" className="cursor-pointer">
            <img
              src={previewImage || "https://via.placeholder.com/100"}
              alt="Profile Preview"
              className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
            />
          </label>
          {/* Edit Icon */}
          <label
            htmlFor="profilePicture"
            className="absolute bottom-1 right-[38%] bg-white p-2 rounded-full shadow-md cursor-pointer"
          >
            <Camera size={16} className="text-gray-600" />
          </label>
          <input
            type="file"
            id="profilePicture"
            className="hidden"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Profile Description</label>
          <textarea
            name="description"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full px-2 py-1 border rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm resize-none h-12"
            placeholder="Add something about yourself"
            rows={2}
          />
        </div>

        {/* Username */}
        <div>
          <label className="text-sm text-gray-600">User Name </label>
          <input
            type="text"
            placeholder="Username"
            className="text-sm w-full p-2 border rounded-sm focus:outline-none focus:ring focus:ring-blue-300 h-8"
          />
        </div>

        {/* Email */}
        <div className="my-2">
          <label className="text-sm text-gray-600">Email </label>
          <input
            type="text"
            placeholder="email"
            className="text-sm w-full p-2 border rounded-sm focus:outline-none focus:ring focus:ring-blue-300 h-8"
          />
        </div>

        {/* Gender Selection */}
        <div className="pl-2 items-center mt-2">
          <div className="flex space-x-4 ">
            <label className="text-sm text-gray-600">Gender : </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handleGenderChange}
                className="mr-1"
              />
              Male
            </label>

            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handleGenderChange}
                className="mr-1"
              />
              Female
            </label>
          </div>
        </div>

        {/* Password & Confirm Password */}
        <div className="flex space-x-2 text-sm my-2 h-8">
          <input
            type="password"
            placeholder="Password"
            className="w-1/2 p-2 border rounded-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-1/2 p-2 border rounded-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Register Button */}
        <button className="mt-4 w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
          Register
        </button>

        {/* Already Have an Account? */}
        <p className="text-center text-sm text-gray-600 mt-2">
          Already have an account?{" "}
          <button
            className="text-blue-500 hover:underline"
            onClick={() => {
              onClose();
              openLogin(); // Open login modal
            }}
          >
            Log in
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

export default RegisterModal;
