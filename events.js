// ============================================================
// EMORDES EVENTS: edit everything here.
// stripePaymentLink: paste a Stripe Payment Link (https://buy.stripe.com/...)
// Leave "" to use the demo checkout (generates a test ticket).
// ============================================================
window.SITE = {
  contact: "jh@emordes.studio",
  instagram: "emordes.studio",          // EDIT ME
  tips: {
    venmo: "",          // EDIT ME, Venmo username without @ e.g. "JH-Sedrome"
    cashapp: "",        // EDIT ME, Cash App $cashtag without $ e.g. "jhsedrome"
    stripeTipLink: ""   // EDIT ME, Stripe Payment Link set to "customer chooses price"
  }
};

window.EVENTS = [
  {
    id: "salu-salo",
    placeholder: true,
    title: "Salu-Salo: An Editorial Gathering",
    kicker: "Outdoor / Filipino / Supper",
    date: "2027-05-29", time: "4:00 PM to 10:00 PM",
    venue: "Venue TBA", address: "San Francisco, CA",
    description: "An outdoor Filipino long-table supper. Sculptural florals, draped linen, a cascade of vintage family photographs, and a DJ set into the night. Dress code: modern Filipiniana.",
    image: "images/event-01.jpg",
    capacity: 120, status: "on-sale",
    tiers: [
      { name: "General", price: 45, note: "Supper + entry", stripePaymentLink: "" },
      { name: "Patron", price: 95, note: "Front table + take-home print", stripePaymentLink: "" }
    ],
    live: {
      wifi: { network: "EMORDES-GUEST", password: "salusalo" },
      schedule: [
        ["4:00", "Doors / welcome drink"], ["5:00", "Kulintang set"],
        ["6:00", "Supper served"], ["8:00", "Fashion moment"], ["8:30", "DJ until close"]
      ],
      credits: [["DJ", "TBA"], ["Florals", "TBA"], ["Catering", "TBA"], ["Creative direction", "Emordes Studio"]],
      menu: [["Lumpia shanghai", "pork, sweet chili"], ["Chicken adobo", "garlic rice"], ["Pancit canton", ""], ["Ube leche flan", ""], ["Calamansi spritz", "N/A option"]]
    }
  },
  {
    id: "open-house",
    placeholder: true,
    title: "Studio Open House",
    kicker: "Studio / Archive / Textiles",
    date: "2027-03-13", time: "12:00 PM to 6:00 PM",
    venue: "Emordes Studio", address: "Daly City, CA",
    description: "Walk through the archive: binakol weaving studies, material samples from the lab, and works in progress. Free, RSVP required.",
    image: "images/event-02.jpg",
    capacity: 60, status: "on-sale",
    tiers: [ { name: "RSVP", price: 0, note: "Free entry", stripePaymentLink: "" } ],
    live: {
      wifi: { network: "EMORDES-GUEST", password: "archive" },
      schedule: [["12:00", "Doors"], ["2:00", "Talk: weaving + material"], ["4:00", "Sample swap"], ["6:00", "Close"]],
      credits: [["Host", "Emordes Studio"]],
      menu: [["Coffee + pandesal", ""], ["Sparkling water", ""]]
    }
  },
  {
    id: "runway-night",
    placeholder: true,
    title: "Runway / Performance Night",
    kicker: "Runway / Drag / Sound",
    date: "2027-06-19", time: "8:00 PM to 1:00 AM",
    venue: "Venue TBA", address: "San Francisco, CA",
    description: "One night of looks, live performance and sound. Collections from emerging designers, closing with a performance set. 21+.",
    image: "images/event-03.jpg",
    capacity: 200, status: "on-sale",
    tiers: [
      { name: "Standing", price: 30, note: "", stripePaymentLink: "" },
      { name: "Front Row", price: 75, note: "Seat at the runway", stripePaymentLink: "" }
    ],
    live: {
      wifi: { network: "EMORDES-GUEST", password: "runway" },
      schedule: [["8:00", "Doors"], ["9:00", "Show I"], ["9:45", "Performance"], ["10:15", "Show II"], ["11:00", "DJ until 1"]],
      credits: [["DJ", "TBA"], ["Performers", "TBA"], ["Designers", "TBA"]],
      menu: [["Bar", "cash + card"]]
    }
  }
];
