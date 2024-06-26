const recipes = [
    
    {
        id: 1,
        title: "Ugali-Sukuma",
        image: "ugali.jpeg",
        ingredients: [
            "2 cups maize flour (cornmeal)",
            "Water",
            "Salt to taste",
            "Cooking oil",
            "1 bunch sukuma wiki (collard greens), washed and chopped",
            "1 onion, finely chopped",
            "2 tomatoes, chopped",
            "2 cloves garlic, minced",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Boil water in a pot.",
            "Gradually add maize flour while stirring continuously to avoid lumps.",
            "Stir until the mixture thickens and forms a stiff dough.",
            "Cover and let it cook on low heat for about 10-15 minutes, stirring occasionally."
            
        ]
         
    },
    
    {
        id: 2,
        title: "Nyama Choma (Beef or Goat Meat)",
        image: "nyama-choma.jpeg",
        ingredients: [
            "1 kg beef or goat meat, cut into chunks",
            "Salt and pepper to taste",
            "2 tablespoons vegetable oil",
            "2 tablespoons soy sauce",
            "Juice of 1 lemon",
            "2 cloves garlic, minced",
            "1 teaspoon ground ginger",
            "1 teaspoon paprika"
        ],
        instructions: [
            "Marinade: In a bowl, mix vegetable oil, soy sauce, lemon juice, garlic, ginger, and paprika.",
            "Add the meat chunks to the marinade, coat well, cover, and refrigerate for at least 2 hours or overnight.",
            "Grilling: Preheat grill or barbecue to medium-high heat.",
            "Thread marinated meat onto skewers or grill directly on the barbecue.",
            "Grill for about 5-7 minutes on each side or until desired doneness, basting with leftover marinade.",
            "Serve hot with kachumbari (Kenyan tomato and onion salad) and ugali."
        ]
    },
    {
        id: 3,
        title: "Pilau",
        image: "pilau.jpeg",
        ingredients: [
          "2 cups basmati rice",
          "500g boneless chicken or beef, cut into small pieces",
          "1 large onion, finely chopped",
          "2 tomatoes, chopped",
          "3 cloves garlic, minced",
          "2 tablespoons pilau masala (a blend of spices including cumin, cardamom, cloves, cinnamon, and black pepper)",
          "Salt to taste",
          "Cooking oil",
          "4 cups chicken or beef broth (or water)"
        ],
        instructions: [
          "Preparation: Wash the rice thoroughly and soak in water for 30 minutes. Drain before cooking.",
          "Heat oil in a large pot over medium heat.",
          "Add onions and cook until translucent.",
          "Add garlic and cook for another minute.",
          "Add tomatoes and cook until softened.",
          "Add pilau masala and salt, stir well for about 2 minutes.",
          "Add chicken or beef pieces, cook until browned.",
          "Add drained rice and stir until well coated with the mixture.",
          "Pour in chicken or beef broth (or water), bring to a boil, then reduce heat to low.",
          "Cover and simmer for about 20-25 minutes or until the rice is cooked and liquid is absorbed.",
          "Fluff with a fork and serve hot."
        ]
      },
      
      {   
        id: 4,   
        title: "Chapati",   
        image: "chapati fam.jpeg",   
        ingredients: [   
          "2 cups all-purpose flour",   
          "1/2 teaspoon salt",   
          "1 cup warm water",   
          "2 tablespoons vegetable oil",   
          "Extra flour for dusting",   
          "Extra oil for cooking"   
        ],   
        instructions: [   
          "Dough: In a bowl, mix flour and salt. Gradually add warm water and oil, kneading until a smooth dough forms. Cover and let it rest for at least 30 minutes.",   
          "Cooking: Divide the dough into equal-sized balls. Roll out each ball on a floured surface into a thin circle. Brush the surface with oil and sprinkle with flour. Roll up the circle into a tight spiral, then flatten gently with your hands. Roll out again into a thin circle.",   
          "Frying: Heat a skillet or frying pan over medium-high heat. Cook each chapati for about 1-2 minutes on each side, flipping once, until golden brown spots appear. Brush with a little oil on both sides during cooking if desired. Serve warm with stew, sukuma wiki, or any dish of your choice."   
        ]   
      },   
        
          {   
            id: 5,   
            title: "Mandazi",   
            image: "mandazi.jpeg",   
            ingredients: [   
              "2 cups all-purpose flour",   
              "1/4 cup sugar",   
              "1 teaspoon baking powder",   
              "1/4 teaspoon salt",   
              "1/4 teaspoon ground cinnamon (optional)",   
              "1/4 cup coconut milk (or regular milk)",   
              "1/4 cup water",   
              "1 egg",   
              "Oil for frying"   
            ],   
            instructions: [   
              "Mixing: In a bowl, combine flour, sugar, baking powder, salt, and cinnamon (if using). In another bowl, whisk together coconut milk, water, and egg.",   
              "Dough: Gradually add the wet ingredients to the dry ingredients, mixing until a soft dough forms. Knead the dough on a floured surface for about 5 minutes until smooth. Cover and let it rest for 30 minutes.",   
              "Frying: Heat oil in a deep frying pan or pot over medium heat. Roll out the dough to about 1/4 inch thickness and cut into desired shapes (typically triangles or squares). Fry in batches until golden brown on both sides, turning once. Drain on paper towels. Serve warm with tea or coffee."   
            ]   
          },  
];

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const popularRecipesList = document.getElementById("popular-recipes");
const recipePage = document.getElementById("recipe-page");
const recipeDetails = document.getElementById("recipe-details");
const saveRecipeButton = document.getElementById("save-recipe-button");
const recipeBook = document.getElementById("recipe");
