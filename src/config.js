// // ─────────────────────────────────────────────────────────────
// // Everything about the wedding lives in this one file.
// // Change names, dates, venue, entourage and photos here.
// // Photos can be URLs or local files: put them in src/assets and import them:
// //   import hero from "./assets/hero.jpg";   then   heroImage: hero,
// // ─────────────────────────────────────────────────────────────
// import couplePhoto from "./assets/couple.jpg";
// import bride from "./assets/bride.jpg";
// import groom from "./assets/groom.jpeg";

// const WEDDING = {
//   groom: "Jean Aime Yves",
//   bride: "Claire",
//   initials: "J & C",

//   // Date and time with the venue's timezone offset (+08:00 = Philippines)
//   date: "2026-12-26T15:00:00+08:00",
//   dateLabel: "Saturday, December 26, 2026",
//   shortDate: "12 · 20 · 2026",
//   // rsvpBy: "January 10, 2026",
//   hashtag: "#JAYAndClaireForever",

//   heroImage: couplePhoto,
//     // "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80",

//   intro:
//     "Together with our families, we joyfully invite you to celebrate our marriage. Your presence is the greatest gift we could ask for.",

//   venue: {
//     name: "ALEGRIA INN (RUYENZI) ",
//     city: "Kamonyi-Ruyenzi Road",
//     // What Google Maps searches for. Use the exact place name, or "lat,lng" coordinates.
//     mapQuery: "ALEGRIA INN (RUYENZI) Kamonyi-Ruyenzi Road",
//     note: "Free parking is available on site.",
//   },

//     events: [
//     { icon: "heart-hand", time: "09:00 AM", title: "Introduction & Dowry", place: "ALEGRIA INN (RUYENZI)", location: "Kamonyi-Ruyenzi Road" },
//     { icon: "church", time: "02:00 PM", title: "Church Wedding", place: "PAROISSE ST STANISLAS", location: "Kamonyi-Ruyenzi Road" },
//     { icon: "party", time: "5:30 PM", title: "Reception", place: "ALEGRIA INN (RUYENZI)", location: "Kamonyi-Ruyenzi Road" },
//   ],

//   dressCode: {
//     text: "Semi-formal. We'd love to see our guests in these soft colours. Please avoid white, which is reserved for the bride.",
//     colors: [
//       { name: "Wine Red", hex: "#831418" },
//       { name: "Rose Gold", hex: "#B17F6B" },
//       { name: "Blush", hex: "#EFD4C9" },
//       { name: "Deep Sage", hex: "#556B4F" },
//       // { name: "Navy", hex: "#1F2A44" },
//     ],
//   },

//   story: [
//     {
//       image: bride,
//       year: "2018",
//       title: "First hello",
//       text: "We met at a friend's birthday dinner in Makati. Gabriel spilled his drink on Sofia's shoes. She laughed; he asked for her number.",
//       // image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
//     },
//     {
//       image: groom,
//       year: "2021",
//       title: "Road trips and rainy days",
//       text: "Weekends became drives up to Tagaytay for bulalo and the view of Taal. It quickly became our favourite place.",
//       // image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
//     },
//     // {
//     //   year: "2025",
//     //   title: "She said yes",
//     //   text: "Gabriel proposed at sunset overlooking Taal Lake, the same spot where we'll now say our vows.",
//     //   image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
//     // },
//   ],

//   entourage: [
//     { role: "Parents of the groom", names: ["Mr. Nzindukiyimana Reveriane", "Mrs. Nyirahabimana Emmerance"] },
//     { role: "Parents of the bride", names: ["Mr. Bimenyimana Mathias", "Mrs. Murekatete Emerthe"] },
//     // {
//     //   role: "Principal sponsors",
//     //   names: [
//     //     "Mr. & Mrs. Antonio Cruz", "Mr. & Mrs. Luis Mendoza",
//     //     "Mr. & Mrs. Jose Villanueva", "Mr. & Mrs. Mario Bautista",
//     //   ],
//     // },
//     // { role: "Best man", names: ["Paolo Santos"] },
//     // { role: "Maid of honor", names: ["Bianca Reyes"] },
//     // { role: "Groomsmen", names: ["Miguel Tan", "Carlo Dizon", "Rafael Lim"] },
//     // { role: "Bridesmaids", names: ["Andrea Lopez", "Nicole Garcia", "Patricia Ong"] },
//     // { role: "Ring bearer", names: ["Lucas Reyes"] },
//     // { role: "Flower girls", names: ["Mia Santos", "Ella Cruz"] },
//   ],

//   gallery: [
//     "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
//     "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=80",
//     "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
//     "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
//     "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
//     "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
//   ],
// };

// export default WEDDING;


// ─────────────────────────────────────────────────────────────
// Everything about the wedding lives in this one file.
// Change names, dates, venue, entourage and photos here.
// Photos can be URLs or local files: put them in src/assets and import them:
//   import hero from "./assets/hero.jpg";   then   heroImage: hero,
// ─────────────────────────────────────────────────────────────
import couplePhoto from "./assets/couple.jpg";
import bride from "./assets/bride.jpg";
import groom from "./assets/groom.jpeg";

