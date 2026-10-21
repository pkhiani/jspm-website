export const site = {
  name: "JS Property Maintenance",
  shortName: "JSPM",
  url: "https://www.jspropertymaintenance.com",
  description:
    "One local team covering every trade — planned, reactive and managed maintenance for landlords, lettings, serviced accommodation and homeowners across Teesside and the North East.",
  phone: "01642 989867",
  phoneHref: "tel:+441642989867",
  email: "contact@jspm.uk",
  hours: [
    { days: "Monday — Friday", time: "8:00am – 4:00pm" },
    { days: "Saturday — Sunday", time: "Closed" },
  ],
  social: {
    facebook: "https://www.facebook.com/p/JS-Property-Maintenance-100093823863064/",
    instagram: "https://www.instagram.com/official.jspm/",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/services", label: "Services" },
  { href: "/work-with-us", label: "Work with us" },
  { href: "/contact", label: "Contact" },
];

export const areas = [
  "Middlesbrough",
  "Stockton-on-Tees",
  "Darlington",
  "Hartlepool",
  "Redcar",
  "Durham",
  "Sunderland",
  "Newcastle",
];

export type Audience = { title: string; body: string; icon: IconName };

export const audiences: Audience[] = [
  {
    title: "Landlords",
    body: "Keep properties compliant, tenants happy and costs predictable.",
    icon: "key",
  },
  {
    title: "Letting and management agents",
    body: "One reliable contractor for your whole managed portfolio.",
    icon: "building",
  },
  {
    title: "Serviced accommodation",
    body: "Fast turnarounds that protect your reviews and occupancy.",
    icon: "bed",
  },
  {
    title: "Developers",
    body: "Reliable contractors and turnarounds to keep refurbs and projects moving.",
    icon: "crane",
  },
  {
    title: "Homeowners",
    body: "General property upkeep and home improvement services designed to keep your home safe, functional and well‑maintained.",
    icon: "home",
  },
];

export const advantages = [
  {
    title: "Structured Delivery",
    body: "We follow a clear, organised process for all planned and reactive maintenance. Every job is scheduled properly, communicated clearly and completed without unnecessary delays.",
  },
  {
    title: "Flexible Maintenance Support",
    body: "Whether you need routine property upkeep, targeted repairs, compliance‑driven checks or end‑of‑tenancy works, we tailor our service level to match your requirements.",
  },
  {
    title: "Verified Network of Trades",
    body: "Our team are vetted for reliability, professionalism and consistent workmanship — giving you dependable support across plumbing, electrics, joinery, plastering, flooring and general maintenance.",
  },
  {
    title: "Single Point of Contact",
    body: "You deal with one contractor who coordinates all trades, manages communication and oversees the full maintenance process — removing the hassle of chasing multiple people.",
  },
];

export const serviceTiers = [
  {
    title: "Planned Maintenance",
    body: "Routine upkeep designed to prevent issues, extend asset life and keep properties compliant.",
    points: [
      "Scheduled minor repairs",
      "Re‑sealing & cosmetic upkeep",
      "Decorating refreshes",
      "Routine checks & adjustments",
    ],
    comingSoon: false,
  },
  {
    title: "Reactive Repairs",
    body: "Fast, reliable multi‑trade response for faults, breakdowns and urgent repairs.",
    points: [
      "Plumbing leaks & faults",
      "Electrical issues & EICR remedials",
      "Joinery repairs",
      "Damp & plastering fixes",
    ],
    comingSoon: false,
  },
  {
    title: "Managed Maintenance",
    body: "A structured monthly maintenance model for landlords, agents and SA operators.",
    points: [
      "Monthly retainer plans",
      "Turnkey service",
      "Compliance checks",
      "Full reporting & coordination",
    ],
    comingSoon: true,
  },
];

export type Trade = { title: string; body: string; icon: IconName };

export const trades: Trade[] = [
  { title: "Plumbing", body: "Leaks, tap repairs, toilet issues and bathroom upgrades and installation.", icon: "droplet" },
  { title: "Electrical", body: "Fault finding, socket replacements, lighting repairs and all EICR remedial works.", icon: "bolt" },
  { title: "Joinery", body: "Doors, locks, kitchen upgrades, skirting and architraves.", icon: "saw" },
  { title: "Plastering", body: "Damp repairs, re-boarding and full room re‑plasters.", icon: "trowel" },
  { title: "Decorating", body: "Interior and exterior including preparation, emulsion work and woodwork finishing.", icon: "roller" },
  { title: "Gardens", body: "Fencing, patios, gates, hedge trimming, grass cuts and general exterior garden maintenance.", icon: "leaf" },
  { title: "Flooring", body: "Supply and fitting of laminate, vinyl, LVT and carpets with flexible options to suit your budget.", icon: "grid" },
  { title: "General Maintenance", body: "Everyday property upkeep, minor repairs, re‑sealing, blinds, taps, handles and essential fixture adjustments.", icon: "wrench" },
  { title: "Cleaning", body: "Standard and deep cleans, end‑of‑tenancy refreshes and appliance cleaning, carried out with reliable, consistent standards.", icon: "sparkle" },
];

export const processSteps = [
  {
    title: "Send us your enquiry.",
    body: "Share the job details by phone, WhatsApp or through our contact form. We confirm the scope, attend site if needed and provide a clear price for the work.",
  },
  {
    title: "We get to work.",
    body: "Once booked, we assign the relevant trade from our team and keep you updated throughout. You get booking confirmation, communication, before/after photos and full visibility of the job.",
  },
  {
    title: "Job completion.",
    body: "The work is completed, checked and logged. You receive a job summary and invoice, giving you a simple, hands‑off maintenance experience.",
  },
];

export const reviews = [
  { name: "Neelam", quote: "James did a fantastic job in my room, he was quick and efficient." },
  { name: "Sarah", quote: "Found James through one of his Facebook posts and I have to say, James did a great job. He kept me updated. Would definitely contact again and do recommend." },
  { name: "Catherine", quote: "James just decorated my lounge, including media wall and did a fabulous job, very happy with it. Would recommend." },
  { name: "Andrew", quote: "James decorated a large portion of our home including the hall, landing, kitchen/diner, bedroom and two bathrooms and we are very happy with the quality and standard of workmanship. The finish was excellent and we were very happy with the price having got a number of quotes, James was very competitive. Communication was excellent throughout the 4 week job. James' knowledge and advice were very helpful. We expect to have James back in the future." },
  { name: "Angela", quote: "James did a great job from start to finish. He kept good contact before starting the job. Turned up on time. Understood what was asked of him and carried out the work effectively with little or no supervision. Cleaned up after himself and ensured I was happy with his work." },
  { name: "Memoona", quote: "James has been committed and arrived on the days promised, also his work has been neat and professional. He completed his work within said time frame. I will hire James again for more work around the house." },
  { name: "Zoe", quote: "We found James by his Facebook page. He set about the hall/stairs/landing and 11 doors. Fantastic job especially working around 3 teenagers and a crazy cat. Could 100% recommend James. Not only is he good at his job, he is a lovely and thoughtful guy to have around the house." },
  { name: "Mark", quote: "James arrived promptly and worked well to complete the job on schedule. Very happy with the finished room, his flexibility and hard work. We will be very happy to use him for future projects." },
  { name: "Chris", quote: "James is a polite and respectful young chap. He worked hard all day painting the walls around our staircase. He did a really good job and I am delighted with his workmanship. I gave James the job as he took his time to come and see the job whereas some traders quoted based on pictures provided. I would definitely recommend him and have already lined up an outdoor job for him in the summer." },
  { name: "Clair", quote: "James is a lovely young man who works really hard. I found him professional, trustworthy and reliable. He has done an excellent job for me! Would definitely recommend." },
  { name: "Lee", quote: "Had my bedroom done yesterday and the result is phenomenal, it's a complete new room. Nothing is too much and curtains were rehung after. We are that pleased with his work we have booked him in for a second room. Fantastic work bud, thank you." },
  { name: "Michelle", quote: "James is a lovely trustworthy lad who has gone above and beyond. Professional and courteous and quality workmanship. Highly recommend!" },
  { name: "Brad", quote: "Fantastic job painting our kitchen, living room, bathroom, hallway and stairs. Not an easy job with different colours on the woodwork and stairs. Great job, very professional and always on time. If you're wanting a professional painter don't hesitate to book with James." },
  { name: "Karen", quote: "James has spent the last few days painting my hall, stairs, landing, internal doors and all woodwork. He's done an amazing job. He took great care to cover carpets and furniture, when he left each day the area was clean and tidy. I'd highly recommend him, in fact he's back soon to do my kitchen." },
  { name: "Steven", quote: "Had 2 bedrooms and bathroom painted by JS Maintenance. Excellent standard of work for a fantastic price, would recommend 100%." },
  { name: "Jennifer", quote: "100% recommended! James has done a fabulous job in our living room despite the awful condition of the walls. He's personable and professional and gives his work 100%. We'll definitely be using him again." },
  { name: "Jenni", quote: "Absolutely lovely lad to start and really put 100% effort in — did literally my whole house and there's no complaints!! If I need another painting job doing this is who I would go to. Could not recommend him enough!" },
];

export type IconName =
  | "key"
  | "building"
  | "bed"
  | "crane"
  | "home"
  | "droplet"
  | "bolt"
  | "saw"
  | "trowel"
  | "roller"
  | "leaf"
  | "grid"
  | "wrench"
  | "sparkle"
  | "phone"
  | "mail"
  | "clock"
  | "pin"
  | "check"
  | "arrow"
  | "menu"
  | "close"
  | "star"
  | "facebook"
  | "instagram";
