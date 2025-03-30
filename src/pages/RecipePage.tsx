import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const recipes = [
  {
    name: "Mulberry Salad",
    calories: "100-150 calories",
    time: "10-15 mins",
    portion: "2-4 people",
    image: "recipe/Mulberry-Salad.jpg",
    description:
      "A refreshing salad with fresh mulberries, mixed greens, nuts, and a light vinaigrette for a perfect balance of sweet and tangy flavors.",
    ingredients: [
      "1 cup fresh mulberries",
      "4 cups mixed greens (lettuce, spinach, arugula)",
      "½ cup cucumber (thinly sliced)",
      "½ cup cherry tomatoes (halved)",
      "¼ cup red onion (thinly sliced)",
      "¼ cup feta cheese (optional)",
      "¼ cup walnuts or almonds (toasted)",
      "3 tbsp olive oil",
      "1 tbsp balsamic vinegar",
      "1 tbsp honey or maple syrup",
      "1 tsp Dijon mustard",
      "½ tsp salt",
      "¼ tsp black pepper",
      "1 clove garlic (minced)",
    ],
    recipe: [
      "Wash the mulberries and greens thoroughly.",
      "Slice cucumbers, tomatoes, and onions thinly.",
      "Toast the walnuts or almonds in a pan for 2-3 minutes.",
      "In a small bowl, mix olive oil, balsamic vinegar, honey, mustard, salt, pepper, and minced garlic.",
      "Combine all salad ingredients in a large bowl.",
      "Drizzle the dressing over the salad and toss gently.",
      "Serve immediately and enjoy!",
    ],
    url: "videos/mulberry salad.mp4",
    originalURL: "https://www.youtube.com/shorts/-L0MKAv9qxc",
  },
  {
    name: "Mulberry Tea",
    calories: "0-5 calories",
    time: "5-10 mins",
    portion: "1 person",
    image: "recipe/Mulberry-Tea.png",
    description:
      "A warm and soothing herbal tea made with dried mulberry leaves, known for its rich antioxidants and potential health benefits.",
    ingredients: [
      "2 cups water",
      "1 tbsp dried mulberry leaves (or fresh leaves)",
      "1 tsp honey or stevia (optional)",
      "1 slice lemon (optional)",
    ],
    recipe: [
      "Boil 2 cups of water in a pot.",
      "Add dried mulberry leaves and simmer for 5-7 minutes.",
      "Strain the tea into a cup.",
      "Add honey or lemon for extra flavor, if desired.",
      "Serve warm and enjoy a soothing tea experience.",
    ],
    url: "videos/mulberry tea.mp4",
    originalURL: "https://www.youtube.com/shorts/m8Geh0-4TVE",
  },
  {
    name: "Mulberry Smoothie",
    calories: "120-250 calories",
    time: "5 mins",
    portion: "1-2 people",
    image: "recipe/Smoothie-Bonne-Humeur-au-Sirop-d.png",
    description:
      "A delicious and nutrient-packed smoothie made with ripe red mulberries, banana, and yogurt for a refreshing and healthy treat.",
    ingredients: [
      "1 cup fresh red mulberries",
      "1 banana",
      "½ cup Greek yogurt",
      "1 cup almond milk (or regular milk)",
      "1 tbsp honey",
      "½ tsp vanilla extract",
      "Ice cubes (optional)",
    ],
    recipe: [
      "Wash the mulberries thoroughly and remove stems.",
      "Add all ingredients into a blender.",
      "Blend until smooth and creamy.",
      "Pour into a glass and serve immediately.",
      "Optional: Garnish with extra mulberries or mint leaves.",
    ],
    url: "videos/mulberry smoothie.mp4",
    originalURL: "https://www.youtube.com/shorts/-wUb95Rsad8",
  },
  {
    name: "Mulberry Jam",
    calories: "50-60 calories",
    time: "1-2 hours",
    portion: "10-15 people",
    image:
      "recipe/easy-mulberry-jam-1327843-hero-01-ef860d4b6fb941edad03476fb814b661.jpg",
    description:
      "A homemade sweet and tangy jam prepared with fresh mulberries, sugar, and lemon juice. Perfect for spreading on toast or desserts.",
    ingredients: [
      "2 cups fresh mulberries",
      "1 cup sugar",
      "1 tbsp lemon juice",
      "1 tsp vanilla extract (optional)",
    ],
    recipe: [
      "Wash and remove stems from the mulberries.",
      "Mash the mulberries in a saucepan over medium heat.",
      "Add sugar and lemon juice, stirring continuously.",
      "Cook for 15-20 minutes until the jam thickens.",
      "Let it cool and transfer to a jar for storage.",
      "Store in the refrigerator for up to 2 weeks.",
    ],
    url: "videos/mulberry jam.mp4",
    originalURL: "https://www.youtube.com/shorts/hwAC7TX3lbY",
  },
  {
    name: "Mulberry Cheesecake",
    calories: "300-400 calories",
    time: "4-6 hours",
    portion: "6-8 people",
    image: "recipe/cheese_cake.jpg",
    description:
      "A rich and creamy cheesecake infused with a mulberry compote, giving it a perfect balance of tartness and sweetness.",
    ingredients: [
      "2 cups cream cheese",
      "1 cup fresh mulberries",
      "¾ cup sugar",
      "1 tsp vanilla extract",
      "½ cup sour cream",
      "2 eggs",
      "1 cup graham cracker crumbs",
      "¼ cup melted butter",
    ],
    recipe: [
      "Preheat oven to 350°F (175°C).",
      "Mix graham cracker crumbs and melted butter, then press into a baking dish.",
      "Blend cream cheese, sugar, and vanilla until smooth.",
      "Add eggs one at a time, mixing well.",
      "Fold in mulberries and pour over the crust.",
      "Bake for 45-50 minutes, then cool before refrigerating.",
      "Serve chilled with extra mulberries on top.",
    ],
    url: "videos/cheesecake.mp4",
    originalURL: "https://youtube.com/shorts/dFwWaPzhgvY?si=IzmBXxdNtZvhda9B",
  },
];

