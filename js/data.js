/**
 * @file data.js
 * @description All seed data for AgraTrip Planner.
 * Data is fictional/demo. Verify details from official sources before travel.
 */

// ---------------------------------------------------------------------------
// ATTRACTIONS (12)
// ---------------------------------------------------------------------------

export const ATTRACTIONS = [
  {
    id: 'attr_taj_mahal',
    name: 'Taj Mahal',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80&fit=crop',
    shortDescription: "The world's most iconic monument of love — a UNESCO World Heritage Site and one of the Seven Wonders of the World.",
    fullDescription: "The Taj Mahal is an ivory-white marble mausoleum commissioned in 1631 by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. Standing on the southern bank of the Yamuna river, it took approximately 20,000 artisans and 22 years to complete. The complex includes a mosque, a guest house, and extensive gardens set within a symmetrical walled garden. Recognized as a UNESCO World Heritage Site in 1983, it is widely considered the finest example of Mughal architecture and one of the world's most beautiful buildings.",
    area: 'Taj Ganj',
    category: 'Monument',
    interests: ['History', 'Photography'],
    ticketPrice: { indian: 50, foreign: 1100 },
    durationHours: 2.5,
    bestTimeToVisit: 'Sunrise (6:00 AM)',
    openingHours: '6:00 AM – 6:30 PM',
    closedOn: ['Friday'],
    idealFor: ['Solo', 'Couple', 'Family', 'Friends'],
    tips: [
      'Arrive at sunrise for the best light and fewest crowds.',
      'Book tickets online at asi.payumoney.com to avoid long queues.',
      'No food, eatables, or tripods allowed inside the complex.',
      'Carry a valid photo ID — required for ticket verification.',
      'Shoe covers are provided free at the main gate entrance.'
    ],
    nearbyFood: ['food_bedhai_jalebi', 'food_petha', 'food_chaat'],
    transport: ['auto', 'taxi', 'metro'],
    popularityRank: 1
  },
  {
    id: 'attr_agra_fort',
    name: 'Agra Fort',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80&fit=crop',
    shortDescription: "A UNESCO World Heritage Site and magnificent Mughal fortress with stunning palaces, mosques, and direct views of the Taj Mahal.",
    fullDescription: "Agra Fort, also known as the Red Fort of Agra, served as the main residence of the Mughal Dynasty until 1638. Built primarily in red sandstone by Emperor Akbar starting in 1565, it contains the Pearl Mosque (Moti Masjid), Diwan-i-Am, Diwan-i-Khas, and the Jahangir Palace. The Musamman Burj tower — where Shah Jahan was imprisoned by his son Aurangzeb — offers a poignant view of the Taj Mahal across the river.",
    area: 'Agra Fort',
    category: 'Monument',
    interests: ['History', 'Photography'],
    ticketPrice: { indian: 40, foreign: 600 },
    durationHours: 2,
    bestTimeToVisit: 'Morning (9:00 AM – 11:00 AM)',
    openingHours: '6:00 AM – 5:30 PM',
    closedOn: [],
    idealFor: ['Solo', 'Couple', 'Family', 'Friends'],
    tips: [
      'Take a guided tour for rich historical context.',
      'The view of the Taj Mahal from Musamman Burj is unmissable.',
      'Easily combined with the Taj Mahal on the same day.',
      'Wear comfortable shoes — the fort involves extensive walking.'
    ],
    nearbyFood: ['food_mughlai_biryani', 'food_kebabs'],
    transport: ['auto', 'taxi', 'metro'],
    popularityRank: 2
  },
  {
    id: 'attr_mehtab_bagh',
    name: 'Mehtab Bagh',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80&fit=crop',
    shortDescription: "Mughal 'Moonlight Garden' across the Yamuna, offering the most magical sunset silhouette view of the Taj Mahal.",
    fullDescription: "Mehtab Bagh, or 'Moonlight Garden,' is a Mughal-era garden complex directly across the Yamuna river from the Taj Mahal. Built during Babur's reign and later restored by Jahangir, this sunken garden is perfectly aligned with the Taj Mahal complex. At sunset, the white marble turns golden-pink and reflects in the garden's pool, creating one of the most photographed views in India. Legend suggests Shah Jahan planned to build a black marble mausoleum here for himself.",
    area: 'Dhundhibari',
    category: 'Garden',
    interests: ['Photography', 'Nature', 'History'],
    ticketPrice: { indian: 25, foreign: 200 },
    durationHours: 1.5,
    bestTimeToVisit: 'Sunset (5:00 PM – 6:30 PM)',
    openingHours: '5:00 AM – 7:00 PM',
    closedOn: [],
    idealFor: ['Couple', 'Solo', 'Friends'],
    tips: [
      'Visit at sunset for the most spectacular Taj Mahal views.',
      'Bring a good camera — the reflected view in the fountains is stunning.',
      'Far less crowded than the Taj Mahal itself.',
      'Combine with a Yamuna river sunset walk nearby.'
    ],
    nearbyFood: ['food_chaat', 'food_kulfi'],
    transport: ['auto', 'taxi'],
    popularityRank: 3
  },
  {
    id: 'attr_baby_taj',
    name: 'Itimad-ud-Daulah (Baby Taj)',
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80&fit=crop',
    shortDescription: "Called the 'Jewel Box' — the first Mughal structure built entirely of marble and a forerunner to the Taj Mahal.",
    fullDescription: "The Tomb of Itimad-ud-Daulah, affectionately called the 'Baby Taj' or 'Jewel Box', was built between 1622–1628 by Empress Nur Jahan for her father Mirza Ghiyas Beg. It is the first Mughal structure to be built entirely of white marble and to use pietra dura (inlaid gemstone) work extensively — a technique later perfected in the Taj Mahal. The delicate lattice screen work (jali) and intricate floral patterns make it one of the finest examples of Mughal decorative craftsmanship.",
    area: 'Humayun Puri',
    category: 'Monument',
    interests: ['History', 'Photography'],
    ticketPrice: { indian: 20, foreign: 310 },
    durationHours: 1,
    bestTimeToVisit: 'Morning (8:00 AM – 11:00 AM)',
    openingHours: 'Sunrise to Sunset',
    closedOn: [],
    idealFor: ['Solo', 'Couple', 'Family', 'Friends'],
    tips: [
      'Far less crowded than the Taj — perfect for calm photography.',
      'Study the intricate pietra dura inlay work up close.',
      'Combine with Chini ka Rauza nearby on the same day.'
    ],
    nearbyFood: ['food_petha', 'food_aloo_paratha'],
    transport: ['auto', 'taxi'],
    popularityRank: 5
  },
  {
    id: 'attr_fatehpur_sikri',
    name: 'Fatehpur Sikri',
    image: 'https://images.unsplash.com/photo-1598516959428-a97e2e9dde3c?w=800&q=80&fit=crop',
    shortDescription: "A remarkably preserved 'ghost city' — Akbar's short-lived Mughal capital 37 km from Agra, now a UNESCO site.",
    fullDescription: "Fatehpur Sikri, located 37 km from Agra, was built by Emperor Akbar in 1569 as the Mughal capital but abandoned after only 14 years, possibly due to water scarcity. The complex includes the stunning Buland Darwaza (one of the world's tallest gateways), the Jami Masjid, the Panch Mahal, and the palaces of Jodha Bai and Birbal. A UNESCO World Heritage Site and one of the best-preserved examples of Mughal architecture in India.",
    area: 'Fatehpur Sikri (37 km from Agra)',
    category: 'Day Trip',
    interests: ['History', 'Photography', 'Religious Places'],
    ticketPrice: { indian: 40, foreign: 600 },
    durationHours: 3,
    bestTimeToVisit: 'Morning (8:00 AM – 12:00 PM)',
    openingHours: 'Sunrise to Sunset',
    closedOn: [],
    idealFor: ['Solo', 'Couple', 'Family', 'Friends'],
    tips: [
      'Hire a guide at the entrance — the site is too rich to explore alone.',
      'Wear sturdy shoes — the complex is very large.',
      'Best as a half-day trip on Day 3 or beyond.',
      'Buland Darwaza is one of the tallest gateways in the world at 54 meters.'
    ],
    nearbyFood: ['food_kachori', 'food_lassi'],
    transport: ['taxi'],
    popularityRank: 4
  },
  {
    id: 'attr_jama_masjid',
    name: 'Jama Masjid Agra',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80&fit=crop',
    shortDescription: "One of India's grandest mosques, built by Shah Jahan's daughter Jahanara — an active place of worship since 1648.",
    fullDescription: "The Jama Masjid of Agra was built in 1648 by Jahanara Begum, Shah Jahan's beloved daughter. It is one of the largest mosques in India, featuring three red sandstone domes with white marble stripes, an ornate courtyard, and exquisite Persian calligraphy. Unlike many Agra monuments, it remains an active place of worship, offering a unique spiritual atmosphere. The mosque is adjacent to Kinari Bazaar, making it ideal to combine with a market visit.",
    area: 'Kinari Bazaar',
    category: 'Religious',
    interests: ['History', 'Religious Places', 'Photography'],
    ticketPrice: { indian: 0, foreign: 0 },
    durationHours: 0.75,
    bestTimeToVisit: 'Morning or Early Evening (avoid prayer times)',
    openingHours: '5:00 AM – 9:00 PM',
    closedOn: [],
    idealFor: ['Solo', 'Couple', 'Family', 'Friends'],
    tips: [
      'Entry is completely free!',
      'Cover your head and remove shoes before entering.',
      'Avoid visiting during the five daily prayer times.',
      'Combine with Kinari Bazaar for a rich local experience.'
    ],
    nearbyFood: ['food_kebabs', 'food_mughlai_biryani'],
    transport: ['auto', 'cycle_rickshaw'],
    popularityRank: 7
  },
  {
    id: 'attr_taj_museum',
    name: 'Taj Museum',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80&fit=crop',
    shortDescription: "Inside the Taj Mahal complex — a treasure of original Mughal artifacts, imperial farmans, and architectural models.",
    fullDescription: "The Taj Museum is located inside the Taj Mahal complex and houses a remarkable collection of Mughal artifacts. Exhibits include original farmans (imperial decrees) bearing the seals of Mughal emperors, a portrait of Shah Jahan, historic survey maps of the Taj drawn in 1828 and 1874, ancient astronomical instruments, and beautiful examples of Mughal-era decorative arts. Admission is included in the Taj Mahal entry ticket.",
    area: 'Taj Ganj',
    category: 'Museum',
    interests: ['History'],
    ticketPrice: { indian: 0, foreign: 0 },
    durationHours: 0.5,
    bestTimeToVisit: 'During your Taj Mahal visit',
    openingHours: '10:00 AM – 5:00 PM',
    closedOn: ['Friday'],
    idealFor: ['Solo', 'Couple', 'Family', 'Friends'],
    tips: [
      'Free with your Taj Mahal ticket — no extra cost.',
      'Visit after exploring the main mausoleum.',
      'Photography restrictions apply inside — check at entry.'
    ],
    nearbyFood: ['food_bedhai_jalebi', 'food_petha'],
    transport: ['auto', 'taxi', 'metro'],
    popularityRank: 8
  },
  {
    id: 'attr_sadar_bazaar',
    name: 'Sadar Bazaar',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&q=80&fit=crop',
    shortDescription: "Agra's premier tourist shopping district for marble inlay crafts, leather goods, textiles, and souvenirs.",
    fullDescription: "Sadar Bazaar is the heart of Agra's tourist shopping scene, lined with shops selling Agra's world-famous marble inlay work (pietra dura), leather goods, textiles, spices, and handicrafts. The market is particularly renowned for miniature Taj Mahal replicas, imitation Mughal jewelry, and Rajasthani textiles. Government-approved emporiums here sell authentic marble items.",
    area: 'Sadar Bazaar',
    category: 'Market',
    interests: ['Shopping'],
    ticketPrice: { indian: 0, foreign: 0 },
    durationHours: 1.5,
    bestTimeToVisit: 'Evening (5:00 PM – 8:00 PM)',
    openingHours: '10:00 AM – 9:00 PM',
    closedOn: [],
    idealFor: ['Solo', 'Couple', 'Family', 'Friends'],
    tips: [
      'Bargain firmly — start at 40–50% of the asking price.',
      'Beware of unsolicited guides offering free factory tours.',
      'Stick to government-certified emporiums for authentic marble.',
      'Best buys: marble items, leather bags, and Petha sweets.'
    ],
    nearbyFood: ['food_chaat', 'food_samosa', 'food_kulfi'],
    transport: ['auto', 'cycle_rickshaw'],
    popularityRank: 9
  },
  {
    id: 'attr_kinari_bazaar',
    name: 'Kinari Bazaar',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&fit=crop',
    shortDescription: "A vibrant old-city market near Jama Masjid, famous for wedding accessories, zari work, and street food.",
    fullDescription: "Kinari Bazaar, one of Agra's oldest markets near Jama Masjid, is famous for its bridal wear, zari and gota embroidery, religious items, and traditional accessories. The narrow lanes bustle with textile shops, sweet stalls, and traditional eateries. It's a more authentic, local experience compared to Sadar Bazaar. The evenings come alive with street food: chaat, kebabs, and Agra's famous Petha sweets.",
    area: 'Kinari Bazaar',
    category: 'Market',
    interests: ['Shopping', 'Food'],
    ticketPrice: { indian: 0, foreign: 0 },
    durationHours: 1.5,
    bestTimeToVisit: 'Evening (5:00 PM – 9:00 PM)',
    openingHours: '10:00 AM – 9:00 PM',
    closedOn: [],
    idealFor: ['Solo', 'Couple', 'Family', 'Friends'],
    tips: [
      'Try the famous Ram Babu Paranthe Wala restaurant nearby.',
      'Best spot for authentic zari-embroidered items.',
      'Shop for Petha from licensed shops along the main lane.',
      'The evening food walk here is an experience in itself.'
    ],
    nearbyFood: ['food_mughlai_biryani', 'food_kebabs', 'food_petha'],
    transport: ['auto', 'cycle_rickshaw'],
    popularityRank: 10
  },
  {
    id: 'attr_yamuna_sunset',
    name: 'Yamuna River Sunset Point',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&fit=crop',
    shortDescription: "A serene riverfront offering magical golden-hour views of the Taj Mahal silhouette — a photographer's dream.",
    fullDescription: "The banks of the Yamuna River near Mehtab Bagh offer one of Agra's most magical experiences — watching the sun set behind the Taj Mahal, casting it in a warm golden glow against a deep blue sky. Local fishermen and migratory birds create a peaceful contrast to the busy monuments. Especially popular with photographers who arrive for the 'blue hour' light just after sunset.",
    area: 'Yamuna River Bank',
    category: 'Garden',
    interests: ['Photography', 'Nature'],
    ticketPrice: { indian: 0, foreign: 0 },
    durationHours: 1,
    bestTimeToVisit: 'Sunset (5:30 PM – 7:00 PM)',
    openingHours: 'Open all day',
    closedOn: [],
    idealFor: ['Couple', 'Solo', 'Friends'],
    tips: [
      'Best in winter (Oct–Feb) for clear skies and cool weather.',
      'Bring a telephoto lens for close-up Taj Mahal shots.',
      'The area near Mehtab Bagh entrance offers the best vantage points.',
      'Avoid monsoon season when river levels are high.'
    ],
    nearbyFood: ['food_chaat', 'food_kulfi'],
    transport: ['auto', 'taxi'],
    popularityRank: 11
  },
  {
    id: 'attr_chini_ka_rauza',
    name: 'Chini ka Rauza',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80&fit=crop',
    shortDescription: "Agra's hidden gem — a Persian-influenced tomb covered in glazed tile work, serene and virtually crowd-free.",
    fullDescription: "Chini ka Rauza ('China Tomb') is the tomb of Afzal Khan, a Persian scholar and minister in Shah Jahan's court. Located about 1 km upstream from Itimad-ud-Daulah, it is unique for its extensive use of glazed tile work with intricate Persian floral designs. One of the most undervisited monuments in Agra, it offers a rare opportunity for quiet contemplation and undisturbed photography.",
    area: 'Humayun Puri',
    category: 'Monument',
    interests: ['History', 'Photography'],
    ticketPrice: { indian: 0, foreign: 0 },
    durationHours: 0.75,
    bestTimeToVisit: 'Morning or Early Afternoon',
    openingHours: 'Sunrise to Sunset',
    closedOn: [],
    idealFor: ['Solo', 'Friends', 'Couple'],
    tips: [
      'Completely free to enter!',
      'Combine with Itimad-ud-Daulah, just 1 km away.',
      'Nearly always empty — great for undisturbed photography.',
      'A perfect stop for architecture enthusiasts.'
    ],
    nearbyFood: ['food_aloo_paratha', 'food_lassi'],
    transport: ['auto', 'taxi'],
    popularityRank: 12
  },
  {
    id: 'attr_ram_bagh',
    name: 'Ram Bagh (Aram Bagh)',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80&fit=crop',
    shortDescription: "Possibly India's oldest surviving Mughal garden — built by Emperor Babur in 1528 as a royal retreat on the Yamuna.",
    fullDescription: "Ram Bagh (also known as Aram Bagh — 'Garden of Rest') is considered the oldest surviving Mughal garden in India, built by Emperor Babur in 1528. Laid out in the classic charbagh (four-garden) pattern, it served as a resting place for Mughal royalty traveling between Delhi and Agra. The terraced garden with its restored fountains and pavilions provides a glimpse into the very origins of Mughal garden design.",
    area: 'Ram Bagh',
    category: 'Garden',
    interests: ['History', 'Nature'],
    ticketPrice: { indian: 15, foreign: 100 },
    durationHours: 1,
    bestTimeToVisit: 'Morning (7:00 AM – 10:00 AM)',
    openingHours: 'Sunrise to Sunset',
    closedOn: [],
    idealFor: ['Solo', 'Couple', 'Family'],
    tips: [
      'Ideal for a peaceful morning walk before the day heats up.',
      'Rarely visited — you may have the garden to yourself.',
      'Pair with a Yamuna riverside walk for a relaxing experience.'
    ],
    nearbyFood: ['food_aloo_paratha', 'food_jalebi'],
    transport: ['auto', 'taxi'],
    popularityRank: 13
  }
];

