import newsImage1 from "./news-images/news-1.avif";
import newsImage2 from "./news-images/news-2.avif";
import newsImage3 from "./news-images/news-3.png";

export const stats = [
  { value: "12", label: { en: "Registered Users", bn: "নিবন্ধিত ব্যবহারকারী" } },
  { value: "100", label: { en: "QR Scans", bn: "কিউআর স্ক্যান" } },
  { value: "23", label: { en: "Alerts Sent", bn: "অ্যালার্ট পাঠানো" } },
  { value: "99.9%", label: { en: "Uptime", bn: "আপটাইম" } },
];

export const processSteps = [
  {
    number: "01",
    title: { en: "Register", bn: "রেজিস্টার" },
    text: {
      en: "Sign up with your phone number in under 2 minutes.",
      bn: "২ মিনিটের কম সময়ে আপনার ফোন নম্বর দিয়ে রেজিস্টার করুন।",
    },
  },
  {
    number: "02",
    title: { en: "Create Profile", bn: "প্রোফাইল তৈরি" },
    text: {
      en: "Add blood group, emergency contacts, and medical info.",
      bn: "রক্তের গ্রুপ, জরুরি যোগাযোগ ও প্রয়োজনীয় মেডিকেল তথ্য যুক্ত করুন।",
    },
  },
  {
    number: "03",
    title: { en: "Get QR Code", bn: "কিউআর কোড নিন" },
    text: {
      en: "Download and print your unique QR sticker for your helmet.",
      bn: "হেলমেটের জন্য আপনার ইউনিক কিউআর স্টিকার ডাউনলোড ও প্রিন্ট করুন।",
    },
  },
  {
    number: "04",
    title: { en: "Stay Protected", bn: "সুরক্ষিত থাকুন" },
    text: {
      en: "Anyone who scans can instantly alert your family with GPS location.",
      bn: "যে কেউ স্ক্যান করলে আপনার পরিবারকে লোকেশনসহ দ্রুত জানাতে পারবে।",
    },
  },
];

export const plans = [
  {
    name: { en: "FREE PLAN", bn: "ফ্রি প্ল্যান" },
    price: "৳0",
    caption: { en: "Forever free", bn: "সবসময় ফ্রি" },
    features: [
      { en: "Emergency profile", bn: "জরুরি প্রোফাইল" },
      { en: "Unique QR code", bn: "ইউনিক কিউআর কোড" },
      { en: "Public profile page", bn: "পাবলিক প্রোফাইল পেজ" },
      { en: "Click-to-call contacts", bn: "এক ক্লিকে কল করার সুবিধা" },
    ],
    premium: false,
  },
  {
    name: { en: "PREMIUM PLAN", bn: "প্রিমিয়াম প্ল্যান" },
    price: "৳10/mo",
    caption: { en: "or ৳100/year (save 17%)", bn: "অথবা বছরে ৳১০০ (১৭% সাশ্রয়)" },
    features: [
      { en: "All free features", bn: "ফ্রি প্ল্যানের সব সুবিধা" },
      { en: "Auto SMS emergency alerts", bn: "অটো এসএমএস জরুরি অ্যালার্ট" },
      { en: "GPS location sharing", bn: "জিপিএস লোকেশন শেয়ারিং" },
      { en: "Alert history", bn: "অ্যালার্ট হিস্ট্রি" },
      { en: "Premium badge", bn: "প্রিমিয়াম ব্যাজ" },
      { en: "Priority support", bn: "প্রায়োরিটি সাপোর্ট" },
    ],
    premium: true,
  },
];

