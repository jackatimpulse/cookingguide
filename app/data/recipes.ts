export type Category = "Pizza" | "Baking" | "Wood-Fired" | "Flatbread" | "Seafood";

export interface Ingredient {
  amount: string;
  unit: string;
  item: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Recipe {
  slug: string;
  title: string;
  subtitle: string;
  category: Category;
  difficulty: "Easy" | "Intermediate" | "Advanced";
  prepTime: number;
  cookTime: number;
  serves: number;
  heroImage: string;
  description: string;
  tip: string;
  ingredients: Ingredient[];
  steps: Step[];
  tags: string[];
}

export const recipes: Recipe[] = [
  {
    slug: "margherita-pizza",
    title: "Classic Margherita",
    subtitle: "The perfect balance of San Marzano tomato, fresh mozzarella, and basil",
    category: "Pizza",
    difficulty: "Intermediate",
    prepTime: 30,
    cookTime: 3,
    serves: 2,
    heroImage: "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=1200&q=80",
    description:
      "The Margherita is the foundation of all great pizza. At extreme temperatures, the crust blisters in seconds, the cheese melts in ribbons, and the tomato caramelises into something extraordinary. This is the recipe that separates good from exceptional.",
    tip: "Preheat your oven to 450–500°C for at least 45 minutes. A properly hot oven is the single most important variable.",
    ingredients: [
      { amount: "250", unit: "g", item: "00 flour" },
      { amount: "160", unit: "ml", item: "cold water" },
      { amount: "7", unit: "g", item: "sea salt" },
      { amount: "0.5", unit: "g", item: "dried yeast" },
      { amount: "80", unit: "g", item: "San Marzano tomatoes, crushed" },
      { amount: "125", unit: "g", item: "fresh buffalo mozzarella" },
      { amount: "8", unit: "", item: "fresh basil leaves" },
      { amount: "2", unit: "tbsp", item: "extra virgin olive oil" },
    ],
    steps: [
      {
        title: "Build the dough",
        description:
          "Dissolve the yeast in cold water. Combine flour and salt, then slowly work in the water until a rough dough forms. Knead for 8 minutes until smooth and elastic. Ball, oil lightly, cover, and cold-ferment in the fridge for 24–72 hours.",
      },
      {
        title: "Prepare your sauce",
        description:
          "Crush the tomatoes by hand — no cooking required. Season with a pinch of salt and a drizzle of olive oil. Keep it simple. The heat does the work.",
      },
      {
        title: "Shape",
        description:
          "Remove dough from fridge 2 hours before cooking. On a lightly floured surface, press from centre outward using your fingertips, leaving a 1.5 cm border. Stretch to 28 cm.",
      },
      {
        title: "Top and cook",
        description:
          "Spoon tomato sauce in a thin, even layer. Tear mozzarella and scatter evenly. Slide onto a floured peel and launch onto the hot stone. Cook for 60–90 seconds, rotating halfway. Remove when the crust is leopard-spotted and the cheese is just bubbling.",
      },
      {
        title: "Finish",
        description:
          "Tear fresh basil over the top. Finish with a generous pour of cold-pressed olive oil. Serve immediately.",
      },
    ],
    tags: ["pizza", "vegetarian", "classic"],
  },
  {
    slug: "detroit-style-pizza",
    title: "Detroit Style",
    subtitle: "Crispy-edged, airy-centered, sauce-on-top — the American answer to deep dish",
    category: "Pizza",
    difficulty: "Intermediate",
    prepTime: 45,
    cookTime: 15,
    serves: 4,
    heroImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80",
    description:
      "Detroit-style pizza is defined by its rectangular shape, caramelised cheese edges, and sauce ladled on top after the bake. The crust is open and pillowy in the middle, shattering-crisp at the rim. It is proof that great pizza takes many forms.",
    tip: "Use a well-seasoned blue steel or anodised aluminium pan. The caramelised cheese edge — the frico — only forms with the right pan and enough heat.",
    ingredients: [
      { amount: "400", unit: "g", item: "bread flour" },
      { amount: "300", unit: "ml", item: "warm water" },
      { amount: "8", unit: "g", item: "sea salt" },
      { amount: "5", unit: "g", item: "active dry yeast" },
      { amount: "2", unit: "tbsp", item: "olive oil" },
      { amount: "300", unit: "g", item: "brick cheese, cubed" },
      { amount: "200", unit: "g", item: "pepperoni" },
      { amount: "250", unit: "ml", item: "crushed tomatoes, seasoned" },
    ],
    steps: [
      {
        title: "Make the dough",
        description:
          "Combine flour, yeast, salt, and warm water. Mix until just combined — this dough is wetter than Neapolitan. Rest 20 minutes, then fold 3 times at 20-minute intervals. Oil a 25×35 cm pan generously.",
      },
      {
        title: "Pan proof",
        description:
          "Transfer dough to oiled pan. Coat top with oil. Dimple and stretch toward edges. Cover and proof at room temperature for 2 hours until doubled and filling the pan.",
      },
      {
        title: "Load the cheese",
        description:
          "Distribute brick cheese all the way to the edges — this is critical for the frico crust. Lay pepperoni over the cheese.",
      },
      {
        title: "Bake",
        description:
          "Bake at 260°C on the lowest rack for 12–15 minutes until the edges are deeply caramelised and the cheese is bubbling across the surface.",
      },
      {
        title: "Sauce and serve",
        description:
          "Ladle seasoned tomato sauce in two or three stripes across the top. Let rest for 3 minutes, then use a spatula to free the edges and slide out. Cut into rectangles.",
      },
    ],
    tags: ["pizza", "american", "cheese"],
  },
  {
    slug: "wood-fired-seafood-platter",
    title: "Wood-Fired Seafood",
    subtitle: "Whole prawns, mussels, and fish fillet roasted over live fire with garlic butter",
    category: "Seafood",
    difficulty: "Advanced",
    prepTime: 20,
    cookTime: 12,
    serves: 4,
    heroImage: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=1200&q=80",
    description:
      "Fire is the world's oldest cooking tool, and nowhere is it more transformative than with seafood. This platter combines whole king prawns, mussels, and a single thick fillet in one tray, cooked at high heat until everything is charred at the edges, sweet in the centre, and saturated with garlic butter.",
    tip: "Do not overcrowd the tray. Seafood needs space to roast rather than steam. Cook in batches if necessary.",
    ingredients: [
      { amount: "8", unit: "", item: "whole king prawns, shell-on" },
      { amount: "500", unit: "g", item: "fresh mussels, scrubbed" },
      { amount: "500", unit: "g", item: "white fish fillet (sea bass or turbot)" },
      { amount: "100", unit: "g", item: "unsalted butter" },
      { amount: "4", unit: "cloves", item: "garlic, minced" },
      { amount: "1", unit: "", item: "lemon, halved" },
      { amount: "handful", unit: "", item: "flat-leaf parsley" },
      { amount: "flaked sea salt", unit: "", item: "and black pepper" },
    ],
    steps: [
      {
        title: "Prepare the butter",
        description:
          "Melt butter with garlic over low heat until fragrant, about 2 minutes. Remove from heat and stir in half the parsley. Season generously.",
      },
      {
        title: "Prep the seafood",
        description:
          "Using scissors, split the prawn shells along the back and devein. Score the fish fillet. Discard any mussels that are open and don't close when tapped.",
      },
      {
        title: "Arrange and baste",
        description:
          "Place everything in a heavy roasting tray or cast iron pan. Ladle garlic butter generously over all the seafood. Place lemon halves cut-side down.",
      },
      {
        title: "Cook",
        description:
          "Slide the tray into the oven at 400°C. Cook for 8–12 minutes. Prawns are done when pink and curled. Mussels are done when open — discard any that stay closed. Fish should flake but still be moist in the centre.",
      },
      {
        title: "Serve",
        description:
          "Transfer to a large sharing board. Squeeze the roasted lemon halves over everything. Scatter remaining parsley. Serve with crusty bread.",
      },
    ],
    tags: ["seafood", "wood-fired", "sharing"],
  },
  {
    slug: "apple-cobbler",
    title: "Wood-Baked Apple Cobbler",
    subtitle: "Spiced apples under a golden biscuit topping, baked in a cast iron skillet",
    category: "Baking",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 25,
    serves: 6,
    heroImage: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&q=80",
    description:
      "Cobbler in a wood-fired oven is a revelation. The radiant heat from the dome caramelises the top of the biscuits while the apples below soften into a jammy, cinnamon-scented filling. Serve straight from the skillet with cold double cream.",
    tip: "Pull the oven back from peak temperature — around 220°C is ideal for baking. The residual dome heat does the browning.",
    ingredients: [
      { amount: "6", unit: "", item: "Bramley apples, peeled and sliced" },
      { amount: "100", unit: "g", item: "caster sugar" },
      { amount: "1", unit: "tsp", item: "ground cinnamon" },
      { amount: "0.5", unit: "tsp", item: "ground nutmeg" },
      { amount: "200", unit: "g", item: "self-raising flour" },
      { amount: "80", unit: "g", item: "cold butter, cubed" },
      { amount: "120", unit: "ml", item: "cold buttermilk" },
      { amount: "2", unit: "tbsp", item: "demerara sugar" },
    ],
    steps: [
      {
        title: "Prepare the filling",
        description:
          "Toss sliced apples with caster sugar, cinnamon, and nutmeg. Tip into a well-buttered 25 cm cast iron skillet. Press lightly to compact.",
      },
      {
        title: "Make the biscuit topping",
        description:
          "Rub flour and butter together until the mixture resembles coarse breadcrumbs. Add buttermilk and stir until just combined — do not overwork. Drop spoonfuls across the apple filling.",
      },
      {
        title: "Sprinkle and bake",
        description:
          "Scatter demerara sugar over the biscuit top. Place the skillet in the oven and bake for 22–25 minutes until the topping is deep golden and the filling is bubbling at the edges.",
      },
      {
        title: "Rest and serve",
        description:
          "Allow to cool for 5 minutes before serving. Spoon into bowls and serve with cold double cream or good vanilla ice cream.",
      },
    ],
    tags: ["baking", "dessert", "vegetarian"],
  },
  {
    slug: "spicy-mortadella-flatbread",
    title: "Spicy Mortadella Flatbread",
    subtitle: "Pillowy flatbread with mortadella, stracciatella, nduja, and honey",
    category: "Flatbread",
    difficulty: "Intermediate",
    prepTime: 25,
    cookTime: 4,
    serves: 2,
    heroImage: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=1200&q=80",
    description:
      "Mortadella and nduja is a combination of sweet and fire, amplified by the cool richness of stracciatella and a thread of wildflower honey. The flatbread base cooks in under 4 minutes — blistered, charred, and chewy — and becomes the vehicle for toppings that are added cold after the bake.",
    tip: "Add the mortadella, stracciatella, and honey after the flatbread comes out of the oven. The cold toppings against the hot bread is the point.",
    ingredients: [
      { amount: "250", unit: "g", item: "pizza dough (cold-fermented)" },
      { amount: "120", unit: "g", item: "mortadella, thinly sliced" },
      { amount: "100", unit: "g", item: "stracciatella" },
      { amount: "50", unit: "g", item: "nduja" },
      { amount: "1", unit: "tbsp", item: "wildflower honey" },
      { amount: "handful", unit: "", item: "rocket leaves" },
      { amount: "flaked sea salt", unit: "", item: "" },
    ],
    steps: [
      {
        title: "Shape the flatbread",
        description:
          "Stretch cold dough to an irregular oval, roughly 30×20 cm. You want some thickness variation — it should not be uniformly thin.",
      },
      {
        title: "Spread the nduja",
        description:
          "Dot nduja across the surface in small pieces. It will melt and spread during cooking, infusing the dough with its spiced pork fat.",
      },
      {
        title: "Cook",
        description:
          "Launch onto the hot stone at 450°C. Cook for 3–4 minutes until the edges are charred and the surface has puffed and blistered.",
      },
      {
        title: "Dress and serve",
        description:
          "Remove from oven. Layer mortadella generously across the surface — it will begin to warm from the residual heat. Spoon stracciatella over the top. Scatter rocket. Drizzle with honey and finish with a pinch of flaked salt.",
      },
    ],
    tags: ["flatbread", "pork", "italian"],
  },
  {
    slug: "garlic-knots",
    title: "Garlic Knots",
    subtitle: "Pulled from the edges of pizza dough, tied and roasted, soaked in herb butter",
    category: "Baking",
    difficulty: "Easy",
    prepTime: 15,
    cookTime: 8,
    serves: 4,
    heroImage: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=1200&q=80",
    description:
      "Garlic knots are the ideal use of leftover dough — but they are good enough to make dough specifically for them. The high heat creates a shatteringly crisp exterior while the inside stays chewy and soft. The butter hits while they are still piping hot.",
    tip: "Don't rush the bake. You want the knots to be genuinely crispy on the exterior before you pull them and douse them in butter.",
    ingredients: [
      { amount: "400", unit: "g", item: "pizza dough" },
      { amount: "80", unit: "g", item: "unsalted butter" },
      { amount: "4", unit: "cloves", item: "garlic, finely grated" },
      { amount: "1", unit: "tbsp", item: "finely chopped flat-leaf parsley" },
      { amount: "flaked sea salt", unit: "", item: "" },
      { amount: "parmesan", unit: "", item: "to finish" },
    ],
    steps: [
      {
        title: "Portion and shape",
        description:
          "Divide dough into 12 equal pieces. Roll each into a 20 cm rope and tie into a simple overhand knot, tucking the ends under.",
      },
      {
        title: "Proof",
        description:
          "Place knots on an oiled tray, spaced apart. Cover and proof at room temperature for 30 minutes until slightly puffed.",
      },
      {
        title: "Bake",
        description:
          "Bake in a 260°C oven for 6–8 minutes until golden and crisp on the exterior. Rotate tray once during baking.",
      },
      {
        title: "Butter",
        description:
          "While the knots bake, melt butter with garlic over low heat for 2 minutes. Remove knots from oven and immediately toss in garlic butter. Add parsley, toss again.",
      },
      {
        title: "Serve",
        description:
          "Pile onto a serving plate. Finish with flaked salt and finely grated parmesan. Serve immediately.",
      },
    ],
    tags: ["baking", "snack", "vegetarian"],
  },
  {
    slug: "marinara-pizza",
    title: "Marinara",
    subtitle: "The oldest Neapolitan pizza — tomato, garlic, oregano, and nothing else",
    category: "Pizza",
    difficulty: "Easy",
    prepTime: 20,
    cookTime: 2,
    serves: 1,
    heroImage: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=1200&q=80",
    description:
      "Before cheese. Before toppings. Before delivery boxes. There was the Marinara. This is the purest expression of Neapolitan pizza: a thin layer of crushed tomato on blistered dough, scented with garlic and wild oregano. Nothing is hidden and nothing is unnecessary.",
    tip: "Oregano should be dried and rubbed between your fingers as you apply it — this activates the essential oils.",
    ingredients: [
      { amount: "250", unit: "g", item: "cold-fermented pizza dough" },
      { amount: "80", unit: "g", item: "San Marzano tomatoes, crushed" },
      { amount: "3", unit: "cloves", item: "garlic, thinly sliced" },
      { amount: "1", unit: "tsp", item: "dried oregano" },
      { amount: "3", unit: "tbsp", item: "extra virgin olive oil" },
      { amount: "flaked sea salt", unit: "", item: "" },
    ],
    steps: [
      {
        title: "Prepare the sauce",
        description:
          "Crush tomatoes by hand into a bowl. Season with salt and 1 tablespoon of olive oil. Stir to combine.",
      },
      {
        title: "Shape",
        description:
          "Stretch dough to a 28 cm round on a lightly floured surface. Work from the centre outward, leaving a 1 cm border.",
      },
      {
        title: "Top",
        description:
          "Spoon tomato sauce evenly across the surface. Scatter garlic slices. Rub oregano between fingers and distribute across the top. Drizzle with remaining olive oil.",
      },
      {
        title: "Cook",
        description:
          "Launch into the oven at 480°C. Cook for 60–90 seconds, rotating once. Pull when the crust is charred at the edges and the tomato has caramelised.",
      },
      {
        title: "Serve",
        description: "Transfer to a board. Finish with a final pour of your best olive oil. Eat immediately.",
      },
    ],
    tags: ["pizza", "vegan", "classic", "neapolitan"],
  },
  {
    slug: "wood-roasted-artichokes",
    title: "Wood-Roasted Artichokes",
    subtitle: "Whole artichokes blistered over fire, served with lemon aioli and crispy capers",
    category: "Wood-Fired",
    difficulty: "Intermediate",
    prepTime: 15,
    cookTime: 30,
    serves: 4,
    heroImage: "https://images.unsplash.com/photo-1516714819001-8ee7a13b71d7?w=1200&q=80",
    description:
      "Artichokes cooked in a wood-fired oven develop a smokiness that no other cooking method can replicate. The outer leaves char while the heart steams within, becoming tender and intensely flavoured. Eat them leaf by leaf, pulling the flesh with your teeth, dipping into cold aioli.",
    tip: "Rub cut surfaces with lemon immediately to prevent oxidation. A little bitterness in the charred leaves is desirable — it is part of the flavour.",
    ingredients: [
      { amount: "4", unit: "", item: "large globe artichokes" },
      { amount: "2", unit: "", item: "lemons" },
      { amount: "4", unit: "cloves", item: "garlic, halved" },
      { amount: "4", unit: "tbsp", item: "olive oil" },
      { amount: "2", unit: "", item: "egg yolks" },
      { amount: "200", unit: "ml", item: "neutral oil" },
      { amount: "2", unit: "tbsp", item: "capers, rinsed and dried" },
      { amount: "flaked sea salt", unit: "", item: "" },
    ],
    steps: [
      {
        title: "Trim the artichokes",
        description:
          "Cut off the top third of each artichoke. Trim the stem to 2 cm. Rub all cut surfaces with lemon. Pull back the toughest outer leaves. Push a garlic half into the centre of each.",
      },
      {
        title: "Season and wrap",
        description:
          "Drizzle each artichoke with olive oil, open the leaves and let the oil penetrate. Season with salt. Wrap individually in two layers of foil.",
      },
      {
        title: "Roast",
        description:
          "Place foil parcels directly in the hot oven at 220°C. Roast for 25–30 minutes. Unwrap and return to the oven directly on the stone for a final 5 minutes to blister the exterior.",
      },
      {
        title: "Make the aioli",
        description:
          "Whisk egg yolks with a pinch of salt. Add neutral oil drop by drop at first, then in a thin stream, whisking constantly until emulsified. Finish with lemon juice, salt, and a grated clove of garlic.",
      },
      {
        title: "Fry the capers",
        description:
          "In a small pan over high heat, fry dried capers in olive oil for 2 minutes until crispy. Drain on paper and salt lightly.",
      },
      {
        title: "Serve",
        description:
          "Place artichokes on a serving board. Spoon aioli into a bowl alongside. Scatter fried capers over the artichokes. Serve immediately.",
      },
    ],
    tags: ["vegetarian", "wood-fired", "sharing"],
  },
  {
    slug: "olive-oil-flatbread-gazpacho",
    title: "Flatbread & Gazpacho",
    subtitle: "Charred olive oil flatbread alongside ice-cold tomato and pepper gazpacho",
    category: "Flatbread",
    difficulty: "Easy",
    prepTime: 40,
    cookTime: 5,
    serves: 4,
    heroImage: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=1200&q=80",
    description:
      "This is high summer on a board. The gazpacho is made a day ahead and served ice cold. The flatbread takes 4 minutes in a screaming hot oven. The contrast between the char and the cold soup is one of the most satisfying things you can eat outdoors.",
    tip: "Gazpacho must be made the day before and refrigerated overnight. There is no shortcut for the flavour development.",
    ingredients: [
      { amount: "300", unit: "g", item: "pizza or flatbread dough" },
      { amount: "4", unit: "tbsp", item: "extra virgin olive oil" },
      { amount: "800", unit: "g", item: "ripe tomatoes, roughly chopped" },
      { amount: "1", unit: "", item: "red pepper, deseeded" },
      { amount: "0.5", unit: "", item: "cucumber, roughly chopped" },
      { amount: "1", unit: "clove", item: "garlic" },
      { amount: "2", unit: "tbsp", item: "sherry vinegar" },
      { amount: "flaked sea salt", unit: "", item: "" },
    ],
    steps: [
      {
        title: "Make the gazpacho (day before)",
        description:
          "Blend tomatoes, red pepper, cucumber, and garlic until smooth. Add sherry vinegar, olive oil, and salt. Blend again. Pass through a fine sieve for a silky finish. Refrigerate overnight.",
      },
      {
        title: "Shape the flatbreads",
        description:
          "Divide dough into 4 pieces. Roll or stretch each piece to a thin oval, roughly 25 cm long. Brush generously with olive oil on both sides.",
      },
      {
        title: "Cook",
        description:
          "Cook directly on the hot stone at 450°C for 2–3 minutes per side until charred in spots and fully cooked through. Work in batches.",
      },
      {
        title: "Serve",
        description:
          "Pour gazpacho into chilled bowls. Place flatbreads alongside or break them into shards over the soup. Finish with a pour of your best olive oil and flaked salt.",
      },
    ],
    tags: ["flatbread", "vegan", "summer"],
  },
  {
    slug: "baked-rigatoni",
    title: "Baked Rigatoni",
    subtitle: "Rigatoni with blistered cherry tomatoes, fresh mozzarella, and fennel pollen",
    category: "Baking",
    difficulty: "Intermediate",
    prepTime: 20,
    cookTime: 20,
    serves: 4,
    heroImage: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=1200&q=80",
    description:
      "This is a pasta bake rebuilt from first principles. The rigatoni is cooked just short of al dente before it goes into the oven, where the cherry tomatoes collapse and blister, the mozzarella melts in pockets, and the fennel pollen perfumes the entire dish with something floral and anise-like.",
    tip: "Pull the pasta 2 minutes early. It finishes cooking in the oven — overcook it on the hob and you will have mush.",
    ingredients: [
      { amount: "400", unit: "g", item: "rigatoni" },
      { amount: "400", unit: "g", item: "cherry tomatoes, halved" },
      { amount: "250", unit: "g", item: "fresh mozzarella, torn" },
      { amount: "3", unit: "cloves", item: "garlic, sliced" },
      { amount: "1", unit: "tsp", item: "fennel pollen" },
      { amount: "4", unit: "tbsp", item: "extra virgin olive oil" },
      { amount: "handful", unit: "", item: "fresh basil" },
      { amount: "50", unit: "g", item: "parmesan, grated" },
    ],
    steps: [
      {
        title: "Parboil the pasta",
        description:
          "Cook rigatoni in heavily salted boiling water for 2 minutes less than the packet instructions. Drain, reserving 200 ml pasta water. Toss with olive oil.",
      },
      {
        title: "Prepare the tomatoes",
        description:
          "In an oven-safe dish, toss cherry tomatoes with garlic slices, olive oil, and a pinch of salt. Spread evenly.",
      },
      {
        title: "Blister the tomatoes",
        description:
          "Slide the tomato dish into the oven at 350°C for 5–6 minutes until the tomatoes are beginning to collapse and char at the edges.",
      },
      {
        title: "Combine and bake",
        description:
          "Add the rigatoni to the tomatoes along with a splash of pasta water. Tuck mozzarella throughout. Scatter parmesan. Return to the oven for 8–10 minutes until the cheese is melted and golden.",
      },
      {
        title: "Finish",
        description:
          "Remove from oven. Dust generously with fennel pollen. Tear basil across the top. Serve from the dish.",
      },
    ],
    tags: ["pasta", "baking", "vegetarian"],
  },
];