// ---------------------------------------------------------------------------
// HOTELS / STAYS (12)
// ---------------------------------------------------------------------------

export const HOTELS = [
  {
    id: 'stay_oberoi_amarvilas',
    name: 'The Oberoi Amarvilas',
    area: 'Taj East Gate Road',
    category: 'Luxury',
    pricePerNight: { min: 28000, max: 75000 },
    facilities: ['Taj Balcony View', 'Butler Service', 'Swimming Pool', 'Luxury Spa', 'Fine Dining', 'Free Taj Golf Cart'],
    distanceFromTajKm: 0.6,
    idealFor: ['Couple', 'Family', 'Solo'],
    bestFor: 'Direct unobstructed Taj Mahal view from every room & private terrace',
    description: 'The pinnacle of luxury in India, situated just 600 meters from the Taj Mahal. Inspired by Mughal palace architecture with reflection pools, terraced lawns, and ornamental fountains. Every single guest room and suite enjoys an uninterrupted view of the iconic monument.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80&fit=crop'
  },
  {
    id: 'stay_itc_mughal',
    name: 'ITC Mughal, A Luxury Collection Resort',
    area: 'Fatehabad Road',
    category: 'Luxury',
    pricePerNight: { min: 11000, max: 28000 },
    facilities: ['35-Acre Gardens', 'Kaya Kalp Royal Spa', 'Peshawri Restaurant', 'Swimming Pool', 'Tennis Court'],
    distanceFromTajKm: 1.8,
    idealFor: ['Family', 'Couple', 'Friends'],
    bestFor: 'Opulent Mughal palace design, Aga Khan Architecture Award winner',
    description: 'Spread over 35 lush acres of Mughal-style gardens, ITC Mughal is a majestic tribute to the grand builders of the empire. Features the 99,000 sq ft Kaya Kalp Royal Spa and the globally acclaimed Peshawri restaurant serving authentic North-West Frontier tandoori delicacies.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&fit=crop'
  },
  {
    id: 'stay_grand_imperial',
    name: 'The Grand Imperial — Historic Heritage Hotel',
    area: 'MG Road, Civil Lines',
    category: 'Comfort',
    pricePerNight: { min: 4500, max: 9500 },
    facilities: ['100-Year Heritage Suites', 'Colonial Verandahs', 'Swimming Pool', 'Ayurvedic Spa', 'Garden Dining'],
    distanceFromTajKm: 3.8,
    idealFor: ['Couple', 'History Buffs', 'Solo'],
    bestFor: 'Authentic 100-year-old colonial heritage architecture with antique suites',
    description: "Built over a century ago in the Victorian and Mughal blend style using brick and red sandstone, The Grand Imperial is Agra's premier genuine heritage hotel. Features high-ceilinged colonial suites, period furniture, arched verandahs, and royal charm away from tourist noise.",
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80&fit=crop'
  },
  {
    id: 'stay_taj_hotel_convention',
    name: 'Taj Hotel & Convention Centre',
    area: 'Taj Nagri Phase 1',
    category: 'Luxury',
    pricePerNight: { min: 9500, max: 22000 },
    facilities: ['Rooftop Infinity Pool', 'Direct Taj Views', 'Daawat-e-Nawab Restaurant', 'Luxury Spa', 'Fitness Centre'],
    distanceFromTajKm: 1.2,
    idealFor: ['Couple', 'Family', 'Friends'],
    bestFor: 'Rooftop infinity pool with direct panoramic Taj Mahal skyline views',
    description: 'A contemporary luxury hotel by IHCL, boasting a rooftop infinity pool overlooking the Taj Mahal dome. Home to the royal fine-dining restaurant Daawat-e-Nawab serving curated Awadhi and Mughlai culinary feasts accompanied by live Indian classical music.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80&fit=crop'
  },
  {
    id: 'stay_trident_agra',
    name: 'Trident Agra',
    area: 'Fatehabad Road',
    category: 'Luxury',
    pricePerNight: { min: 7500, max: 16000 },
    facilities: ['Landscaped Gardens', 'Swimming Pool', 'Kids Club', 'Saffron Restaurant', 'Bar & Lounge'],
    distanceFromTajKm: 1.5,
    idealFor: ['Family', 'Couple', 'Solo'],
    bestFor: 'Tranquil garden ambiance with Oberoi hospitality and family amenities',
    description: 'Set amidst beautifully landscaped gardens and tranquil fountains, Trident Agra features red sandstone Mughal architectural accents. Renowned for its calm, peaceful atmosphere, high culinary standards at Saffron, and family-friendly experiences.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80&fit=crop'
  },
  {
    id: 'stay_courtyard_marriott',
    name: 'Courtyard by Marriott Agra',
    area: 'Fatehabad Road',
    category: 'Comfort',
    pricePerNight: { min: 5500, max: 12000 },
    facilities: ['Outdoor Pool', 'Spa & Wellness', 'MoMo Cafe', 'Fitness Centre', 'Free Wi-Fi'],
    distanceFromTajKm: 2.5,
    idealFor: ['Family', 'Solo', 'Business'],
    bestFor: 'Modern upscale comfort with Marriott hospitality on hotel row',
    description: 'A contemporary 5-star haven on Fatehabad Road. Features spacious rooms with plush bedding, a resort-style outdoor pool, a full-service spa, and diverse dining options from international buffets to traditional North Indian dining.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop'
  },
  {
    id: 'stay_radisson_agra',
    name: 'Radisson Hotel Agra',
    area: 'Taj East Gate Road',
    category: 'Comfort',
    pricePerNight: { min: 4500, max: 10000 },
    facilities: ['Rooftop Pool & Bar', 'Taj View Deck', 'All-Day Dining', 'Spa', 'Concierge Tour Desk'],
    distanceFromTajKm: 1.3,
    idealFor: ['Couple', 'Family', 'Friends'],
    bestFor: 'Rooftop cocktail bar & pool deck with direct views of Taj Mahal',
    description: 'Conveniently located near the Taj East Gate, Radisson Agra is famous for its rooftop pool and lounge, The Rooftop, where guests can enjoy sunset drinks while gazing upon the marble domes of the Taj Mahal.',
    image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80&fit=crop'
  },
  {
    id: 'stay_taj_resorts',
    name: 'Hotel Taj Resorts',
    area: 'Taj East Gate Road',
    category: 'Comfort',
    pricePerNight: { min: 2800, max: 5500 },
    facilities: ['Rooftop Taj View', 'Rooftop Pool', 'Free Wi-Fi', 'Restaurant', '500m to Taj Gate'],
    distanceFromTajKm: 0.5,
    idealFor: ['Solo', 'Couple', 'Friends'],
    bestFor: 'Walking distance to Taj East Gate ticket counter with rooftop views',
    description: 'Situated only 500 meters from the Taj Mahal East Gate ticket office, this charming hotel features a rooftop terrace with a plunge pool and direct views of the Taj Mahal. Excellent choice for early sunrise visits.',
    image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80&fit=crop'
  },
  {
    id: 'stay_amar_yatri_niwas',
    name: 'Amar Yatri Niwas',
    area: 'Taj Nagri',
    category: 'Budget',
    pricePerNight: { min: 1800, max: 3200 },
    facilities: ['Wi-Fi', 'Breakfast', 'Rooftop Dining', 'AC Rooms'],
    distanceFromTajKm: 1.0,
    idealFor: ['Couple', 'Solo', 'Friends'],
    bestFor: 'Great value mid-budget hotel with friendly staff and clean rooms',
    description: 'A popular mid-budget option on Fatehabad Road near the Taj Mahal. Offers clean air-conditioned rooms, a cozy restaurant serving North Indian specialties, and travel assistance for local sightseeing.',
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80&fit=crop'
  },
  {
    id: 'stay_joeys_hostel',
    name: "Joey's Hostel Agra",
    area: 'Taj Ganj',
    category: 'Budget',
    pricePerNight: { min: 600, max: 2200 },
    facilities: ['Rooftop Taj View Cafe', 'Free High-Speed Wi-Fi', 'Dorms & Private Rooms', 'Social Lounge', 'Walking Tours'],
    distanceFromTajKm: 0.3,
    idealFor: ['Solo', 'Backpackers', 'Friends'],
    bestFor: "Agra's #1 rated backpacker hostel with jaw-dropping rooftop Taj Mahal view",
    description: "Located right next to the Taj Mahal South Gate in the lanes of Taj Ganj. Famous among international backpackers for its rooftop terrace cafe that directly overlooks the Taj Mahal domes. Daily free walking tours and vibrant social vibe.",
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80&fit=crop'
  },
  {
    id: 'stay_moustache_agra',
    name: 'Moustache Agra Hostel',
    area: 'Taj Nagri Phase 2',
    category: 'Budget',
    pricePerNight: { min: 550, max: 2000 },
    facilities: ['Wi-Fi', 'Air Conditioned Dorms', 'Rooftop Lounge', 'Cafe', 'Games Room'],
    distanceFromTajKm: 1.6,
    idealFor: ['Solo', 'Friends', 'Backpackers'],
    bestFor: 'Clean modern boutique hostel with colorful artsy decor & cafe',
    description: 'A stylish, boutique experiential hostel in Taj Nagri. Features artistically designed dorms and private rooms, a vibrant common room with board games, a rooftop lounge, and a friendly community atmosphere.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&fit=crop'
  },
  {
    id: 'stay_sheetal_regency',
    name: 'Hotel Sheetal Regency',
    area: 'Taj Ganj',
    category: 'Budget',
    pricePerNight: { min: 800, max: 1500 },
    facilities: ['Free Wi-Fi', 'Room Service', 'Attached Bath', 'Tour Desk'],
    distanceFromTajKm: 0.7,
    idealFor: ['Budget Solo', 'Friends'],
    bestFor: 'Simple, clean budget stay within walking distance of the monument',
    description: 'A straightforward, economical guesthouse in the Taj Ganj area. Clean rooms, hot water, and helpful staff who can arrange sunrise battery rickshaw transfers or train station pick-ups.',
    image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80&fit=crop'
  }
];

