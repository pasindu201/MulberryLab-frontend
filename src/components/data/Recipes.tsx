// Define the type for a recipe
export interface Recipe {
  name: string;
  calories: string;
  time: string;
  portion: string;
  image: string;
  description: string;
  ingredients: string[];
  recipe: string[];
}

// Define and export the list of recipes
export const recipes: Recipe[] = [
  {
    name: "Mulberry Salad",
    calories: "60 calories",
    time: "5 mins",
    portion: "3 persons",
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
  },
  {
    name: "Mulberry Tea",
    calories: "150 calories",
    time: "18 mins",
    portion: "2 persons",
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
  },
  {
    name: "Mulberry Smoothie",
    calories: "120 calories",
    time: "5 mins",
    portion: "3 persons",
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
  },
  {
    name: "Mulberry Jam",
    calories: "110 calories",
    time: "30 mins",
    portion: "3 persons",
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
  },
  {
    name: "Mulberry Cheesecake",
    calories: "250 calories",
    time: "1 hour",
    portion: "6 persons",
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
  },
];
