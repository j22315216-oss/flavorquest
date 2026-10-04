/* =========================================================
   FLAVORQUEST
   Complete application JavaScript
   ========================================================= */

const recipes = [

    {
        id: "creamy-garlic-pasta",
        title: "Creamy Garlic Pasta",
        category: "Pasta",
        tags: ["quick", "vegetarian"],
        emoji: "🍝",
        time: 25,
        difficulty: "Easy",
        servings: 2,
        calories: 540,
        protein: 16,
        rating: 4.9,
        popularity: 98,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=900&q=80",
        description: "Silky creamy pasta with garlic, parmesan and herbs.",
        ingredients: [
            { name: "Spaghetti", qty: 200, unit: "g" },
            { name: "Garlic", qty: 3, unit: "cloves" },
            { name: "Heavy cream", qty: 150, unit: "ml" },
            { name: "Parmesan", qty: 50, unit: "g" },
            { name: "Butter", qty: 1, unit: "tbsp" },
            { name: "Parsley", qty: 1, unit: "tbsp" }
        ],
        steps: [
            "Cook the spaghetti until al dente.",
            "Melt butter and gently cook the garlic.",
            "Add cream and simmer for 2–3 minutes.",
            "Stir in parmesan until creamy.",
            "Toss the pasta through the sauce and finish with parsley."
        ]
    },

    {
        id: "classic-cheeseburger",
        title: "Classic Cheeseburger",
        category: "Burgers",
        tags: ["quick", "high-protein"],
        emoji: "🍔",
        time: 20,
        difficulty: "Easy",
        servings: 2,
        calories: 620,
        protein: 34,
        rating: 4.8,
        popularity: 97,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80",
        description: "Juicy homemade burgers with melted cheese and fresh toppings.",
        ingredients: [
            { name: "Ground beef", qty: 300, unit: "g" },
            { name: "Burger buns", qty: 2, unit: "" },
            { name: "Cheddar cheese", qty: 2, unit: "slices" },
            { name: "Tomato", qty: 1, unit: "" },
            { name: "Lettuce", qty: 2, unit: "leaves" },
            { name: "Burger sauce", qty: 2, unit: "tbsp" }
        ],
        steps: [
            "Shape the beef into two patties.",
            "Season both sides.",
            "Cook the patties until done.",
            "Add cheese during the final minute.",
            "Toast the buns and assemble with the toppings."
        ]
    },

    {
        id: "blueberry-pancakes",
        title: "Blueberry Pancakes",
        category: "Breakfast",
        tags: ["breakfast", "vegetarian"],
        emoji: "🥞",
        time: 20,
        difficulty: "Easy",
        servings: 3,
        calories: 390,
        protein: 10,
        rating: 4.9,
        popularity: 96,
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=900&q=80",
        description: "Fluffy pancakes packed with juicy blueberries.",
        ingredients: [
            { name: "Flour", qty: 180, unit: "g" },
            { name: "Milk", qty: 220, unit: "ml" },
            { name: "Egg", qty: 1, unit: "" },
            { name: "Blueberries", qty: 120, unit: "g" },
            { name: "Sugar", qty: 2, unit: "tbsp" },
            { name: "Baking powder", qty: 1, unit: "tsp" }
        ],
        steps: [
            "Mix the dry ingredients.",
            "Whisk milk and egg together.",
            "Combine wet and dry ingredients.",
            "Fold in the blueberries.",
            "Cook pancakes on a lightly greased pan until golden."
        ]
    },

    {
        id: "fresh-garden-salad",
        title: "Fresh Garden Salad",
        category: "Salads",
        tags: ["vegetarian", "quick"],
        emoji: "🥗",
        time: 10,
        difficulty: "Easy",
        servings: 2,
        calories: 240,
        protein: 7,
        rating: 4.7,
        popularity: 89,
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=80",
        description: "Crisp vegetables with a bright homemade dressing.",
        ingredients: [
            { name: "Mixed lettuce", qty: 150, unit: "g" },
            { name: "Cherry tomatoes", qty: 150, unit: "g" },
            { name: "Cucumber", qty: 1, unit: "" },
            { name: "Red onion", qty: 0.5, unit: "" },
            { name: "Olive oil", qty: 2, unit: "tbsp" },
            { name: "Lemon juice", qty: 1, unit: "tbsp" }
        ],
        steps: [
            "Wash and prepare all vegetables.",
            "Chop the vegetables into bite-sized pieces.",
            "Combine them in a large bowl.",
            "Whisk olive oil and lemon juice.",
            "Toss the dressing through the salad."
        ]
    },

    {
        id: "chicken-tacos",
        title: "Spicy Chicken Tacos",
        category: "Mexican",
        tags: ["quick", "high-protein"],
        emoji: "🌮",
        time: 25,
        difficulty: "Easy",
        servings: 3,
        calories: 460,
        protein: 31,
        rating: 4.9,
        popularity: 95,
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&w=900&q=80",
        description: "Seasoned chicken tacos with crunchy vegetables and lime.",
        ingredients: [
            { name: "Chicken breast", qty: 300, unit: "g" },
            { name: "Tortillas", qty: 6, unit: "" },
            { name: "Lettuce", qty: 80, unit: "g" },
            { name: "Tomato", qty: 1, unit: "" },
            { name: "Lime", qty: 1, unit: "" },
            { name: "Taco seasoning", qty: 2, unit: "tsp" }
        ],
        steps: [
            "Slice the chicken into small pieces.",
            "Coat with taco seasoning.",
            "Cook the chicken until golden and fully cooked.",
            "Warm the tortillas.",
            "Fill with chicken, lettuce, tomato and lime."
        ]
    },

    {
        id: "butter-chicken",
        title: "Creamy Butter Chicken",
        category: "Indian",
        tags: ["high-protein"],
        emoji: "🍛",
        time: 45,
        difficulty: "Medium",
        servings: 4,
        calories: 580,
        protein: 36,
        rating: 4.9,
        popularity: 94,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80",
        description: "Tender chicken in a rich tomato and spice sauce.",
        ingredients: [
            { name: "Chicken breast", qty: 500, unit: "g" },
            { name: "Tomato sauce", qty: 300, unit: "ml" },
            { name: "Heavy cream", qty: 150, unit: "ml" },
            { name: "Butter", qty: 2, unit: "tbsp" },
            { name: "Garam masala", qty: 2, unit: "tsp" },
            { name: "Garlic", qty: 3, unit: "cloves" }
        ],
        steps: [
            "Cut the chicken into bite-sized pieces.",
            "Brown the chicken in a hot pan.",
            "Cook garlic and spices briefly.",
            "Add tomato sauce and simmer.",
            "Add cream and chicken.",
            "Simmer until the chicken is fully cooked."
        ]
    },

    {
        id: "lemon-salmon",
        title: "Lemon Herb Salmon",
        category: "Seafood",
        tags: ["quick", "high-protein"],
        emoji: "🐟",
        time: 22,
        difficulty: "Easy",
        servings: 2,
        calories: 430,
        protein: 38,
        rating: 4.8,
        popularity: 91,
        image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=80",
        description: "Tender salmon with lemon, garlic and fresh herbs.",
        ingredients: [
            { name: "Salmon fillets", qty: 2, unit: "" },
            { name: "Lemon", qty: 1, unit: "" },
            { name: "Garlic", qty: 2, unit: "cloves" },
            { name: "Olive oil", qty: 1, unit: "tbsp" },
            { name: "Dill", qty: 1, unit: "tbsp" }
        ],
        steps: [
            "Heat the oven to 200°C.",
            "Place salmon on a lined baking tray.",
            "Add olive oil, garlic, lemon and dill.",
            "Bake until the salmon flakes easily.",
            "Serve with extra lemon."
        ]
    },

    {
        id: "strawberry-cheesecake",
        title: "Strawberry Cheesecake",
        category: "Dessert",
        tags: ["dessert", "vegetarian"],
        emoji: "🍰",
        time: 35,
        difficulty: "Medium",
        servings: 8,
        calories: 460,
        protein: 7,
        rating: 4.9,
        popularity: 99,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=900&q=80",
        description: "Creamy cheesecake topped with fresh strawberries.",
        ingredients: [
            { name: "Cream cheese", qty: 500, unit: "g" },
            { name: "Digestive biscuits", qty: 200, unit: "g" },
            { name: "Butter", qty: 80, unit: "g" },
            { name: "Sugar", qty: 100, unit: "g" },
            { name: "Strawberries", qty: 200, unit: "g" },
            { name: "Vanilla", qty: 1, unit: "tsp" }
        ],
        steps: [
            "Crush the biscuits and mix with melted butter.",
            "Press the mixture into a cake tin.",
            "Beat cream cheese, sugar and vanilla.",
            "Spread over the biscuit base.",
            "Chill until firm and top with strawberries."
        ]
    },

    {
        id: "margherita-pizza",
        title: "Classic Margherita Pizza",
        category: "Pizza",
        tags: ["vegetarian"],
        emoji: "🍕",
        time: 40,
        difficulty: "Medium",
        servings: 3,
        calories: 510,
        protein: 19,
        rating: 4.8,
        popularity: 96,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=80",
        description: "Simple pizza with tomato, mozzarella and basil.",
        ingredients: [
            { name: "Pizza dough", qty: 1, unit: "" },
            { name: "Tomato sauce", qty: 120, unit: "ml" },
            { name: "Mozzarella", qty: 150, unit: "g" },
            { name: "Basil", qty: 10, unit: "leaves" },
            { name: "Olive oil", qty: 1, unit: "tbsp" }
        ],
        steps: [
            "Heat oven as high as safely possible.",
            "Stretch the dough into a thin round.",
            "Spread tomato sauce over the dough.",
            "Add mozzarella.",
            "Bake until the crust is golden.",
            "Finish with basil and olive oil."
        ]
    },

    {
        id: "vegetable-stir-fry",
        title: "Rainbow Vegetable Stir-Fry",
        category: "Asian",
        tags: ["vegetarian", "quick"],
        emoji: "🥢",
        time: 18,
        difficulty: "Easy",
        servings: 2,
        calories: 320,
        protein: 11,
        rating: 4.7,
        popularity: 87,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
        description: "Colorful vegetables tossed in a quick savory sauce.",
        ingredients: [
            { name: "Broccoli", qty: 150, unit: "g" },
            { name: "Bell pepper", qty: 1, unit: "" },
            { name: "Carrot", qty: 1, unit: "" },
            { name: "Soy sauce", qty: 2, unit: "tbsp" },
            { name: "Sesame oil", qty: 1, unit: "tsp" },
            { name: "Garlic", qty: 2, unit: "cloves" }
        ],
        steps: [
            "Chop all vegetables into similar sizes.",
            "Heat a large pan.",
            "Stir-fry the vegetables until crisp-tender.",
            "Add garlic and cook briefly.",
            "Add soy sauce and sesame oil.",
            "Toss everything together."
        ]
    },

    {
        id: "cheese-omelette",
        title: "Fluffy Cheese Omelette",
        category: "Breakfast",
        tags: ["breakfast", "quick", "vegetarian", "high-protein"],
        emoji: "🍳",
        time: 10,
        difficulty: "Easy",
        servings: 1,
        calories: 330,
        protein: 22,
        rating: 4.7,
        popularity: 85,
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=80",
        description: "A fluffy omelette filled with melted cheese.",
        ingredients: [
            { name: "Eggs", qty: 3, unit: "" },
            { name: "Cheddar", qty: 40, unit: "g" },
            { name: "Butter", qty: 1, unit: "tsp" },
            { name: "Chives", qty: 1, unit: "tbsp" }
        ],
        steps: [
            "Whisk the eggs.",
            "Melt butter in a non-stick pan.",
            "Add eggs and gently move them around.",
            "Add cheese.",
            "Fold the omelette and serve with chives."
        ]
    },

    {
        id: "tomato-soup",
        title: "Creamy Tomato Soup",
        category: "Soup",
        tags: ["vegetarian", "quick"],
        emoji: "🍅",
        time: 25,
        difficulty: "Easy",
        servings: 3,
        calories: 280,
        protein: 8,
        rating: 4.6,
        popularity: 80,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80",
        description: "Comforting tomato soup with herbs and a creamy finish.",
        ingredients: [
            { name: "Tomatoes", qty: 600, unit: "g" },
            { name: "Onion", qty: 1, unit: "" },
            { name: "Garlic", qty: 2, unit: "cloves" },
            { name: "Vegetable stock", qty: 400, unit: "ml" },
            { name: "Cream", qty: 80, unit: "ml" },
            { name: "Basil", qty: 1, unit: "tbsp" }
        ],
        steps: [
            "Cook onion and garlic until soft.",
            "Add tomatoes and stock.",
            "Simmer for 15 minutes.",
            "Blend until smooth.",
            "Stir in cream and basil."
        ]
    },

    {
        id: "chicken-caesar",
        title: "Chicken Caesar Salad",
        category: "Salads",
        tags: ["quick", "high-protein"],
        emoji: "🥬",
        time: 20,
        difficulty: "Easy",
        servings: 2,
        calories: 440,
        protein: 35,
        rating: 4.8,
        popularity: 92,
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?auto=format&fit=crop&w=900&q=80",
        description: "Crisp lettuce, grilled chicken, parmesan and creamy dressing.",
        ingredients: [
            { name: "Chicken breast", qty: 250, unit: "g" },
            { name: "Romaine lettuce", qty: 1, unit: "head" },
            { name: "Parmesan", qty: 40, unit: "g" },
            { name: "Croutons", qty: 80, unit: "g" },
            { name: "Caesar dressing", qty: 80, unit: "ml" }
        ],
        steps: [
            "Season and cook the chicken.",
            "Slice the cooked chicken.",
            "Chop the lettuce.",
            "Add parmesan and croutons.",
            "Toss with Caesar dressing and chicken."
        ]
    },

    {
        id: "beef-noodles",
        title: "Teriyaki Beef Noodles",
        category: "Asian",
        tags: ["quick", "high-protein"],
        emoji: "🍜",
        time: 25,
        difficulty: "Easy",
        servings: 2,
        calories: 560,
        protein: 32,
        rating: 4.8,
        popularity: 93,
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=900&q=80",
        description: "Tender beef and noodles coated in a sweet-savory teriyaki sauce.",
        ingredients: [
            { name: "Beef strips", qty: 300, unit: "g" },
            { name: "Noodles", qty: 200, unit: "g" },
            { name: "Teriyaki sauce", qty: 80, unit: "ml" },
            { name: "Bell pepper", qty: 1, unit: "" },
            { name: "Spring onion", qty: 2, unit: "" }
        ],
        steps: [
            "Cook noodles according to the package.",
            "Sear beef in a hot pan.",
            "Add sliced pepper.",
            "Add teriyaki sauce.",
            "Toss in the noodles.",
            "Finish with spring onion."
        ]
    },

    {
        id: "banana-oat-bowl",
        title: "Banana Oat Breakfast Bowl",
        category: "Breakfast",
        tags: ["breakfast", "vegetarian", "quick"],
        emoji: "🍌",
        time: 8,
        difficulty: "Easy",
        servings: 1,
        calories: 350,
        protein: 12,
        rating: 4.6,
        popularity: 82,
        image: "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=900&q=80",
        description: "Warm oats topped with banana, honey and nuts.",
        ingredients: [
            { name: "Oats", qty: 60, unit: "g" },
            { name: "Milk", qty: 200, unit: "ml" },
            { name: "Banana", qty: 1, unit: "" },
            { name: "Honey", qty: 1, unit: "tbsp" },
            { name: "Almonds", qty: 20, unit: "g" }
        ],
        steps: [
            "Combine oats and milk.",
            "Cook until creamy.",
            "Slice the banana.",
            "Top the oats with banana and almonds.",
            "Drizzle with honey."
        ]
    },

    {
        id: "chocolate-brownies",
        title: "Fudgy Chocolate Brownies",
        category: "Dessert",
        tags: ["dessert", "vegetarian"],
        emoji: "🍫",
        time: 35,
        difficulty: "Medium",
        servings: 9,
        calories: 410,
        protein: 5,
        rating: 4.9,
        popularity: 97,
        image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?auto=format&fit=crop&w=900&q=80",
        description: "Rich chocolate brownies with a soft fudgy center.",
        ingredients: [
            { name: "Dark chocolate", qty: 180, unit: "g" },
            { name: "Butter", qty: 120, unit: "g" },
            { name: "Sugar", qty: 160, unit: "g" },
            { name: "Eggs", qty: 2, unit: "" },
            { name: "Flour", qty: 90, unit: "g" },
            { name: "Cocoa powder", qty: 30, unit: "g" }
        ],
        steps: [
            "Melt chocolate and butter together.",
            "Whisk eggs and sugar.",
            "Combine the chocolate mixture with the eggs.",
            "Fold in flour and cocoa.",
            "Bake until the edges are set but the center remains soft.",
            "Cool before cutting."
        ]
    },

    {
        id: "greek-chicken-bowl",
        title: "Greek Chicken Bowl",
        category: "Mediterranean",
        tags: ["high-protein", "quick"],
        emoji: "🥙",
        time: 25,
        difficulty: "Easy",
        servings: 2,
        calories: 520,
        protein: 39,
        rating: 4.8,
        popularity: 90,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
        description: "Grilled chicken with cucumber, tomato, rice and creamy yogurt.",
        ingredients: [
            { name: "Chicken breast", qty: 300, unit: "g" },
            { name: "Cooked rice", qty: 250, unit: "g" },
            { name: "Cucumber", qty: 1, unit: "" },
            { name: "Tomato", qty: 1, unit: "" },
            { name: "Greek yogurt", qty: 100, unit: "g" },
            { name: "Feta", qty: 50, unit: "g" }
        ],
        steps: [
            "Season and grill the chicken.",
            "Prepare the rice.",
            "Chop cucumber and tomato.",
            "Add rice to bowls.",
            "Top with chicken and vegetables.",
            "Finish with yogurt and feta."
        ]
    },

    {
        id: "pesto-chicken",
        title: "Pesto Chicken Pasta",
        category: "Pasta",
        tags: ["quick", "high-protein"],
        emoji: "🍝",
        time: 25,
        difficulty: "Easy",
        servings: 2,
        calories: 590,
        protein: 36,
        rating: 4.8,
        popularity: 94,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
        description: "Creamy pesto pasta with tender pieces of chicken.",
        ingredients: [
            { name: "Pasta", qty: 200, unit: "g" },
            { name: "Chicken breast", qty: 250, unit: "g" },
            { name: "Pesto", qty: 80, unit: "g" },
            { name: "Parmesan", qty: 40, unit: "g" },
            { name: "Cherry tomatoes", qty: 100, unit: "g" }
        ],
        steps: [
            "Cook the pasta.",
            "Cook the chicken until golden.",
            "Slice the chicken.",
            "Mix pasta with pesto.",
            "Add chicken, tomatoes and parmesan."
        ]
    },

    {
        id: "crispy-potatoes",
        title: "Crispy Garlic Potatoes",
        category: "Sides",
        tags: ["vegetarian", "quick"],
        emoji: "🥔",
        time: 28,
        difficulty: "Easy",
        servings: 3,
        calories: 290,
        protein: 6,
        rating: 4.7,
        popularity: 84,
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=900&q=80",
        description: "Golden potatoes with garlic, herbs and crispy edges.",
        ingredients: [
            { name: "Baby potatoes", qty: 500, unit: "g" },
            { name: "Olive oil", qty: 2, unit: "tbsp" },
            { name: "Garlic", qty: 3, unit: "cloves" },
            { name: "Rosemary", qty: 1, unit: "tbsp" },
            { name: "Parmesan", qty: 30, unit: "g" }
        ],
        steps: [
            "Cut the potatoes in half.",
            "Toss with oil, garlic and rosemary.",
            "Roast until golden and crisp.",
            "Sprinkle with parmesan.",
            "Serve immediately."
        ]
    },

    {
        id: "chocolate-mousse",
        title: "Easy Chocolate Mousse",
        category: "Dessert",
        tags: ["dessert", "vegetarian"],
        emoji: "🍮",
        time: 15,
        difficulty: "Easy",
        servings: 4,
        calories: 330,
        protein: 5,
        rating: 4.8,
        popularity: 88,
        image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=900&q=80",
        description: "Light and creamy chocolate mousse made with simple ingredients.",
        ingredients: [
            { name: "Dark chocolate", qty: 180, unit: "g" },
            { name: "Heavy cream", qty: 250, unit: "ml" },
            { name: "Sugar", qty: 1, unit: "tbsp" },
            { name: "Vanilla", qty: 0.5, unit: "tsp" }
        ],
        steps: [
            "Melt the chocolate gently.",
            "Whip the cream with sugar.",
            "Fold melted chocolate into the cream.",
            "Add vanilla.",
            "Chill before serving."
        ]
    },

    {
        id: "turkey-wrap",
        title: "Crispy Turkey Wrap",
        category: "Wraps",
        tags: ["quick", "high-protein"],
        emoji: "🌯",
        time: 12,
        difficulty: "Easy",
        servings: 2,
        calories: 390,
        protein: 28,
        rating: 4.6,
        popularity: 81,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",
        description: "A quick wrap packed with turkey, vegetables and cheese.",
        ingredients: [
            { name: "Tortillas", qty: 2, unit: "" },
            { name: "Turkey slices", qty: 150, unit: "g" },
            { name: "Cheese", qty: 60, unit: "g" },
            { name: "Lettuce", qty: 50, unit: "g" },
            { name: "Tomato", qty: 1, unit: "" },
            { name: "Yogurt sauce", qty: 2, unit: "tbsp" }
        ],
        steps: [
            "Warm the tortillas.",
            "Add turkey and cheese.",
            "Add lettuce and tomato.",
            "Drizzle with yogurt sauce.",
            "Roll tightly and serve."
        ]
    },

    {
        id: "creamy-mushroom-pasta",
        title: "Creamy Mushroom Pasta",
        category: "Pasta",
        tags: ["vegetarian", "quick"],
        emoji: "🍄",
        time: 25,
        difficulty: "Easy",
        servings: 2,
        calories: 520,
        protein: 15,
        rating: 4.7,
        popularity: 86,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=80",
        description: "Creamy pasta with golden mushrooms and parmesan.",
        ingredients: [
            { name: "Pasta", qty: 200, unit: "g" },
            { name: "Mushrooms", qty: 200, unit: "g" },
            { name: "Cream", qty: 150, unit: "ml" },
            { name: "Garlic", qty: 2, unit: "cloves" },
            { name: "Parmesan", qty: 40, unit: "g" }
        ],
        steps: [
            "Cook the pasta.",
            "Brown the mushrooms.",
            "Add garlic and cook briefly.",
            "Pour in cream.",
            "Add parmesan.",
            "Toss with the pasta."
        ]
    },

    {
        id: "chicken-rice",
        title: "One-Pan Chicken Rice",
        category: "Dinner",
        tags: ["high-protein"],
        emoji: "🍗",
        time: 40,
        difficulty: "Easy",
        servings: 4,
        calories: 550,
        protein: 38,
        rating: 4.8,
        popularity: 95,
        image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
        description: "Comforting chicken and seasoned rice made in one pan.",
        ingredients: [
            { name: "Chicken thighs", qty: 500, unit: "g" },
            { name: "Rice", qty: 250, unit: "g" },
            { name: "Chicken stock", qty: 500, unit: "ml" },
            { name: "Onion", qty: 1, unit: "" },
            { name: "Paprika", qty: 1, unit: "tsp" },
            { name: "Garlic", qty: 2, unit: "cloves" }
        ],
        steps: [
            "Brown the chicken.",
            "Cook onion and garlic.",
            "Add rice and paprika.",
            "Pour in stock.",
            "Place chicken on top.",
            "Cover and cook until rice is tender."
        ]
    },

    {
        id: "mango-yogurt",
        title: "Mango Yogurt Parfait",
        category: "Breakfast",
        tags: ["breakfast", "vegetarian", "quick"],
        emoji: "🥭",
        time: 7,
        difficulty: "Easy",
        servings: 2,
        calories: 240,
        protein: 12,
        rating: 4.7,
        popularity: 79,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=80",
        description: "Creamy yogurt layered with mango, granola and honey.",
        ingredients: [
            { name: "Greek yogurt", qty: 300, unit: "g" },
            { name: "Mango", qty: 1, unit: "" },
            { name: "Granola", qty: 80, unit: "g" },
            { name: "Honey", qty: 1, unit: "tbsp" }
        ],
        steps: [
            "Dice the mango.",
            "Add yogurt to a glass.",
            "Add a layer of mango.",
            "Add granola.",
            "Repeat the layers and drizzle with honey."
        ]
    },

    {
        id: "falafel-bowl",
        title: "Mediterranean Falafel Bowl",
        category: "Mediterranean",
        tags: ["vegetarian", "quick"],
        emoji: "🧆",
        time: 25,
        difficulty: "Easy",
        servings: 2,
        calories: 480,
        protein: 18,
        rating: 4.7,
        popularity: 83,
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
        description: "Crispy falafel with hummus, salad and warm pita.",
        ingredients: [
            { name: "Falafel", qty: 8, unit: "" },
            { name: "Hummus", qty: 100, unit: "g" },
            { name: "Cucumber", qty: 1, unit: "" },
            { name: "Tomato", qty: 1, unit: "" },
            { name: "Pita bread", qty: 2, unit: "" },
            { name: "Tahini", qty: 2, unit: "tbsp" }
        ],
        steps: [
            "Warm the falafel.",
            "Chop cucumber and tomato.",
            "Warm the pita.",
            "Add hummus to bowls.",
            "Add falafel and vegetables.",
            "Drizzle with tahini."
        ]
    },

    {
        id: "berry-smoothie",
        title: "Mixed Berry Smoothie",
        category: "Drinks",
        tags: ["breakfast", "quick", "vegetarian"],
        emoji: "🥤",
        time: 5,
        difficulty: "Easy",
        servings: 2,
        calories: 210,
        protein: 9,
        rating: 4.6,
        popularity: 78,
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=900&q=80",
        description: "Refreshing berries blended with yogurt and milk.",
        ingredients: [
            { name: "Mixed berries", qty: 250, unit: "g" },
            { name: "Greek yogurt", qty: 150, unit: "g" },
            { name: "Milk", qty: 250, unit: "ml" },
            { name: "Honey", qty: 1, unit: "tbsp" },
            { name: "Ice", qty: 1, unit: "cup" }
        ],
        steps: [
            "Add all ingredients to a blender.",
            "Blend until smooth.",
            "Taste and add honey if needed.",
            "Pour into glasses.",
            "Serve immediately."
        ]
    }

];


