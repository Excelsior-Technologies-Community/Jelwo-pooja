import { useEffect, useRef, useState } from "react";
import "./Style.css";
import logo from "./assets/logo.png";
import home6 from "./assets/home6.jpg";
import menu2 from "./assets/menu2.jpg";
import menu3 from "./assets/menu3.jpg";
import menu4 from "./assets/menu4.jpg";
import menu5 from "./assets/menu5.jpg";
import menu6 from "./assets/menu6.jpg";
import shopPromo from "./assets/shop.webp";
import productPromo1 from "./assets/p2.webp";
import productPromo2 from "./assets/p4.webp";
import heroBg from "./assets/bg.png";
import heroBg2 from "./assets/bg2.webp";
import heroBg3 from "./assets/bg3.webp";
import sinceBadge from "./assets/since.png";
import banner1 from "./assets/banner1.webp";
import banner2 from "./assets/banner2.webp";
import banner3 from "./assets/banner3.webp";
import banner4 from "./assets/banner4.webp";
import categoryBracelets from "./assets/c4.webp";
import categoryNecklace from "./assets/c2.webp";
import categoryPendant from "./assets/c3.webp";
import categoryRings from "./assets/c5.webp";
import categoryEarrings from "./assets/c1.webp";
import jewelry1 from "./assets/j1.webp";
import jewelry1Hover from "./assets/j1-1.webp";
import jewelry2 from "./assets/j2.webp";
import jewelry2Hover from "./assets/j2-1.webp";
import jewelry3 from "./assets/j3.webp";
import jewelry4 from "./assets/j4-1.webp";
import jewelry5 from "./assets/j5.webp";
import customerKristen from "./assets/kristen.avif";
import customerMichael from "./assets/smith.webp";
import news1 from "./assets/news1.webp";
import news2 from "./assets/news2.jpg";
import news3 from "./assets/news3.webp";
import visaCard from "./assets/visa.png";
import mastercardCard from "./assets/mastercard.png";
import paypalCard from "./assets/paypal.png";
import discoverCard from "./assets/discover.png";
import video1 from "./assets/video1.mp4";
import video2 from "./assets/video2.mp4";
import video3 from "./assets/video3.mp4";
import video4 from "./assets/video4.mp4";
import video5 from "./assets/video5.mp4";
import video6 from "./assets/video6.mp4";


function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16 16L21 21" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function UserPlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="9" cy="8" r="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 18c.8-2.4 2.7-3.8 4.5-3.8s3.7 1.4 4.5 3.8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 7v6M15 10h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 20s-6.5-4.3-8.4-8C2.2 9.3 3 6.5 5.7 5.4c2-.8 3.8.1 4.9 1.6 1.1-1.5 3-2.4 4.9-1.6C18.2 6.5 19 9.3 20.4 12 18.5 15.7 12 20 12 20Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M2.5 12s3.4-5.5 9.5-5.5 9.5 5.5 9.5 5.5-3.4 5.5-9.5 5.5S2.5 12 2.5 12Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="2.7" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 8h12l-1 11H7L6 8Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M9 8a3 3 0 0 1 6 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 12a8 8 0 0 1 16 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <rect x="3.5" y="11" width="3.5" height="6" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="17" y="11" width="3.5" height="6" rx="1.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7 18c1.5 1.7 3.3 2.5 5 2.5 1 0 1.8-.1 2.7-.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function HomeOutlineIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 10.5 12 4l7 6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 9.5V20h10V9.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M10 20v-5h4v5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function LocationPinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s-5.5-5.2-5.5-10A5.5 5.5 0 1 1 17.5 11C17.5 15.8 12 21 12 21Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4.5h3l1 4-2 1.7a15.6 15.6 0 0 0 4.8 4.8l1.7-2 4 1v3c0 .8-.7 1.5-1.5 1.5C10.6 18.5 5.5 13.4 5.5 7A1.5 1.5 0 0 1 7 5.5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m5.5 7 6.5 5L18.5 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

const homeMenuItems = [
  { id: 1, title: "06 Classic jewelry", image: home6, badge: "New" },
  { id: 2, title: "01 Unique jewelry", image: menu2 },
  { id: 3, title: "02 Modern jewelry", image: menu3 },
  { id: 4, title: "03 Traditional jewelry", image: menu4 },
  { id: 5, title: "04 Luxury jewelry", image: menu5 },
  { id: 6, title: "05 Elegant jewelry", image: menu6 },
];

const shopMenuColumns = [
  {
    title: "Earrings",
    items: [
      "Blue heavy t-shirt",
      "Brown sunglasses",
      "Bucket shoes",
      "Iamond rashmi ring",
      "Floral gold bangle",
      "Glitter diamond ring",
    ],
  },
  {
    title: "Necklace",
    items: [
      "Rose gold rings",
      "Brown sunglasses",
      "Bucket shoes",
      "Color print sandal",
      "Floral gold bangle",
      "Simple Pearl earrings",
    ],
  },
  {
    title: "Rings",
    items: [
      "Blue heavy t-shirt",
      "Brown sunglasses",
      "Dark sunglasses",
      "Half sleev tshirt",
      "Formal shirt",
      "Gold nose pin",
    ],
  },
  {
    title: "Bracelets",
    items: [
      "Blue heavy t-shirt",
      "Brown sunglasses",
      "Formal shoes",
      "Formal shirt",
      "Blue heavy t-shirt",
      "Brown sunglasses",
    ],
  },
];

