const pricingData = [
  {
    group: "General",
    price: "$30",
    desc: "Anyone over 21 years old",
    className: "general-pricing",
    perks: [
      "Access to all gym equipment",
      "Group fitness classes",
      "Free towel service",
      "Discount on merchandise",
      "Sauna and steam room access",
      "Locker rental",
    ],
  },
  {
    group: "Student",
    price: "$15",
    desc: "Bring a student card as proof",
    className: "student-pricing",
    perks: [
      "Includes all General perks",
      "Student-only events",
      "Free Wi-Fi access",
      
    ],
  },
  {
    group: "Senior",
    price: "$20",
    desc: "Anyone over 65 years old",
    className: "senior-pricing",
    perks: [
      "Includes all General perks",
      "Senior fitness programs",
      "Specialized senior classes",
    ],
  },
];

export default pricingData;