/* =========================================================
   STATE
   ========================================================= */

const state = {
    view: "home",
    filter: "all",
    sort: "popular",
    search: "",
    ingredientMode: false,
    currentRecipeId: null,
    currentServings: 2,

    favorites: JSON.parse(
        localStorage.getItem("flavorquestFavorites") || "[]"
    ),

    recent: JSON.parse(
        localStorage.getItem("flavorquestRecent") || "[]"
    ),

    shopping: JSON.parse(
        localStorage.getItem("flavorquestShopping") || "[]"
    )
};


/* =========================================================
   DOM
   ========================================================= */

const $ = (selector) => document.querySelector(selector);

const recipeGrid = $("#recipeGrid");
const emptyState = $("#emptyState");

const searchInput = $("#searchInput");
const searchBtn = $("#searchBtn");
const clearSearchBtn = $("#clearSearchBtn");
const suggestions = $("#suggestions");

const filterRow = $("#filterRow");
const sortSelect = $("#sortSelect");

const recipeModal = $("#recipeModal");
const shoppingModal = $("#shoppingModal");

const toastContainer = $("#toastContainer");


/* =========================================================
   HELPERS
   ========================================================= */

function normalize(text) {
    return String(text)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
}


function saveState() {
    localStorage.setItem(
        "flavorquestFavorites",
        JSON.stringify(state.favorites)
    );

    localStorage.setItem(
        "flavorquestRecent",
        JSON.stringify(state.recent)
    );

    localStorage.setItem(
        "flavorquestShopping",
        JSON.stringify(state.shopping)
    );
}


