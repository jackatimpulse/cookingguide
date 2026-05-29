export interface PanTechnique {
  slug: string;
  title: string;
  subtitle: string;
  pan: string;
  tempF: number;
  mode: "Temperature" | "Power";
  heroImage: string;
  description: string;
  steps: { heading: string; body: string }[];
  bestFor: string[];
  avoid: string[];
}

export const panTechniques: PanTechnique[] = [
  {
    slug: "carbon-steel-sear",
    title: "The Carbon Steel Sear",
    subtitle: "How to build and maintain a carbon steel pan for perfect high-heat cooking",
    pan: "Carbon Steel",
    tempF: 450,
    mode: "Temperature",
    heroImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80",
    description:
      "Carbon steel is the chef's pan — lighter than cast iron, faster to heat, and capable of developing a natural non-stick patina that improves with every cook. On the Impulse cooktop it reaches searing temperature in under 3 minutes and holds it with precision. This guide covers seasoning, searing, and long-term care.",
    steps: [
      {
        heading: "Initial seasoning",
        body: "Wash the pan once with soap and hot water — the only time you'll use soap. Dry completely over a burner at 250°F for 2 minutes. Apply a very thin layer of flaxseed or grapeseed oil with a paper towel, then wipe almost all of it off — you want the thinnest possible coat. Heat at 400°F for 10 minutes until the pan darkens and smokes slightly. Repeat 3–4 times. The pan will be grey-black and matte.",
      },
      {
        heading: "Preheating properly",
        body: "Set to 450°F temperature mode. Wait for the display to confirm the surface has reached temperature — typically 2–3 minutes. Add your oil only when the pan is fully up to heat. This prevents the oil from overheating and breaking down before the food goes in.",
      },
      {
        heading: "The sear",
        body: "Add oil — just enough to coat the base. Lay food away from you. Do not move it. The protein will naturally release from the pan when the Maillard crust has formed — if it's sticking, it's not ready. Patience is the technique.",
      },
      {
        heading: "After cooking",
        body: "While the pan is still warm, wipe with a dry paper towel to remove food residue. For stuck bits, add a splash of water and let it steam for 30 seconds, then wipe. Dry completely on the burner at 200°F for 1 minute. Apply the thinnest film of oil before storing.",
      },
      {
        heading: "Restoring a rusty pan",
        body: "If you see rust (usually from leaving wet), scrub with coarse salt and a paper towel. Rinse, dry immediately on the burner, and re-season from step one. Carbon steel is essentially indestructible — it just needs attention.",
      },
    ],
    bestFor: ["Steaks", "Chops", "Fish fillets", "Stir-fry", "Omelettes", "Sautéed vegetables"],
    avoid: ["Acidic sauces (strips seasoning)", "Long braises", "Dishes that need to go from pan to oven repeatedly"],
  },
  {
    slug: "cast-iron-thermal-mass",
    title: "Cast Iron & Thermal Mass",
    subtitle: "Using cast iron's heat retention for consistent, even cooking",
    pan: "Cast Iron",
    tempF: 375,
    mode: "Temperature",
    heroImage: "https://images.unsplash.com/photo-1585325701956-60dd9c8399f0?w=1200&q=80",
    description:
      "Cast iron heats slowly and holds heat like no other material. In combination with Active Temperature Sensing, it becomes a cooking surface that barely flinches when you add cold food. The trade-off: you need patience during the preheat. Once there, it's the most stable cooking surface in the kitchen.",
    steps: [
      {
        heading: "The slow preheat",
        body: "Set cast iron to your target temperature in temperature mode. Allow 7–10 minutes for the entire pan to saturate with heat — not just the base. Cast iron's thermal mass means the top rim will be cooler than the base until the whole pan has equilibrated. This is worth the wait.",
      },
      {
        heading: "Testing readiness",
        body: "Flick a drop of water onto the surface. If it skitters and evaporates in 1–2 seconds, the pan is ready. If it sits and slowly boils away, you need more time. If it immediately vaporises on contact, it's too hot — drop the temperature slightly and wait 2 minutes.",
      },
      {
        heading: "Cooking advantage",
        body: "When you add a cold steak to a hot cast iron pan, the pan's thermal mass absorbs the temperature shock and barely drops. The Active Temperature Sensing ramps up power to compensate immediately. The result: consistent, uninterrupted crust formation from edge to edge.",
      },
      {
        heading: "Seasoning maintenance",
        body: "Never use soap on a well-seasoned cast iron pan. After cooking, while still warm, wipe with a dry cloth. For stubborn bits, use coarse salt as an abrasive. Dry completely. Apply a very thin film of oil to the cooking surface. Store in a dry place.",
      },
      {
        heading: "Cornbread, frittata, and desserts",
        body: "Cast iron's even heat makes it ideal for baked goods started on the cooktop. Heat the pan on the burner, add your batter, then transfer to the oven. The hot pan gives you an immediate, crispy bottom — the hallmark of great cornbread and skillet cookies.",
      },
    ],
    bestFor: ["Steaks", "Bacon", "Cornbread", "Frittatas", "Hash browns", "Smash burgers"],
    avoid: ["Delicate fish (sticks more)", "Acidic dishes (reacts with iron)", "Quick tasks requiring fast temperature changes"],
  },
  {
    slug: "stainless-steel-fond",
    title: "Stainless Steel & the Fond",
    subtitle: "Building and deglazing fond for sauces that live in the pan",
    pan: "Stainless Steel",
    tempF: 375,
    mode: "Temperature",
    heroImage: "https://images.unsplash.com/photo-1584990347449-a2d4c2c7b1d4?w=1200&q=80",
    description:
      "The brown bits stuck to the bottom of a stainless pan — the fond — are some of the most flavourful material in the kitchen. Unlike non-stick or seasoned cast iron, stainless steel builds fond aggressively and releases it completely when you deglaze. This is the foundation of most pan sauces.",
    steps: [
      {
        heading: "Heating stainless correctly",
        body: "Stainless steel expands and contracts with heat. Preheat the empty pan at your target temperature for 2 minutes before adding oil. Then add oil and heat for 30 seconds more before adding food. This prevents sticking — the technical reason is the Leidenfrost effect creating a micro-layer between pan and food.",
      },
      {
        heading: "Building the fond",
        body: "Sear protein at 375°F without moving it. The fond — caramelised proteins and sugars — will build on the base of the pan beneath the meat. When the protein releases naturally, remove it and look at what you have: a dark, concentrated layer of flavour waiting to become a sauce.",
      },
      {
        heading: "Deglazing",
        body: "With the pan still hot, add wine, stock, or even water. It will boil violently — stand back. Use a wooden spoon to scrape up every bit of fond. All of it dissolves into the liquid, forming the base of your sauce.",
      },
      {
        heading: "Building a pan sauce",
        body: "After deglazing, reduce the liquid by half at 200°F. Add cold butter in small cubes, one at a time, swirling to emulsify. Season to taste. You now have a glossy, restaurant-quality pan sauce in 5 minutes from the pan you cooked the protein in.",
      },
      {
        heading: "Cleaning stainless",
        body: "Stainless is the easiest pan to clean. Bar Keepers Friend and a non-scratch pad removes even the most stubborn discolouration. It can go in the dishwasher. Unlike carbon steel or cast iron, it doesn't require any special care — which is why it's the workhorse of professional kitchens.",
      },
    ],
    bestFor: ["Pan sauces", "Chicken thighs", "Pork chops", "Reductions", "Sautéing aromatics"],
    avoid: ["Delicate proteins when you first start (steep learning curve for non-sticking)", "Non-stick tasks"],
  },
  {
    slug: "non-stick-precision",
    title: "Non-Stick at Controlled Heat",
    subtitle: "Keeping your non-stick coating intact using precise low temperatures",
    pan: "Non-Stick",
    tempF: 325,
    mode: "Temperature",
    heroImage: "https://images.unsplash.com/photo-1588316109770-ff7b07c89e0e?w=1200&q=80",
    description:
      "Non-stick pans are misused in most kitchens — they are blasted with high heat that degrades the coating in months. The Impulse's temperature mode lets you hold a non-stick pan in the zone where it performs best: between 250°F and 375°F. Eggs cook perfectly, nothing sticks, and the pan lasts for years.",
    steps: [
      {
        heading: "The heat limit",
        body: "PTFE non-stick coatings begin to degrade above 400°F and release fumes that are harmful at sustained temperatures above 450°F. Never use power mode on a non-stick pan. Set a hard ceiling of 375°F in temperature mode — 325°F for everyday egg cooking.",
      },
      {
        heading: "Preheating for eggs",
        body: "Set the pan to 300°F. Add a small amount of butter. When the butter melts but doesn't brown, add your eggs. The non-stick surface at this temperature means zero intervention — no sticking, no tearing, no spraying.",
      },
      {
        heading: "Pancakes and crêpes",
        body: "Set to 325°F. A light film of butter between each crêpe. The consistent temperature ensures each one cooks in exactly the same time — critical for batch cooking where you want uniform results.",
      },
      {
        heading: "Care and longevity",
        body: "Never use metal utensils — use silicone or wood. Hand wash only in warm soapy water. Never stack without a cloth protector between pans. Store away from high heat. With proper temperature management and care, a quality non-stick pan should last 5+ years.",
      },
      {
        heading: "When to replace",
        body: "When the coating visibly chips, peels, or the pan sticks despite proper use and cleaning, it's time to replace. A good rule: if you can see the metal base through the coating in any spot, replace immediately.",
      },
    ],
    bestFor: ["Eggs (all styles)", "Crêpes and pancakes", "Delicate fish", "Omelettes", "Low-fat cooking"],
    avoid: ["High-heat searing", "Broiling or oven use above 400°F", "Metal utensils"],
  },
  {
    slug: "enameled-cast-iron-braise",
    title: "Enameled Cast Iron for Braising",
    subtitle: "Low, sustained heat for fall-apart braises and rich stews",
    pan: "Enameled Cast Iron",
    tempF: 200,
    mode: "Temperature",
    heroImage: "https://images.unsplash.com/photo-1547592180-85f173990554?w=1200&q=80",
    description:
      "A Dutch oven or enameled cast iron braiser on the Impulse at 200°F produces the same gentle, bubbling environment as a low oven. The advantage over the oven: you can see it, adjust it, and monitor it without opening a door. Collagen-rich cuts — short ribs, chicken thighs, pork shoulder — slowly convert to gelatine and become impossibly tender.",
    steps: [
      {
        heading: "Sear first",
        body: "Brown your protein hard before braising — this isn't optional. Set to 400°F, add oil, and sear every surface until deeply coloured. This builds a flavour base that the braise liquid will absorb. Remove the protein and cook your aromatics (onion, carrot, celery) in the same pot.",
      },
      {
        heading: "Build the braise liquid",
        body: "Add tomato paste and cook for 2 minutes until it darkens. Deglaze with red wine. Scrape the fond. Add stock until the liquid comes two-thirds up the sides of the protein — not covering it. Add herbs, bay leaves, and garlic.",
      },
      {
        heading: "The sustained simmer",
        body: "Set to 200°F temperature mode. Bring the pot to a gentle bubble — you should see one or two small bubbles breaking the surface at a time. Lid on. Check every 30 minutes. The Impulse will hold 200°F indefinitely — no oven required.",
      },
      {
        heading: "Testing doneness",
        body: "Most braises are done in 2–3 hours. Test by inserting a fork or skewer — it should slide in with zero resistance and pull out cleanly. Short ribs are done when the meat pulls away from the bone. Chicken thighs are done when the joint moves freely.",
      },
      {
        heading: "Finishing the sauce",
        body: "Remove the protein and keep warm. Strain the braising liquid through a fine sieve. Skim fat from the surface or use a fat separator. Reduce at 250°F for 15 minutes until glossy and coating. Adjust seasoning. This is your sauce.",
      },
    ],
    bestFor: ["Short ribs", "Lamb shanks", "Chicken thighs", "Pork shoulder", "Osso buco", "Beef cheek"],
    avoid: ["Quick cooks", "Delicate proteins", "High-heat searing (enamel can chip if thermally shocked)"],
  },
];