// ---------------------------------------------------------------------------
// FOOD ITEMS (15)
// ---------------------------------------------------------------------------

export const FOODS = [
  {
    id: 'food_bedhai_jalebi',
    name: 'Bedhai-Jalebi',
    description: "Agra's most beloved breakfast: crispy deep-fried puri (bedhai) stuffed with spiced urad dal, served alongside golden spiral jalebis soaked in sugar syrup. A ritual morning meal for locals.",
    priceRange: '₹50–₹150',
    priceMin: 50,
    priceMax: 150,
    area: 'Fatehabad Road, Sadar Bazaar',
    mealType: ['Breakfast'],
    foodType: 'Vegetarian',
    bestPlaces: 'Deviram Sweets, Panchi Petha Store',
    image: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=600&q=80&fit=crop'
  },
  {
    id: 'food_petha',
    name: 'Agra Petha',
    description: "Agra's most famous sweet — a translucent, soft candy made from ash gourd slow-cooked in sugar syrup. Available in dozens of flavors: plain, kesar (saffron), angoori (grape), and paan.",
    priceRange: '₹80–₹300 (250g box)',
    priceMin: 80,
    priceMax: 300,
    area: 'Sadar Bazaar, Noori Gate, Kinari Bazaar',
    mealType: ['Dessert', 'Snacks'],
    foodType: 'Vegetarian',
    bestPlaces: 'Panchi Petha Store, Baba Petha Bhandar',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80&fit=crop'
  },
  {
    id: 'food_mughlai_biryani',
    name: 'Mughlai Biryani',
    description: "Slow-cooked dum biryani in the classic Mughal style — fragrant basmati rice layered with marinated meat, saffron, crispy onions, and whole spices, sealed and cooked on an open flame.",
    priceRange: '₹200–₹600',
    priceMin: 200,
    priceMax: 600,
    area: 'Fatehabad Road, Kinari Bazaar',
    mealType: ['Lunch', 'Dinner'],
    foodType: 'Non-Vegetarian',
    bestPlaces: 'Devi Biryani House, Pinch of Spice',
    image: 'https://images.unsplash.com/photo-1563379091339-03246963d0b7?w=600&q=80&fit=crop'
  },
  {
    id: 'food_kebabs',
    name: 'Mughal Kebabs',
    description: "Agra's Mughal heritage lives on in its kebabs: silky smooth seekh kebabs, melt-in-the-mouth galouti kebabs, and chunky boti kebabs — all cooked over charcoal and served with mint chutney.",
    priceRange: '₹150–₹500',
    priceMin: 150,
    priceMax: 500,
    area: 'Kinari Bazaar, Fatehabad Road',
    mealType: ['Lunch', 'Dinner', 'Snacks'],
    foodType: 'Non-Vegetarian',
    bestPlaces: 'Peshawri at ITC Mughal, Mughal Mahal Restaurant',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80&fit=crop'
  },
  {
    id: 'food_korma',
    name: 'Mutton Korma',
    description: "A rich, aromatic Mughal curry — tender mutton slow-cooked in a velvety sauce of yogurt, cream, and whole spices including cardamom, saffron, and rose water. Best with roomali roti.",
    priceRange: '₹250–₹600',
    priceMin: 250,
    priceMax: 600,
    area: 'Fatehabad Road, Old City',
    mealType: ['Lunch', 'Dinner'],
    foodType: 'Non-Vegetarian',
    bestPlaces: 'Pind Balluchi, Bon Barbecue',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80&fit=crop'
  },
  {
    id: 'food_tandoori_chicken',
    name: 'Tandoori Chicken',
    description: "Marinated in a fiery blend of yogurt, red chili, and spices, then charred in a clay tandoor oven at 480°C. Smoky, fall-off-the-bone chicken with a signature crimson exterior.",
    priceRange: '₹200–₹500',
    priceMin: 200,
    priceMax: 500,
    area: 'Fatehabad Road',
    mealType: ['Dinner', 'Lunch'],
    foodType: 'Non-Vegetarian',
    bestPlaces: 'Zorba the Buddha, Lakshmi Vilas',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80&fit=crop'
  },
  {
    id: 'food_chaat',
    name: 'Agra Street Chaat',
    description: "Agra's street chaat is legendary — aloo tikki with tamarind chutney, pani puri with spiced water, bhel puri, and papdi chaat. Each vendor has a secret recipe passed down for generations.",
    priceRange: '₹30–₹100',
    priceMin: 30,
    priceMax: 100,
    area: 'Sadar Bazaar, Taj Ganj, Kinari Bazaar',
    mealType: ['Snacks'],
    foodType: 'Vegetarian',
    bestPlaces: 'Sadar Bazaar carts, Taj Ganj evening stalls',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&q=80&fit=crop'
  },
  {
    id: 'food_kachori',
    name: 'Kachori',
    description: "Flaky, golden-fried pastry shells stuffed with spiced mung dal or urad dal — a beloved snack across Agra's bazaars. Served with tangy aloo sabzi and tamarind chutney.",
    priceRange: '₹20–₹60',
    priceMin: 20,
    priceMax: 60,
    area: 'Kinari Bazaar, Old City',
    mealType: ['Breakfast', 'Snacks'],
    foodType: 'Vegetarian',
    bestPlaces: 'Kinari Bazaar stalls, Agra Fort Gate area',
    image: 'https://images.unsplash.com/photo-1630383249896-424e482df921?w=600&q=80&fit=crop'
  },
  {
    id: 'food_samosa',
    name: 'Samosa',
    description: "Agra's samosas are legendary for their extra-crispy pastry shell and generous filling of spiced potatoes with peas. Best eaten piping hot with tamarind chutney.",
    priceRange: '₹10–₹30',
    priceMin: 10,
    priceMax: 30,
    area: 'Throughout Agra',
    mealType: ['Snacks', 'Breakfast'],
    foodType: 'Vegetarian',
    bestPlaces: 'Most tea stalls and street vendors across the city',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80&fit=crop'
  },
  {
    id: 'food_aloo_paratha',
    name: 'Aloo Paratha',
    description: "Thick, whole-wheat flatbread stuffed with lightly spiced mashed potato filling, cooked on a tawa with generous amounts of butter or ghee. Served with fresh dahi and green chutney.",
    priceRange: '₹50–₹150',
    priceMin: 50,
    priceMax: 150,
    area: 'Throughout Agra',
    mealType: ['Breakfast'],
    foodType: 'Vegetarian',
    bestPlaces: 'Ram Babu Paranthe Wala, Deviram Sweets',
    image: 'https://images.unsplash.com/photo-1626132647523-66cf50be1b23?w=600&q=80&fit=crop'
  },
  {
    id: 'food_lassi',
    name: 'Lassi',
    description: "Cool, creamy yogurt-based drink in plain, sweet, or salted varieties — a perfect antidote to Agra's summer heat. The thick, malai-topped version served in earthen kulhads is especially refreshing.",
    priceRange: '₹30–₹80',
    priceMin: 30,
    priceMax: 80,
    area: 'Throughout Agra',
    mealType: ['Breakfast', 'Snacks'],
    foodType: 'Vegetarian',
    bestPlaces: 'Fatehabad Road stalls, Taj Ganj tea stalls',
    image: 'https://images.unsplash.com/photo-1571805340303-f15571a2ed26?w=600&q=80&fit=crop'
  },
  {
    id: 'food_jalebi',
    name: 'Jalebi',
    description: "Pretzel-shaped spirals of fermented batter deep-fried until crispy, then soaked in saffron sugar syrup. Best eaten fresh at roadside stalls in the early morning or evening.",
    priceRange: '₹40–₹100',
    priceMin: 40,
    priceMax: 100,
    area: 'Throughout Agra',
    mealType: ['Breakfast', 'Dessert'],
    foodType: 'Vegetarian',
    bestPlaces: 'Deviram Sweets, Sadar Bazaar stalls',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80&fit=crop'
  },
  {
    id: 'food_kulfi',
    name: 'Kulfi',
    description: "India's traditional ice cream — denser and creamier than its Western counterpart, flavored with pistachio, mango, rose, or saffron. Served on a stick, it's a perfect evening treat.",
    priceRange: '₹30–₹100',
    priceMin: 30,
    priceMax: 100,
    area: 'Throughout Agra',
    mealType: ['Dessert', 'Snacks'],
    foodType: 'Vegetarian',
    bestPlaces: 'Sadar Bazaar stalls, Taj Ganj vendors',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=600&q=80&fit=crop'
  },
  {
    id: 'food_dalmoth',
    name: 'Dalmoth',
    description: "Agra's most famous savory snack — a crunchy mixture of fried lentils, nuts, spices, and dried fruit. Sold across India and makes an excellent souvenir to take home.",
    priceRange: '₹50–₹200 (per pack)',
    priceMin: 50,
    priceMax: 200,
    area: 'Sadar Bazaar, throughout Agra',
    mealType: ['Snacks'],
    foodType: 'Vegetarian',
    bestPlaces: 'Sadar Bazaar shops, Airport stores',
    image: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80&fit=crop'
  },
  {
    id: 'food_local_sweets',
    name: 'Gazak & Rewari',
    description: "Winter specialties of Agra: Gazak is a brittle made from sesame seeds or peanuts and jaggery, while Rewari is a sesame-caramel candy. Popular at markets during cooler months and wonderful edible souvenirs.",
    priceRange: '₹50–₹250 (per pack)',
    priceMin: 50,
    priceMax: 250,
    area: 'Sadar Bazaar, Kinari Bazaar',
    mealType: ['Dessert', 'Snacks'],
    foodType: 'Vegetarian',
    bestPlaces: 'Sadar Bazaar sweet shops, Railway Station stalls',
    image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=600&q=80&fit=crop'
  }
];