function formatNumber(number) {
    if (Number.isInteger(number)) {
        return String(number);
    }

    return Number(number.toFixed(1)).toString();
}


function showToast(message) {
    const toast = document.createElement("div");

    toast.className = "toast";
    toast.textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 2600);
}


/* =========================================================
   RECIPE SEARCH
   ========================================================= */

function recipeSearchMatch(recipe, query) {

    const terms = normalize(query)
        .split(/\s+/)
        .filter(Boolean);

    if (!terms.length) {
        return true;
    }

    const text = normalize([
        recipe.title,
        recipe.category,
        recipe.description,
        ...recipe.tags,
        ...recipe.ingredients.map(item => item.name)
    ].join(" "));

    return terms.every(term => text.includes(term));
}


function getFilteredRecipes() {

    let result = [...recipes];

    /* Search */

    if (state.search) {
        result = result.filter(recipe =>
            recipeSearchMatch(recipe, state.search)
        );
    }

    /* Filter */

    switch (state.filter) {

        case "quick":
            result = result.filter(recipe => recipe.tags.includes("quick"));
            break;

        case "vegetarian":
            result = result.filter(recipe =>
                recipe.tags.includes("vegetarian")
            );
            break;

        case "high-protein":
            result = result.filter(recipe =>
                recipe.tags.includes("high-protein")
            );
            break;

        case "dessert":
            result = result.filter(recipe =>
                recipe.tags.includes("dessert")
            );
            break;

        case "breakfast":
            result = result.filter(recipe =>
                recipe.tags.includes("breakfast")
            );
            break;

        case "under-30":
            result = result.filter(recipe => recipe.time <= 30);
            break;
    }

    /* View */

    if (state.view === "favorites") {

        result = result.filter(recipe =>
            state.favorites.includes(recipe.id)
        );

    }

    if (state.view === "recent") {

        result.sort((a, b) => {

            const aIndex = state.recent.indexOf(a.id);
            const bIndex = state.recent.indexOf(b.id);

            return aIndex - bIndex;
        });
    }

    /* Sort */

    if (state.view !== "recent") {

        switch (state.sort) {

            case "popular":
                result.sort((a, b) => b.popularity - a.popularity);
                break;

            case "rating":
                result.sort((a, b) => b.rating - a.rating);
                break;

            case "quickest":
                result.sort((a, b) => a.time - b.time);
                break;

            case "name":
                result.sort((a, b) =>
                    a.title.localeCompare(b.title)
                );
                break;
        }
    }

    return result;
}


