import type { Product } from '../context/CartContext';

export const products: Product[] = [
  // Power Tools
  {
    id: 'impact-wrench-1',
    name: 'Professional Impact Wrench Set',
    image: 'https://ugc.same-assets.com/g5BhPlY_MQOfq_4CXo6TIWpRcBK9CLz5.jpeg',
    price: 299.99,
    originalPrice: 399.99,
    rating: 4.8,
    reviews: 127,
    category: 'Power Tools',
    description: 'High-torque impact wrench with 10-piece socket set. Perfect for automotive and heavy-duty applications.'
  },
  {
    id: 'drill-set-1',
    name: 'Milwaukee M18 Drill/Impact Driver Combo',
    image: 'https://ugc.same-assets.com/uCpm4l9nQ3pRsq5UWoi5e1_1QNUON41y.jpeg',
    price: 249.99,
    originalPrice: 329.99,
    rating: 4.9,
    reviews: 89,
    category: 'Power Tools',
    description: '18V Lithium-Ion cordless drill and impact driver combo kit with two batteries and charger.'
  },
  {
    id: 'bosch-kit-1',
    name: 'Bosch 18V 2-Tool Combo Kit',
    image: 'https://ugc.same-assets.com/ZpzNwTQkB0C75wkJqI3feyLER4ULoqNt.jpeg',
    price: 199.99,
    originalPrice: 269.99,
    rating: 4.7,
    reviews: 156,
    category: 'Power Tools',
    description: 'Connected-ready drill driver and impact driver with CORE18V batteries.'
  },

  // Diagnostic Tools
  {
    id: 'obd2-scanner-1',
    name: 'Advanced OBD2 Diagnostic Scanner',
    image: 'https://ugc.same-assets.com/0LwoDphYFBnl1QJVhTnsc9yjUbeHLyrp.jpeg',
    price: 189.99,
    originalPrice: 249.99,
    rating: 4.9,
    reviews: 89,
    category: 'Diagnostic Tools',
    description: 'Professional OBD2 scanner with live data, freeze frame, and I/M readiness for all vehicles.'
  },
  {
    id: 'thinkcar-evd',
    name: 'ThinkCar Platinum EVD Scanner',
    image: 'https://ugc.same-assets.com/8FJ0lKeN5-r3YoPfRcGyCQHj8SsDJ5lt.jpeg',
    price: 899.99,
    originalPrice: 1199.99,
    rating: 4.8,
    reviews: 34,
    category: 'Diagnostic Tools',
    description: 'Advanced electric vehicle diagnostic tool with comprehensive coverage.'
  },
  {
    id: 'obd2-breakout',
    name: 'OBD2 Breakout Box Advanced',
    image: 'https://ugc.same-assets.com/Oza-ALBFbS6TtZn2pL33MrUjm96GuANA.jpeg',
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.6,
    reviews: 67,
    category: 'Diagnostic Tools',
    description: 'OBDII protocol diagnostic tool with indicator lights for multimeter and oscilloscope use.'
  },

  // Air Tools
  {
    id: 'pneumatic-set-1',
    name: 'Pneumatic Tool Set',
    image: 'https://ugc.same-assets.com/ztBAW3AJ-9BK4ey5ElLI3WI732cGIjjv.jpeg',
    price: 159.99,
    originalPrice: 199.99,
    rating: 4.7,
    reviews: 156,
    category: 'Air Tools',
    description: '44-piece professional air tool accessory kit including impact wrench, ratchet, and die grinder.'
  },
  {
    id: 'air-impact-1',
    name: '1/2" Air Impact Wrench Kit',
    image: 'https://ugc.same-assets.com/YRCXmnpWwg-7EbbupgzHsKguLkJEbLyd.jpeg',
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.5,
    reviews: 203,
    category: 'Air Tools',
    description: '1/2" air impact wrench with socket set and carrying case for automotive use.'
  },
  {
    id: 'air-wrench-heavy',
    name: '3/4" Heavy Duty Air Impact Wrench',
    image: 'https://ugc.same-assets.com/zIWhix_KjgGSg7RIXHB9E4rP_fZlYJM3.jpeg',
    price: 199.99,
    originalPrice: 259.99,
    rating: 4.8,
    reviews: 78,
    category: 'Air Tools',
    description: 'Heavy-duty 3/4" air impact wrench for commercial and industrial applications.'
  },

  // Battery Tools
  {
    id: 'jump-starter-1',
    name: 'Portable Jump Starter 3000A',
    image: 'https://ugc.same-assets.com/az4-nClvjE-ZbNgHWs-NoVlP299bi1vc.jpeg',
    price: 129.99,
    originalPrice: 179.99,
    rating: 4.6,
    reviews: 203,
    category: 'Battery Tools',
    description: '630 peak amp portable car battery jump starter and power pack with LED light.'
  },
  {
    id: 'nusican-starter',
    name: 'NUSICAN 12V Portable Battery Charger',
    image: 'https://ugc.same-assets.com/sYxo9tWOyN5GucbSOKLnIgme26llo4H3.jpeg',
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.4,
    reviews: 156,
    category: 'Battery Tools',
    description: '12V portable battery charger and jump starter with 18000mAh capacity.'
  },
  {
    id: 'energizer-charger',
    name: 'Energizer Lithium Jump Starter',
    image: 'https://ugc.same-assets.com/WAbEi5IfK_bdDtOiQjJd-XDrnjbb1Dks.jpeg',
    price: 179.99,
    originalPrice: 229.99,
    rating: 4.7,
    reviews: 89,
    category: 'Battery Tools',
    description: '12V lithium jump starter with portable power bank capabilities for up to 6L gas engines.'
  },

  // Hand Tools
  {
    id: 'socket-set-1',
    name: 'Professional Socket Set 120pc',
    image: 'https://ugc.same-assets.com/g5BhPlY_MQOfq_4CXo6TIWpRcBK9CLz5.jpeg',
    price: 79.99,
    originalPrice: 109.99,
    rating: 4.8,
    reviews: 234,
    category: 'Hand Tools',
    description: '120-piece professional socket set with ratchets, extensions, and carrying case.'
  },
  {
    id: 'wrench-set-1',
    name: 'Combination Wrench Set',
    image: 'https://ugc.same-assets.com/uCpm4l9nQ3pRsq5UWoi5e1_1QNUON41y.jpeg',
    price: 59.99,
    originalPrice: 89.99,
    rating: 4.6,
    reviews: 167,
    category: 'Hand Tools',
    description: 'Professional combination wrench set with metric and SAE sizes.'
  }
];