const productMenuColumns = [
  {
    title: "Earrings",
    items: [
      "Blue heavy t-shirt",
      "Brown sunglasses",
      "Bucket shoes",
      "Iamond rashmi ring",
      "Floral gold bangle",
      "Glitter diamond ring",
    ],
  },
  {
    title: "Bracelets",
    items: [
      "Blue heavy t-shirt",
      "Brown sunglasses",
      "Formal shoes",
      "Formal shirt",
      "Blue heavy t-shirt",
      "Brown sunglasses",
    ],
  },
  {
    title: "Necklace",
    items: [
      "Rose gold rings",
      "Brown sunglasses",
      "Bucket shoes",
      "Color print sandal",
      "Floral gold bangle",
      "Simple Pearl earrings",
    ],
  },
  {
    title: "Rings",
    items: [
      "Blue heavy t-shirt",
      "Brown sunglasses",
      "Dark sunglasses",
      "Half sleev tshirt",
      "Formal shirt",
      "Gold nose pin",
    ],
  },
];

const pagesMenuItems = [
  { label: "About Us", children: ["About Us", "About Us 2"] },
  { label: "Contact Us", children: ["Contact", "Contact 2"] },
  "Faq's",
  "Privacy policy",
  "Refund policy",
  "Store location",
  "Shipping & return",
  "Terms & condition",
];

const categorySlides = [
  [
    { id: "bracelets", count: "12 + ITEMS", title: "Bracelets", image: categoryBracelets },
    { id: "necklace", count: "12 + ITEMS", title: "Necklace", image: categoryNecklace },
    { id: "pendants", count: "12 + ITEMS", title: "Pendants", image: categoryPendant },
  ],
  [
    { id: "rings", count: "12 + ITEMS", title: "Rings", image: categoryRings },
    { id: "earrings", count: "10 + ITEMS", title: "Earrings", image: categoryEarrings },
    { id: "bracelets-two", count: "12 + ITEMS", title: "Bracelets", image: categoryBracelets },
  ],
];

const newJewelryItems = [
  {
    id: "simple-pearl",
    discount: "25%",
    image: jewelry1,
    hoverImage: jewelry1Hover,
    title: "Simple Pearl earrings",
    price: "Rs. 15.00",
    oldPrice: "Rs. 20.00",
    variant: "Gold",
    options: ["Gold", "Silver", "Brown"],
  },
  {
    id: "diamond-ring",
    discount: "45%",
    image: jewelry2,
    hoverImage: jewelry2Hover,
    title: "Chic diamond ring",
    price: "Rs. 22.00",
    oldPrice: "Rs. 40.00",
    variant: "28",
    options: ["28", "29", "30"],
  },
  {
    id: "jhumkas",
    discount: "64%",
    image: jewelry3,
    hoverImage: jewelry3,
    title: "Gemstone jhumkas",
    price: "Rs. 18.00",
    oldPrice: "Rs. 50.00",
    variant: "Gold",
    options: ["Gold", "Silver", "Brown"],
  },
  {
    id: "drop-earrings",
    discount: "68%",
    image: jewelry4,
    hoverImage: jewelry4,
    title: "Drop gold earrings",
    price: "Rs. 14.00",
    oldPrice: "Rs. 44.00",
    variant: "Gold",
    options: ["Gold", "Silver", "Brown"],
  },
];

const trendingProductsItems = [
  {
    id: "trend-simple-pearl",
    discount: "25%",
    image: jewelry1,
    title: "Simple Pearl earrings",
    price: "Rs. 15",
    oldPrice: "Rs. 20",
  },
  {
    id: "trend-diamond-ring",
    discount: "68%",
    image: jewelry2,
    hoverImage: jewelry2Hover,
    title: "Chic diamond ring",
    price: "Rs. 14",
    oldPrice: "Rs. 44",
    variant: "Gold",
  },
  {
    id: "trend-nose-pin",
    discount: "68%",
    image: jewelry5,
    title: "Nose Pin",
    price: "Rs. 14",
    oldPrice: "Rs. 44",
  },
  {
    id: "trend-jhumkas",
    discount: "68%",
    image: jewelry3,
    title: "Gmestone Jhumkas",
    price: "Rs. 14",
    oldPrice: "Rs. 44",
  },
];

const happyCustomers = [
  {
    id: "kristen-brown",
    name: "Kristen brown",
    role: "Company ceo",
    image: customerKristen,
  },
  {
    id: "michael-smith",
    name: "Michael smith",
    role: "Customer",
    image: customerMichael,
  },
];