/* =========================================================
   RENDER RECIPES
   ========================================================= */

function renderRecipes() {

    const result = getFilteredRecipes();

    recipeGrid.innerHTML = "";

    if (!result.length) {

        emptyState.classList.remove("hidden");

        if (state.view === "favorites") {
            $("#emptyTitle").textContent = "No favorites yet";
            $("#emptyText").textContent =
                "Tap the heart on any recipe to save it here.";
        }
        else if (state.view === "recent") {
            $("#emptyTitle").textContent = "Nothing here yet";
            $("#emptyText").textContent =
                "Open a recipe and it will appear in your recent list.";
        }
        else {
            $("#emptyTitle").textContent = "No recipes found";
            $("#emptyText").textContent =
                "Try a different search or filter.";
        }

        return;
    }

    emptyState.classList.add("hidden");

    result.forEach(recipe => {
        recipeGrid.appendChild(createRecipeCard(recipe));
    });
}


function createRecipeCard(recipe) {

    const card = document.createElement("article");

    card.className = "recipe-card";

    const isFavorite =
        state.favorites.includes(recipe.id);

    card.innerHTML = `
        <div class="card-image">

            <img
                src="${recipe.image}"
                alt="${recipe.title}"
                loading="lazy"
            >

            <div class="card-fallback">
                ${recipe.emoji}
            </div>

            <span class="card-category">
                ${recipe.category}
            </span>

            <button
                class="card-favorite ${isFavorite ? "active" : ""}"
                data-favorite="${recipe.id}"
                type="button"
                aria-label="Favorite ${recipe.title}"
            >
                ${isFavorite ? "♥" : "♡"}
            </button>

        </div>

        <div class="card-body">

            <div class="card-rating">
                ⭐ ${recipe.rating.toFixed(1)}
            </div>

            <h3 class="card-title">
                ${recipe.title}
            </h3>

            <p class="card-description">
                ${recipe.description}
            </p>

            <div class="card-meta">

                <span>
                    ⏱ ${recipe.time} min
                </span>

                <span>
                    💪 ${recipe.protein}g protein
                </span>

            </div>

            <button
                class="card-open"
                data-open-recipe="${recipe.id}"
                type="button"
            >
                View recipe →
            </button>

        </div>
    `;

    const image = card.querySelector("img");
    const fallback = card.querySelector(".card-fallback");

    fallback.style.display = "none";

    image.addEventListener("error", () => {
        image.style.display = "none";
        fallback.style.display = "grid";
    });

    return card;
}