// ---------------------------------------------------------------------------
// TRANSPORT OPTIONS (6)
// ---------------------------------------------------------------------------

export const TRANSPORT_OPTIONS = [
  {
    id: 'transport_auto',
    name: 'Auto-rickshaw',
    icon: '🛺',
    type: 'local',
    suitableFor: ['Short distance', 'Mid distance'],
    budgetLevel: ['Low', 'Medium'],
    averageFare: '₹50–₹200 per trip',
    fareMin: 50,
    fareMax: 200,
    pros: ['Affordable', 'Widely available', 'Good for short hops', 'Easy to find near all monuments'],
    cons: ['No AC', 'Bargaining usually needed', 'May take longer routes'],
    tips: ['Always fix the fare before starting the ride.', 'Use Ola/Uber Auto for metered rides.', 'Ideal for distances up to 5 km.', 'Available 24 hours in tourist areas.'],
    availableHours: '5:00 AM – 11:00 PM',
    bestFor: ['Solo', 'Couple']
  },
  {
    id: 'transport_cycle_rickshaw',
    name: 'Cycle Rickshaw',
    icon: '🚲',
    type: 'local',
    suitableFor: ['Very short distance', 'Market areas'],
    budgetLevel: ['Low'],
    averageFare: '₹30–₹100 per trip',
    fareMin: 30,
    fareMax: 100,
    pros: ['Cheapest option', 'Eco-friendly', 'Great for narrow market lanes'],
    cons: ['Slow', 'Not suitable for long distances'],
    tips: ['Perfect for Kinari Bazaar and Sadar Bazaar lanes.', 'Agree on fare before boarding.', 'Tip generously.', 'Not recommended for distances over 2 km.'],
    availableHours: '7:00 AM – 9:00 PM',
    bestFor: ['Solo', 'Couple']
  },
  {
    id: 'transport_taxi',
    name: 'Taxi / Private Cab',
    icon: '🚗',
    type: 'local',
    suitableFor: ['Long distance', 'Day trips', 'Airport transfers', 'Fatehpur Sikri'],
    budgetLevel: ['Medium', 'High'],
    averageFare: '₹800–₹2,000 per day (full day)',
    fareMin: 800,
    fareMax: 2000,
    pros: ['AC comfort', 'No bargaining if app-based', 'Ideal for families', 'Good for day trips'],
    cons: ['Higher cost', 'Peak pricing during tourist season'],
    tips: ['Book a full-day taxi for ₹1,200–₹1,800 to cover all monuments.', 'Use Ola/Uber for transparent pricing.', 'For Fatehpur Sikri day trip, negotiate a half-day rate.'],
    availableHours: '24 hours',
    bestFor: ['Family', 'Couple', 'Friends']
  },
  {
    id: 'transport_metro',
    name: 'Agra Metro',
    icon: '🚇',
    type: 'local',
    suitableFor: ['Taj Mahal to Agra Fort corridor'],
    budgetLevel: ['Low', 'Medium'],
    averageFare: '₹30 approximate',
    fareMin: 20,
    fareMax: 50,
    pros: ['Air-conditioned', 'Fixed price', 'No traffic jams', 'Connects Taj Mahal to Agra Fort'],
    cons: ['Limited route (Yellow Line only)', 'Short walk to/from monument gates'],
    tips: ['Yellow Line connects Taj Mahal East Gate to Agra Fort Station.', 'Operating hours: 6:00 AM – 10:00 PM.', 'Token-based ticketing at all stations.'],
    availableHours: '6:00 AM – 10:00 PM',
    bestFor: ['Solo', 'Couple', 'Friends']
  },
  {
    id: 'transport_ride_hailing',
    name: 'Ride-hailing (Ola / Uber)',
    icon: '📱',
    type: 'local',
    suitableFor: ['Short to long distance', 'Airport transfers'],
    budgetLevel: ['Medium', 'High'],
    averageFare: '₹80–₹500 per trip',
    fareMin: 80,
    fareMax: 500,
    pros: ['Transparent pricing', 'No bargaining', 'AC comfort', 'Driver tracking', 'Cashless payment'],
    cons: ['Surge pricing during peak hours', 'Requires internet connection'],
    tips: ['Best option for airport pick-up/drop-off.', 'Use during non-peak hours to avoid surge.', 'Ola tends to have more drivers in Agra.'],
    availableHours: '24 hours',
    bestFor: ['Solo', 'Couple', 'Family', 'Friends']
  },
  {
    id: 'transport_intercity',
    name: 'Train (Intercity)',
    icon: '🚂',
    type: 'intercity',
    suitableFor: ['Delhi to Agra', 'Jaipur to Agra', 'Mumbai to Agra'],
    budgetLevel: ['Low', 'Medium', 'High'],
    averageFare: '₹250–₹2,500 (class dependent)',
    fareMin: 250,
    fareMax: 2500,
    pros: ['Fastest from Delhi (Gatimaan Express: 1h 40m)', 'Comfortable AC options', 'Scenic journey'],
    cons: ['Advance booking recommended', 'Crowded during holidays'],
    tips: ['Gatimaan Express from Hazrat Nizamuddin (Delhi) is premium at 160 km/h.', 'Book 30–60 days in advance on IRCTC.', 'Agra Cantt. station is closer to the Taj.'],
    availableHours: 'Multiple daily trains',
    bestFor: ['Solo', 'Couple', 'Family', 'Friends']
  }
];

