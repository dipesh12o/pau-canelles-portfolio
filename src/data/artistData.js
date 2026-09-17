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
    text: "Cada experiencia es una capa. Debajo de quienes somos, siguen estando quienes fuimos.",
    author: "Pau Canelles"
  },

  heroArtwork: {
    id: "art-hero",
    title: "Materia y Silencio",
    category: "Matter & Abstraction",
    medium: "Acrylic, earth pigments, and fine sand on stretched canvas",
    dimensions: "120 × 100 cm",
    year: "2025",
    image: "/artworks/home-pau-studio.webp",
    aspectRatio: "portrait",
    featured: true,
    description: "Exploration of tactile surfaces through layered earth pigments, heavy impasto, and vivid magenta-pink contours. A powerful visual meditation on texture, expression, and human presence."
  },

  aboutImages: {
    photo1: "/about/about-pau-easel.webp",
    photo2: "/about/about-pau-studio-artworks.webp",
    photo3: "/about/about-pau-portrait-smile.webp",
    photo4: "/about/about-pau-easel-side.webp"
  },

  aboutStory: {
    photoCaptions: {
      photo1: "Portrait / photo of Pau with one of his artworks",
      photo2: "Pau working on a painting in the studio",
      photo3: "Pau painting a large-scale mural",
      photo4: "Pau teaching / working during a creative art workshop"
    },
    en: {
      pageTitle: "ABOUT",
      paragraphs: [
        "I’m Pau Canelles, a visual artist and muralist born in Onda, Castellón, in 1999. My relationship with painting has never followed a linear path. After painting and drawing throughout my childhood, I spent thirteen years away from the paintbrush before rediscovering painting at the age of 21. I studied Industrial Design Engineering and later completed a Master’s degree in Design Team Management, an education that brought me closer to the world of image, colour, composition and creative processes from a different perspective. My development as a painter, however, has been primarily self-taught, shaped through practice, curiosity and experimentation.",
        "Today, I develop my practice from Onda, working mainly with oil, acrylic and spray paint across different surfaces. Materiality plays a central role in my work, with some pieces featuring reliefs up to four centimetres thick. Layers, textures, volumes and irregularities accumulate across the surface until faces begin to emerge from the material itself.",
        "My work primarily explores the construction of identity and the way experiences, relationships and our surroundings leave traces that reshape who we are. This relationship between accumulation and identity is reflected in the physical construction of my paintings, where different layers gradually come together to form human features. This exploration currently takes shape in Neoexpresivos, an evolving project focused on the identity of a generation shaped by profound social, technological and cultural transformations.",
        "My practice also extends into mural painting, where I shift the question of identity from the individual to the territory, exploring the elements, symbols and stories that contribute to the collective identity of a place. Alongside my artistic practice, I also run creative art workshops for children and adults, approaching art as a space to experiment, discover and develop one’s own way of seeing."
      ]
    },
    es: {
      pageTitle: "SOBRE MÍ",
      paragraphs: [
        "Soy Pau Canelles, artista visual y muralista nacido en Onda, Castellón, en 1999. Mi relación con la pintura no ha seguido un camino lineal. Después de pintar y dibujar durante mi infancia, pasé trece años alejado de los pinceles hasta reencontrarme con ellos a los 21. Estudié Ingeniería en Diseño Industrial y posteriormente un Máster en Dirección de Equipos de Diseño, una formación que me acercó al mundo de la imagen, el color, la composición y los procesos creativos desde una perspectiva diferente. Mi formación como pintor, sin embargo, ha sido principalmente autodidacta, construida desde la práctica, la curiosidad y la experimentación.",
        "Actualmente desarrollo mi práctica desde Onda, trabajando principalmente con óleo, acrílico y spray sobre diferentes soportes. La materialidad ocupa un lugar central en mi obra, llegando a construir piezas con relieves de hasta cuatro centímetros de grosor. Capas, texturas, volúmenes e irregularidades se acumulan sobre la superficie hasta dar forma a rostros que emergen de la propia materia.",
        "Mi trabajo explora principalmente la construcción de la identidad y cómo las experiencias, las relaciones y el entorno van dejando huellas que modifican quiénes somos. Esta relación entre acumulación e identidad se traslada a la propia construcción de mis pinturas, donde los diferentes estratos terminan configurando rasgos humanos. Esta investigación toma forma actualmente en Neoexpresivos, un proyecto en continuo crecimiento centrado en la identidad de una generación atravesada por profundas transformaciones sociales, tecnológicas y culturales.",
        "Mi práctica se extiende también al muralismo, donde traslado la cuestión de la identidad del individuo al territorio y exploro aquellos elementos, símbolos e historias que construyen la identidad colectiva de un lugar. Paralelamente, desarrollo talleres de educación artística con niños y adultos, entendiendo el arte como un espacio para experimentar, descubrir y desarrollar una mirada propia."
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

  artworks: [
    {
      id: "art-completo",
      title: "Así fué",
      subtitle: "Lo que queda",
      category: "Matter & Abstraction",
      technique: "Acrílico, óleo, escayola y arena sobre panel XPS",
      medium: "Acrílico, óleo, escayola y arena sobre panel XPS",
      dimensions: "125x60 cm",
      year: "2026",
      edition: "Pieza única",
      image: "/artworks/completo.webp",
      detailImages: [
        "/artworks/asi-fue.webp",
        "/artworks/asi-fue-detail-1.webp",
        "/artworks/asi-fue-detail-2.webp"
      ],
      images: [
        "/artworks/completo.webp",
        "/artworks/asi-fue.webp",
        "/artworks/asi-fue-detail-1.webp",
        "/artworks/asi-fue-detail-2.webp"
      ],
      aspectRatio: "landscape",
      featured: true
    },
    {
      id: "art-completo-mini",
      title: "Mientras todo pasaba",
      subtitle: "La mirada de quien no podia hacer nada",
      category: "Matter & Abstraction",
      technique: "Óleo y acrílico sobre lienzo",
      medium: "Óleo y acrílico sobre lienzo",
      dimensions: "50x76 cm",
      year: "2026",
      edition: "Pieza única",
      image: "/artworks/completo-mini.webp",
      detailImages: [
        "/artworks/mientras-todo-pasaba-detail-1.webp",
        "/artworks/mientras-todo-pasaba-detail-2.webp"
      ],
      images: [
        "/artworks/completo-mini.webp",
        "/artworks/mientras-todo-pasaba-detail-1.webp",
        "/artworks/mientras-todo-pasaba-detail-2.webp"
      ],
      aspectRatio: "square",
      featured: true
    },
    {
      id: "art-corona-de-espinas",
      title: "Corona de espinas",
      subtitle: "Hastío o te ostio",
      category: "Masters Tribute",
      technique: "Acrílico, óleo, spray y arena sobre lienzo",
      medium: "Acrílico, óleo, spray y arena sobre lienzo",
      dimensions: "70x52 cm",
      year: "2026",
      edition: "Pieza única",
      image: "/artworks/corona-de-espinas-completo.webp",
      detailImages: [
        "/artworks/corona-de-espinas-detail-1.webp",
        "/artworks/corona-de-espinas-detail-2.webp",
        "/artworks/corona-de-espinas-detail-3.webp",
        "/artworks/corona-de-espinas-detail-4.webp"
      ],
      images: [
        "/artworks/corona-de-espinas-completo.webp",
        "/artworks/corona-de-espinas-detail-1.webp",
        "/artworks/corona-de-espinas-detail-2.webp",
        "/artworks/corona-de-espinas-detail-3.webp",
        "/artworks/corona-de-espinas-detail-4.webp"
      ],
      aspectRatio: "square",
      featured: true
    },
    {
      id: "art-empachamama",
      title: "Empacha mama",
      category: "Neo-Expressionism",
      technique: "Óleo, spray y acrílico sobre lienzo",
      medium: "Óleo, spray y acrílico sobre lienzo",
      dimensions: "90x72 cm",
      year: "2026",
      edition: "Pieza única",
      image: "/artworks/empachamama-completo.webp",
      detailImages: [
        "/artworks/empachamama-detail-1.webp",
        "/artworks/empachamama-detail-2.webp"
      ],
      images: [
        "/artworks/empachamama-completo.webp",
        "/artworks/empachamama-detail-1.webp",
        "/artworks/empachamama-detail-2.webp"
      ],
      aspectRatio: "portrait",
      featured: true
    },
    {
      id: "art-entre-rabia-y-pena",
      title: "Entre rabia y pena",
      subtitle: "Brecha",
      category: "Neo-Expressionism",
      technique: "Óleo, spray, yeso y acrílico sobre panel de XPS",
      medium: "Óleo, spray, yeso y acrílico sobre panel de XPS",
      dimensions: "125x60x4 cm",
      year: "2026",
      edition: "Pieza única",
      image: "/artworks/entre-rabia-y-pena.webp",
      detailImages: [
        "/artworks/entre-rabia-y-pena-detail-1.webp",
        "/artworks/entre-rabia-y-pena-detail-2.webp",
        "/artworks/entre-rabia-y-pena-detail-3.webp"
      ],
      images: [
        "/artworks/entre-rabia-y-pena.webp",
        "/artworks/entre-rabia-y-pena-detail-1.webp",
        "/artworks/entre-rabia-y-pena-detail-2.webp",
        "/artworks/entre-rabia-y-pena-detail-3.webp"
      ],
      aspectRatio: "portrait",
      featured: true
    },
    {
      id: "art-fragil",
      title: "Frágil",
      category: "Tactile Abstraction",
      technique: "Óleo, spray y acrílico sobre tabla",
      medium: "Óleo, spray y acrílico sobre tabla",
      dimensions: "40x80 cm",
      year: "2026",
      edition: "Pieza única",
      image: "/artworks/fragil.webp",
      detailImages: [
        "/artworks/fragil-detail-1.webp",
        "/artworks/fragil-detail-2.webp",
        "/artworks/fragil-detail-3.webp"
      ],
      images: [
        "/artworks/fragil.webp",
        "/artworks/fragil-detail-1.webp",
        "/artworks/fragil-detail-2.webp",
        "/artworks/fragil-detail-3.webp"
      ],
      aspectRatio: "portrait",
      featured: true
    },
    {
      id: "art-pienso-en-mi-pension",
      title: "Pienso en mi pensión",
      subtitle: "El papá Noel de los trabajadores",
      category: "Neo-Expressionism",
      technique: "Acrílico, óleo y arena sobre lienzo",
      medium: "Acrílico, óleo y arena sobre lienzo",
      dimensions: "70x59 cm",
      year: "2026",
      finish: "Barniz satinado",
      edition: "Pieza única",
      description: "Me resulta especialmente frustrante observar un sistema de pensiones cuya sostenibilidad se enfrenta a una pirámide poblacional cada vez más desequilibrada. Crecer contribuyendo a un sistema más aumenta la incertidumbre sobre si nosotros podremos beneficiarnos de él algún día, genera una mezcla de rabia, impotencia y desconfianza hacia el futuro.",
      image: "/artworks/pienso-en-mi-pension.webp",
      detailImages: [
        "/artworks/pienso-en-mi-pension-detail-1.webp"
      ],
      images: [
        "/artworks/pienso-en-mi-pension.webp",
        "/artworks/pienso-en-mi-pension-detail-1.webp"
      ],
      aspectRatio: "portrait",
      featured: true
    },
    {
      id: "art-dsc-1360",
      title: "Retrato abrupto 3",
      subtitle: "N/A",
      category: "Neo-Expressionism",
      technique: "Óleo, spray, yeso y acrílico sobre panel de XPS",
      medium: "Óleo, spray, yeso y acrílico sobre panel de XPS",
      dimensions: "125x60x4 cm",
      year: "2026",
      edition: "Pieza única",
      image: "/artworks/dsc-1360.webp",
      detailImages: [
        "/artworks/retrato-abrupto-3-detail-1.webp",
        "/artworks/retrato-abrupto-3-detail-2.webp"
      ],
      images: [
        "/artworks/dsc-1360.webp",
        "/artworks/retrato-abrupto-3-detail-1.webp",
        "/artworks/retrato-abrupto-3-detail-2.webp"
      ],
      aspectRatio: "portrait",
      featured: true
    },
    {
      id: "art-dsc-1370",
      title: "Retrato abrupto 2",
      subtitle: "N/A",
      category: "Matter & Abstraction",
      technique: "Óleo, spray, yeso y acrílico sobre panel de XPS",
      medium: "Óleo, spray, yeso y acrílico sobre panel de XPS",
      dimensions: "125x60x4 cm",
      year: "2026",
      edition: "Pieza única",
      image: "/artworks/dsc-1370.webp",
      detailImages: [
        "/artworks/retrato-abrupto-2-detail-1.webp",
        "/artworks/retrato-abrupto-2-detail-2.webp",
        "/artworks/retrato-abrupto-2-detail-3.webp"
      ],
      images: [
        "/artworks/dsc-1370.webp",
        "/artworks/retrato-abrupto-2-detail-1.webp",
        "/artworks/retrato-abrupto-2-detail-2.webp",
        "/artworks/retrato-abrupto-2-detail-3.webp"
      ],
      aspectRatio: "portrait",
      featured: true
    },
    {
      id: "art-retratos-abruptos-1-amarillo",
      title: "Retrato abrupto 1",
      subtitle: "N/A",
      category: "Matter & Abstraction",
      technique: "Óleo, spray, yeso y acrílico sobre panel de XPS",
      medium: "Óleo, spray, yeso y acrílico sobre panel de XPS",
      dimensions: "125x60x4 cm",
      year: "2026",
      edition: "Pieza única",
      image: "/artworks/retratos-abruptos-1-amarillo.webp",
      detailImages: [
        "/artworks/retrato-abrupto-1-detail-1.webp",
        "/artworks/retrato-abrupto-1-detail-2.webp",
        "/artworks/retrato-abrupto-1-detail-3.webp"
      ],
      images: [
        "/artworks/retratos-abruptos-1-amarillo.webp",
        "/artworks/retrato-abrupto-1-detail-1.webp",
        "/artworks/retrato-abrupto-1-detail-2.webp",
        "/artworks/retrato-abrupto-1-detail-3.webp"
      ],
      aspectRatio: "portrait",
      featured: true
    }
  ]
};