/* =========================================================
   TITLES / VIEW
   ========================================================= */

function updateResultsHeader() {

    const title = $("#resultsTitle");
    const eyebrow = $("#resultsEyebrow");
    const description = $("#resultsDescription");

    if (state.view === "favorites") {

        eyebrow.textContent = "SAVED";
        title.textContent = "Your favorites";
        description.textContent =
            "Recipes you've saved for later.";

        return;
    }

    if (state.view === "recent") {

        eyebrow.textContent = "HISTORY";
        title.textContent = "Recently viewed";
        description.textContent =
            "Recipes you've recently opened.";

        return;
    }

    if (state.search) {

        eyebrow.textContent = "SEARCH";
        title.textContent = `Results for "${state.search}"`;
        description.textContent =
            "Recipes matching your search.";

        return;
    }

    if (state.filter !== "all") {

        const names = {
            quick: "Quick recipes",
            vegetarian: "Vegetarian recipes",
            "high-protein": "High-protein recipes",
            dessert: "Desserts",
            breakfast: "Breakfast",
            "under-30": "Under 30 minutes"
        };

        eyebrow.textContent = "CATEGORY";
        title.textContent = names[state.filter];
        description.textContent =
            "Recipes selected for you.";

        return;
    }

    eyebrow.textContent = "FEATURED";
    title.textContent = "Popular right now";
    description.textContent =
        "Hand-picked recipes worth trying.";
}


