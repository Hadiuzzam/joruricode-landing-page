import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  BellRing,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Facebook,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Play,
  QrCode,
  Send,
  Shield,
  Smartphone,
  User,
  Users,
  X,
  Youtube,
  Instagram,
} from "lucide-react";
import { push, ref, serverTimestamp } from "firebase/database";
import {
  accidentNews,
  awarenessVideos,
  plans,
  processSteps,
  safetyTips,
  stats,
} from "./landingData.js";
import { database, hasFirebaseConfig } from "./firebase.js";
import appStoreButton from "./app-store-button.webp";
import googlePlayButton from "./google-play-button.webp";
import phonesImage from "./phones.webp";


const copy = {
  en: {
    language: "বাংলা",
    nav: ["How It Works", "Pricing", "App", "Contact"],
    heroBadge: "Bangladesh's #1 Emergency ID System",
    heroA: "Your Life,",
    heroB: "One Scan Away",
    heroText:
      "Register once. Stick a QR code on your helmet. In an emergency, anyone can scan and instantly alert your family with your GPS location.",
    howItWorks: "How It Works",
    processKicker: "SIMPLE PROCESS",
    processTitle: "How JoruriCode Works",
    pricingKicker: "PRICING",
    pricingTitle: "Simple, Transparent Plans",
    popular: "POPULAR",
    readMore: "Read More",
    awarenessBadge: "Safety Awareness Hub",
    awarenessTitle: "Stay Safe. Stay Informed.",
    awarenessText:
      "Real accident stories, safety videos, and tips to help you and your family stay protected.",
    accidentNews: "Accident News",
    videoAwareness: "Video Awareness",
    safetyTips: "Safety Tips",
    appBadge: "JoruriCode mobile app",
    appTitle: "Emergency safety, ready in your pocket.",
    appText:
      "The landing page introduces the service. Registration, QR profile, family alerts and vault controls will run from the JoruriCode app.",
    appFeatureA: "QR profile",
    appFeatureB: "Family alerts",
    appFeatureC: "Secure vault",
    appStore: "App Store",
    googlePlay: "Google Play",
    contactKicker: "CONTACT",
    contactTitleA: "Get in",
    contactTitleB: "Touch",
    contactText:
      "For partnerships, QR sticker orders, app launch updates or support, leave your details and the JoruriCode team will contact you.",
    hotline: "Call",
    whatsapp: "WhatsApp",
    contactEmail: "Email",
    addressLabel: "Office",
    address: "Mohammadpur, Dhaka",
    mapTitle: "JoruriCode office location in Mohammadpur, Dhaka",
    name: "Your name",
    phone: "Mobile number",
    message: "Message",
    submit: "Submit",
    sending: "Submitting...",
    required: "Please complete all three fields.",
    invalidPhone: "Please enter a valid 11 digit Bangladesh mobile number.",
    tooLong: "Message is too long.",
    sentTitle: "Message sent successfully",
    sentText: "Thank you for contacting JoruriCode. We will get back to you soon.",
    configMissing:
      "Firebase is not configured yet. Add your Firebase keys before saving messages.",
    failed: "Could not submit your message. Please try again.",
    closingTitle: "Don't Wait for an Emergency",
    closingText:
      "Register today and keep your loved ones connected. It takes less than 3 minutes.",
    footerLine: "Emergency QR Identity & Family Safety Platform",
    footerText:
      "Protect yourself and your loved ones with emergency QR profiles, instant emergency alerts, family connections, and critical information access when it matters most.",
    quickLinks: "Quick Links",
    legal: "Support & Legal",
    updated: "Stay Updated",
    updatedText:
      "Get emergency preparedness tips, safety awareness updates, and important JoruriCode announcements.",
    subscribe: "Subscribe",
    email: "Email address",
    firebaseReady: "Firebase ready: add keys in .env when the app backend starts.",
    copyright: "© 2026 JoruriCode. All rights reserved.",
  },
  bn: {
    language: "ENG",
    nav: ["কীভাবে কাজ করে", "প্রাইসিং", "অ্যাপ", "যোগাযোগ"],
    heroBadge: "বাংলাদেশের #১ জরুরি আইডি সিস্টেম",
    heroA: "আপনার জীবন,",
    heroB: "এক স্ক্যান দূরে",
    heroText:
      "একবার রেজিস্টার করুন। হেলমেটে কিউআর কোড লাগিয়ে রাখুন। জরুরি সময়ে যে কেউ স্ক্যান করে আপনার পরিবারকে জিপিএস লোকেশনসহ জানাতে পারবে।",
    howItWorks: "কীভাবে কাজ করে",
    processKicker: "সহজ প্রক্রিয়া",
    processTitle: "JoruriCode কীভাবে কাজ করে",
    pricingKicker: "প্রাইসিং",
    pricingTitle: "সহজ, স্বচ্ছ প্ল্যান",
    popular: "জনপ্রিয়",
    readMore: "আরও পড়ুন",
    awarenessBadge: "সেফটি অ্যাওয়ারনেস হাব",
    awarenessTitle: "নিরাপদ থাকুন। সচেতন থাকুন।",
    awarenessText:
      "বাস্তব দুর্ঘটনার গল্প, সেফটি ভিডিও ও টিপস আপনার পরিবারকে আরও নিরাপদ রাখতে সাহায্য করবে।",
    accidentNews: "দুর্ঘটনার খবর",
    videoAwareness: "ভিডিও সচেতনতা",
    safetyTips: "সেফটি টিপস",
    appBadge: "JoruriCode মোবাইল অ্যাপ",
    appTitle: "জরুরি সুরক্ষা, এখন হাতের মুঠোয়।",
    appText:
      "এই ল্যান্ডিং পেজটি সার্ভিস পরিচয়ের জন্য। রেজিস্ট্রেশন, কিউআর প্রোফাইল, ফ্যামিলি অ্যালার্ট ও ভল্ট কন্ট্রোল JoruriCode অ্যাপ থেকে চলবে।",
    appFeatureA: "কিউআর প্রোফাইল",
    appFeatureB: "ফ্যামিলি অ্যালার্ট",
    appFeatureC: "সিকিউর ভল্ট",
    appStore: "অ্যাপ স্টোর",
    googlePlay: "গুগল প্লে",
    contactKicker: "যোগাযোগ",
    contactTitleA: "যোগাযোগ",
    contactTitleB: "করুন",
    contactText:
      "পার্টনারশিপ, কিউআর স্টিকার অর্ডার, অ্যাপ লঞ্চ আপডেট বা সাপোর্টের জন্য আপনার তথ্য দিন। JoruriCode টিম যোগাযোগ করবে।",
    hotline: "কল",
    whatsapp: "হোয়াটসঅ্যাপ",
    contactEmail: "ইমেইল",
    addressLabel: "অফিস",
    address: "মোহাম্মদপুর, ঢাকা",
    mapTitle: "মোহাম্মদপুর, ঢাকায় JoruriCode অফিসের অবস্থান",
    name: "আপনার নাম",
    phone: "মোবাইল নম্বর",
    message: "মেসেজ",
    submit: "সাবমিট",
    sending: "পাঠানো হচ্ছে...",
    required: "অনুগ্রহ করে তিনটি ঘরই পূরণ করুন।",
    invalidPhone: "সঠিক ১১ সংখ্যার বাংলাদেশি মোবাইল নম্বর দিন।",
    tooLong: "মেসেজটি অনেক বড় হয়েছে।",
    sentTitle: "বার্তা সফলভাবে পাঠানো হয়েছে",
    sentText: "JoruriCode-এর সাথে যোগাযোগ করার জন্য ধন্যবাদ। আমরা শীঘ্রই যোগাযোগ করব।",
    configMissing:
      "Firebase এখনো কনফিগার করা হয়নি। মেসেজ সেভ করতে আগে Firebase key যোগ করুন।",
    failed: "বার্তাটি পাঠানো যায়নি। অনুগ্রহ করে আবার চেষ্টা করুন।",
    closingTitle: "জরুরি সময়ের জন্য অপেক্ষা করবেন না",
    closingText:
      "আজই রেজিস্টার করুন এবং প্রিয়জনদের সাথে নিরাপত্তার সংযোগ রাখুন। সময় লাগে ৩ মিনিটেরও কম।",
    footerLine: "জরুরি কিউআর আইডেন্টিটি ও ফ্যামিলি সেফটি প্ল্যাটফর্ম",
    footerText:
      "জরুরি কিউআর প্রোফাইল, দ্রুত অ্যালার্ট, পারিবারিক সংযোগ ও প্রয়োজনীয় তথ্যের মাধ্যমে নিজেকে ও প্রিয়জনদের সুরক্ষিত রাখুন।",
    quickLinks: "কুইক লিংক",
    legal: "সাপোর্ট ও লিগ্যাল",
    updated: "আপডেট পেতে",
    updatedText:
      "জরুরি প্রস্তুতি, সেফটি সচেতনতা ও JoruriCode ঘোষণার আপডেট পান।",
    subscribe: "সাবস্ক্রাইব",
    email: "ইমেইল ঠিকানা",
    firebaseReady: "Firebase ready: app backend শুরু হলে .env-তে key যোগ করুন।",
    copyright: "© ২০২৬ JoruriCode. সর্বস্বত্ব সংরক্ষিত।",
  },
};