const jewelryNewsItems = [
  {
    id: "news-ring",
    image: news1,
    date: "02, MAR 2025",
    author: "Andrew johns",
    excerpt:
      "As part of our mission create space for women to express their sensuality without shame fear or the patriarchal gaze ...",
  },
  {
    id: "news-earrings",
    image: news2,
    date: "02, MAR 2025",
    author: "Andrew johns",
    excerpt:
      "As part of our mission create space for women to express their sensuality without shame fear or the patriarchal gaze ...",
  },
  {
    id: "news-necklace",
    image: news3,
    date: "02, MAR 2025",
    author: "Andrew johns",
    excerpt:
      "As part of our mission create space for women to express their sensuality without shame fear or the patriarchal gaze ...",
  },
];

const footerSocials = [
  { id: "facebook", label: "Facebook", iconClass: "fa-brands fa-facebook-f" },
  { id: "x", label: "X", iconClass: "fa-brands fa-x-twitter" },
  { id: "instagram", label: "Instagram", iconClass: "fa-brands fa-instagram" },
  { id: "pinterest", label: "Pinterest", iconClass: "fa-brands fa-pinterest-p" },
  { id: "youtube", label: "Youtube", iconClass: "fa-brands fa-youtube" },
];

const footerPayments = [
  { id: "visa", image: visaCard, alt: "Visa" },
  { id: "mastercard", image: mastercardCard, alt: "Mastercard" },
  { id: "paypal", image: paypalCard, alt: "Paypal" },
  { id: "discover", image: discoverCard, alt: "Discover" },
];

const watchShopReelsItems = [
  {
    id: "reel-1",
    video: video1,
    productImage: jewelry2,
    title: "Chic diamond ring",
    price: "Rs. 22.00",
  },
  {
    id: "reel-2",
    video: video2,
    productImage: jewelry3,
    title: "Flower jhumka",
    price: "Rs. 18.00",
  },
  {
    id: "reel-3",
    video: video3,
    productImage: jewelry1,
    title: "Sherbi ring",
    price: "Rs. 26.00",
  },
  {
    id: "reel-4",
    video: video4,
    productImage: jewelry4,
    title: "Drop gold earrings",
    price: "Rs. 14.00",
  },
  {
    id: "reel-5",
    video: video5,
    productImage: jewelry5,
    title: "Flower pendant",
    price: "Rs. 22.00",
  },
  {
    id: "reel-6",
    video: video6,
    productImage: jewelry2Hover,
    title: "Elegant ring",
    price: "Rs. 20.00",
  },
];