function setView(view) {

    state.view = view;

    state.search = "";
    searchInput.value = "";

    clearSearchBtn.classList.add("hidden");

    state.filter = "all";

    document.querySelectorAll(".filter-btn")
        .forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.filter === "all"
            );
        });

    document.querySelectorAll(".nav-btn")
        .forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.view === view
            );
        });

    updateResultsHeader();
    renderRecipes();

    $("#mobileNav").classList.remove("open");

    window.scrollTo({
        top: document.querySelector(".recipes-section").offsetTop - 90,
        behavior: "smooth"
    });
}


/* =========================================================
   FILTERS
   ========================================================= */

function setFilter(filter) {

    state.view = "home";
    state.filter = filter;

    document.querySelectorAll(".filter-btn")
        .forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.filter === filter
            );
        });

    document.querySelectorAll(".nav-btn")
        .forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.view === "home"
            );
        });

    updateResultsHeader();
    renderRecipes();
}


/* =========================================================
   SEARCH
   ========================================================= */

function performSearch() {

    const query = searchInput.value.trim();

    state.search = query;
    state.view = "home";

    if (query) {
        clearSearchBtn.classList.remove("hidden");
    }
    else {
        clearSearchBtn.classList.add("hidden");
    }

    suggestions.innerHTML = "";
    suggestions.classList.add("hidden");

    document.querySelectorAll(".nav-btn")
        .forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.view === "home"
            );
        });

    updateResultsHeader();
    renderRecipes();

    if (query) {
        window.scrollTo({
            top: document.querySelector(".recipes-section").offsetTop - 80,
            behavior: "smooth"
        });
    }
}


function showSuggestions() {

    const query = normalize(searchInput.value);

    if (!query) {
        suggestions.innerHTML = "";
        suggestions.classList.add("hidden");
        return;
    }

    const items = new Set();

    recipes.forEach(recipe => {

        if (normalize(recipe.title).includes(query)) {
            items.add(recipe.title);
        }

        if (normalize(recipe.category).includes(query)) {
            items.add(recipe.category);
        }

        recipe.ingredients.forEach(ingredient => {

            if (normalize(ingredient.name).includes(query)) {
                items.add(ingredient.name);
            }

        });

    });

    const matches = [...items].slice(0, 6);

    if (!matches.length) {
        suggestions.classList.add("hidden");
        return;
    }

    suggestions.innerHTML = matches.map(item => `
        <button
            class="suggestion-item"
            type="button"
            data-suggestion="${item}"
        >
            🔎 ${item}
        </button>
    `).join("");

    suggestions.classList.remove("hidden");
}


/* =========================================================
   FAVORITES
   ========================================================= */

function toggleFavorite(id) {

    const index = state.favorites.indexOf(id);

    if (index === -1) {

        state.favorites.push(id);

        const recipe = recipes.find(item => item.id === id);

        showToast(`♥ ${recipe.title} added to favorites`);

    }
    else {

        state.favorites.splice(index, 1);

        const recipe = recipes.find(item => item.id === id);

        showToast(`${recipe.title} removed from favorites`);
    }

    saveState();
    updateStats();

    renderRecipes();

    if (state.currentRecipeId === id) {
        updateModalFavorite();
    }
}


function updateModalFavorite() {

    const button = $("#modalFavoriteBtn");

    if (!state.currentRecipeId) {
        return;
    }

    const active =
        state.favorites.includes(state.currentRecipeId);

    button.classList.toggle("active", active);
    button.textContent = active ? "♥" : "♡";
}


/* =========================================================
   OPEN RECIPE
   ========================================================= */

function openRecipe(id) {

    const recipe = recipes.find(item => item.id === id);

    if (!recipe) {
        return;
    }

    state.currentRecipeId = id;
    state.currentServings = recipe.servings;

    /* Recent */

    state.recent = state.recent.filter(item => item !== id);
    state.recent.unshift(id);

    state.recent = state.recent.slice(0, 8);

    saveState();

    $("#modalImage").src = recipe.image;
    $("#modalImage").alt = recipe.title;

    $("#modalImageFallback").style.display = "none";
    $("#modalImage").style.display = "block";

    $("#modalImage").onerror = () => {
        $("#modalImage").style.display = "none";
        $("#modalImageFallback").style.display = "grid";
    };

    $("#modalCategory").textContent = recipe.category;
    $("#modalTitle").textContent = recipe.title;
    $("#modalDescription").textContent = recipe.description;

    $("#modalRating").textContent =
        `⭐ ${recipe.rating.toFixed(1)} rating`;

    $("#modalTime").textContent =
        `${recipe.time} min`;

    $("#modalDifficulty").textContent =
        recipe.difficulty;

    $("#modalCalories").textContent =
        recipe.calories;

    $("#modalProtein").textContent =
        `${recipe.protein}g`;

    $("#servingNumber").textContent =
        recipe.servings;

    updateIngredients();
    updateSteps();
    updateModalFavorite();

    recipeModal.classList.remove("hidden");

    document.body.style.overflow = "hidden";

    updateStats();
}


function closeRecipeModal() {

    recipeModal.classList.add("hidden");

    if (shoppingModal.classList.contains("hidden")) {
        document.body.style.overflow = "";
    }
}


/* =========================================================
   SERVINGS
   ========================================================= */

