export interface CooktopRecipe {
  slug: string;
  title: string;
  subtitle: string;
  tempF: number;
  mode: "Temperature" | "Power";
  powerLevel?: string;
  difficulty: "Easy" | "Intermediate" | "Advanced";
  prepTime: number;
  cookTime: number;
  serves: number;
  heroImage: string;
  description: string;
  tip: string;
  ingredients: { amount: string; unit: string; item: string }[];
  steps: { title: string; description: string; tempF?: number; mode?: string }[];
  tags: string[];
}

export const cooktopRecipes: CooktopRecipe[] = [
  {
    slug: "perfect-seared-steak",
    title: "Perfect Seared Steak",
    subtitle: "Ribeye with a deep Maillard crust, finished in brown butter",
    tempF: 450,
    mode: "Temperature",
    difficulty: "Intermediate",
    prepTime: 10,
    cookTime: 12,
    serves: 2,
    heroImage: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=1200&q=80",
    description:
      "The Impulse cooktop at 450°F in temperature mode produces a sear that rivals a commercial steakhouse. The Active Temperature Sensing holds the pan at your exact set point — so when you lay the steak down, the pan recovers instantly rather than dropping temperature. The crust is formed in 90 seconds. The rest is butter.",
    tip: "Pat the steak completely dry with paper towels 30 minutes before cooking. Salt it, leave it uncovered in the fridge for at least an hour if you have time. Moisture is the enemy of crust.",
    ingredients: [
      { amount: "2", unit: "", item: "ribeye steaks, 1.5\" thick" },
      { amount: "2", unit: "tsp", item: "flaked sea salt" },
      { amount: "1", unit: "tsp", item: "coarsely ground black pepper" },
      { amount: "2", unit: "tbsp", item: "neutral oil (grapeseed or avocado)" },
      { amount: "60", unit: "g", item: "unsalted butter" },
      { amount: "4", unit: "sprigs", item: "fresh thyme" },
      { amount: "3", unit: "cloves", item: "garlic, smashed" },
    ],
    steps: [
      {
        title: "Season and bring to temp",
        description: "Season steaks generously on all sides with salt and pepper. Leave at room temperature for 30 minutes while the pan preheats.",
        tempF: 450,
        mode: "Temperature mode",
      },
      {
        title: "Preheat the pan",
        description: "Set a carbon steel or cast iron pan to 450°F in temperature mode. Wait 5 full minutes — the display will confirm the pan is holding at temperature. Add oil and swirl to coat.",
        tempF: 450,
        mode: "Temperature mode",
      },
      {
        title: "Sear",
        description: "Lay steaks away from you into the pan. Do not move them. Sear for 90 seconds until a deep mahogany crust forms. Flip. Sear the second side for 90 seconds. Stand the steak on its fat cap for 30 seconds.",
      },
      {
        title: "Butter baste",
        description: "Reduce to 325°F. Add butter, thyme, and garlic. As the butter melts and foams, tilt the pan and spoon it continuously over the steaks for 60–90 seconds.",
        tempF: 325,
        mode: "Temperature mode",
      },
      {
        title: "Rest and serve",
        description: "Transfer to a wire rack and rest for 5 minutes minimum. Slice against the grain. Spoon the pan butter over the top to serve.",
      },
    ],
    tags: ["beef", "high-heat", "butter-baste"],
  },
  {
    slug: "brown-butter-pasta",
    title: "Brown Butter Pasta",
    subtitle: "Tagliatelle with brown butter, crispy sage, and aged parmesan",
    tempF: 300,
    mode: "Temperature",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 15,
    serves: 2,
    heroImage: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=1200&q=80",
    description:
      "Brown butter requires a specific temperature window — too low and it just melts, too high and it burns. At 300°F in temperature mode, the Impulse holds the butter right at the point where the milk solids caramelise into nutty, complex beurre noisette without tipping into acrid beurre noir.",
    tip: "The colour change happens fast. Watch it rather than listening to it. Pull the pan the moment you see a deep golden amber — residual heat will carry it a few degrees further.",
    ingredients: [
      { amount: "300", unit: "g", item: "fresh tagliatelle or pappardelle" },
      { amount: "120", unit: "g", item: "unsalted butter, cubed" },
      { amount: "12", unit: "", item: "fresh sage leaves" },
      { amount: "60", unit: "g", item: "Parmigiano-Reggiano, finely grated" },
      { amount: "1", unit: "tsp", item: "flaked sea salt" },
      { amount: "black pepper", unit: "", item: "" },
    ],
    steps: [
      {
        title: "Boil pasta water",
        description: "Set a large pot to P10 power mode. Bring water to a boil in under 40 seconds. Salt generously — it should taste like mild seawater. Cook pasta until just al dente.",
        mode: "P10 power mode",
      },
      {
        title: "Brown the butter",
        description: "In a wide sauté pan at 300°F temperature mode, add butter. It will melt, foam, and then the foam will subside. Watch for golden-brown milk solids at the base and a nutty aroma. Total time: about 4 minutes.",
        tempF: 300,
        mode: "Temperature mode",
      },
      {
        title: "Crisp the sage",
        description: "Add sage leaves to the brown butter. They'll crisp in 30–45 seconds. Remove and drain on paper. Keep the butter in the pan.",
      },
      {
        title: "Finish the pasta",
        description: "Drain the pasta, reserving a cup of pasta water. Add pasta to the brown butter pan at 200°F. Toss with a splash of pasta water until silky and emulsified. Add parmesan in two stages, tossing constantly.",
        tempF: 200,
        mode: "Temperature mode",
      },
      {
        title: "Plate",
        description: "Divide between warmed bowls. Lay crispy sage leaves on top. Finish with more parmesan, black pepper, and a pinch of flaked salt.",
      },
    ],
    tags: ["pasta", "vegetarian", "butter"],
  },
  {
    slug: "hollandaise",
    title: "Foolproof Hollandaise",
    subtitle: "Silky egg and butter emulsion at a precise 145°F — no double boiler required",
    tempF: 145,
    mode: "Temperature",
    difficulty: "Intermediate",
    prepTime: 10,
    cookTime: 10,
    serves: 4,
    heroImage: "https://images.unsplash.com/photo-1608877907149-a206d75ba011?w=1200&q=80",
    description:
      "Hollandaise breaks because of temperature — too hot and the eggs scramble, too cool and the emulsion never forms. At 145°F, the Impulse holds the exact sweet spot where egg yolks thicken and emulsify without cooking. A sauce that intimidates most cooks becomes straightforward.",
    tip: "Warm your serving plates before you start. Hollandaise waits for no one — have your eggs poached and toast ready before you begin.",
    ingredients: [
      { amount: "4", unit: "", item: "egg yolks" },
      { amount: "2", unit: "tbsp", item: "cold water" },
      { amount: "1", unit: "tbsp", item: "white wine vinegar" },
      { amount: "250", unit: "g", item: "clarified butter, warm" },
      { amount: "0.5", unit: "", item: "lemon, juiced" },
      { amount: "pinch", unit: "", item: "cayenne pepper" },
      { amount: "flaked sea salt", unit: "", item: "" },
    ],
    steps: [
      {
        title: "Set the temperature",
        description: "Place a stainless steel mixing bowl directly on the burner. Set to 145°F in temperature mode. Let the bowl heat for 1 minute.",
        tempF: 145,
        mode: "Temperature mode",
      },
      {
        title: "Start the emulsion",
        description: "Add yolks, cold water, and vinegar to the bowl. Whisk continuously in a figure-eight motion. After 3–4 minutes the mixture will double in volume and leave a ribbon when you lift the whisk. This is the sabayon.",
      },
      {
        title: "Add the butter",
        description: "Remove from heat. Begin adding warm clarified butter drop by drop, whisking constantly. Once the emulsion is established (after about a third of the butter), add the rest in a thin, steady stream.",
      },
      {
        title: "Season and hold",
        description: "Add lemon juice, cayenne, and salt to taste. Return to 145°F to hold warm. Whisk occasionally. The sauce will hold for up to 30 minutes at this temperature.",
        tempF: 145,
        mode: "Temperature mode",
      },
    ],
    tags: ["sauce", "eggs", "french", "brunch"],
  },
  {
    slug: "caramelised-onions",
    title: "Proper Caramelised Onions",
    subtitle: "Deep amber, jammy onions cooked at 300°F over 45 minutes — no shortcuts",
    tempF: 300,
    mode: "Temperature",
    difficulty: "Easy",
    prepTime: 10,
    cookTime: 45,
    serves: 4,
    heroImage: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=1200&q=80",
    description:
      "Real caramelised onions take 45 minutes and cannot be rushed. The Impulse at 300°F in temperature mode gives you the precise, sustained heat that converts the onions' sugars without burning them. Set it and leave it — the sensor handles the rest. The result is a condiment worth the patience.",
    tip: "Use a wide, heavy pan — carbon steel or cast iron. More surface area means more evaporation, and evaporation is what concentrates the flavour.",
    ingredients: [
      { amount: "1", unit: "kg", item: "yellow onions, thinly sliced" },
      { amount: "3", unit: "tbsp", item: "unsalted butter" },
      { amount: "1", unit: "tbsp", item: "olive oil" },
      { amount: "1", unit: "tsp", item: "sea salt" },
      { amount: "1", unit: "tsp", item: "fresh thyme leaves" },
      { amount: "2", unit: "tbsp", item: "dry sherry or white wine (optional)" },
    ],
    steps: [
      {
        title: "Start cold",
        description: "Add butter and olive oil to a cold wide pan. Set to 300°F temperature mode. Add all the onions and salt before the pan gets hot — this helps them release moisture evenly from the start.",
        tempF: 300,
        mode: "Temperature mode",
      },
      {
        title: "First 20 minutes",
        description: "Stir every 5 minutes. The onions will wilt, turn translucent, and release significant liquid. They'll look like too much at first — they will reduce dramatically.",
      },
      {
        title: "Last 25 minutes",
        description: "As the liquid evaporates, the onions will start to brown. Stir more frequently now — every 2–3 minutes. If they're sticking, add a splash of water and scrape the fond. Add thyme at the 40-minute mark.",
      },
      {
        title: "Deglaze and finish",
        description: "Once deeply golden, add sherry if using. Scrape up all the caramelised bits from the pan. Cook off the alcohol for 1 minute. Taste and adjust salt.",
      },
    ],
    tags: ["vegetarian", "condiment", "french-onion", "slow-cook"],
  },
  {
    slug: "wok-style-stir-fry",
    title: "Wok-Style Stir-Fry",
    subtitle: "Beef and broccolini at 450°F — the Impulse delivers genuine wok hei",
    tempF: 450,
    mode: "Temperature",
    difficulty: "Intermediate",
    prepTime: 20,
    cookTime: 8,
    serves: 2,
    heroImage: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=1200&q=80",
    description:
      "Wok hei — the smoky, charred flavour that defines great stir-fry — requires extreme heat and fast hands. At 450°F the Impulse delivers the kind of temperature normally reserved for commercial wok burners. The key is working in small batches so the pan never drops temperature.",
    tip: "Have everything prepped and within arm's reach before you start. A stir-fry at this heat moves fast. There is no time to chop garlic mid-cook.",
    ingredients: [
      { amount: "300", unit: "g", item: "beef sirloin, thinly sliced against the grain" },
      { amount: "200", unit: "g", item: "broccolini, cut into 5cm pieces" },
      { amount: "4", unit: "cloves", item: "garlic, minced" },
      { amount: "2", unit: "tsp", item: "fresh ginger, grated" },
      { amount: "3", unit: "tbsp", item: "oyster sauce" },
      { amount: "1", unit: "tbsp", item: "dark soy sauce" },
      { amount: "1", unit: "tsp", item: "sesame oil" },
      { amount: "3", unit: "tbsp", item: "neutral oil" },
    ],
    steps: [
      {
        title: "Marinate the beef",
        description: "Toss sliced beef with 1 tbsp soy sauce, 1 tsp cornstarch, and 1 tbsp neutral oil. Set aside for 15 minutes. Mix oyster sauce, remaining soy, and sesame oil in a small bowl.",
      },
      {
        title: "Heat the pan",
        description: "Set a carbon steel pan to 450°F temperature mode. Preheat for 3 minutes until the oil just begins to smoke.",
        tempF: 450,
        mode: "Temperature mode",
      },
      {
        title: "Cook the beef",
        description: "Add beef in a single layer — work in batches. Don't touch it for 45 seconds. Toss once, cook 30 seconds more. Remove to a plate. The beef should be charred at the edges.",
      },
      {
        title: "Cook the broccolini",
        description: "Add more oil. Add broccolini and toss every 30 seconds for 2 minutes until charred in spots and just tender. Add garlic and ginger. Stir for 30 seconds until fragrant.",
      },
      {
        title: "Combine and sauce",
        description: "Return beef to the pan. Pour in the sauce. Toss everything together for 30 seconds until the sauce coats and caramelises slightly. Serve immediately over steamed rice.",
      },
    ],
    tags: ["beef", "asian", "high-heat", "fast"],
  },
  {
    slug: "french-omelette",
    title: "French Omelette",
    subtitle: "The three-egg test of control — silky, pale, and finished in 90 seconds",
    tempF: 325,
    mode: "Temperature",
    difficulty: "Advanced",
    prepTime: 5,
    cookTime: 2,
    serves: 1,
    heroImage: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=1200&q=80",
    description:
      "The French omelette is the cook's exam. It requires a specific, moderate heat — hot enough to set the egg quickly, cool enough not to colour it. At 325°F the Impulse holds the temperature window precisely. The technique is everything: a rolled, pale, custard-soft omelette in under two minutes.",
    tip: "Use a well-seasoned 20 cm carbon steel or non-stick pan dedicated to eggs. Never wash it with soap. Never cook anything else in it.",
    ingredients: [
      { amount: "3", unit: "", item: "large eggs" },
      { amount: "1", unit: "tbsp", item: "cold unsalted butter, cubed" },
      { amount: "pinch", unit: "", item: "flaked sea salt" },
      { amount: "1", unit: "tbsp", item: "crème fraîche (optional)" },
      { amount: "chives", unit: "", item: "finely sliced, to finish" },
    ],
    steps: [
      {
        title: "Prep",
        description: "Beat eggs vigorously with a fork until completely uniform — no streaks of white. Season with salt. Have your plate warm and chives chopped.",
      },
      {
        title: "Heat the pan",
        description: "Set a 20 cm pan to 325°F temperature mode. Add butter and let it melt and foam — but not brown.",
        tempF: 325,
        mode: "Temperature mode",
      },
      {
        title: "Add eggs",
        description: "Pour in the eggs all at once. Immediately shake the pan with one hand and stir with a fork in the other — small, rapid circles. The curds should be tiny and silky. Stop stirring when the egg is just barely set — still wet-looking in patches.",
      },
      {
        title: "Roll and plate",
        description: "Tilt the pan away from you. Using the fork, fold the near edge of the omelette to the centre. Tap the handle to move the omelette toward the far edge. Roll it over itself one final time as it tips onto the plate — it should be a neat torpedo shape, pale yellow, with no colour.",
      },
      {
        title: "Finish",
        description: "Add a small dot of butter on top to gloss. Scatter chives. Eat immediately.",
      },
    ],
    tags: ["eggs", "french", "technique", "quick"],
  },
  {
    slug: "crème-brûlée",
    title: "Stovetop Crème Brûlée",
    subtitle: "Custard base set at 170°F then chilled — no oven required",
    tempF: 170,
    mode: "Temperature",
    difficulty: "Intermediate",
    prepTime: 15,
    cookTime: 20,
    serves: 4,
    heroImage: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=1200&q=80",
    description:
      "Traditional crème brûlée bakes in a water bath in the oven for an hour. Using the Impulse at 170°F, you can make the same custard on the cooktop in a heavy-bottomed pan — cooking it like a crème anglaise to the nappe point, then setting it in ramekins in the fridge. The result is identical to the oven version and faster.",
    tip: "The custard is done when it coats a spoon and a finger drawn through the coating leaves a clean line. If it's still liquid, give it 2 more minutes. If it looks like scrambled eggs, it went too far.",
    ingredients: [
      { amount: "500", unit: "ml", item: "double cream" },
      { amount: "1", unit: "", item: "vanilla pod, split and scraped" },
      { amount: "6", unit: "", item: "egg yolks" },
      { amount: "100", unit: "g", item: "caster sugar" },
      { amount: "4", unit: "tsp", item: "demerara sugar, for the brûlée" },
    ],
    steps: [
      {
        title: "Infuse the cream",
        description: "Add cream and vanilla pod to a saucepan. Heat at 180°F temperature mode until steaming — about 5 minutes. Do not boil.",
        tempF: 180,
        mode: "Temperature mode",
      },
      {
        title: "Mix yolks and sugar",
        description: "Whisk egg yolks and sugar until pale and thick. Slowly pour the hot cream over the yolks, whisking constantly — tempering rather than scrambling.",
      },
      {
        title: "Cook to nappe",
        description: "Return the mixture to the pan at 170°F temperature mode. Stir continuously with a silicone spatula, especially around the edges. Cook for 10–12 minutes until it coats the spoon.",
        tempF: 170,
        mode: "Temperature mode",
      },
      {
        title: "Set and chill",
        description: "Strain through a fine sieve into ramekins. Refrigerate uncovered for at least 4 hours — overnight is better.",
      },
      {
        title: "Brûlée",
        description: "Sprinkle an even layer of demerara sugar over each cold custard. Use a kitchen torch, moving in small circles, until the sugar is uniformly amber and glassy. Rest 1 minute for the caramel to harden. Serve immediately.",
      },
    ],
    tags: ["dessert", "custard", "french", "weekend"],
  },
  {
    slug: "pan-roasted-salmon",
    title: "Pan-Roasted Salmon",
    subtitle: "Skin-side down at 375°F — crispy skin, translucent centre",
    tempF: 375,
    mode: "Temperature",
    difficulty: "Easy",
    prepTime: 5,
    cookTime: 10,
    serves: 2,
    heroImage: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=1200&q=80",
    description:
      "A perfectly cooked salmon fillet — crispy skin, medium-rare interior — requires cooking almost entirely on one side. At 375°F, the Impulse holds a temperature that renders the skin without overcooking the flesh. The only flip is a brief finishing touch.",
    tip: "Score the skin in 3 places to prevent curling. Use a fish spatula and press the fillet flat for the first 30 seconds of cooking if it starts to bow.",
    ingredients: [
      { amount: "2", unit: "", item: "salmon fillets, skin-on, 180g each" },
      { amount: "1", unit: "tbsp", item: "neutral oil" },
      { amount: "20", unit: "g", item: "unsalted butter" },
      { amount: "1", unit: "", item: "lemon, halved" },
      { amount: "flaked sea salt", unit: "", item: "" },
      { amount: "black pepper", unit: "", item: "" },
    ],
    steps: [
      {
        title: "Prep the fish",
        description: "Pat fillets completely dry. Score the skin in 3 shallow cuts. Season the skin side with salt only — the flesh side just before cooking.",
      },
      {
        title: "Heat the pan",
        description: "Set a stainless or carbon steel pan to 375°F temperature mode. Add oil, swirl to coat. Wait until the oil shimmers.",
        tempF: 375,
        mode: "Temperature mode",
      },
      {
        title: "Cook skin-side down",
        description: "Season flesh side. Lay fillets skin-side down. Press gently with a spatula for the first 30 seconds. Cook for 6–7 minutes without moving — until the flesh turns opaque three-quarters of the way up the fillet.",
      },
      {
        title: "Flip and finish",
        description: "Flip. Add butter. Cook flesh-side down for 45 seconds only. The centre should still be translucent.",
      },
      {
        title: "Serve",
        description: "Rest 1 minute. Squeeze lemon over the top. Serve skin-side up to preserve the crispness.",
      },
    ],
    tags: ["fish", "seafood", "quick", "healthy"],
  },
];