const CALL_NUMBER = "01751719432";
const CALL_HREF = "+8801751719432";
const WHATSAPP_NUMBER = "01531743090";
const WHATSAPP_HREF = "https://wa.me/8801531743090";
const CONTACT_EMAIL = "Joruricode@gmail.com";
const GOOGLE_MAP_EMBED =
  "https://www.google.com/maps?q=Mohammadpur%2C%20Dhaka%2C%20Bangladesh&output=embed";
const CONTACT_PATH = "Get_in_touch";
const navTargets = ["#how-it-works", "#pricing", "#app", "#contact"];

function text(value, lang) {
  if (typeof value === "string") return value;
  return value?.[lang] || value?.en || "";
}

function useScrollReveal() {
  useEffect(() => {
    const elements = [...document.querySelectorAll("[data-reveal]")];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion) {
      elements.forEach((element) => element.classList.add("is-revealed"));
      return undefined;
    }

    const timers = new Set();
    const isMobileReveal = window.matchMedia("(max-width: 640px)").matches;
    const delayScale = isMobileReveal ? 1.65 : 3;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target;
          const delay = Math.round(Number(element.dataset.revealDelay || 0) * delayScale);
          const timer = window.setTimeout(() => {
            element.classList.add("is-revealed");
            timers.delete(timer);
          }, delay);
          timers.add(timer);
          observer.unobserve(element);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);
}

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="JoruriCode home">
      <span className="logo-mark">
        <Shield size={21} strokeWidth={2.4} />
      </span>
      <span>JoruriCode</span>
    </a>
  );
}