// ---------------------------------------------------------------------------
// TRAVEL TIPS (12)
// ---------------------------------------------------------------------------

export const TRAVEL_TIPS = [
  { id: 'tip_001', category: 'Planning', title: 'Visit Taj Mahal at Sunrise', description: 'The Taj Mahal is most magical in the first hour after sunrise. The light is soft, crowds are thin, and air is cool. Gates open at 6:00 AM — arrive at the entry queue by 5:45 AM.', icon: '🌅' },
  { id: 'tip_002', category: 'Planning', title: 'Friday Closure Alert', description: 'The Taj Mahal is completely closed to general visitors every Friday for religious observance. Always check your travel dates and plan accordingly.', icon: '⚠️' },
  { id: 'tip_003', category: 'Money', title: 'Carry Cash', description: 'Most street vendors, cycle rickshaws, and small eateries accept cash only. Carry small denomination notes (₹10, ₹20, ₹50, ₹100) for easier transactions and tipping.', icon: '💰' },
  { id: 'tip_004', category: 'Safety', title: 'Beware of Unofficial Guides', description: "Unauthorized guides near monument gates can be very persuasive but often provide inaccurate history. Only hire guides from ASI-approved booths inside the monument complex.", icon: '🛡️' },
  { id: 'tip_005', category: 'Culture', title: 'Dress Respectfully', description: 'When visiting mosques and religious sites, cover your head and remove footwear. Carry a light scarf. Modest clothing (shoulders and knees covered) is appreciated at all Mughal monuments.', icon: '👗' },
  { id: 'tip_006', category: 'Food', title: 'Street Food Safety', description: "Agra's street food is world-class but choose busy stalls with high turnover for freshness. Avoid cut fruit from street carts. Carry ORS sachets and a basic antacid as a precaution.", icon: '🍽️' },
  { id: 'tip_007', category: 'Weather', title: 'Best Time to Visit', description: 'October to March is the ideal season — cool weather (10–25°C) and clear skies. April to June can be extremely hot (40–45°C). Monsoon (July–September) brings humidity but lush greenery.', icon: '🌤️' },
  { id: 'tip_008', category: 'Photography', title: 'Photography Tips', description: 'For the classic Taj Mahal reflection shot, position at the central pond just after sunrise. For a silhouette shot, visit Mehtab Bagh at sunset. Tripods are NOT allowed inside the Taj complex.', icon: '📸' },
  { id: 'tip_009', category: 'Money', title: 'Bargaining Etiquette', description: 'Bargaining is expected at Sadar Bazaar and Kinari Bazaar. Start at 40–50% of the asking price and meet somewhere in the middle. Always smile and be polite.', icon: '🤝' },
  { id: 'tip_010', category: 'Safety', title: 'Transport Safety', description: 'Use app-based taxis (Ola/Uber) or the Agra Metro for safe, metered travel. If taking an auto-rickshaw, always fix the fare before boarding and note the vehicle registration number.', icon: '🚗' },
  { id: 'tip_011', category: 'Planning', title: 'Book Tickets Online', description: 'Book Taj Mahal and Agra Fort tickets in advance at asi.payumoney.com to skip the ticket queue — especially important on weekends and during peak season (Nov–Feb).', icon: '🎫' },
  { id: 'tip_012', category: 'Culture', title: 'Water and Hydration', description: 'Drink only bottled or purified water. The monuments involve a lot of walking in open sunlight — carry at least 1 litre of water per person. Schedule indoor/shaded breaks every 2–3 hours.', icon: '💧' }
];

