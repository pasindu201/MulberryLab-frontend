import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface LocationState {
  prediction: string;
  imageUrl: string;
}

// Disease details dictionary
const diseaseInfo: {
  [key: string]: {
    description: string;
    damages: string;
    reasons: string;
    mitigation: string;
    videoUrl: string;
  };
} = {
  "Disease-Free": {
    description:
      "Your plant is healthy with no visible signs of disease. Keep maintaining proper care!",
    damages: "No damages, your plant is thriving.",
    reasons:
      "Proper watering, good sunlight, and nutrient-rich soil are key factors in keeping your plant disease-free.",
    mitigation:
      "Continue with proper care, regular inspections, and preventive measures to maintain plant health.",
    videoUrl: "https://www.youtube.com/embed/d6RfTr7s7Wc", // General plant care video
  },
  "Leaf Rust": {
    description:
      "Reddish-brown spots or patches on leaves, caused by fungal infections. It can weaken the plant if untreated, affecting overall growth.",
    damages:
      "Severe infections can weaken the plant, causing premature leaf drop and reduced photosynthesis.",
    reasons:
      "Caused by fungal spores that thrive in warm, humid conditions and spread via wind and rain.",
    mitigation:
      "● Remove and dispose of infected leaves to prevent spread. ● Apply a copper-based fungicide or neem oil. ● Improve air circulation by pruning overcrowded branches. ● Avoid overhead watering to reduce moisture buildup.",
    videoUrl: "https://www.youtube.com/embed/Wd0AZO-c9u0", // Leaf rust treatment
  },
  "Leaf Spot": {
    description:
      "Dark or light-colored circular spots on leaves, often caused by fungi or bacteria. Severe cases may lead to leaf drop and reduced vitality.",
    damages:
      "Weakens the tree by reducing photosynthesis, leading to lower fruit yield and growth issues.",
    reasons:
      "Caused by fungal and bacterial pathogens due to excessive moisture and poor air circulation.",
    mitigation:
      "● Prune affected leaves and keep the area clean. ● Use a fungicide or bactericide depending on the cause. ● Ensure proper spacing between plants for ventilation. ● Water at the base to avoid wetting leaves.",
    videoUrl: "https://www.youtube.com/embed/vg1oAWyo-lw", // Leaf spot management
  },
  "Powdery Mildew": {
    description:
      "A white, powdery fungal coating on leaves, common in humid conditions. It can hinder photosynthesis and weaken the plant over time.",
    damages:
      "It weakens the plant by hindering photosynthesis, leading to reduced growth and yield.",
    reasons:
      "Caused by fungi thriving in dry, warm conditions with high humidity.",
    mitigation:
      "● Spray with a solution of baking soda (1 tsp per liter of water) or neem oil. ● Increase airflow around the plant by trimming dense foliage. ● Avoid excessive nitrogen fertilizers, as they promote tender, susceptible growth. ● Use sulfur-based fungicides if the infection is severe.",
    videoUrl: "https://www.youtube.com/embed/VsBWXyGbgpM", // Powdery mildew control
  },
};

const DiseaseResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as LocationState;

  console.log("state prediction: ", state.prediction);

  if (!state || !state.prediction) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">No Results</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const diseaseDetails = diseaseInfo[String(state.prediction)];

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center py-24"
      style={{ backgroundImage: "url('wallpapers/green_leaves_blured.png')" }}
    >
      <motion.h1
        className="text-xl md:text-4xl font-extrabold text-white mb-6 drop-shadow-lg"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Plant Disease Diagnosis
      </motion.h1>

      <motion.div
        className="flex flex-col bg-white items-center p-4 rounded-lg w-full max-w-[90%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg w-full">
          {/* Image Section */}
          <div className="w-full md:w-1/3 p-4 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              {state.prediction}
            </h2>
            <img
              src={state.imageUrl}
              alt="Detected Disease"
              className="max-h-[300px] w-full object-cover rounded-lg mt-4"
            />
          </div>

          {/* Disease Details Section */}
          <div className="text-sm md:text-base w-full md:w-2/3 md:p-4">
            <p className="text-gray-700">
              <strong>Description:</strong> {diseaseDetails.description}
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Possible Damages:</strong> {diseaseDetails.damages}
            </p>
            <p className="text-gray-700 mt-2">
              <strong>Reason:</strong> {diseaseDetails.reasons}
            </p>
            <div className="text-gray-700 mt-2">
              <strong>Treatment:</strong>
              <ul className="list-disc ml-5 mt-1">
                {diseaseDetails.mitigation
                  .split("●")
                  .map((point, index) =>
                    point.trim() ? <li key={index}>{point.trim()}</li> : null
                  )}
              </ul>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div
          className="mt-6 flex space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <button
            onClick={() => navigate("/upload-leaf")}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Upload Another Image
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DiseaseResult;