function Header({ lang, setLang, t }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Logo />

        <nav
          id="joruricode-main-nav"
          className={`nav-links ${menuOpen ? "open" : ""}`}
          aria-label="Primary navigation"
        >
          {t.nav.map((label, index) => (
            <a
              className={index === 2 ? "mobile-app-nav" : ""}
              key={label}
              href={navTargets[index]}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="language-toggle"
            type="button"
            onClick={() => {
              setLang(lang === "en" ? "bn" : "en");
              setMenuOpen(false);
            }}
            aria-label="Change language"
          >
            {t.language}
          </button>

          <a
            className="header-app-button"
            href="#app"
            onClick={() => setMenuOpen(false)}
          >
            <Smartphone size={17} />
            <span>
              {lang === "en" ? "Get App" : "অ্যাপ নিন"}
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="joruricode-main-nav"
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero({ t }) {
  return (
    <section id="top" className="hero shell">
      <div className="plus-pattern" aria-hidden="true" />
      <div className="hero-content" data-reveal="text">
        <div className="eyebrow hero-pill">
          <Shield size={16} />
          {t.heroBadge}
        </div>
        <h1>
          {t.heroA}
          <span>{t.heroB}</span>
        </h1>
        <p>{t.heroText}</p>
        <a className="ghost-cta" href="#how-it-works">
          {t.howItWorks}
        </a>
      </div>
    </section>
  );
}

function parseStatValue(value) {
  const raw = String(value).trim();
  const match = raw.match(/^([^\d-]*)(-?[\d,.]+)(.*)$/);

  if (!match) {
    return {
      raw,
      prefix: "",
      suffix: "",
      numericValue: NaN,
      decimals: 0,
      useGrouping: false,
    };
  }

  const [, prefix, numberPart, suffix] = match;
  const cleanNumber = numberPart.replace(/,/g, "");
  const numericValue = Number(cleanNumber);
  const decimalMatch = cleanNumber.match(/\.(\d+)/);

  return {
    raw,
    prefix,
    suffix,
    numericValue,
    decimals: decimalMatch ? decimalMatch[1].length : 0,
    useGrouping: numberPart.includes(","),
  };
}

function formatStatValue(meta, value) {
  if (!Number.isFinite(meta.numericValue)) {
    return meta.raw;
  }

  const safeValue = Math.min(meta.numericValue, value);

  const formatted = safeValue.toLocaleString("en-US", {
    minimumFractionDigits: meta.decimals,
    maximumFractionDigits: meta.decimals,
    useGrouping: meta.useGrouping || meta.numericValue >= 1000,
  });

  return `${meta.prefix}${formatted}${meta.suffix}`;
}

function CountUpStat({ value, delay = 0 }) {
  const meta = useMemo(() => parseStatValue(value), [value]);
  const [started, setStarted] = useState(false);
  const [display, setDisplay] = useState(() => {
    if (!Number.isFinite(meta.numericValue)) return meta.raw;
    return formatStatValue(meta, Math.min(1, meta.numericValue));
  });

  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || started) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    if (!Number.isFinite(meta.numericValue)) {
      setDisplay(meta.raw);
      return;
    }

    if (meta.numericValue <= 1) {
      setDisplay(formatStatValue(meta, meta.numericValue));
      return;
    }

    let frameId = null;
    let timeoutId = null;
    let startTime = null;

    const duration =
      meta.numericValue < 30
        ? 1400
        : meta.numericValue < 120
        ? 1700
        : 2000;

    timeoutId = window.setTimeout(() => {
      const tick = (timestamp) => {
        if (startTime === null) startTime = timestamp;

        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        const currentValue =
          1 + (meta.numericValue - 1) * eased;

        const roundedValue =
          meta.decimals > 0
            ? Number(currentValue.toFixed(meta.decimals))
            : Math.round(currentValue);

        setDisplay(
          formatStatValue(
            meta,
            progress >= 1 ? meta.numericValue : roundedValue
          )
        );

        if (progress < 1) {
          frameId = window.requestAnimationFrame(tick);
        }
      };

      frameId = window.requestAnimationFrame(tick);
    }, delay);

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, [delay, meta, started]);

  return (
    <strong ref={ref} className="count-up-value">
      {display}
    </strong>
  );
}

function StatsBand({ lang }) {
  return (
    <section className="stats-band shell" aria-label="JoruriCode statistics">
      {stats.map((item, index) => (
        <div
          className="stat-item"
          data-reveal="visual"
          data-reveal-delay={index * 120}
          key={text(item.label, "en")}
        >
          <CountUpStat value={item.value} delay={index * 180} />
          <span>{text(item.label, lang)}</span>
        </div>
      ))}
    </section>
  );
}

function Process({ lang, t }) {
  const icons = [User, Users, CreditCard, Lock];

  return (
    <section id="how-it-works" className="section process-section">
      <div className="container">
        <div className="section-heading" data-reveal="text">
          <span className="section-kicker">{t.processKicker}</span>
          <h2>{t.processTitle}</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step, index) => {
            const Icon = icons[index];
            return (
              <article className="process-card" data-reveal="visual" data-reveal-delay={index * 120} key={text(step.title, "en")}>
                <span className="step-number">{step.number}</span>
                <span className="step-icon">
                  <Icon size={26} />
                </span>
                <h3>{text(step.title, lang)}</h3>
                <p>{text(step.text, lang)}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Pricing({ lang, t }) {
  return (
    <section id="pricing" className="section pricing-section">
      <div className="container">
        <div className="section-heading" data-reveal="text">
          <span className="section-kicker">{t.pricingKicker}</span>
          <h2>{t.pricingTitle}</h2>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <article className={`plan-card ${plan.premium ? "premium" : ""}`} data-reveal="visual" data-reveal-delay={index * 180} key={text(plan.name, "en")}>
              {plan.premium && <span className="popular-badge">{t.popular}</span>}
              <span className="plan-name">{text(plan.name, lang)}</span>
              <div className="plan-price">{plan.price}</div>
              <p>{text(plan.caption, lang)}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={text(feature, "en")}>
                    <CheckCircle2 size={20} />
                    <span>{text(feature, lang)}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsCard({ item, lang, t, index }) {
  return (
    <article className="news-card" data-reveal="visual" data-reveal-delay={index * 100}>
      <div className={`news-thumb ${item.tone}`}>
        {item.image ? (
          <img
            src={item.image}
            alt={text(item.title, lang)}
            loading="lazy"
          />
        ) : (
          <Shield size={34} />
        )}
      </div>
      <div className="news-body">
        <h4>{text(item.title, lang)}</h4>
        <p>{text(item.excerpt, lang)}</p>
        <div className="news-meta">
          <span>
            <Calendar size={15} />
            {item.date}
          </span>
          <a href={item.href} target="_blank" rel="noreferrer">
            {t.readMore}
          </a>
        </div>
      </div>
    </article>
  );
}

function Awareness({ lang, t }) {
  return (
    <section id="awareness" className="section awareness-section">
      <div className="container">
        <div className="awareness-title" data-reveal="text">
          <span className="awareness-pill">
            <Lightbulb size={18} />
            {t.awarenessBadge}
          </span>
          <h2>{t.awarenessTitle}</h2>
          <p>{t.awarenessText}</p>
        </div>

        <div className="subheading-row" data-reveal="text">
          <h3>{t.accidentNews}</h3>
          <div className="carousel-buttons" aria-hidden="true">
            <button type="button">
              <ChevronLeft size={18} />
            </button>
            <button type="button">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
        <div className="news-grid">
          {accidentNews.map((item, index) => (
            <NewsCard item={item} lang={lang} t={t} index={index} key={text(item.title, "en")} />
          ))}
        </div>

        <div className="subheading-row video-row-title" data-reveal="text">
          <h3>{t.videoAwareness}</h3>
        </div>
        <div className="video-grid">
          {awarenessVideos.map((video, index) => (
            <article className="video-card" data-reveal="visual" data-reveal-delay={index * 160} key={video.title}>
              <div className="video-frame">
                <iframe
                  title={video.title}
                  src={video.embed}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <span className="play-overlay">
                  <Play size={20} fill="currentColor" />
                </span>
              </div>
              <h4>{video.title}</h4>
              <p>{video.text}</p>
            </article>
          ))}
        </div>

        <div className="subheading-row tips-row-title" data-reveal="text">
          <h3>{t.safetyTips}</h3>
        </div>
        <div className="tips-grid">
          {safetyTips.map((tip, index) => (
            <article className="tip-card" data-reveal="visual" data-reveal-delay={index * 140} key={text(tip.title, "en")}>
              <span className="tip-icon">
                <Lightbulb size={22} />
              </span>
              <div>
                <h4>{text(tip.title, lang)}</h4>
                <p>{text(tip.text, lang)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppPromo({ t }) {
  return (
    <section id="app" className="app-section shell">
      <div className="app-copy" data-reveal="text">
        <span className="app-pill">
          <span />
          {t.appBadge}
        </span>

        <h2>{t.appTitle}</h2>
        <p>{t.appText}</p>

        <div className="app-features">
          <span>
            <QrCode size={18} />
            {t.appFeatureA}
          </span>

          <span>
            <BellRing size={18} />
            {t.appFeatureB}
          </span>

          <span>
            <Lock size={18} />
            {t.appFeatureC}
          </span>
        </div>

        <div className="store-buttons">
          <button
            type="button"
            className="store-image-button"
            aria-label={t.appStore}
          >
            <img src={appStoreButton} alt={t.appStore} />
          </button>

          <button
            type="button"
            className="store-image-button"
            aria-label={t.googlePlay}
          >
            <img src={googlePlayButton} alt={t.googlePlay} />
          </button>
        </div>
      </div>

      <div
        className="app-visual app-image-visual"
        data-reveal="visual"
        data-reveal-delay="260"
      >
        <img
          className="app-phones-image"
          src={phonesImage}
          alt="JoruriCode mobile app preview"
        />
      </div>
    </section>
  );
}

function showPremiumToast({
  type = "success",
  title,
  message,
  duration = 4600,
}) {
  let host = document.querySelector(".premium-toast-host");

  if (!host) {
    host = document.createElement("div");
    host.className = "premium-toast-host";
    document.body.appendChild(host);
  }

  const toast = document.createElement("div");
  toast.className = `premium-toast premium-toast--${type}`;
  toast.setAttribute("role", type === "error" ? "alert" : "status");
  toast.setAttribute("aria-live", type === "error" ? "assertive" : "polite");

  const icon =
    type === "success"
      ? `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 6 9 17l-5-5"></path>
        </svg>
      `
      : type === "error"
      ? `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 8v5"></path>
          <path d="M12 16.5h.01"></path>
          <circle cx="12" cy="12" r="9"></circle>
        </svg>
      `
      : `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="9"></circle>
          <path d="M12 11v5"></path>
          <path d="M12 8h.01"></path>
        </svg>
      `;

  toast.innerHTML = `
    <div class="premium-toast__accent"></div>

    <div class="premium-toast__icon">
      ${icon}
    </div>

    <div class="premium-toast__content">
      <strong>${title || ""}</strong>
      <p>${message || ""}</p>
    </div>

    <button
      type="button"
      class="premium-toast__close"
      aria-label="Close notification"
    >
      ×
    </button>

    <div
      class="premium-toast__progress"
      style="--toast-duration: ${duration}ms"
    ></div>
  `;

  host.appendChild(toast);

  let removed = false;

  const removeToast = () => {
    if (removed) return;
    removed = true;

    toast.classList.remove("is-visible");
    toast.classList.add("is-leaving");

    window.setTimeout(() => {
      toast.remove();

      if (host && !host.children.length) {
        host.remove();
      }
    }, 420);
  };

  toast
    .querySelector(".premium-toast__close")
    ?.addEventListener("click", removeToast);

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      toast.classList.add("is-visible");
    });
  });

  window.setTimeout(removeToast, duration);
}

function Contact({ lang, t }) {
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").replace(/\D/g, "").slice(0, 11);
    const message = String(formData.get("message") || "").trim();

    if (!name || !phone || !message) {
      showPremiumToast({
        type: "error",
        title: lang === "bn" ? "তথ্য অসম্পূর্ণ" : "Missing information",
        message: t.required,
      });
      return;
    }

    if (!/^01[3-9]\d{8}$/.test(phone)) {
      showPremiumToast({
        type: "error",
        title: lang === "bn" ? "মোবাইল নম্বর সঠিক নয়" : "Invalid mobile number",
        message: t.invalidPhone,
      });
      return;
    }

    if (message.length > 2000) {
      showPremiumToast({
        type: "error",
        title: lang === "bn" ? "মেসেজ অনেক বড়" : "Message is too long",
        message: t.tooLong,
      });
      return;
    }

    if (!database || !hasFirebaseConfig) {
      showPremiumToast({
        type: "error",
        title: lang === "bn" ? "সেবা প্রস্তুত নয়" : "Service unavailable",
        message: t.configMissing,
      });
      return;
    }

    setSubmitting(true);

    try {
      await push(ref(database, CONTACT_PATH), {
        name,
        phone,
        message,
        language: lang,
        createdAt: serverTimestamp(),
      });
      form.reset();

      showPremiumToast({
        type: "success",
        title: t.sentTitle,
        message: t.sentText,
      });
    } catch (error) {
      console.error("Get_in_touch submission failed:", error);

      showPremiumToast({
        type: "error",
        title: lang === "bn" ? "মেসেজ পাঠানো যায়নি" : "Message not sent",
        message: t.failed,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-heading" data-reveal="text">
          <span className="section-kicker">{t.contactKicker}</span>
          <h2>
            {t.contactTitleA} <em>{t.contactTitleB}</em>
          </h2>
          <p>{t.contactText}</p>
        </div>
        <div className="contact-layout">
          <div className="contact-info" data-reveal="visual">
            <a href={`tel:${CALL_HREF}`}>
              <Phone size={22} />
              <span>
                {CALL_NUMBER}
                <small>{t.hotline}</small>
              </span>
            </a>

            <a href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
              <MessageCircle size={22} />
              <span>
                {WHATSAPP_NUMBER}
                <small>{t.whatsapp}</small>
              </span>
            </a>

            <a href={`mailto:${CONTACT_EMAIL}`}>
              <Mail size={22} />
              <span>
                {CONTACT_EMAIL}
                <small>{t.contactEmail}</small>
              </span>
            </a>

            <div className="contact-map-card">
              <div className="google-map">
                <iframe
                  src={GOOGLE_MAP_EMBED}
                  title={t.mapTitle}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <div className="contact-map-copy">
                <MapPin size={20} />
                <div>
                  <strong>{t.addressLabel}</strong>
                  <p>{t.address}</p>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" data-reveal="visual" data-reveal-delay="220" onSubmit={handleSubmit} noValidate>
            <input name="name" required maxLength={100} autoComplete="name" placeholder={t.name} />
            <input
              name="phone"
              type="tel"
              inputMode="numeric"
              required
              minLength={11}
              maxLength={11}
              pattern="01[3-9][0-9]{8}"
              autoComplete="tel"
              placeholder={t.phone}
              onInput={(event) => {
                event.currentTarget.value = String(event.currentTarget.value || "")
                  .replace(/\D/g, "")
                  .slice(0, 11);
              }}
            />
            <textarea name="message" required maxLength={2000} placeholder={t.message} />
            <button className="contact-submit" type="submit" disabled={submitting}>
              {submitting ? t.sending : t.submit}
              <Send size={17} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function EmergencyClose({ t }) {
  return (
    <section className="closing-section">
      <div className="container closing-copy" data-reveal="text">
        <h2>{t.closingTitle}</h2>
        <p>{t.closingText}</p>
      </div>
    </section>
  );
}

function Footer({ t }) {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand" data-reveal="visual">
          <Logo />
          <strong>{t.footerLine}</strong>
          <p>{t.footerText}</p>
          <div className="socials">
            <a href="https://facebook.com/" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="https://youtube.com/" aria-label="YouTube">
              <Youtube size={20} />
            </a>
            <a href="https://instagram.com/" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <div data-reveal="visual" data-reveal-delay="100">
          <h4>{t.quickLinks}</h4>
          <a href="#top">Home</a>
          <a href="#how-it-works">{t.nav[0]}</a>
          <a href="#awareness">{t.awarenessBadge}</a>
          <a href="#pricing">{t.nav[1]}</a>
          <a href="#contact">{t.nav[3]}</a>
        </div>
        <div data-reveal="visual" data-reveal-delay="180">
          <h4>{t.legal}</h4>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#refund">Refund Policy</a>
          <a href="#faq">FAQ</a>
        </div>
        <div data-reveal="visual" data-reveal-delay="260">
          <h4>{t.updated}</h4>
          <p>{t.updatedText}</p>
          <form className="subscribe-form" onSubmit={(event) => event.preventDefault()}>
            <label className="sr-only" htmlFor="email">
              {t.email}
            </label>
            <Mail size={18} />
            <input id="email" type="email" placeholder={t.email} />
            <button type="submit">{t.subscribe}</button>
          </form>
          {!hasFirebaseConfig && <span className="firebase-note">{t.firebaseReady}</span>}
        </div>
      </div>
      <div className="copyright">{t.copyright}</div>
    </footer>
  );
}

export default function App() {
  const [lang, setLang] = useState("en");
  const t = useMemo(() => copy[lang], [lang]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.classList.toggle("is-bangla", lang === "bn");
  }, [lang]);

  useScrollReveal();

  return (
    <>
      <Header lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <StatsBand lang={lang} />
        <Process lang={lang} t={t} />
        <Pricing lang={lang} t={t} />
        <Awareness lang={lang} t={t} />
        <AppPromo t={t} />
        <Contact lang={lang} t={t} />
        <EmergencyClose t={t} />
      </main>
      <Footer t={t} />
    </>
  );
}
