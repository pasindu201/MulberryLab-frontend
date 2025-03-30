import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface PredictionResult {
  srilankan: number;
  foreign: number;
}

interface LocationState {
  predictions: PredictionResult;
  imageUrl: string;
}

const ClassificationResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;

  if (!state || !state.predictions || !state.imageUrl) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 to-indigo-500">
        <div className="text-center bg-white p-8 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            No Results Found
          </h1>
          <button
            onClick={() => navigate("/")}
            className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const mulberryType =
    state.predictions.srilankan === 0 && state.predictions.foreign === 0
      ? "Could not be Recognized"
      : state.predictions.srilankan > state.predictions.foreign
      ? "Sri Lankan Mulberry"
      : "Foreign Mulberry";

  const recipes =
    mulberryType === "Sri Lankan Mulberry"
      ? ["Mulberry Jam", "Mulberry Tea", "Mulberry Smoothie"]
      : mulberryType === "Foreign Mulberry"
      ? ["Mulberry Tart", "Mulberry Syrup", "Mulberry Salad"]
      : [];

  const healthBenefits =
    mulberryType === "Sri Lankan Mulberry"
      ? ["Rich in antioxidants", "Boosts immunity", "Supports heart health"]
      : mulberryType === "Foreign Mulberry"
      ? [
          "Improves digestion",
          "Enhances skin health",
          "Supports brain function",
        ]
      : [];

  const description =
    mulberryType === "Sri Lankan Mulberry"
      ? "This unique red mulberry variety, found only in Sri Lanka, is known for its deep red hue, sweet-tart flavor, and high antioxidant content. It thrives in tropical climates and is valued for its medicinal properties, promoting overall health and wellness."
      : mulberryType === "Foreign Mulberry"
      ? "Foreign mulberries come in various colors, including black, white, and yellow. These varieties are cultivated worldwide, offering diverse flavors and nutritional benefits. They are rich in vitamins, antioxidants, and fiber, supporting digestion and overall health."
      : "This image could not be recognized as either a Sri lankan nor a Foreign Mulberry. Please try again with another image.";

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center pt-24"
      style={{ backgroundImage: "url('/wallpapers/mulberry_blured.png')" }}
    >
      <motion.h1
        className="text-xl md:text-4xl font-extrabold text-white mb-6 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Mulberry Classification Results
      </motion.h1>
      <motion.div
        className="flex flex-col md:flex-row items-center bg-white p-6 md:rounded-lg md:shadow-2xl max-w-4xl w-full"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center">
          <img
            src={
              state.imageUrl.startsWith("data:image") ||
              state.imageUrl.startsWith("http")
                ? state.imageUrl
                : `data:image/jpeg;base64,${state.imageUrl}` // ✅ Corrected the syntax error
            }
            alt="Mulberry Result"
            className="w-[400px] h-auto object-cover rounded-lg shadow-lg"
          />
          <button
            onClick={() => navigate("/upload")}
            className="mt-6 bg-purple-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-purple-700 transition duration-300"
          >
            Upload Another Image
          </button>
        </div>

        {/* Prediction Details */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold text-purple-700">{mulberryType}</h2>
          <p className="text-sm md:text-lg text-gray-700 mt-2">{description}</p>

          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-800">
              Prediction Scores:
            </h3>
            <p className="text-sm md:text-base text-gray-700">
              <strong>Sri Lankan:</strong> {state.predictions.srilankan}
            </p>
            <p className="text-sm md:text-base text-gray-700">
              <strong>Foreign:</strong> {state.predictions.foreign}
            </p>
          </div>
        </div>
      </motion.div>
      {/* Recipes and Health Benefits */}
      {mulberryType != "Could not be Recognized" && (
        <motion.div
          className="mt-10 bg-white p-6 md:pl-20 md:rounded-lg md:shadow-2xl max-w-3xl w-full "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-purple-700">
            {mulberryType} Uses
          </h2>

          {/* Recipes */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Recommended Recipes:
            </h3>
            <ul className="pl-4 text-sm md:text-base list-disc list-inside text-gray-700">
              {recipes.map((recipe, index) => (
                <li key={index} className="mt-1">
                  {recipe}
                </li>
              ))}
            </ul>
          </div>

          {/* Health Benefits */}
          <div className="mt-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Health Benefits:
            </h3>
            <ul className="pl-4 text-sm md:text-base list-disc list-inside text-gray-700">
              {healthBenefits.map((benefit, index) => (
                <li key={index} className="mt-1">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ClassificationResult;