export const accidentNews = [
  {
    title: "একন বুঝিছি না, ছেলের জন্যি কানমো নাকি ওর মাওক সামলামো",
    excerpt:
      "জীবনের স্বপ্নপূরণের লক্ষ্যে বিদেশে গিয়েছিলেন জয়পুরহাটের কালাই উপজেলার শিক্ষার্থী হাসিবুর রহমান (২৩)। সেই স্বপ্ন আর পূরণ হলো না।",
    date: "May 4, 2026",
    href: "https://www.prothomalo.com/bangladesh/district/jrpga5d087",
    image: newsImage1,
    tone: "blue",
  },
  {
    title: "সড়ক দুর্ঘটনা বনানীতে বাসের চাপায় মোটরসাইকেল আরোহী নিহত, মাদক উদ্ধার",
    excerpt:
      "রাজধানীর বনানী এলাকায় বাসের চাপায় শাহাদাত হোসেন নামে রাইড শেয়ারিং মোটরসাইকেলের এক আরোহী নিহত হয়েছেন।",
    date: "May 4, 2026",
    href: "https://www.prothomalo.com/bangladesh/capital/9eomtqesfl",
    image: newsImage2,
    tone: "red",
  },
  {
    title:
      "13 killed in separate accidents in Dhaka, Sylhet, Chapainawabganj, Magura and Mymensingh",
    excerpt:
      "A series of separate road and rail accidents left multiple people dead and several others injured.",
    date: "May 4, 2026",
    href: "https://www.tbsnews.net/bangladesh/13-killed-separate-accidents-dhaka-sylhet-chapainawabganj-magura-and-mymensingh-1428596",
    image: newsImage3,
    tone: "yellow",
  },
];

export const awarenessVideos = [
  {
    title: "বাইকে ঢাকা ত্যাগ: ঘটছে বড় দূর্ঘটনা !",
    text: "ঈদে মোটরসাইকেলে করে ঢাকা ত্যাগ ভয়াবহ ঝুঁকি। মোটরসাইকেল ভ্রমণকে ঈদ যাত্রার সবচেয়ে অনিরাপদ ও ঝুঁকিপূর্ণ মাধ্যম হিসেবে উল্লেখ করা হয়েছে।",
    embed: "https://www.youtube.com/embed/42-fpQyQZuk",
  },
  {
    title: "সড়কে মৃত্যুর মিছিল বাড়ছে, নেই আইনের কঠোর প্রয়োগ!",
    text: "ঈদ বা যেকোনো উৎসব এলেই সড়কে গাড়ির চালকেরা বেপরোয়া হয়ে যান। পাল্লা দিয়ে গাড়ি চালানো কিংবা দায়িত্বে অবহেলার কারণে প্রতিদিন মানুষ মারা যাচ্ছেন।",
    embed: "https://www.youtube.com/embed/6nTY0Ey7dCM",
  },
];

export const safetyTips = [
  {
    title: {
      en: "Save Emergency Contacts on Your Phone Lock Screen",
      bn: "ফোনের লক স্ক্রিনে জরুরি যোগাযোগ রাখুন",
    },
    text: {
      en: "Set up an emergency contact visible on your lock screen so first responders can reach your family without unlocking your phone.",
      bn: "ফোন আনলক না করেও যেন সাহায্যকারীরা পরিবারের সাথে যোগাযোগ করতে পারে, সেই ব্যবস্থা রাখুন।",
    },
  },
  {
    title: {
      en: "Know Your Blood Group - It Can Save Your Life",
      bn: "নিজের রক্তের গ্রুপ জানুন",
    },
    text: {
      en: "In accidents, hospitals often need blood type immediately. Keep it visible on your emergency profile and QR card.",
      bn: "দুর্ঘটনার সময় হাসপাতালে দ্রুত রক্তের গ্রুপ জানা জরুরি হতে পারে।",
    },
  },
  {
    title: {
      en: "Always Wear Your Helmet - It's Your First Line of Defense",
      bn: "সবসময় হেলমেট পরুন",
    },
    text: {
      en: "Studies show helmets reduce head injury risk by 69%. Always wear a certified helmet and attach your emergency QR sticker to it.",
      bn: "সার্টিফায়েড হেলমেট পরুন এবং তাতে জরুরি কিউআর স্টিকার লাগিয়ে রাখুন।",
    },
  },
];
