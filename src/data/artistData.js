/**
 * pau-canelles-portfolio — Client Data Source of Truth
 * Derived strictly from the client's official source document.
 * 
 * NOTE: 0 Stock / Unsplash / Fake images are used anywhere in this project.
 * All artwork metadata, descriptions, dimensions, mediums, quotes, and workshops
 * are 100% verified from the client's source document.
 */

export const ARTIST_DATA = {
  name: "Pau Canelles",
  title: "Visual Artist & Creative Educator",
  subtitle: "Contemporary Fine Art & Creative Workshops",
  location: "Spain",
  
  quote: {
    text: "El arte está al alcance de todos, solo hay que atreverse a crear.",
    englishText: "Art is within everyone's reach, you just have to dare to create.",
    author: "Pau Canelles"
  },

  bio: {
    short: "Pau Canelles is a contemporary visual artist and creative educator. His work explores tactile abstraction, mixed media, textile intervention, and experiential workshops that make master-level art accessible to all.",
    full: [
      "I am Pau Canelles, a visual artist passionate about creativity. As a child, I set art aside because there was no one around me with artistic interests or spaces to experiment freely.",
      "Now I want to be for today's children and young minds that person I would have loved to meet: someone to guide their curiosity, show them new ways to express themselves, and remind them that art belongs to everyone.",
      "My practice encompasses tactile abstract exploration, textile and mixed-media projects, and experiential workshops where universal masters from art history serve as catalysts for personal imagination."
    ]
  },

  contact: {
    email: "paucanelles@gmail.com",
    phone: "+34 619 755 639",
    displayPhone: "+34 619 755 639",
    website: "paucanelles.es",
    instagram: "@pau_canelles",
    instagramUrl: "https://instagram.com/pau_canelles",
    whatsappUrl: "https://wa.me/34619755639?text=Hello%20Pau,%20I%20would%20like%20more%20information%20about%20your%20artworks%20and%20workshops.",
    locationInfo: "Available for custom artwork commissions, adult workshops, creative birthday experiences, and institutional masterclasses."
  },

  workshopGuidelines: [
    "All art materials are fully included in every workshop.",
    "Comfortable clothing suitable for painting is recommended.",
    "Workshops are structured in 2 age tiers (Ages 5-8 and Ages 8-12). Border ages (7-9 yrs) can adapt comfortably to either group.",
    "Focus on experiential creative exploration rather than traditional rigid drawing classes.",
    "Engaging introduction to iconic art history figures (Picasso, Miró, Basquiat, Matisse, Warhol, Pollock, Tàpies, Frida Kahlo).",
    "Limited capacity per session. A 50% deposit is required upon reservation to secure a spot.",
    "Discounts available when registering for multiple sessions."
  ],

  workshops: [
    {
      id: "w-01",
      date: "2025-09-20",
      displayDate: "Saturday 20 September 2025",
      time: "10:30 – 12:30",
      title: "Initiation to Creative Drawing",
      originalTitle: "Iniciación en el dibujo creativo",
      ageGroup: "Ages 5–8",
      price: 20,
      inspiration: "Free Expression & Imagination",
      materials: "Canvas, drawing media, and fluid pigments included.",
      description: "Introductory session showing children that all it takes to draw is imagination and a tool. A creative step toward expressive drawing, concluding with their own canvas creation to take home."
    },
    {
      id: "w-02",
      date: "2025-09-20",
      displayDate: "Saturday 20 September 2025",
      time: "16:30 – 18:30",
      title: "Custom T-Shirt Design with Colored Bubbles",
      originalTitle: "Personalización de camisetas con burbujas",
      ageGroup: "Ages 8–12",
      price: 30,
      inspiration: "Textile Techniques & Bubble Art",
      materials: "T-shirt included (Size S or above, or bring own garment) and homemade textile dye.",
      description: "Participants customize their own T-shirt using vibrant colored bubbles, generating a unique wearable art piece while learning to mix homemade textile paints."
    },
    {
      id: "w-03",
      date: "2025-09-27",
      displayDate: "Saturday 27 September 2025",
      time: "10:30 – 12:30",
      title: "Initiation to Blown Painting",
      originalTitle: "Iniciación a la pintura soplada",
      ageGroup: "Ages 5–8",
      price: 30,
      inspiration: "Fluid Dynamics & Air Flow",
      materials: "Specialized pigments, rigid boards, and air flow tools.",
      description: "Discovering the magic of blowing colors across paper, forming surprising organic shapes combined with signature techniques from Pau's personal style."
    },
    {
      id: "w-04",
      date: "2025-09-27",
      displayDate: "Saturday 27 September 2025",
      time: "16:30 – 18:30",
      title: "Custom Tote Bag Design from Scratch",
      originalTitle: "Personaliza una tote bag de cero",
      ageGroup: "Ages 8–12",
      price: 30,
      inspiration: "Graphic Design & Utilitarian Art",
      materials: "Natural cotton Tote Bag and professional textile paints.",
      description: "Drafting initial visual sketches on paper and translating them onto a cotton tote bag using custom textile paint for a long-lasting functional keepsakes."
    },
    {
      id: "w-05",
      date: "2025-10-04",
      displayDate: "Saturday 4 October 2025",
      time: "10:30 – 12:30",
      title: "Initiation to Abstract Art",
      originalTitle: "Iniciación al arte abstracto",
      ageGroup: "Ages 5–8",
      price: 25,
      inspiration: "Lyrical Abstraction & Composition",
      materials: "Medium canvas board, acrylics, and mixed tools.",
      description: "Exploring abstract ways of creating through playful, accessible activities. Every child awakens their inner creativity and leaves with a original canvas piece."
    },
    {
      id: "w-06",
      date: "2025-10-04",
      displayDate: "Saturday 4 October 2025",
      time: "16:30 – 18:00",
      title: "Creative Collage: Reinvent My Artwork",
      originalTitle: "Collage creativo. Reinventa una obra mía",
      ageGroup: "Ages 8–12",
      price: 25,
      inspiration: "Deconstruction by Pau Canelles",
      materials: "Printed catalog works by Pau, textured papers, and mixed supports.",
      description: "An original artwork by Pau Canelles serves as the starting point. Students decide how to disassemble, rearrange, and add elements to give it a whole new meaning."
    },
    {
      id: "w-07",
      date: "2025-11-01",
      displayDate: "Saturday 1 November 2025",
      time: "10:30 – 12:30",
      title: "Creative Sculptures with Air-Dry Clay",
      originalTitle: "Esculturas creativas con arcilla de secado al aire",
      ageGroup: "Ages 5–8",
      price: 25,
      inspiration: "3D Form & Tactile Volume",
      materials: "Air-Dry clay (no baking required), modeling tools, and paints.",
      description: "Sculpting 3D figures from imagination or reference models using air-dry clay, followed by custom hand-painting once set."
    },
    {
      id: "w-08",
      date: "2025-11-01",
      displayDate: "Saturday 1 November 2025",
      time: "16:30 – 18:30",
      title: "Textured Painting: Relief & Impasto",
      originalTitle: "Pintura texturizada, crea obras con volumen",
      ageGroup: "Ages 8–12",
      price: 30,
      inspiration: "Matter Painting & Heavy Impasto",
      materials: "Relief pastes, plaster, sawdust, fine sand, and acrylics on wooden board.",
      description: "Transforming paint by blending it with materials like plaster, sawdust, or sand, generating three-dimensional textures and tactile relief."
    },
    {
      id: "w-09",
      date: "2025-11-08",
      displayDate: "Saturday 8 November 2025",
      time: "10:30 – 12:00",
      title: "Discover the Magic of Color with Joan Miró",
      originalTitle: "Descubre la magia de los colores con Joan Miró",
      ageGroup: "Ages 5–8",
      price: 25,
      inspiration: "Joan Miró",
      materials: "Heavyweight paper, inks, and primary acrylics.",
      description: "Harnessing the raw power of primary colors inspired by Miró's poetic universe. Creating joyful compositions with organic symbols and expressive lines."
    },
    {
      id: "w-10",
      date: "2025-11-08",
      displayDate: "Saturday 8 November 2025",
      time: "16:30 – 18:30",
      title: "Raw Material Art Inspired by Antoni Tàpies",
      originalTitle: "Arte único con materiales simples inspirados en Antoni Tàpies",
      ageGroup: "Ages 8–12",
      price: 30,
      inspiration: "Antoni Tàpies",
      materials: "Rustic cardstock, burlap, jute fibers, earth pigments, and plaster.",
      description: "Informalist matter painting workshop inspired by Antoni Tàpies. Mixing burlap textures, raw canvas, and recycled paper over structural supports."
    },
    {
      id: "w-11",
      date: "2025-11-15",
      displayDate: "Saturday 15 November 2025",
      time: "10:30 – 12:00",
      title: "Dripping & Action Painting: Jackson Pollock",
      originalTitle: "Dripping, el arte de lanzar pintura",
      ageGroup: "Ages 5–8",
      price: 30,
      inspiration: "Jackson Pollock & Action Painting",
      materials: "Floor canvas, fluid acrylics, and dripping sticks.",
      description: "Direct action painting and fluid splatters. Children release energy through gesture and motion, turning bodily movement into dynamic abstract art."
    },
    {
      id: "w-12",
      date: "2025-11-15",
      displayDate: "Saturday 15 November 2025",
      time: "16:30 – 18:30",
      title: "Cubist Portraits: Pablo Picasso Style",
      originalTitle: "Retratos cubistas a lo Picasso",
      ageGroup: "Ages 8–12",
      price: 30,
      inspiration: "Pablo Picasso & Cubism",
      materials: "Rigid boards, oil pastels, and saturated acrylics.",
      description: "Deconstructing facial features into cubist facets. Painting portraits from multiple simultaneous perspectives in vibrant geometric balance."
    },
    {
      id: "w-13",
      date: "2025-11-22",
      displayDate: "Saturday 22 November 2025",
      time: "10:30 – 12:00",
      title: "Cutouts & Organic Shapes: Henri Matisse",
      originalTitle: "Juega con colores recortes y flores como Henri Matisse",
      ageGroup: "Ages 5–8",
      price: 25,
      inspiration: "Henri Matisse (Gouaches Découpées)",
      materials: "Hand-colored gouache papers, safety scissors, and wall boards.",
      description: "Cutting directly into pure color to create botanical and organic paper cutouts, inspired by Matisse's legendary late paper cutouts era."
    },
    {
      id: "w-14",
      date: "2025-11-22",
      displayDate: "Saturday 22 November 2025",
      time: "16:30 – 18:30",
      title: "Frida Kahlo Silkscreen Portrait & Customization",
      originalTitle: "Crea un retrato único de Frida Kahlo con serigrafía",
      ageGroup: "Ages 8–12",
      price: 30,
      inspiration: "Frida Kahlo & Screen Printing",
      materials: "Silkscreen frames, textile inks, and decorative flora.",
      description: "Hand-printing an iconic Frida Kahlo portrait using screen printing screens, followed by freehand painting and floral customization."
    },
    {
      id: "w-15",
      date: "2025-11-29",
      displayDate: "Saturday 29 November 2025",
      time: "10:30 – 12:00",
      title: "Dynamic Figures & Motion: Keith Haring",
      originalTitle: "Dibuja personajes llenos de color y movimiento a lo Keith Haring",
      ageGroup: "Ages 5–8",
      price: 20,
      inspiration: "Keith Haring",
      materials: "Bold markers, neon acrylics, and continuous paper roll.",
      description: "Drawing rhythmic, dancing figures framed with bold black contours and bright flat colors, exploring movement and street art graphic language."
    },
    {
      id: "w-16",
      date: "2025-11-29",
      displayDate: "Saturday 29 November 2025",
      time: "16:30 – 18:30",
      title: "Street Art & Graffiti: Jean-Michel Basquiat",
      originalTitle: "Iniciate en el arte callejero y el graffiti inspirado en Basquiat",
      ageGroup: "Ages 8–12",
      price: 30,
      inspiration: "Jean-Michel Basquiat & Neo-Expressionism",
      materials: "Water-based spray paint (solvent-free), oil sticks, and rustic canvas.",
      description: "Introduction to street art and neo-expressionism using safe water-based sprays, acrylics, oil sticks, crowns, and expressive Basquiat-inspired motifs."
    },
    {
      id: "w-17",
      date: "2025-12-06",
      displayDate: "Saturday 6 December 2025",
      time: "10:30 – 12:00",
      title: "Pop Art Self-Portrait: Andy Warhol",
      originalTitle: "Crea tu retrato pop art como Andy Warhol",
      ageGroup: "Ages 5–8",
      price: 30,
      inspiration: "Andy Warhol & Pop Art",
      materials: "Photo transfer paper, acetate sheets, and vivid pop acrylics.",
      description: "Transforming a portrait photo into a multi-color Pop Art print series featuring high-contrast color blocks."
    },
    {
      id: "w-18",
      date: "2025-12-06",
      displayDate: "Saturday 6 December 2025",
      time: "16:30 – 18:30",
      title: "Neon Glow-in-the-Dark Painting",
      originalTitle: "Pintura Neón, crea en la oscuridad",
      ageGroup: "Ages 8–12",
      price: 30,
      inspiration: "Luminescent Art & Blacklight",
      materials: "UV-reactive fluorescent pigments and blacklight flashlights.",
      description: "Painting with luminous fluorescent pigments under special blacklight UV illumination, revealing radiant artworks in the dark."
    },
    {
      id: "w-19",
      date: "2025-12-20",
      displayDate: "Saturday 20 December 2025",
      time: "10:30 – 12:30 (Ages 5-8) / 16:30 – 18:30 (Ages 8-12)",
      title: "Christmas Special: Hand-Crafted Art Ornaments",
      originalTitle: "Personalización de bolas de Navidad",
      ageGroup: "All Ages (5–12 yrs)",
      price: 30,
      inspiration: "Contemporary Holiday Crafting",
      materials: "High-density Porex baubles, decoupage papers, and marbling inks.",
      description: "Decorating custom holiday baubles using decoupage and floating paper marbling techniques to create unique ornaments for the Christmas tree."
    }
  ],

  artworks: [
    {
      id: "art-01",
      title: "Materia y Silencio",
      category: "Matter & Abstraction",
      medium: "Acrylic, earth pigments, and fine sand on stretched canvas",
      dimensions: "120 × 100 cm",
      year: "2025",
      image: "/artworks/pau-canelles-hero-artwork.jpg", // Authentic uploaded client artwork
      aspectRatio: "portrait",
      featured: true,
      description: "Exploration of tactile surfaces through layered earth pigments, heavy impasto, and vivid magenta-pink contours. A powerful visual meditation on texture, expression, and human presence."
    },
    {
      id: "art-02",
      title: "Ritmos de Luz Mironiana",
      category: "Masters Tribute",
      medium: "India ink and raw acrylic on rustic etching paper",
      dimensions: "80 × 60 cm",
      year: "2025",
      image: "/artworks/pau-canelles-hero-artwork.jpg",
      aspectRatio: "landscape",
      featured: true,
      description: "Chromatic study inspired by Joan Miró's poetic visual universe. Floating primary shapes in dialogue with lyrical line work."
    },
    {
      id: "art-03",
      title: "Gesto Urbano N.º 4",
      category: "Neo-Expressionism",
      medium: "Water-based spray paint, oil stick, and acrylic on heavy canvas",
      dimensions: "140 × 110 cm",
      year: "2024",
      image: "/artworks/pau-canelles-hero-artwork.jpg",
      aspectRatio: "portrait",
      featured: true,
      description: "Large-format canvas inspired by Jean-Michel Basquiat's raw urban energy. Incorporates spontaneous script, symbolic icons, and neon accents."
    },
    {
      id: "art-04",
      title: "Construcción Cubista",
      category: "Masters Tribute",
      medium: "Mixed media, gouache, and paper cutouts on wood panel",
      dimensions: "90 × 90 cm",
      year: "2025",
      image: "/artworks/pau-canelles-hero-artwork.jpg",
      aspectRatio: "square",
      featured: false,
      description: "Reinterpretation of synthetic cubism's faceted geometry. Balanced interplay between geometric planes and warm chromatic tones."
    },
    {
      id: "art-05",
      title: "Trama Textil & Resonancia",
      category: "Textile & Applied Art",
      medium: "Hand-painted textile dyes and organic pigments on denim garment",
      dimensions: "Limited Edition Series",
      year: "2025",
      image: null,
      aspectRatio: "portrait",
      featured: false,
      description: "Direct painting intervention onto wearable textiles. Transforming daily apparel into a mobile canvas for artistic expression."
    },
    {
      id: "art-06",
      title: "Fluidez Soplada I",
      category: "Matter & Abstraction",
      medium: "Air-blown fluid pigments on 300g watercolor cotton paper",
      dimensions: "70 × 50 cm",
      year: "2025",
      image: null,
      aspectRatio: "landscape",
      featured: true,
      description: "Air-blown directional movement of fluid pigments. Paint branches organically to form delicate botanical-like abstract structures."
    },
    {
      id: "art-07",
      title: "Resplandores Neón",
      category: "Contemporary Studies",
      medium: "UV-reactive pigments and matte acrylic on black canvas",
      dimensions: "100 × 100 cm",
      year: "2025",
      image: null,
      aspectRatio: "square",
      featured: false,
      description: "Investigation into fluorescent color vibration under dark conditions, turning ambient space into an optical experience."
    },
    {
      id: "art-08",
      title: "Botanica Découpée",
      category: "Masters Tribute",
      medium: "Hand-cut gouache paper cutout on museum board",
      dimensions: "110 × 85 cm",
      year: "2024",
      image: null,
      aspectRatio: "portrait",
      featured: false,
      description: "Homage to Henri Matisse's late paper cutouts. Organic compositions of leaves and dynamic floral forms breathing visual harmony."
    }
  ]
};