function Home({ cartCount, wishlistCount, onCartOpen, onAddToCart, onToggleWishlist, isInWishlist }) {
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [reelsIndex, setReelsIndex] = useState(0);
  const [newJewelryQuantities, setNewJewelryQuantities] = useState(
    Object.fromEntries(newJewelryItems.map((item) => [item.id, 1]))
  );
  const [trendingQuantities, setTrendingQuantities] = useState(
    Object.fromEntries(trendingProductsItems.map((item) => [item.id, 1]))
  );
  const [newJewelryCountdown, setNewJewelryCountdown] = useState({
    days: 1612,
    hours: 9,
    minutes: 18,
    seconds: 21,
  });
  const [trendingCountdown, setTrendingCountdown] = useState({
    days: 1,
    hours: 15,
    minutes: 50,
    seconds: 10,
  });
  const closeTimerRef = useRef(null);

  const heroSlides = [
    {
      background: heroBg,
      title: "Jewelry is our passion",
    },
    {
      background: heroBg2,
      title: "Jewelry made with love",
    },
    {
      background: heroBg3,
      title: "Elegance is our obsession",
    },
  ];

  const openHomeMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsHomeMenuOpen(true);
  };

  const openShopMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsHomeMenuOpen(false);
    setIsShopMenuOpen(true);
    setIsProductsMenuOpen(false);
    setIsPagesMenuOpen(false);
  };

  const openProductsMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsHomeMenuOpen(false);
    setIsShopMenuOpen(false);
    setIsProductsMenuOpen(true);
    setIsPagesMenuOpen(false);
  };

  const openPagesMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsHomeMenuOpen(false);
    setIsShopMenuOpen(false);
    setIsProductsMenuOpen(false);
    setIsPagesMenuOpen(true);
  };

  const closeHomeMenu = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsHomeMenuOpen(false);
      setIsShopMenuOpen(false);
      setIsProductsMenuOpen(false);
      setIsPagesMenuOpen(false);
      closeTimerRef.current = null;
    }, 180);
  };

  useEffect(() => {
    const categoryTimer = setInterval(() => {
      setCategoryIndex((prev) => (prev + 1) % categorySlides.length);
    }, 5000);

    const newJewelryTimer = setInterval(() => {
      setNewJewelryCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              days = Math.max(0, days - 1);
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    const trendingTimer = setInterval(() => {
      setTrendingCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;

          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;

            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              days = Math.max(0, days - 1);
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => {
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
      }
      clearInterval(categoryTimer);
      clearInterval(newJewelryTimer);
      clearInterval(trendingTimer);
    };
  }, []);

  const visibleReels = Array.from({ length: 5 }, (_, index) => {
    const reelIndex = (reelsIndex + index) % watchShopReelsItems.length;
    return watchShopReelsItems[reelIndex];
  });

  const updateNewJewelryQuantity = (id, change) => {
    setNewJewelryQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] ?? 1) + change),
    }));
  };

  const updateTrendingQuantity = (id, change) => {
    setTrendingQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] ?? 1) + change),
    }));
  };

  const navigateToCollection = () => {
    window.history.pushState({}, "", "/collection");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const navigateToBlog = () => {
    window.history.pushState({}, "", "/blog");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const navigateToAboutUs = () => {
    window.history.pushState({}, "", "/about-us");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const navigateToAboutUs2 = () => {
    window.history.pushState({}, "", "/about-us-2");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const navigateToContactUs = () => {
    window.history.pushState({}, "", "/contact-us");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const navigateToContactUs2 = () => {
    window.history.pushState({}, "", "/contact-us-2");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const navigateToFaqs = () => {
    window.history.pushState({}, "", "/faqs");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const navigateToPrivacyPolicy = () => {
    window.history.pushState({}, "", "/privacy-policy");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const navigateToRefund = () => {
    window.history.pushState({}, "", "/refund");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const navigateToLocation = () => {
    window.history.pushState({}, "", "/location");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const navigateToShipping = () => {
    window.history.pushState({}, "", "/shipping");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const navigateToTerms = () => {
    window.history.pushState({}, "", "/terms");
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const toggleWishlistItem = (item) => {
    onToggleWishlist({
      id: item.id,
      title: item.title,
      price: item.price,
      oldPrice: item.oldPrice,
      image: item.image,
      discount: item.discount,
      category: "JEWELRY",
      variant: item.variant || "Gold",
    });
  };

  return (
    <main className="page-shell">
      <header className="topbar">
        <div className="topbar__inner">
          <div className="brand">
            <img src={logo} alt="Jelwo" className="brand__logo" />
            <span className="brand__divider" aria-hidden="true"></span>
          </div>

          <p className="topbar__message">Free UK standard delivery on all orders.</p>

          <div className="topbar__actions">
            <label className="search" aria-label="Search">
              <input type="text" placeholder="Search product..." />
              <span className="search__icon">
                <SearchIcon />
              </span>
            </label>

            <button className="icon-link" type="button" aria-label="Account">
              <UserPlusIcon />
            </button>

            <button className="icon-link icon-link--count" type="button" aria-label="Wishlist" onClick={() => window.location.assign("/wishlist")}>
              <HeartIcon />
              <span>({wishlistCount})</span>
            </button>

            <button
              className="icon-link icon-link--count"
              type="button"
              aria-label="Cart"
              onClick={onCartOpen}
            >
              <BagIcon />
              <span>({cartCount})</span>
            </button>
          </div>
        </div>
      </header>

      <nav className="subbar">
        <div className="subbar__inner">
          <div className="subbar__phone">
            <span className="subbar__icon">
              <HeadsetIcon />
            </span>
            <span>(220) 123 456 7890</span>
          </div>

          <div className="subbar__menu">
            <div
              className="subbar__menu-item"
              onMouseEnter={openHomeMenu}
              onMouseLeave={closeHomeMenu}
            >
              <button
                className={`subbar__menu-btn ${isHomeMenuOpen ? "is-active" : ""}`}
                type="button"
              >
                HOME <span><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
              </button>

              <div className={`mega-menu ${isHomeMenuOpen ? "is-open" : ""}`}>
                <div className="mega-menu__grid">
                  {homeMenuItems.map((item) => (
                    <article className="mega-menu__card" key={item.id}>
                      <div className="mega-menu__image-wrap">
                        {item.badge && <span className="mega-menu__badge">{item.badge}</span>}
                        <img src={item.image} alt={item.title} className="mega-menu__image" />
                      </div>
                      <h3>{item.title}</h3>
                    </article>
                  ))}
                </div>
              </div>
            </div>
            <div
              className="subbar__menu-item"
              onMouseEnter={openShopMenu}
              onMouseLeave={closeHomeMenu}
            >
              <button
                className={`subbar__menu-btn ${isShopMenuOpen ? "is-active" : ""}`}
                type="button"
              >
                SHOP <span><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
              </button>

              <div className={`shop-menu ${isShopMenuOpen ? "is-open" : ""}`}>
                <div className="shop-menu__layout">
                  <div className="shop-menu__columns">
                    {shopMenuColumns.map((column) => (
                      <div className="shop-menu__column" key={column.title}>
                        <h3>{column.title}</h3>
                        {column.items.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    ))}
                  </div>

                  <div className="shop-menu__promo">
                    <img src={shopPromo} alt="Flat 30% off" />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="subbar__menu-item"
              onMouseEnter={openProductsMenu}
              onMouseLeave={closeHomeMenu}
            >
              <button
                className={`subbar__menu-btn ${isProductsMenuOpen ? "is-active" : ""}`}
                type="button"
              >
                PRODUCTS <span><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
              </button>

              <div className={`products-menu ${isProductsMenuOpen ? "is-open" : ""}`}>
                <div className="products-menu__layout">
                  <div className="products-menu__columns">
                    {productMenuColumns.map((column) => (
                      <div className="products-menu__column" key={column.title}>
                        <h3>{column.title}</h3>
                        {column.items.map((item) => (
                          <p key={item}>{item}</p>
                        ))}
                      </div>
                    ))}
                  </div>

                  <div className="products-menu__promo">
                    <div className="products-menu__header">
                      <h3>Popular collection</h3>
                      <div className="products-menu__arrows">
                        <span>&larr;</span>
                        <span>&rarr;</span>
                      </div>
                    </div>

                    <div className="products-menu__cards">
                      <article className="products-menu__card">
                        <div className="products-menu__image-box">
                          <img src={productPromo1} alt="Pendant" />
                        </div>
                        <p>Rs. 22.00</p>
                      </article>

                      <article className="products-menu__card">
                        <div className="products-menu__image-box">
                          <span className="products-menu__sale">25%</span>
                          <img src={productPromo2} alt="Pearl ring" />
                        </div>
                        <p>Rs. 15.00 <del>Rs. 20.00</del></p>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="subbar__menu-btn" type="button" onClick={navigateToBlog}>BLOG</button>
            <div
              className="subbar__menu-item"
              onMouseEnter={openPagesMenu}
              onMouseLeave={closeHomeMenu}
            >
              <button
                className={`subbar__menu-btn ${isPagesMenuOpen ? "is-active" : ""}`}
                type="button"
              >
                PAGES <span><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
              </button>

              <div className={`pages-menu ${isPagesMenuOpen ? "is-open" : ""}`}>
                <div className="pages-menu__list">
                  {pagesMenuItems.map((item) => (
                    typeof item === "string" ? (
                      <a
                        href={
                          item === "Faq's"
                            ? "/faqs"
                            : item === "Privacy policy"
                              ? "/privacy-policy"
                              : item === "Refund policy"
                                ? "/refund"
                                : item === "Store location"
                                  ? "/location"
                                  : item === "Shipping & return"
                                    ? "/shipping"
                                    : item === "Terms & condition"
                                      ? "/terms"
                                      : "/"
                        }
                        key={item}
                        onClick={(event) => {
                          if (item === "Faq's") {
                            event.preventDefault();
                            navigateToFaqs();
                          }

                          if (item === "Privacy policy") {
                            event.preventDefault();
                            navigateToPrivacyPolicy();
                          }

                          if (item === "Refund policy") {
                            event.preventDefault();
                            navigateToRefund();
                          }

                          if (item === "Store location") {
                            event.preventDefault();
                            navigateToLocation();
                          }

                          if (item === "Shipping & return") {
                            event.preventDefault();
                            navigateToShipping();
                          }

                          if (item === "Terms & condition") {
                            event.preventDefault();
                            navigateToTerms();
                          }
                        }}
                      >
                        <span>{item}</span>
                      </a>
                    ) : (
                      <div className="pages-menu__item pages-menu__item--nested" key={item.label}>
                        <a
                          href={item.label === "About Us" ? "/about-us" : item.label === "Contact Us" ? "/contact-us" : "/"}
                          onClick={(event) => {
                            if (item.label === "About Us") {
                              event.preventDefault();
                              navigateToAboutUs();
                            }

                            if (item.label === "Contact Us") {
                              event.preventDefault();
                              navigateToContactUs();
                            }
                          }}
                        >
                          <span>{item.label}</span>
                          <i className="fa fa-angle-right" aria-hidden="true"></i>
                        </a>

                        <div className="pages-submenu">
                          {item.children.map((child) => (
                            <a
                              href={child === "About Us" ? "/about-us" : child === "About Us 2" ? "/about-us-2" : child === "Contact" ? "/contact-us" : child === "Contact 2" ? "/contact-us-2" : "/"}
                              key={child}
                              onClick={(event) => {
                                if (child === "About Us") {
                                  event.preventDefault();
                                  navigateToAboutUs();
                                }

                                if (child === "About Us 2") {
                                  event.preventDefault();
                                  navigateToAboutUs2();
                                }

                                if (child === "Contact") {
                                  event.preventDefault();
                                  navigateToContactUs();
                                }

                                if (child === "Contact 2") {
                                  event.preventDefault();
                                  navigateToContactUs2();
                                }
                              }}
                            >
                              {child}
                            </a>
                          ))}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="subbar__try">
            <span className="subbar__icon">
              <HomeOutlineIcon />
            </span>
            <span>FREE TRY AT HOME</span>
          </div>
        </div>
      </nav>

      <section
        className="hero-section"
        style={{ backgroundImage: `url(${heroSlides[heroIndex].background})` }}
      >
        <button
          className="hero-section__nav hero-section__nav--left"
          type="button"
          aria-label="Previous slide"
          onClick={() => setHeroIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
        >
          &larr;
        </button>

        <div className="hero-section__center">
          <img src={sinceBadge} alt="Since 1990" className="hero-section__badge" />
          <h1>{heroSlides[heroIndex].title}</h1>
          <button type="button">SHOP NOW</button>
        </div>

        <button
          className="hero-section__nav hero-section__nav--right"
          type="button"
          aria-label="Next slide"
          onClick={() => setHeroIndex((prev) => (prev + 1) % heroSlides.length)}
        >
          &rarr;
        </button>
      </section>

      <section className="promo-section">
        <div className="promo-section__pill">
          <span>DIAMONDS FOR EVERY EXCUSE 1500+ DESIGNS UNDER</span>
          <strong>$200</strong>
        </div>

        <div className="promo-section__grid">
          <article
            className="promo-card promo-card--left"
            style={{ backgroundImage: `url(${banner1})` }}
          >
            <div className="promo-card__content">
              <p>GET A 30% DISCOUNT</p>
              <h2>Exquisite collection</h2>
              <button type="button">SHOP NOW</button>
            </div>
          </article>

          <article
            className="promo-card promo-card--right"
            style={{ backgroundImage: `url(${banner2})` }}
          >
            <div className="promo-card__content">
              <p>20% OFF ON WASTAGE</p>
              <h2>Diamond necklace</h2>
              <button type="button">SHOP NOW</button>
            </div>
          </article>
        </div>
      </section>

      <section className="category-section">
        <h2>Popular category</h2>

        <div className="category-section__grid">
          {categorySlides[categoryIndex].map((item) => (
            <article
              className="category-card"
              key={item.id}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="category-card__content">
                <p>{item.count}</p>
                <h3>{item.title}</h3>
                <button type="button">SHOP NOW</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      

        <section className="feature-section">
            <div className="feature-box">

                <div className="feature-item">
                <i className="fa fa-truck"></i>
                <div>
                    <h4>Free shipping</h4>
                    <p>Free shipping all order</p>
                </div>
                </div>

                <div className="feature-item">
                <i className="fa fa-headphones"></i>
                <div>
                    <h4>Quality support</h4>
                    <p>Contact us anytime</p>
                </div>
                </div>

                <div className="feature-item">
                <i className="fa fa-refresh"></i>
                <div>
                    <h4>Money return</h4>
                    <p>30 days for free return</p>
                </div>
                </div>

                <div className="feature-item">
                <i className="fa fa-shield"></i>
                <div>
                    <h4>Secured payment</h4>
                    <p>Payment cards accepted</p>
                </div>
                </div>

            </div>
        </section>

      <section className="new-jewelry-section">
        <h2>New jewelrys</h2>

        <div className="new-jewelry-grid">
          {newJewelryItems.map((item) => (
            <article className="jewelry-card" key={item.id}>
              <div className="jewelry-card__image-area">
                <span className="jewelry-card__discount">{item.discount}</span>

                <div className="jewelry-card__image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="jewelry-card__image jewelry-card__image--primary"
                  />

                  {item.hoverImage && (
                    <img
                      src={item.hoverImage}
                      alt={`${item.title} alternate view`}
                      className="jewelry-card__image jewelry-card__image--hover"
                    />
                  )}

                  <div className="jewelry-card__hover-actions">
                    <button
                      type="button"
                      aria-label={`Add ${item.title} to wishlist`}
                      className={isInWishlist(item.id) ? "is-active" : ""}
                      onClick={() => toggleWishlistItem(item)}
                    >
                      <HeartIcon />
                    </button>
                    <button type="button" aria-label={`View ${item.title}`}>
                      <EyeIcon />
                    </button>
                  </div>
                </div>

                <div className="jewelry-card__countdown" aria-label="Offer countdown">
                  <div>
                    <strong>{String(newJewelryCountdown.days).padStart(4, "0")}</strong>
                    <span>DAY</span>
                  </div>
                  <div>
                    <strong>{String(newJewelryCountdown.hours).padStart(2, "0")}</strong>
                    <span>HRS</span>
                  </div>
                  <div>
                    <strong>{String(newJewelryCountdown.minutes).padStart(2, "0")}</strong>
                    <span>MIN</span>
                  </div>
                  <div>
                    <strong>{String(newJewelryCountdown.seconds).padStart(2, "0")}</strong>
                    <span>SEC</span>
                  </div>
                </div>
              </div>

              <div className="jewelry-card__content">
                <div className="jewelry-card__details">
                  <p>JEWELRY</p>
                  <h3>{item.title}</h3>
                  <div className="jewelry-card__price">
                    <span>{item.price}</span>
                    <del>{item.oldPrice}</del>
                  </div>
                </div>

                <div className="jewelry-card__purchase">
                  <div className="jewelry-card__selectors">
                    <select defaultValue={item.variant} aria-label={`${item.title} material`}>
                      {item.options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>

                    <div className="jewelry-card__qty" aria-label={`${item.title} quantity`}>
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => updateNewJewelryQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span>{newJewelryQuantities[item.id] ?? 1}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => updateNewJewelryQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="jewelry-card__cart-btn"
                    onClick={() =>
                      onAddToCart({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        oldPrice: item.oldPrice,
                        image: item.image,
                        variant: item.variant,
                        quantity: newJewelryQuantities[item.id] ?? 1,
                      })
                    }
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="new-jewelry-section__button"
          onClick={navigateToCollection}
        >
          VIEW COLLECTION
        </button>
      </section>

       <section className="bottom-promo-section">
        <article
          className="bottom-promo-card bottom-promo-card--content"
          style={{ backgroundImage: `url(${banner3})` }}
        >
          <div className="bottom-promo-card__copy">
            <h2>Unleash your inner shine</h2>
            <p>
              It is a long established fact that a reader will be distracted by the
              readable content of a page when looking at its layout.
            </p>
            <button type="button">SHOP NOW</button>
          </div>
        </article>

        <article
          className="bottom-promo-card bottom-promo-card--video"
          style={{ backgroundImage: `url(${banner4})` }}
        >
          <button type="button" className="bottom-promo-card__play" aria-label="Play video">
            <span></span>
          </button>
        </article>
      </section>

      <section className="trending-products-section">
        <h2>Trending Products</h2>

        <div className="trending-products-grid">
          {trendingProductsItems.map((item) => (
            <article className="trending-card" key={item.id}>
              <div className="trending-card__image-area">
                <span className="trending-card__discount">{item.discount}</span>

                <div className="trending-card__image-wrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="trending-card__image trending-card__image--primary"
                  />

                  {item.hoverImage && (
                    <img
                      src={item.hoverImage}
                      alt={`${item.title} alternate view`}
                      className="trending-card__image trending-card__image--hover"
                    />
                  )}

                  <div className="trending-card__hover-actions">
                    <button
                      type="button"
                      aria-label={`Add ${item.title} to wishlist`}
                      className={isInWishlist(item.id) ? "is-active" : ""}
                      onClick={() => toggleWishlistItem(item)}
                    >
                      <HeartIcon />
                    </button>
                    <button type="button" aria-label={`View ${item.title}`}>
                      <EyeIcon />
                    </button>
                  </div>
                </div>

                <div className="trending-card__countdown" aria-label="Offer countdown">
                  <div>
                    <strong>{String(trendingCountdown.days).padStart(1, "0")}</strong>
                    <span>DAY</span>
                  </div>
                  <div>
                    <strong>{String(trendingCountdown.hours).padStart(2, "0")}</strong>
                    <span>HRS</span>
                  </div>
                  <div>
                    <strong>{String(trendingCountdown.minutes).padStart(2, "0")}</strong>
                    <span>MIN</span>
                  </div>
                  <div>
                    <strong>{String(trendingCountdown.seconds).padStart(2, "0")}</strong>
                    <span>SEC</span>
                  </div>
                </div>
              </div>

              <div className="trending-card__content">
                <div className="trending-card__details">
                  <p>JEWELRY</p>
                  <h3>{item.title}</h3>
                  <div className="trending-card__price">
                    <span>{item.price}</span>
                    <del>{item.oldPrice}</del>
                  </div>
                </div>

                <div className="trending-card__purchase">
                  <div className="trending-card__selectors">
                    <select defaultValue={item.variant || "Gold"} aria-label={`${item.title} material`}>
                      <option value="Gold">Gold</option>
                      <option value="Silver">Silver</option>
                      <option value="Brown">Brown</option>
                    </select>

                    <div className="trending-card__qty" aria-label={`${item.title} quantity`}>
                      <button
                        type="button"
                        aria-label="Decrease quantity"
                        onClick={() => updateTrendingQuantity(item.id, -1)}
                      >
                        -
                      </button>
                      <span>{trendingQuantities[item.id] ?? 1}</span>
                      <button
                        type="button"
                        aria-label="Increase quantity"
                        onClick={() => updateTrendingQuantity(item.id, 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="trending-card__cart-btn"
                    onClick={() =>
                      onAddToCart({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        oldPrice: item.oldPrice,
                        image: item.image,
                        variant: item.variant || "Gold",
                        quantity: trendingQuantities[item.id] ?? 1,
                      })
                    }
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="trending-products-section__button"
          onClick={navigateToCollection}
        >
          VIEW COLLECTION
        </button>
      </section>

      <section className="happy-customer-section">
        <h2>Happy customer</h2>

        <div className="happy-customer-grid">
          {happyCustomers.map((item) => (
            <article className="happy-customer-card" key={item.id}>
              <div className="happy-customer-card__rating">
                <span>★ ★ ★ ★ ★</span>
                <strong>( 4.0 Reviews )</strong>
              </div>

              <p className="happy-customer-card__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
                tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                consequat.
              </p>

              <div className="happy-customer-card__footer">
                <div className="happy-customer-card__profile">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.role}</p>
                  </div>
                </div>

                <span className="happy-customer-card__quote">"</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="jewelry-news-section">
        <h2>Jewelry news</h2>

        <div className="jewelry-news-grid">
          {jewelryNewsItems.map((item) => (
            <article className="jewelry-news-card" key={item.id}>
              <div className="jewelry-news-card__image-wrap">
                <img src={item.image} alt={item.author} className="jewelry-news-card__image" />

                <button type="button" className="jewelry-news-card__arrow" aria-label="Open article">
                  &rarr;
                </button>
              </div>

              <div className="jewelry-news-card__content">
                <p className="jewelry-news-card__meta">
                  <span>{item.date}</span>
                  <span>|</span>
                  <span>By {item.author}</span>
                </p>

                <p className="jewelry-news-card__excerpt">{item.excerpt}</p>

                <button type="button" className="jewelry-news-card__button">
                  READ MORE
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="watch-reels-section">
        <h2>Watch &amp; shop reels</h2>

        <div className="watch-reels-grid">
          {visibleReels.map((item) => (
            <article className="watch-reels-card" key={item.id}>
              <video
                className="watch-reels-card__video"
                src={item.video}
                autoPlay
                muted
                loop
                playsInline
              />

              <div className="watch-reels-card__overlay">
                <div className="watch-reels-card__product">
                  <div className="watch-reels-card__thumb">
                    <img src={item.productImage} alt={item.title} />
                  </div>

                  <div className="watch-reels-card__meta">
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                  </div>
                </div>

                <button
                  type="button"
                  className="watch-reels-card__button"
                  onClick={() =>
                    onAddToCart({
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      image: item.productImage,
                      variant: "Gold",
                    })
                  }
                >
                  ADD TO CART
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="watch-reels-section__controls">
          <button
            type="button"
            className="watch-reels-section__arrow watch-reels-section__arrow--left"
            aria-label="Previous reels"
            onClick={() =>
              setReelsIndex((prev) =>
                prev === 0 ? watchShopReelsItems.length - 1 : prev - 1
              )
            }
          >
            &larr;
          </button>

          <button
            type="button"
            className="watch-reels-section__arrow watch-reels-section__arrow--right"
            aria-label="Next reels"
            onClick={() =>
              setReelsIndex((prev) => (prev + 1) % watchShopReelsItems.length)
            }
          >
            &rarr;
          </button>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <img src={logo} alt="Jelwo" className="site-footer__logo" />

            <div className="site-footer__contact-list">
              <div className="site-footer__contact-item">
                <span className="site-footer__contact-icon"><LocationPinIcon /></span>
                <p>55 East 10th street, new york, ny 10003, united states</p>
              </div>

              <div className="site-footer__contact-item">
                <span className="site-footer__contact-icon"><PhoneIcon /></span>
                <p>+ (220) 123 456 7890</p>
              </div>

              <div className="site-footer__contact-item">
                <span className="site-footer__contact-icon"><MailIcon /></span>
                <p>demo123546@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="site-footer__links">
            <div className="site-footer__column">
              <h3>Information</h3>
              <a href="/">About us</a>
              <a href="/">Contact us</a>
              <a href="/">Faq's</a>
              <a href="/">News</a>
            </div>

            <div className="site-footer__column">
              <h3>Privacy &amp; terms</h3>
              <a href="/">Privacy policy</a>
              <a href="/">Refund policy</a>
              <a href="/">Shipping &amp; return</a>
              <a href="/">Terms &amp; condition</a>
            </div>

            <div className="site-footer__column">
              <h3>Category</h3>
              <a href="/">Rings</a>
              <a href="/">Earring</a>
              <a href="/">Pendant</a>
              <a href="/">Necklaces</a>
              <a href="/">Bracelets</a>
            </div>

            <div className="site-footer__column">
              <h3>Visit store</h3>
              <p>Mon - sat : 10am - 11pm</p>
              <p>Sun : 10am - 4pm</p>
              <p>7 Days a week</p>
            </div>
          </div>
        </div>

        <div className="site-footer__middle">
          <div className="site-footer__socials">
            {footerSocials.map((item) => (
              <button type="button" key={item.id} aria-label={item.label}>
                <i className={item.iconClass} aria-hidden="true"></i>
              </button>
            ))}
          </div>

          <div className="site-footer__subscribe">
            <p>Subscribe and get 15% discount.</p>

            <div className="site-footer__subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button type="button">SUBSCRIBE</button>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>Copyright © 2026 by spacingtech</p>

          <div className="site-footer__payments">
            {footerPayments.map((item) => (
              <img key={item.id} src={item.image} alt={item.alt} />
            ))}
          </div>
        </div>
      </footer>
      
     
    </main>
  );
}

export default Home;