export const categories = [
  {
    name: 'Power Tools',
    slug: 'power-tools',
    image: 'https://ugc.same-assets.com/uCpm4l9nQ3pRsq5UWoi5e1_1QNUON41y.jpeg',
    desc: 'Drills, Impact Wrenches & More'
  },
  {
    name: 'Diagnostic Tools',
    slug: 'diagnostic-tools',
    image: 'https://ugc.same-assets.com/8FJ0lKeN5-r3YoPfRcGyCQHj8SsDJ5lt.jpeg',
    desc: 'OBD2 Scanners & Meters'
  },
  {
    name: 'Air Tools',
    slug: 'air-tools',
    image: 'https://ugc.same-assets.com/NfWwz-6qH4I_hfULCQc_gJ9cz68Gaucw.jpeg',
    desc: 'Pneumatic Tools & Compressors'
  },
  {
    name: 'Battery Tools',
    slug: 'battery-tools',
    image: 'https://ugc.same-assets.com/sYxo9tWOyN5GucbSOKLnIgme26llo4H3.jpeg',
    desc: 'Chargers & Jump Starters'
  },
  {
    name: 'Hand Tools',
    slug: 'hand-tools',
    image: 'https://ugc.same-assets.com/g5BhPlY_MQOfq_4CXo6TIWpRcBK9CLz5.jpeg',
    desc: 'Wrenches, Sockets & More'
  }
];

export const getBestSellers = () => {
  return products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
};

export const getProductsByCategory = (categoryName: string) => {
  return products.filter(product =>
    product.category.toLowerCase() === categoryName.toLowerCase()
  );
};

export const searchProducts = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.description?.toLowerCase().includes(lowercaseQuery)
  );
};