const slideLeft = () => {
  const slider = document.getElementById("slider");
  if (slider) {
    slider.scrollLeft -= 300; // Scroll left
  }
};

const slideRight = () => {
  const slider = document.getElementById("slider");

  if (slider) {
    slider.scrollLeft += 300;
  }
};

const RecipesPage = () => {
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

  return (
    <div className="bg-gray-50 min-h-screen">
      <button
        onClick={scrollToTop}
        className={`fixed z-10 bottom-6 right-6 bg-black text-white p-3 rounded-full shadow-lg transition-transform duration-300 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      >
        <ArrowUp size={24} />
      </button>
      {/* Hero Section */}
      <div
        className="relative w-full min-h-screen flex flex-col justify-center text-center px-6 bg-cover bg-center"
        style={{
          backgroundImage: "url('recipe/WILD BLACKBERRY NECTARINE SALAD.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.h1
          className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-[-40px]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Simple and Tasty Recipes
        </motion.h1>
        <motion.p
          className="relative text-white text-lg md:text-xl max-w-2xl mx-auto mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.3 }}
        >
          Discover delicious and easy-to-make recipes for every occasion.
        </motion.p>
      </div>

      {/* Scrollable Recipes Section */}
      <div className="relative -mt-40 sm:-mt-60 z-4 px-6 sm:px-10 pb-8">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative flex items-center w-full">
            {/* Left Scroll Button */}
            <MdChevronLeft
              className="absolute left-0 z-5 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300 transition hidden sm:block"
              onClick={slideLeft}
              size={40}
            />

            {/* Recipe Slider */}
            <div
              id="slider"
              className="w-full h-full overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide flex space-x-6 px-4 sm:px-10"
            >
              {recipes.map((recipe, index) => (
                <motion.div
                  key={index}
                  className="inline-block bg-white shadow-lg rounded-xl p-4 w-56 sm:w-64 text-center transform hover:scale-105 transition duration-300"
                >
                  <img
                    className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full mx-auto shadow-md border-4 border-white"
                    src={recipe.image}
                    alt={recipe.name}
                  />
                  <h3 className="text-lg font-semibold mt-4 text-gray-900 truncate">
                    {recipe.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{recipe.calories}</p>
                </motion.div>
              ))}
            </div>

            {/* Right Scroll Button */}
            <MdChevronRight
              className="absolute right-0 z-5 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300 transition hidden sm:block"
              onClick={slideRight}
              size={40}
            />
          </div>
        </motion.div>
      </div>

      {/* Detailed Recipe Section */}
      {recipes.map((recipe, index) => (
        <div
          key={index}
          className="bg-gray-200 p-6 sm:p-8 shadow-xl rounded-2xl m-4 sm:m-6 transition-all duration-300"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              {recipe.name}
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-between mt-3 text-gray-500 text-sm">
            <p className="flex items-center gap-1">⏱ {recipe.time}</p>
            <p className="flex items-center gap-1">🔥 {recipe.calories}</p>
            <p className="flex items-center gap-1">👥 {recipe.portion}</p>
          </div>

          <div className="flex flex-col sm:flex-row w-full items-center justify-center md:mt-4 md:bg-gray-100 rounded-lg md:px-4">
            <div className="mt-4 md:p-4 w-full sm:w-[75%]">
              <p className="text-gray-600 mb-2 md:mt-4 line-clamp-3">
                {recipe.description}
              </p>
              <h3 className="text-lg font-semibold text-gray-900">
                🍽️ Ingredients
              </h3>
              <ul className="list-disc ml-5 text-gray-700 text-sm mt-2">
                {recipe.ingredients.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 className="text-lg font-semibold text-gray-900 mt-4">
                👨‍🍳 Instructions
              </h3>
              <ol className="list-decimal ml-5 text-gray-700 text-sm mt-2">
                {recipe.recipe.map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="w-full sm:w-48 h-48 sm:h-80 rounded-lg overflow-hidden md:shadow-md pt-2">
              <video
                src={recipe.url}
                autoPlay
                muted
                loop
                controls
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipesPage;
