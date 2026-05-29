export interface BasicGuide {
  slug: string;
  title: string;
  subtitle: string;
  readTime: number;
  content: { heading: string; body: string }[];
}

export const basics: BasicGuide[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    subtitle: "Everything you need to know before your first cook on the Impulse cooktop.",
    readTime: 5,
    content: [
      {
        heading: "Your first power-on",
        body: "Press and hold the power button on the 12.8\" display for two seconds. The cooktop will run a brief self-diagnostic and connect to your home network if configured. You'll see the four burner zones illuminate on the display. Each zone is independently controlled — you can run all four simultaneously at full power thanks to the integrated 3 kWh battery.",
      },
      {
        heading: "Understanding the knobs",
        body: "The passive magnetic knobs are not touch controls — they are physical rotary encoders that magnetically attach to any position on the front rail. Turn clockwise to increase power, counter-clockwise to decrease. Press down to toggle between power mode and precision temperature mode. In precision mode, you'll see the target temperature in °F on the display alongside the live surface reading.",
      },
      {
        heading: "Power mode vs. temperature mode",
        body: "Power mode (P1–P10) gives you raw wattage — useful for boiling, high-heat searing, and tasks where you want maximum energy delivery. Temperature mode gives you Active Temperature Sensing: the cooktop reads the pan surface in real time and modulates power to maintain your exact set point, accurate to within a single degree. For anything that requires precision — custards, caramel, tempering chocolate — always use temperature mode.",
      },
      {
        heading: "Cookware compatibility",
        body: "The Impulse uses induction technology, so your cookware needs to be ferromagnetic. A simple test: if a magnet sticks to the bottom of your pan, it works. Cast iron, carbon steel, enameled cast iron, and most stainless steel are all compatible. Copper, aluminum, and ceramic are not. The cooktop will display a \"No Pan Detected\" icon if it doesn't sense compatible cookware.",
      },
      {
        heading: "Cleaning",
        body: "The glass-ceramic surface wipes clean with a damp cloth. For stuck-on residue, use the included scraper at a 30° angle — never apply downward pressure. Avoid abrasive cleaners. The knobs detach for cleaning — pull straight up to remove, rinse, and snap back on.",
      },
    ],
  },
  {
    slug: "active-temperature-sensing",
    title: "Active Temperature Sensing",
    subtitle: "How the cooktop reads and maintains your pan temperature in real time.",
    readTime: 4,
    content: [
      {
        heading: "How it works",
        body: "Beneath each burner zone sits an array of infrared sensors that continuously measure the temperature of the pan's base. This reading is fed into a control loop that adjusts the induction coil's output power — dozens of times per second — to maintain your target temperature within ±1°F. Unlike conventional induction which runs the coil at fixed power levels, Impulse responds dynamically to what's actually happening in the pan.",
      },
      {
        heading: "Why this matters for cooking",
        body: "When you add cold food to a hot pan, a conventional cooktop can't compensate — the temperature drops and the food sits in a cooling pan until it recovers. With Active Temperature Sensing, the system detects the temperature drop immediately and ramps power to bring the surface back to your set point within seconds. The result: better browning, more even cooking, and consistent results across every cook.",
      },
      {
        heading: "Setting a target temperature",
        body: "Press the knob to enter temperature mode. Use the display to dial in your target — you can type a specific value using the touchscreen or scroll with the knob. Recommended starting points: 325°F for sautéing vegetables, 375°F for pan-searing protein, 400°F for a hard sear on steak. The system will show you live temperature as the pan heats, so you can see exactly when you're ready to cook.",
      },
      {
        heading: "Limits and edge cases",
        body: "The sensors read the pan base, not the cooking surface. In a tall pot of boiling water, the base temperature will read differently from the water temperature — use power mode for boiling tasks. Extremely thin or warped pans may cause unstable readings. Cast iron, with its high thermal mass, will take longer to reach set temperature but holds it exceptionally well once there.",
      },
    ],
  },
  {
    slug: "power-and-the-battery",
    title: "Power & the Battery",
    subtitle: "Understanding how the integrated 3 kWh battery delivers 10,000W per burner.",
    readTime: 3,
    content: [
      {
        heading: "What the battery does",
        body: "The Impulse cooktop has an integrated 3 kWh lithium battery built into the unit. This battery charges continuously from your wall outlet — 120V or 240V — and acts as a power reservoir. When you need a burst of heat (searing, rapid boiling), the battery delivers up to 10,000W per burner even if your wall connection couldn't sustain that draw alone. It's the same principle as a hybrid car: store energy slowly, release it quickly.",
      },
      {
        heading: "Why it's faster",
        body: "A standard gas burner delivers around 15,000–20,000 BTU, equivalent to roughly 4,400–5,900W. The Impulse burner peaks at 10,000W per zone — nearly double. More importantly, induction transfers energy directly to the pan with around 90% efficiency, versus gas at 40%. The result: water boils in under 40 seconds, and searing pans reach 450°F in under a minute.",
      },
      {
        heading: "Battery indicators",
        body: "The display shows a battery state indicator at all times. A full charge sustains four burners at medium power for approximately 45 minutes of continuous cooking. In typical mixed use — some high-heat searing, some simmering — the battery stays effectively topped up because the wall connection is always charging. You'll only see battery depletion during sustained, simultaneous high-power use on all four burners.",
      },
      {
        heading: "Installation",
        body: "Because the battery handles peak demand, you don't need a heavy-duty electrical upgrade. A standard 120V, 15A outlet works for installation. The cooktop will charge from it and sustain normal cooking. For faster battery recovery during intense use, a 240V connection is preferred but not required.",
      },
    ],
  },
  {
    slug: "cookware-guide",
    title: "Cookware Guide",
    subtitle: "The best pans for the Impulse cooktop and why each one excels.",
    readTime: 4,
    content: [
      {
        heading: "Carbon steel",
        body: "Carbon steel is the ideal pan for the Impulse. It's ferromagnetic, lightweight relative to cast iron, heats quickly, and develops a natural non-stick patina over time. Use it for searing proteins, stir-frying, and any task requiring rapid, high-heat cooking. Season with a thin layer of neutral oil before first use.",
      },
      {
        heading: "Cast iron",
        body: "Cast iron's high thermal mass pairs exceptionally well with Active Temperature Sensing. Set your temperature, wait for the pan to fully saturate (typically 5–7 minutes at medium heat), and you'll have a rock-stable cooking surface. Best for steaks, cornbread, roasting, and anything that benefits from sustained, even heat.",
      },
      {
        heading: "Enameled cast iron",
        body: "Enameled cast iron (Le Creuset, Staub, etc.) is compatible and excellent for braises, soups, and sauces. The enamel surface doesn't require seasoning and is easier to clean. Because the enamel adds a small thermal barrier, temperature readings may be slightly less precise — add a degree or two buffer for delicate work.",
      },
      {
        heading: "Stainless steel",
        body: "Most 18/10 stainless steel pans with a ferromagnetic base are compatible. Clad stainless (with an aluminum core) transfers heat evenly and works well for sauces, reductions, and sautéing. Avoid single-ply stainless on precision temperature tasks — it can create hot spots the sensors struggle to average.",
      },
      {
        heading: "What not to use",
        body: "Copper, pure aluminum, ceramic, and glass cookware are not compatible — induction requires a magnetic base. Some hard-anodized aluminum pans include a magnetic base plate and will work; check with the manufacturer. Non-stick pans with a ferromagnetic base work, but do not exceed 400°F — the coating degrades at high heat.",
      },
    ],
  },
];