function updateIngredients() {

    const recipe =
        recipes.find(item => item.id === state.currentRecipeId);

    if (!recipe) {
        return;
    }

    const list = $("#ingredientList");

    const multiplier =
        state.currentServings / recipe.servings;

    list.innerHTML = recipe.ingredients.map(item => {

        const amount =
            item.qty * multiplier;

        return `
            <li>
                <span>${item.name}</span>
                <span>
                    ${formatNumber(amount)}
                    ${item.unit}
                </span>
            </li>
        `;

    }).join("");

    $("#servingNumber").textContent =
        state.currentServings;
}


function updateSteps() {

    const recipe =
        recipes.find(item => item.id === state.currentRecipeId);

    if (!recipe) {
        return;
    }

    $("#stepList").innerHTML =
        recipe.steps.map(step => `
            <li>${step}</li>
        `).join("");
}


function changeServings(amount) {

    const recipe =
        recipes.find(item => item.id === state.currentRecipeId);

    if (!recipe) {
        return;
    }

    const newValue =
        state.currentServings + amount;

    if (newValue < 1 || newValue > 20) {
        return;
    }

    state.currentServings = newValue;

    updateIngredients();
}


/* =========================================================
   SHOPPING LIST
   ========================================================= */

function addToShoppingList(id) {

    const recipe = recipes.find(item => item.id === id);

    if (!recipe) {
        return;
    }

    const multiplier =
        state.currentRecipeId === id
            ? state.currentServings / recipe.servings
            : 1;

    recipe.ingredients.forEach(ingredient => {

        const amount =
            ingredient.qty * multiplier;

        const text =
            `${formatNumber(amount)} ${ingredient.unit} ${ingredient.name}`
                .replace(/\s+/g, " ")
                .trim();

        const existing =
            state.shopping.find(item => item.text === text);

        if (!existing) {

            state.shopping.push({
                id: `${Date.now()}-${Math.random()}`,
                text,
                checked: false
            });

        }

    });

    saveState();
    renderShoppingList();
    updateStats();

    showToast("🛒 Ingredients added to your shopping list");
}


function renderShoppingList() {

    const list = $("#shoppingList");
    const empty = $("#shoppingEmpty");

    if (!state.shopping.length) {

        list.innerHTML = "";

        empty.classList.remove("hidden");

        $("#shoppingSubtitle").textContent =
            "Your list is empty.";

        return;
    }

    empty.classList.add("hidden");

    $("#shoppingSubtitle").textContent =
        `${state.shopping.length} item${state.shopping.length === 1 ? "" : "s"} in your list.`;

    list.innerHTML = state.shopping.map(item => `

        <div class="shopping-item ${item.checked ? "checked" : ""}">

            <input
                type="checkbox"
                data-shopping-check="${item.id}"
                ${item.checked ? "checked" : ""}
            >

            <label>
                ${item.text}
            </label>

            <button
                class="remove-shopping"
                type="button"
                data-shopping-remove="${item.id}"
            >
                ×
            </button>

        </div>

    `).join("");
}


function openShoppingModal() {

    renderShoppingList();

    shoppingModal.classList.remove("hidden");

    document.body.style.overflow = "hidden";
}


function closeShoppingModal() {

    shoppingModal.classList.add("hidden");

    if (recipeModal.classList.contains("hidden")) {
        document.body.style.overflow = "";
    }
}


function clearShoppingList() {

    if (!state.shopping.length) {
        showToast("Your shopping list is already empty.");
        return;
    }

    state.shopping = [];

    saveState();
    renderShoppingList();
    updateStats();

    showToast("Shopping list cleared");
}


/* =========================================================
   RANDOM
   ========================================================= */

function randomRecipe() {

    const available = getFilteredRecipes();

    const list = available.length
        ? available
        : recipes;

    const recipe =
        list[Math.floor(Math.random() * list.length)];

    openRecipe(recipe.id);
}


/* =========================================================
   COPY
   ========================================================= */

async function copyRecipe() {

    const recipe =
        recipes.find(item => item.id === state.currentRecipeId);

    if (!recipe) {
        return;
    }

    const multiplier =
        state.currentServings / recipe.servings;

    const ingredients = recipe.ingredients
        .map(item =>
            `• ${formatNumber(item.qty * multiplier)} ${item.unit} ${item.name}`
        )
        .join("\n");

    const steps = recipe.steps
        .map((step, index) =>
            `${index + 1}. ${step}`
        )
        .join("\n");

    const text = `
${recipe.title}

${recipe.description}

Time: ${recipe.time} minutes
Difficulty: ${recipe.difficulty}
Servings: ${state.currentServings}

Ingredients:
${ingredients}

Instructions:
${steps}

Found on FlavorQuest.
`.trim();

    try {

        await navigator.clipboard.writeText(text);

        showToast("Recipe copied to clipboard");

    }
    catch {

        showToast("Could not copy automatically");
    }
}


/* =========================================================
   SHARE
   ========================================================= */

async function shareRecipe() {

    const recipe =
        recipes.find(item => item.id === state.currentRecipeId);

    if (!recipe) {
        return;
    }

    const shareData = {
        title: recipe.title,
        text: `${recipe.title} — ${recipe.description}`,
        url: window.location.href
    };

    if (navigator.share) {

        try {
            await navigator.share(shareData);
        }
        catch {
            /* User cancelled share */
        }

    }
    else {

        try {

            await navigator.clipboard.writeText(
                `${recipe.title}\n${recipe.description}`
            );

            showToast("Recipe details copied");

        }
        catch {

            showToast("Sharing isn't available in this browser");

        }

    }
}


/* =========================================================
   THEME
   ========================================================= */

function loadTheme() {

    const saved =
        localStorage.getItem("flavorquestTheme");

    if (saved === "dark") {
        document.body.classList.add("dark");
    }

    updateThemeIcon();
}


function toggleTheme() {

    document.body.classList.toggle("dark");

    const dark =
        document.body.classList.contains("dark");

    localStorage.setItem(
        "flavorquestTheme",
        dark ? "dark" : "light"
    );

    updateThemeIcon();

    showToast(
        dark
            ? "🌙 Dark mode enabled"
            : "☀️ Light mode enabled"
    );
}


function updateThemeIcon() {

    const dark =
        document.body.classList.contains("dark");

    $("#themeBtn").textContent =
        dark ? "☀" : "☾";
}


/* =========================================================
   STATS
   ========================================================= */

function updateStats() {

    $("#recipeStat").textContent =
        recipes.length;

    $("#favoriteStat").textContent =
        state.favorites.length;

    $("#favoriteCount").textContent =
        state.favorites.length;

    $("#shoppingCount").textContent =
        state.shopping.length;

    $("#quickStat").textContent =
        recipes.filter(recipe =>
            recipe.tags.includes("quick")
        ).length;
}


/* =========================================================
   RESET
   ========================================================= */

