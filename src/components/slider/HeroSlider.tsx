import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/wallpapers/slide_image1.jpg",
  "/wallpapers/slide_image2.jpg",
  "/wallpapers/slide_image3.jpg",
  "/wallpapers/slide_image4.png",
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden shadow-lg shadow-gray-600">
      {/* Background Images */}
      <AnimatePresence>
        <motion.div
          key={images[index]}
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          exit={{ opacity: 0 }}
        ></motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="absolute top-1/3 left-5 right-5 md:left-20 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-4xl font-bold"
        >
          AI-Powered Mulberry Identification
        </motion.div>

        <motion.p
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.3 }}
          className="text-sm md:text-lg mt-4"
        >
          Explore the vibrant world of mulberries - Sri Lanka’s unique red
          variety and foreign yellow mulberries. <br />
          Nature’s treasures, now at your fingertips!
        </motion.p>

        <button
          className="mt-6 bg-[#0C4105] hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition"
          onClick={() => navigate("/info")}
        >
          Explore
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-1 h-1 rounded-full ${
              i === index ? "bg-white" : "bg-gray-400"
            } cursor-pointer`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
