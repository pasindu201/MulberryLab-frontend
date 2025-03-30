import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Leaf, Sun, Shield, Bug } from "lucide-react";
import { ArrowUp } from "lucide-react";

const Info = () => {
  const [scrolyLevel, setScrolyLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolyLevel(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center pt-24">
      <button
        onClick={scrollToTop}
        className={`fixed z-10 bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg transition-transform duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <ArrowUp size={24} />
      </button>
      {/* Header Section */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-bold text-3xl md:text-6xl pb-4 md:pb-10">
          {" "}
          Mulberry Insights
        </h2>
        <h3 className="text-2xl md:text-3xl pb-8 text-green-700">
          Health Benefits, Nutritional Values and Farmer’s Guide
        </h3>
      </motion.div>
      <motion.div
        className="w-full flex flex-col md:flex-row  pb-4 md:pb-14 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        {/* Nutrient Benefits */}
        <div className="w-full sm:w-3/4 md:w-1/2 px-4 flex flex-col md:items-center md:text-left">
          <div>
            <h2 className="text-lg sm:text-xl md:text-3xl text-green-600 font-light flex  md:justify-start">
              <Leaf className="mr-2 text-green-600" /> Rich in Nutrients
            </h2>
            <hr className="w-16 sm:w-20 border-green-600 my-2 md:my-4 mx-auto md:mx-0" />
            <ul className="text-gray-700 text-sm md:text-base sm:text-lg leading-relaxed space-y-2">
              <li>🍊 High in Vitamin C and Iron 💪</li>
              <li>🥬 Good source of Vitamin K and E ✨</li>
              <li>🧑‍🔬 Contains essential minerals 💎</li>
            </ul>
          </div>
        </div>

        {/* Health Properties */}
        <div className="w-full sm:w-3/4 md:w-1/2 px-4 flex flex-col md:items-center md:text-left mt-6 md:mt-0">
          <div>
            <h2 className="text-lg sm:text-xl md:text-3xl text-green-600 font-light flex md:justify-start">
              <Shield className="mr-2 text-green-600" /> Health Properties
            </h2>
            <hr className="w-16 sm:w-20 border-green-600 my-2 md:my-4 mx-auto md:mx-0" />
            <ul className="text-gray-700 text-sm md:text-base sm:text-lg leading-relaxed space-y-2">
              <li>🛡️ Antioxidant properties 🍇</li>
              <li>🦠 Supports immune system 💪</li>
              <li>❤️ Promotes heart health 🍃</li>
            </ul>
          </div>
        </div>
      </motion.div>

      {isMobile ? ( // Fixed size video for mobile
        <div className="flex items-center justify-center w-full">
          <div className="flex items-center justify-center rounded-lg overflow-hidden w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl p-2">
            <video
              src={`videos/heath_benifits.mp4`}
              autoPlay
              muted
              loop
              controls
              className="w-full h-auto"
            />
          </div>
        </div>
      ) : (
        // Animated video for desktop
        <motion.div
          style={{
            width: `${Math.max((1000 - scrolyLevel * 1.5) / 10, 70)}vw`,
            maxWidth: "100%",
            transition: "width 0.2s ease, height 0.2s ease, ease",
            borderRadius: `${Math.min(scrolyLevel * 0.1, 16)}px`,
            overflow: "hidden",
          }}
        >
          <video
            src={`videos/heath_benifits.mp4`}
            autoPlay
            muted
            loop
            controls
            className="w-full h-auto"
          />
        </motion.div>
      )}

      <motion.div
        className="mt-20 w-full bg-green-100 rounded-lg shadow-md p-6 sm:p-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <h2 className="text-base md:text-4xl sm:text-3xl font-bold text-green-900 text-center">
          Farmer’s Guide to Growing Healthy Mulberries 🌿
        </h2>
        <p className="text-center text-gray-700 mt-2 text-base sm:text-lg">
          Expert tips on cultivation, care, and pest control to maximize yield.
        </p>

        {/* Sections */}
        {[
          {
            title: "Growing Conditions 🌿",
            icon: <Sun className="mr-2" />,
            imgSrc: "growing.jpg",
            points: [
              "📌 Soil: Well-draining, pH 6-7 for best growth.",
              "💧 Watering: Regular, but avoid overwatering.",
              "🌞 Climate: Requires warm temperatures for optimal yield.",
              "🌱 Planting: Proper spacing and propagation methods.",
            ],
          },
          {
            title: "Mulberry Tree Care Tips 🌱",
            icon: <Leaf className="mr-2" />,
            imgSrc: "mulberry-2.jpg",
            points: [
              "🌿 Fertilization: Use organic or chemical fertilizers.",
              "✂️ Pruning: Trim branches for better airflow and growth.",
              "📌 Support Structures: Stakes or trellises for tree stability.",
            ],
          },
          {
            title: "Common Pests & Disease Management 🦠🐛",
            icon: <Bug className="mr-2" />,
            imgSrc: "insects.png",
            points: [
              "🐞 Pests: Identify and prevent common mulberry pests.",
              "🍂 Diseases: Manage issues like leaf rust and powdery mildew.",
              "⚖️ Organic vs Chemical Control: Know the pros and cons.",
            ],
          },
          {
            title: "🚜 Tips for Improving Yield",
            imgSrc: "improve_yeild.png",
            points: [
              "🐝 Pollination: Attract bees for better fruiting.",
              "🌦️ Seasonal Care: Adapt farming methods with climate changes.",
              "🧺 Harvesting: Best techniques for quality mulberries.",
            ],
          },
        ].map((section, index) => (
          <div
            key={index}
            className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-4 sm:px-10"
          >
            <div className="w-full md:w-1/2 md:text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl text-green-700 font-semibold flex items-center justify-center md:justify-start">
                {section.icon} {section.title}
              </h3>
              <hr className="w-16 sm:w-20 border-green-600 my-2 md:my-4 mx-auto md:mx-0" />
              <ul className="text-gray-700 text-sm md:text-base sm:text-lg leading-relaxed space-y-2">
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <motion.div
                className="relative w-48 sm:w-60 h-48 sm:h-60 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <img
                  src={section.imgSrc}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Info;