function resetSearch() {

    state.search = "";
    state.filter = "all";
    state.view = "home";

    searchInput.value = "";

    clearSearchBtn.classList.add("hidden");

    document.querySelectorAll(".filter-btn")
        .forEach(button => {
            button.classList.toggle(
                "active",
                button.dataset.filter === "all"
            );
        });

    updateResultsHeader();
    renderRecipes();
}


/* =========================================================
   EVENT LISTENERS
   ========================================================= */

/* Navigation */

document.querySelectorAll("[data-view]")
    .forEach(button => {

        button.addEventListener("click", () => {
            setView(button.dataset.view);
        });

    });


/* Home logo */

$("#homeBtn").addEventListener("click", () => {
    resetSearch();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* Search */

searchBtn.addEventListener(
    "click",
    performSearch
);


searchInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            performSearch();
        }

    }
);


searchInput.addEventListener(
    "input",
    () => {

        const hasText =
            searchInput.value.trim().length > 0;

        clearSearchBtn.classList.toggle(
            "hidden",
            !hasText
        );

        showSuggestions();

    }
);


clearSearchBtn.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        state.search = "";

        clearSearchBtn.classList.add("hidden");

        suggestions.classList.add("hidden");

        updateResultsHeader();
        renderRecipes();

        searchInput.focus();
    }
);


/* Search shortcut buttons */

document.querySelectorAll(".search-suggestion-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            searchInput.value =
                button.dataset.search;

            performSearch();

        });

    });


/* Suggestions */

suggestions.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest("[data-suggestion]");

        if (!button) {
            return;
        }

        searchInput.value =
            button.dataset.suggestion;

        performSearch();
    }
);


/* Filters */

filterRow.addEventListener(
    "click",
    event => {

        const button =
            event.target.closest("[data-filter]");

        if (!button) {
            return;
        }

        setFilter(button.dataset.filter);
    }
);


/* Smart cards */

document.querySelectorAll(".smart-card")
    .forEach(button => {

        button.addEventListener("click", () => {

            setFilter(button.dataset.filter);

            window.scrollTo({
                top: document.querySelector(".recipes-section").offsetTop - 80,
                behavior: "smooth"
            });

        });

    });


/* Sort */

sortSelect.addEventListener(
    "change",
    () => {

        state.sort = sortSelect.value;

        renderRecipes();

    }
);


/* Recipe grid */

recipeGrid.addEventListener(
    "click",
    event => {

        const favorite =
            event.target.closest("[data-favorite]");

        if (favorite) {

            event.stopPropagation();

            toggleFavorite(
                favorite.dataset.favorite
            );

            return;
        }

        const open =
            event.target.closest("[data-open-recipe]");

        if (open) {

            openRecipe(
                open.dataset.openRecipe
            );
        }

    }
);


/* Random */

$("#randomBtn").addEventListener(
    "click",
    randomRecipe
);


$("#smartRandomBtn").addEventListener(
    "click",
    randomRecipe
);


/* Recipe modal */

$("#closeRecipeModal").addEventListener(
    "click",
    closeRecipeModal
);


$("#modalFavoriteBtn").addEventListener(
    "click",
    () => {

        if (state.currentRecipeId) {
            toggleFavorite(state.currentRecipeId);
        }

    }
);


$("#minusServing").addEventListener(
    "click",
    () => changeServings(-1)
);


$("#plusServing").addEventListener(
    "click",
    () => changeServings(1)
);


$("#addShoppingBtn").addEventListener(
    "click",
    () => {

        if (state.currentRecipeId) {
            addToShoppingList(
                state.currentRecipeId
            );
        }

    }
);


$("#modalShoppingBtn").addEventListener(
    "click",
    () => {

        if (state.currentRecipeId) {
            addToShoppingList(
                state.currentRecipeId
            );
        }

    }
);


$("#copyBtn").addEventListener(
    "click",
    copyRecipe
);


$("#shareBtn").addEventListener(
    "click",
    shareRecipe
);


/* Shopping */

$("#shoppingBtn").addEventListener(
    "click",
    openShoppingModal
);


$("#closeShoppingModal").addEventListener(
    "click",
    closeShoppingModal
);


$("#closeShoppingBottom").addEventListener(
    "click",
    closeShoppingModal
);


$("#clearShoppingBtn").addEventListener(
    "click",
    clearShoppingList
);


$("#shoppingList").addEventListener(
    "change",
    event => {

        const checkbox =
            event.target.closest("[data-shopping-check]");

        if (!checkbox) {
            return;
        }

        const item =
            state.shopping.find(
                shoppingItem =>
                    shoppingItem.id ===
                    checkbox.dataset.shoppingCheck
            );

        if (!item) {
            return;
        }

        item.checked =
            checkbox.checked;

        saveState();

        renderShoppingList();
    }
);


$("#shoppingList").addEventListener(
    "click",
    event => {

        const button =
            event.target.closest("[data-shopping-remove]");

        if (!button) {
            return;
        }

        state.shopping =
            state.shopping.filter(
                item =>
                    item.id !==
                    button.dataset.shoppingRemove
            );

        saveState();

        renderShoppingList();
        updateStats();
    }
);


/* Theme */

$("#themeBtn").addEventListener(
    "click",
    toggleTheme
);


/* Mobile menu */

$("#mobileMenuBtn").addEventListener(
    "click",
    () => {

        $("#mobileNav")
            .classList.toggle("open");

    }
);


/* Reset */

$("#resetBtn").addEventListener(
    "click",
    resetSearch
);


/* Close modals when clicking background */

recipeModal.addEventListener(
    "click",
    event => {

        if (event.target === recipeModal) {
            closeRecipeModal();
        }

    }
);


shoppingModal.addEventListener(
    "click",
    event => {

        if (event.target === shoppingModal) {
            closeShoppingModal();
        }

    }
);


/* Keyboard shortcuts */

document.addEventListener(
    "keydown",
    event => {

        if (event.key === "Escape") {

            closeRecipeModal();
            closeShoppingModal();

            suggestions.classList.add("hidden");
        }

        if (
            event.key === "/" &&
            document.activeElement.tagName !== "INPUT" &&
            document.activeElement.tagName !== "TEXTAREA"
        ) {

            event.preventDefault();

            searchInput.focus();
        }

    }
);


/* Scroll top */

window.addEventListener(
    "scroll",
    () => {

        $("#scrollTopBtn")
            .classList.toggle(
                "hidden",
                window.scrollY < 500
            );

    }
);


$("#scrollTopBtn").addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* Close suggestions when clicking elsewhere */

document.addEventListener(
    "click",
    event => {

        if (
            !event.target.closest(".search-wrapper")
        ) {

            suggestions.classList.add("hidden");

        }

    }
);


/* =========================================================
   START APPLICATION
   ========================================================= */

loadTheme();
updateStats();
updateResultsHeader();
renderRecipes();
renderShoppingList();