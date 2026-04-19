export const restaurantData = {
  name: "Lumière",
  tagline: "Culinary Artistry Redefined",
  description: "Experience world-class dining where every dish is a masterpiece. Our award-winning chefs craft each creation with precision, passion, and the finest ingredients.",
  badge: "Michelin Recommended",
  cta: {
    primary: "Reserve a Table",
    secondary: "View Menu"
  },
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ],
  stats: [
    { number: "15+", label: "Years" },
    { number: "100k+", label: "Guests" },
    { number: "4.9", label: "Rating" },
    { number: "3", label: "Michelin" }
  ],
  // Images sourced from Unsplash.com
// Hero: https://unsplash.com/photo-1414235077428-338989a2e8c0
// About: https://unsplash.com/photo-1600565193348-f74bd3c7ccdf
// Chef: https://unsplash.com/photo-1577219491135-ce391730fb2c
// Ingredients: https://unsplash.com/photo-1488459716781-31db52582fe9
// Wine: https://unsplash.com/photo-1510812431401-41d2bd2722f3
// Menu: https://unsplash.com/photos/1544025162-d76694265947, https://unsplash.com/photo-1467003909585-2f8a72700288, https://unsplash.com/photo-1551183053-bf91a1d81141, https://unsplash.com/photo-1470124182917-cc6e71b22ecc

  images: {
    hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    about: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=1200&q=80",
    chef: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80",
    ingredients: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80",
    wine: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
    wagyu: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    salmon: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
    pasta: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
    soufflé: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80",
      "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=800&q=80",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
    ]
  },
  features: [
    {
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80",
      title: "Master Chefs",
      description: "Our team of Michelin-starred chefs brings decades of expertise and creative vision to every dish."
    },
    {
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=800&q=80",
      title: "Farm Fresh",
      description: "We partner with local farms to source the finest seasonal ingredients for our menus."
    },
    {
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80",
      title: "Rare Wines",
      description: "Our cellar features over 800 wines from the world's most prestigious vineyards."
    }
  ],
  menu: [
    {
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
      name: "Wagyu Tenderloin",
      description: "A5 Japanese wagyu, black truffle, aged balsamic",
      price: "$185"
    },
    {
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800&q=80",
      name: "Mediterranean Branzino",
      description: "Wild caught, citrus herb crust, saffron risotto",
      price: "$62"
    },
    {
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
      name: "Black Truffle Risotto",
      description: "Alba truffles, aged parmesan, champagne foam",
      price: "$58"
    },
    {
      image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80",
      name: "Dark Chocolate Soufflé",
      description: "Valrhona 70%, vanilla bean ice cream",
      price: "$24"
    }
  ],
  menuCategories: [
    {
      name: "Starters",
      items: [
        { name: "Tuna Tartare", desc: "Fresh ahi tuna, avocado, sesame, citrus", price: "$28" },
        { name: "Foie Gras", desc: "Pan-seared, brioche, fig jam, port reduction", price: "$34" },
        { name: "Burrata", desc: "Creamy burrata, heirloom tomatoes, basil oil", price: "$22" },
        { name: "Oysters", desc: "Half dozen, mignonette, lemon", price: "$32" },
        { name: "Beef Carpaccio", desc: "Thinly sliced, truffle aioli, parmesan", price: "$26" },
        { name: "Soup du Jour", desc: "Chef's daily seasonal creation", price: "$16" }
      ]
    },
    {
      name: "Mains",
      items: [
        { name: "Wagyu Tenderloin", desc: "A5 Japanese wagyu, black truffle, aged balsamic", price: "$185" },
        { name: "Lobster Thermidor", desc: "Maine lobster, cognac cream, gruyère, rice", price: "$78" },
        { name: "Mediterranean Branzino", desc: "Wild caught, citrus herb crust, saffron risotto", price: "$62" },
        { name: "Duck Breast", desc: "Pan-seared, cherry gastrique, root vegetables", price: "$54" },
        { name: "Black Truffle Risotto", desc: "Alba truffles, aged parmesan, champagne foam", price: "$58" },
        { name: "Lamb Rack", desc: "Herb crusted, mint jus, asparagus", price: "$68" }
      ]
    },
    {
      name: "Desserts",
      items: [
        { name: "Chocolate Soufflé", desc: "Valrhona 70%, vanilla bean ice cream", price: "$24" },
        { name: "Crème Brûlée", desc: "Classic vanilla, caramelized sugar", price: "$18" },
        { name: "Tiramisu", desc: "Espresso, mascarpone, cocoa", price: "$20" },
        { name: "Cheese Selection", desc: "Artisanal cheeses, honeycomb, crackers", price: "$28" },
        { name: "Lemon Tart", desc: "Tangy lemon curd, meringue, berries", price: "$16" },
        { name: "Affogato", desc: "Vanilla gelato, espresso, amaretto", price: "$14" }
      ]
    }
  ],
  about: {
    title: "A Legacy of Excellence",
    description: "Since 2009, Savoria has been the pinnacle of fine dining, creating unforgettable culinary experiences that blend tradition with innovation.",
    values: [
      { title: "Passion", desc: "Every dish reflects our love for cuisine" },
      { title: "Precision", desc: "Technical excellence in every detail" },
      { title: "Hospitality", desc: "Warm, personalized service" }
    ]
  },
  testimonials: [
    {
      text: "An exceptional experience that transcends mere dining. The wagyu was transcendent, the service impeccable. Savoria sets the standard for fine dining.",
      author: "James Beard",
      role: "Food Critic",
      initials: "JB"
    },
    {
      text: "We've dined at the world's best restaurants, but Savoria's tasting menu is in a league of its own. A must-visit for any serious food lover.",
      author: "Sarah Michelin",
      role: "Guest",
      initials: "SM"
    },
    {
      text: "The attention to detail is remarkable. From the ambiance to the最后一 course, everything was orchestrated to perfection.",
      author: "Chef Marco",
      role: "Colleague",
      initials: "CM"
    }
  ],
  reservation: {
    title: "Book Your Experience",
    description: "Reserve your table for an unforgettable evening. For parties of 8+, please contact us directly.",
    cta: "Make Reservation"
  },
  footer: {
    description: "Where every meal becomes a cherished memory.",
    address: "450 Park Avenue",
    city: "New York, NY 10022",
    phone: "(212) 555-0188",
    email: "reservations@savoria.com",
    hours: [
      "Mon-Sun: 5:30PM - 10:30PM",
      "Happy Hour: 5:30PM - 7PM"
    ],
    social: [
      { icon: "F", label: "Facebook" },
      { icon: "IG", label: "Instagram" },
      { icon: "X", label: "Twitter" }
    ]
  },
  year: new Date().getFullYear()
};