// ---------------------------------------------------------------------------
// COST CONFIGURATION
// ---------------------------------------------------------------------------

export const COST_CONFIG = {
  stay: {
    low: { min: 800, max: 1500, typical: 1000, label: 'Budget guesthouse / hostel' },
    medium: { min: 2000, max: 4000, typical: 2800, label: 'Comfort / mid-range hotel' },
    high: { min: 8000, max: 25000, typical: 12000, label: 'Luxury / heritage hotel' }
  },
  food: {
    low: { perDay: 300, label: 'Street food & dhabas' },
    medium: { perDay: 700, label: 'Mix of local restaurants' },
    high: { perDay: 1500, label: 'Premium / rooftop dining' }
  },
  transport: {
    low: { perDay: 150, label: 'Shared auto & metro' },
    medium: { perDay: 450, label: 'Private auto & metro' },
    high: { perDay: 1200, label: 'Private AC taxi' }
  }
};

/** Number of paying tickets per group type */
export const GROUP_TICKET_MULTIPLIER = {
  solo: 1,
  couple: 2,
  family: 3,
  friends: 3
};

if (typeof window !== 'undefined') {
  window.TAJ_DATA = {
    ATTRACTIONS,
    HOTELS,
    FOODS,
    TRANSPORT_OPTIONS,
    TRAVEL_TIPS,
    COST_CONFIG,
    GROUP_TICKET_MULTIPLIER
  };
}

