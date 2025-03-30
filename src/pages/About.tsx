import { useEffect, useState } from "react";
import { GraduationCap, Heart, Database } from "lucide-react";
import { ArrowUp } from "lucide-react";

const About = () => {
  const [scrolyLevel, setScrolyLevel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

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
    window.scrollTo(0, 0); // Scrolls to the top
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolyLevel(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      <button
        onClick={scrollToTop}
        className={`fixed z-10 bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg transition-transform duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <ArrowUp size={24} />
      </button>
      {/* Background Image - Initially visible */}
      <div
        className="fixed top-0 left-0 w-full h-screen z-[-10]"
        style={{ transform: `translateY(-${scrolyLevel * 0.3}px)` }}
      >
        <img
          src="wallpapers/logo_for_about_page.png"
          alt="MulberryLab"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="relative z-5 bg-white min-h-screen mt-[95vh] px-6 pt-10 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              About MulberryLab
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Advancing Mulberry Research and Knowledge
            </p>
          </div>

          {/* Features Section */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <GraduationCap className="h-6 w-6" />,
                title: "Research",
                desc: "Built on extensive research in mulberry varieties and machine learning.",
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Mission",
                desc: "Making mulberry identification accessible to everyone.",
              },
              {
                icon: <Database className="h-6 w-6" />,
                title: "Technology",
                desc: "Powered by state-of-the-art deep learning algorithms.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 text-center"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-100 text-purple-600 mx-auto">
                  {item.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Our Story Section */}
          <div className="mt-16">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
              <p className="mt-4 text-gray-600">
                This project began as a research initiative to address the
                challenges of identifying mulberry varieties with accuracy and
                efficiency. Combining insights from agricultural science and
                advanced methodologies, the aim is to assist farmers,
                researchers, and enthusiasts in identifying mulberry varieties
                and accessing valuable information about their characteristics
                and uses.
              </p>
              <p className="mt-4 text-gray-600">
                The system is grounded in meticulous research and a curated
                database of mulberry images, designed to ensure reliable
                identification of varieties. As the project progresses, its
                scope will be expanded, the database enriched, and its impact on
                the global agricultural and conservation communities further
                enhanced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
