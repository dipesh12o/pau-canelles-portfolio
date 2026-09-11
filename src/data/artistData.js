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

  aboutImages: {
    photo1: "/artworks/pau-canelles-hero-artwork.jpg",
    photo2: "/artworks/pau-canelles-hero-artwork.jpg",
    photo3: "/artworks/pau-canelles-hero-artwork.jpg",
    photo4: "/artworks/pau-canelles-hero-artwork.jpg",
    photo5: "/artworks/pau-canelles-hero-artwork.jpg",
    photo6: "/artworks/pau-canelles-hero-artwork.jpg"
  },

  aboutStory: {
    photoCaptions: {
      photo1: "PHOTO 1 — Portrait / photo of me with one of my artworks",
      photo2: "PHOTO 2 — Me working on a painting in the studio",
      photo3: "PHOTO 3 — Me working on one of my current paintings / surrounded by my work",
      photo4: "PHOTO 4 — Me painting a large-scale mural, preferably an image where the scale of the work is clearly visible",
      photo5: "PHOTO 5 — Me teaching / working during one of my creative workshops",
      photo6: "OPTIONAL FINAL PHOTO — Me in the studio surrounded by my work"
    },
    en: {
      pageTitle: "ABOUT",
      intro: "I’m Pau Canelles, a visual artist and muralist born in Onda, Castellón, in 1999.",
      sectionHeadings: [
        { number: "01", tag: "RETURN TO PAINTING", heading: "Childhood & Early Curiosities" },
        { number: "02", tag: "A DIFFERENT PATH", heading: "Education & Design" },
        { number: "03", tag: "REDISCOVERING PAINTING", heading: "Return at 21 & Materiality" },
        { number: "04", tag: "MATERIALITY & IDENTITY", heading: "Current Practice & Neoexpresivos" },
        { number: "05", tag: "BEYOND THE STUDIO", heading: "Murals & Public Space" },
        { number: "06", tag: "SHARING THE PROCESS", heading: "Art Education & Workshops" },
        { number: "07", tag: "ONE CONTINUOUS JOURNEY", heading: "Conclusion & Trajectory" }
      ],
      paragraphs: [
        "I didn’t always know that I wanted to dedicate myself to painting. In fact, for thirteen years, I didn’t paint at all. I used to draw and paint as a child, but around the age of eight I stopped completely and didn’t pick up a paintbrush again until I was 21.",
        "By then, my path had taken me in a different direction. I studied Industrial Design Engineering and later completed a Master’s degree in Design Team Management, an education that brought me closer to image-making, composition and creative processes from a different perspective.",
        "My development as a painter, however, has been self-taught, shaped through practice, experimentation and a continuous search for new ways of working with paint and materials.",
        "Returning to painting at 21 wasn’t about going back to a plan I had left unfinished. It was about rediscovering, as an adult, something that had been part of me a long time before. What began simply as a return to painting gradually took up more and more space, eventually becoming the centre of my professional life.",
        "Today, I develop my practice from Onda, working mainly with acrylic, oil and spray paint. Materiality plays a central role in my work: I build surfaces through layers, textures, volume and irregularities that become part of both the image and what I want to communicate through it.",
        "My work revolves primarily around the construction of identity and the way our experiences continuously reshape who we are. Our environment, relationships, experiences and the stimuli of contemporary life leave traces that accumulate, overlap and, in some way, remain with us.",
        "This exploration currently runs through my painting and particularly through Neoexpresivos, an evolving project in which I examine the identity of a generation that has grown up amid profound social, technological and cultural transformations.",
        "My practice has also progressively moved beyond the studio. Mural painting has allowed me to translate my visual language to a different scale and connect painting directly with architecture, public space and the people who experience it. These projects have led me to work on walls of very different scales and contexts, from large urban surfaces to projects connected with cultural and social spaces.",
        "Alongside my artistic practice, art education has become another part of my trajectory. Through creative workshops, I work with children and young people, sharing techniques and processes and using art as a space to experiment, make mistakes, discover and develop their own way of seeing.",
        "Painting, murals and education have ultimately become different parts of the same trajectory — one that did not begin in a straight line and that continues to transform alongside my own understanding of painting."
      ]
    },
    es: {
      pageTitle: "SOBRE MÍ",
      intro: "Soy Pau Canelles, artista visual y muralista nacido en Onda, Castellón, en 1999.",
      sectionHeadings: [
        { number: "01", tag: "RETORNO A LA PINTURA", heading: "Infancia y Primeras Inquietudes" },
        { number: "02", tag: "UN CAMINO DIFERENTE", heading: "Formación y Diseño" },
        { number: "03", tag: "REENCONTRARSE CON LA PINTURA", heading: "Volver a los 21 y la Materia" },
        { number: "04", tag: "MATERIALIDAD E IDENTIDAD", heading: "Práctica Actual y Neoexpresivos" },
        { number: "05", tag: "MÁS ALLÁ DEL ESTUDIO", heading: "Murales y Espacio Público" },
        { number: "06", tag: "COMPARTIR EL PROCESO", heading: "Educación Artística" },
        { number: "07", tag: "UNA MISMA TRAYECTORIA", heading: "Conclusión y Proceso" }
      ],
      paragraphs: [
        "No siempre tuve claro que quisiera dedicarme a la pintura. De hecho, durante trece años no pinté. Dibujaba y pintaba de niño, pero alrededor de los ocho años lo dejé por completo y no volví a coger los pinceles hasta los 21.",
        "Para entonces mi camino había ido en otra dirección. Estudié Ingeniería en Diseño Industrial y posteriormente un máster en Dirección de Equipos de Diseño, una formación que me acercó al mundo de la imagen, la composición y los procesos creativos desde una perspectiva diferente.",
        "Mi formación como pintor, sin embargo, ha sido autodidacta, construida a través de la práctica, la experimentación y la búsqueda constante de nuevas formas de trabajar con la pintura y los materiales.",
        "Volver a pintar a los 21 no fue retomar un plan que había dejado pendiente. Fue reencontrarme, ya de adulto, con algo que había formado parte de mí mucho tiempo atrás. Lo que comenzó como una vuelta a la pintura fue ocupando cada vez más espacio hasta terminar convirtiéndose en el centro de mi vida profesional.",
        "Actualmente desarrollo mi práctica desde Onda, trabajando principalmente con pintura acrílica, óleo y spray. La materialidad ocupa un lugar central en mi obra: construyo superficies marcadas por capas, texturas, volúmenes e irregularidades que forman parte tanto de la imagen como de aquello que quiero contar.",
        "Mi trabajo gira principalmente alrededor de la construcción de la identidad y de cómo aquello que vivimos va modificando quiénes somos. El entorno, las relaciones, las experiencias y los estímulos del presente dejan huellas que se acumulan, se superponen y, de alguna manera, permanecen.",
        "Esta investigación se desarrolla actualmente en mi obra pictórica y especialmente en Neoexpresivos, un proyecto en continuo crecimiento desde el que observo la identidad de una generación que ha crecido entre profundas transformaciones sociales, tecnológicas y culturales.",
        "Mi práctica también ha ido saliendo progresivamente del estudio. A través del mural he podido trasladar mi lenguaje a otra escala y relacionar la pintura directamente con la arquitectura, el espacio público y las personas que conviven con ella. Estos proyectos me han llevado a intervenir muros de diferentes formatos y contextos, desde grandes superficies urbanas hasta proyectos vinculados a espacios culturales y sociales.",
        "Paralelamente, otra parte de mi trayectoria ha estado vinculada a la educación artística. A través de talleres creativos trabajo con niños y jóvenes, compartiendo técnicas y procesos y utilizando el arte como un espacio para experimentar, equivocarse, descubrir y desarrollar una mirada propia.",
        "Pintura, mural y educación han acabado formando diferentes partes de una misma trayectoria. Una trayectoria que no comenzó de manera lineal y que continúa transformándose a medida que lo hace mi propia forma de entender la pintura."
      ]
    }
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