const WEDDING = {
  groom: "Jean Aime Yves",
  bride: "Claire",
  initials: "J & C",

  // Date and time with the venue's timezone offset (+02:00 = Rwanda)
  date: "2026-12-26T15:00:00+02:00",
  dateLabel: "Saturday, December 26, 2026",
  shortDate: "12 · 26 · 2026",
  // rsvpBy: "January 10, 2026",
  hashtag: "#JAYAndClaireForever",
  
  heroImage: couplePhoto,
    // "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80",

  intro:
    "Together with our families, We joyfully invite you to celebrate our marriage. Your presence is the greatest gift we could ask for.",

  venue: {
    name: "ALEGRIA INN (RUYENZI)",
    city: "Kamonyi-Ruyenzi Road",
    // What Google Maps searches for. Use the exact place name, or "lat,lng" coordinates.
    mapQuery: "ALEGRIA INN (RUYENZI) Kamonyi-Ruyenzi Road",
    note: "Don't worry about parking — free spots are available on site.",
  },

    events: [
    { icon: "heart-hand", time: "09:00 AM", title: "Introduction & Dowry", place: "ALEGRIA INN (RUYENZI)", location: "Kamonyi-Ruyenzi Road" },
    { icon: "church", time: "02:00 PM", title: "Church Wedding", place: "PAROISSE ST STANISLAS", location: "Kamonyi-Ruyenzi Road" },
    { icon: "party", time: "04:00 PM", title: "Reception", place: "ALEGRIA INN (RUYENZI)", location: "Kamonyi-Ruyenzi Road" },
  ],

  dressCode: {
    text: "We invite our guests to join us dressed in the warmth of our wedding palette — earthy tones that reflect the beauty of nature, love, and celebration",
    colors: [
      { name: "Wine Red", hex: "#831418" },
      { name: "Rose Gold", hex: "#B17F6B" },
      { name: "Blush", hex: "#EFD4C9" },
      { name: "Deep Sage", hex: "#556B4F" },
    ],
  },

  // ── "Meet the Bride & Groom" (shown in the Story section) ──
  // Uses the photos imported at the top: groom.jpeg and bride.jpg
  couple: {
    groom: {
      photo: groom,
      fullName: "Jean Aime Yves",                     // write the full name here
      nickname: "",                                   // e.g. "Yves" — leave "" for none
      parents: "Son of Nzindukiyimana Reveriane",
      message:
        " Before I knew you, I never knew that love could feel this peaceful, genuine, and beautiful. You came into my life and became more than the woman I love, you became my best friend, my safe place, and the person I want to share every chapter of life with.\n" +
        "Every moment we’ve shared has brought me closer to the man I want to be, and every day with you reminds me that choosing you is one of the greatest gifts life has given me.\n" +
        "Now, as we stand at the beginning of our forever, my heart is filled with joy and gratitude to God. I can’t wait to call you my wife, build our home together, share our dreams, and grow old with you.\n" +
        "I choose you today, tomorrow, and every day to come.\n" +
        "I love you babe ❤️",
    },
    bride: {
      photo: bride,
      fullName: "Claire",                             // write the full name here
      nickname: "",
      parents: "Daughter of Bimenyimana Mathias",
      message:
        "The day we first met, I never imagined that our journey would bring us this far. I met you as a kind person when I came to you for a service, but you became so much more, you became a good friend I could trust, and eventually my best friend.\n" +
        "Now, only a few days remain until we become one forever.\n" +
        "You have been a blessing throughout my journey, standing by me through difficult days and sharing in my happiness.\n" +
        "I still can’t believe that we are about to spend the rest of our lives together, not just as two people in love, but as husband and wife.\n" +
        "I love you more than words could ever explain.\n" +
        "I love you, my love. ❤️",
    },
  },

  // Not shown any more (the Story section now shows "Meet the Bride & Groom").
  // Kept here in case you want it back later.
  // story: [
  //   {
  //     image: bride,
  //     year: "2018",
  //     title: "First hello",
  //     text: "We met at a friend's birthday dinner in Makati. Gabriel spilled his drink on Sofia's shoes. She laughed; he asked for her number.",
  //     // image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80",
  //   },
  //   {
  //     image: groom,
  //     year: "2021",
  //     title: "Road trips and rainy days",
  //     text: "Weekends became drives up to Tagaytay for bulalo and the view of Taal. It quickly became our favourite place.",
  //     // image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=900&q=80",
  //   },
  //   // {
  //   //   year: "2025",
  //   //   title: "She said yes",
  //   //   text: "Gabriel proposed at sunset overlooking Taal Lake, the same spot where we'll now say our vows.",
  //   //   image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
  //   // },
  // ],

  entourage: [
    { role: "Parents of the Groom", names: ["Mr. Nzindukiyimana Reveriane", "Mrs. Nyirahabimana Emmerance"] },
    { role: "Parents of the Bride", names: ["Mr. Bimenyimana Mathias", "Mrs. Murekatete Emerthe"] },
    // {
    //   role: "Principal sponsors",
    //   names: [
    //     "Mr. & Mrs. Antonio Cruz", "Mr. & Mrs. Luis Mendoza",
    //     "Mr. & Mrs. Jose Villanueva", "Mr. & Mrs. Mario Bautista",
    //   ],
    // },
    // { role: "Best man", names: ["Paolo Santos"] },
    // { role: "Maid of honor", names: ["Bianca Reyes"] },
    // { role: "Groomsmen", names: ["Miguel Tan", "Carlo Dizon", "Rafael Lim"] },
    // { role: "Bridesmaids", names: ["Andrea Lopez", "Nicole Garcia", "Patricia Ong"] },
    // { role: "Ring bearer", names: ["Lucas Reyes"] },
    // { role: "Flower girls", names: ["Mia Santos", "Ella Cruz"] },
  ],

  contacts: [
     { name: "Jean Aime Yves", phone: "+250 788 727 740" },
     { name: "Claire", phone: "+250 787 973 008" },
   ],

  gallery: [
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=80",
  ],
};

export default WEDDING;