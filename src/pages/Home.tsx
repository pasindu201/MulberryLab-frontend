import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Leaf, Upload, Info, Users } from "lucide-react";
import HeroSlider from "../components/slider/HeroSlider";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top
  }, []);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const mulberries = [
    {
      name: "Red Mulberry (Morus rubra)",
      description:
        "The Red Mulberry is a rare and unique variety found primarily in Sri Lanka. It is known for its deep red, sweet, and slightly tangy berries. The leaves are broad, with serrated edges, providing rich nutrients for silkworms and livestock. This variety thrives in tropical climates and has notable antioxidant properties, making it valuable for both consumption and medicinal use.",
      image: "mulberryTypes/red_mulberry.jpg",
    },
    {
      name: "Yellow Mulberry (Morus alba 'Yellow')",
      description:
        "The Yellow Mulberry is a variation of the common white mulberry, featuring golden-yellow berries that are sweeter in taste. This variety is known for its high adaptability and fast growth. The leaves are glossy and bright green, often used in traditional medicine and silk production. Its berries offer a rich source of vitamins and minerals, making them a nutritious addition to diets.",
      image: "mulberryTypes/white_mulberry.jpg",
    },
  ];

  return (
    <>
      <HeroSlider />
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 pb-10 bg-gray-100">
        <button
          onClick={scrollToTop}
          className={`fixed z-10 bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg transition-transform duration-300 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          <ArrowUp size={24} />
        </button>
        <div className="fixed inset-0 z-[-1]">
          <img
            src="mulberry-2.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center">
          <motion.h1>
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 pt-10 md:pt-20 pb-6">
              Explore Mulberry Varieties
              <span className="block text-xl md:text-5xl text-green-700 pt-2">
                Like Never Before
              </span>
            </h1>
          </motion.h1>

          <p className="mt-3 max-w-md mx-auto tect text-sm text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Upload a Photo of Mulberry to Discover Its Variety, Nutritional
            Value, and Uses
          </p>
        </div>

        <div className="pt-6 flex justify-center w-full px-10 md:px-4">
          <div
            onClick={() => navigate("/upload")}
            className="relative group bg-white p-2 md:p-4 sm:p-6 rounded-lg shadow-lg hover:shadow-md transition-shadow cursor-pointer w-full max-w-xs sm:max-w-md md:max-w-lg"
          >
            <div className="flex items-center justify-center">
              <Upload className="h-6 w-6 md:h-8 md:w-8 sm:h-12 sm:w-12 text-green-700" />
              <h3 className="ml-3 text-base sm:text-lg md:text-xl font-medium text-gray-900">
                Upload Image
              </h3>
            </div>
            <p className="hidden sm:block mt-4 text-gray-500 text-center">
              Easily upload your mulberry image for instant identification
            </p>
          </div>
        </div>
      </div>

      {/* Types of Mulberries */}
      <div className="min-h-screen bg-gray-100 md:p-10">
        <motion.h1
          className="text-2xl md:text-4xl font-bold text-center mb-8 text-green-700"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.5 }} // Appears smoothly each time in view
        >
          Types of Mulberries
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          {mulberries.map((mulberry, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-lg md:rounded-2xl p-6 flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false, amount: 0.2 }} // Ensures animation on each scroll
            >
              <h2 className="text-base md:text-2xl font-semibold text-gray-800 text-center pb-4">
                {mulberry.name}
              </h2>
              <img
                src={mulberry.image}
                alt={mulberry.name}
                className="w-64 h-64 object-cover rounded-xl mb-4 shadow-md"
              />
              <p className="text-sm md:text-base text-gray-600 text-center mt-2 md:w-[85%]">
                {mulberry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col md:flex-row items-center justify-between w-full mx-auto px-2 md:px-6  bg-gray-100 pt-4 pb-16">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/2 text-left px-5 md:px-10 pb-8">
          <h2 className="text-xl md:text-3xl text-green-600 font-light mt-1">
            NATURE’S SUPERFOOD
          </h2>
          <hr className="w-20 border-green-600 mb-2 md:my-4" />
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-gray-700 leading-relaxed text-sm md:text-lg">
              Mulberries are packed with antioxidants, vitamins, and minerals,
              offering numerous health benefits. Rich in Vitamin C, iron, and
              fiber, they boost immunity, aid digestion, and support heart
              health. Their antioxidants fight free radicals, reducing
              inflammation and promoting healthy aging. In agriculture,
              mulberries are resilient, prevent soil erosion, and support
              silkworm farming. They also enhance biodiversity and provide
              farmers with a high-value crop for fresh consumption or
              processing, boosting local economies. A true superfood for both
              health and sustainability!🌱
            </p>
          </motion.p>
        </div>

        {/* Right Side - Image with Overlapping Effect */}
        <div className="relative flex justify-center mt-10 md:mt-0 w-full sm:w-1/2 md:w-1/3">
          {/* Dark Green Background Circle */}
          <div className="absolute w-60 h-60 sm:w-48 sm:h-48 md:w-80 md:h-80 bg-green-900 rounded-full -z-10 top-4 left-1/2 transform -translate-x-1/2 md:left-auto md:right-10"></div>

          {/* Main Image */}
          <div className="relative w-60 h-60 sm:w-40 sm:h-40 md:w-80 md:h-80 bg-white rounded-full flex items-center justify-center shadow-xl shadow-gray-400 overflow-hidden">
            <img
              src="iStock.jpg"
              alt="Wheat and Grains"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#E9941C] text-white py-6 md:py-20 px-6">
        {/* Title */}
        <h2 className="text-xl md:text-4xl font-bold text-center mb-4 md:mb-12 text-gray-700">
          Mulberry Leaf Diseases
        </h2>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative ">
          {/* Left Card - Agriculture Products */}
          <div className="flex flex-col items-center text-center relative md:-top-6 border bg-[#0C5B02] border-yellow-700 rounded-lg p-4 transform transition duration-300 hover:scale-105">
            <div className="w-full max-w-md">
              <img
                src="disease/Powdery-Mildew-infected-mulberry-leaves.png"
                alt="Agriculture Products"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <h3 className="text-lg md:text-2xl font-semibold mt-4 text-yellow-500">
              Powdery Mildew
            </h3>
            <p className="text-sm md:text-base text-gray-300 mt-2 md:px-4">
              Powdery mildew forms a white, powdery coating on the surface of
              mulberry leaves, affecting their ability to absorb sunlight. It
              thrives in warm, dry conditions and can weaken the plant over
              time. Fungicide applications and ensuring good air circulation
              around plants can help prevent this disease
            </p>
          </div>

          {/* Center Card - Fresh Vegetables */}
          <div className="flex flex-col items-center text-center relative border bg-gray-600 border-yellow-700 rounded-lg p-4 transform transition duration-300 hover:scale-105">
            <div className="w-full max-w-md">
              <img
                src="disease/rust.jpg"
                alt="Fresh Vegetables"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <h3 className="text-lg md:text-2xl font-semibold mt-4 text-yellow-500">
              Potential Leaf Rust
            </h3>
            <p className="text-sm md:text-base text-gray-300 mt-2 md:px-4">
              Leaf rust appears as small, orange-brown pustules on the underside
              of leaves, caused by fungal infections. This disease weakens the
              plant by reducing its ability to photosynthesize, leading to
              premature leaf drop. Proper pruning and antifungal treatments can
              help control its spread
            </p>
          </div>

          {/* Right Card - Farm Factory */}
          <div className="flex flex-col items-center text-center relative md:-top-6 border bg-[#4B550D] border-yellow-700 rounded-lg p-4 transform transition duration-300 hover:scale-105">
            <div className="w-full max-w-md">
              <img
                src="disease/spot.jpg"
                alt="Farm Factory"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <h3 className="text-lg md:text-2xl font-semibold mt-4 text-yellow-500">
              Potential Leaf Spot
            </h3>
            <p className="text-sm md:text-base text-gray-300 mt-2 md:px-4">
              Leaf spot disease causes small, dark, or yellowish-brown spots to
              appear on the leaf surface. It is often due to fungal or bacterial
              infections, thriving in humid conditions. If left untreated, it
              can cause extensive leaf damage and reduce fruit yield. Regular
              monitoring and removing infected leaves can help manage the
              disease
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
