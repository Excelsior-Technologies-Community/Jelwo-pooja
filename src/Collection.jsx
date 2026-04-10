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
import specialProduct1 from "./assets/p1.webp";
import specialProduct2 from "./assets/p3.webp";
import banner5 from "./assets/banner5.webp";
import breadcrumbImage from "./assets/jewelry-3-breadcrumb.jpg";
import sideBanner from "./assets/sidebanner.webp";
import jewelry2 from "./assets/j2.webp";
import jewelry2Alt from "./assets/j2-2.webp";
import jewelry2AltTwo from "./assets/j2-3.webp";
import jewelry3 from "./assets/j3.webp";
import jewelry3Alt from "./assets/j3-1.webp";
import jewelry4 from "./assets/j4-1.webp";
import jewelry4Alt from "./assets/j4-2.webp";
import jewelry5 from "./assets/j5.webp";
import visaCard from "./assets/visa.png";
import mastercardCard from "./assets/mastercard.png";
import paypalCard from "./assets/paypal.png";
import discoverCard from "./assets/discover.png";
import { buildProductDetail } from "./productCatalog";

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

const collectionCategories = [
  "14K, 58.3%",
  "18K, 75.0%",
  "22K, 91.7%",
  "24K, 99.9%",
  "Bangles",
  "Best seller",
  "Bracelets",
  "Brooch",
];

const colorOptions = [
  { id: "beige", label: "Beige", count: 4, swatch: "#ead7a4" },
  { id: "bronze", label: "Bronze", count: 1, swatch: "#cd7f32" },
  { id: "brown", label: "Brown", count: 5, swatch: "#a65f32" },
  { id: "gold", label: "Gold", count: 10, swatch: "#d6a400" },
  { id: "orange", label: "Orange", count: 4, swatch: "#f18811" },
  { id: "silver", label: "Silver", count: 2, swatch: "#d7d7d7" },
  { id: "yellow", label: "Yellow", count: 4, swatch: "#ffdf00" },
];

const specialProducts = [
  { id: "gold-nose-pin", title: "Gold nose pin", price: "Rs. 12.00", image: specialProduct1 },
  { id: "framed-gold-pendant", title: "Framed gold pendant", price: "Rs. 22.00", image: specialProduct2 },
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

const collectionProducts = [
  {
    id: "collection-diamond-ring",
    galleryKey: "j2",
    discount: "45%",
    image: jewelry2,
    title: "Chic diamond ring",
    price: "From Rs. 22.00",
    oldPrice: "Rs. 40.00",
    options: ["28", "29", "30"],
  },
  {
    id: "collection-jhumkas",
    galleryKey: "j3",
    discount: "64%",
    image: jewelry3,
    title: "Gemstone jhumkas",
    price: "Rs. 18.00",
    oldPrice: "Rs. 50.00",
    options: ["Gold", "Yellow", "Brown"],
  },
  {
    id: "collection-drop-earrings",
    galleryKey: "j4",
    discount: "68%",
    image: jewelry4,
    title: "Drop gold earrings",
    price: "From Rs. 14.00",
    oldPrice: "Rs. 44.00",
    options: ["Brown", "gold", "orange"],
  },
  {
    id: "collection-chain-bracelet",
    galleryKey: "j5",
    discount: "56%",
    image: jewelry5,
    title: "Gemstone chain bracelet",
    price: "From Rs. 17.00",
    oldPrice: "Rs. 39.00",
    options: ["6", "6.5", "7"],
  },
  {
    id: "collection-cluster-ring",
    galleryKey: "j2",
    discount: "18%",
    image: jewelry2Alt,
    title: "Cluster diamond ring",
    price: "From Rs. 12.00",
    oldPrice: "",
    options: ["20", "21", "22"],
  },
  {
    id: "collection-flora-bangle",
    galleryKey: "j3",
    discount: "24%",
    image: jewelry3Alt,
    title: "Flora diamond bangle",
    price: "Rs. 28.00",
    oldPrice: "",
    options: ["2-12", "2-14", "2-16"],
  },
  {
    id: "collection-glitter-ring",
    galleryKey: "j4",
    discount: "13%",
    image: jewelry4Alt,
    title: "Glitter diamond ring",
    price: "From Rs. 10.00",
    oldPrice: "",
    options: ["28", "29", "30"],
  },
  {
    id: "collection-cluster-ring-two",
    galleryKey: "j2",
    discount: "13%",
    image: jewelry2AltTwo,
    title: "Cluster diamond ring",
    price: "Rs. 26.00",
    oldPrice: "Rs. 30.00",
    options: ["20", "21", "22"],
  },
  {
    id: "collection-blossom-bangle",
    galleryKey: "j3",
    discount: "20%",
    image: jewelry3,
    title: "Blossom diamond bangle",
    price: "Rs. 28.00",
    oldPrice: "Rs. 35.00",
    options: ["2-12", "2-14", "2-16"],
  },
  {
    id: "collection-framed-pendant",
    galleryKey: "j5",
    discount: "12%",
    image: specialProduct2,
    title: "Framed gold pendant",
    price: "Rs. 22.00",
    oldPrice: "",
    options: ["Gold", "orange", "Brown"],
  },
];

function getCartPrice(price) {
  return String(price).replace(/^From\s+/i, "");
}

function Collection({
  cartCount,
  wishlistCount,
  onCartOpen,
  onAddToCart,
  onToggleWishlist,
  onViewProduct,
  isInWishlist,
}) {
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(collectionCategories[0]);
  const [availability, setAvailability] = useState({
    inStock: false,
    outOfStock: false,
  });
  const [selectedColors, setSelectedColors] = useState([]);
  const [countdown, setCountdown] = useState({
    days: 1610,
    hours: 9,
    minutes: 27,
    seconds: 58,
  });
  const [productQuantities, setProductQuantities] = useState(
    Object.fromEntries(collectionProducts.map((item) => [item.id, 1]))
  );
  const [selectedProductOptions, setSelectedProductOptions] = useState(
    Object.fromEntries(collectionProducts.map((item) => [item.id, item.options[0]]))
  );
  const closeTimerRef = useRef(null);

  const openHomeMenu = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setIsHomeMenuOpen(true);
    setIsShopMenuOpen(false);
    setIsProductsMenuOpen(false);
    setIsPagesMenuOpen(false);
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

  const closeMenus = () => {
    closeTimerRef.current = setTimeout(() => {
      setIsHomeMenuOpen(false);
      setIsShopMenuOpen(false);
      setIsProductsMenuOpen(false);
      setIsPagesMenuOpen(false);
      closeTimerRef.current = null;
    }, 180);
  };

  const navigateTo = (path) => {
    window.history.pushState({}, "", path);
    window.dispatchEvent(new PopStateEvent("popstate"));
  };

  const navigateToAboutUs = () => {
    navigateTo("/about-us");
  };

  const navigateToAboutUs2 = () => {
    navigateTo("/about-us-2");
  };

  const navigateToContactUs = () => {
    navigateTo("/contact-us");
  };

  const navigateToContactUs2 = () => {
    navigateTo("/contact-us-2");
  };

  const navigateToFaqs = () => {
    navigateTo("/faqs");
  };

  const navigateToPrivacyPolicy = () => {
    navigateTo("/privacy-policy");
  };

  const navigateToRefund = () => {
    navigateTo("/refund");
  };

  const navigateToLocation = () => {
    navigateTo("/location");
  };

  const navigateToShipping = () => {
    navigateTo("/shipping");
  };

  const navigateToTerms = () => {
    navigateTo("/terms");
  };

  const navigateToBlog = () => {
    navigateTo("/blog");
  };

  const selectedAvailabilityCount = Object.values(availability).filter(Boolean).length;

  const toggleAvailability = (key) => {
    setAvailability((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const resetAvailability = () => {
    setAvailability({
      inStock: false,
      outOfStock: false,
    });
  };

  const toggleColor = (id) => {
    setSelectedColors((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const resetColors = () => {
    setSelectedColors([]);
  };

  const updateProductQuantity = (id, change) => {
    setProductQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] ?? 1) + change),
    }));
  };

  const updateProductOption = (id, option) => {
    setSelectedProductOptions((prev) => ({
      ...prev,
      [id]: option,
    }));
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
      variant: selectedProductOptions[item.id] ?? item.options[0],
    });
  };

  const viewProductItem = (item) => {
    onViewProduct(
      buildProductDetail({
        ...item,
        variant: selectedProductOptions[item.id] ?? item.options[0],
      })
    );
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown((prev) => {
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
      window.clearInterval(timer);
    };
  }, []);

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
              onMouseLeave={closeMenus}
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
              onMouseLeave={closeMenus}
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
              onMouseLeave={closeMenus}
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
              onMouseLeave={closeMenus}
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
        className="collection-breadcrumb"
        style={{ backgroundImage: `linear-gradient(rgba(64, 47, 28, 0.28), rgba(64, 47, 28, 0.28)), url(${breadcrumbImage})` }}
      >
        <p>HOME - PLATINUM RING</p>
        <h1>Platinum ring</h1>
      </section>

      <section className="collection-layout">
        <aside className="collection-sidebar">
          <div className="collection-sidebar__block">
            <h2>Categories</h2>
            <div className="collection-sidebar__list">
              {collectionCategories.map((item) => (
                <button
                  type="button"
                  className={`collection-sidebar__item ${selectedCategory === item ? "is-active" : ""}`}
                  key={item}
                  onClick={() => setSelectedCategory(item)}
                >
                  <span className="collection-sidebar__check"></span>
                  <span>{item}</span>
                  <strong>(12)</strong>
                </button>
              ))}
            </div>
          </div>

          <div className="collection-sidebar__block">
            <h2>Filter</h2>

            <div className="collection-filter__section">
              <div className="collection-filter__header">
                <h3>Availability</h3>
              </div>

              <div className="collection-filter__subheader">
                <span>{selectedAvailabilityCount} selected</span>
                <button type="button" onClick={resetAvailability}>
                  Reset
                </button>
              </div>

              <div className="collection-filter__options">
                <button
                  type="button"
                  className={`collection-filter__option ${availability.inStock ? "is-active" : ""}`}
                  onClick={() => toggleAvailability("inStock")}
                >
                  <span className="collection-filter__box"></span>
                  <span>In stock</span>
                  <strong>(10)</strong>
                </button>

                <button
                  type="button"
                  className={`collection-filter__option ${availability.outOfStock ? "is-active" : ""}`}
                  onClick={() => toggleAvailability("outOfStock")}
                >
                  <span className="collection-filter__box"></span>
                  <span>Out of stock</span>
                  <strong>(1)</strong>
                </button>
              </div>
            </div>

            <div className="collection-filter__section">
              <div className="collection-filter__header">
                <h3>Price</h3>
              </div>

              <div className="collection-filter__subheader">
                <span>The highest price is Rs. 28.00</span>
                <button type="button">Reset</button>
              </div>

              <div className="collection-filter__range">
                <span className="collection-filter__line"></span>
                <span className="collection-filter__thumb collection-filter__thumb--left"></span>
                <span className="collection-filter__thumb collection-filter__thumb--right"></span>
              </div>

              <div className="collection-filter__prices">
                <label>
                  <span>From</span>
                  <div>
                    <span>₹</span>
                    <strong>0</strong>
                  </div>
                </label>

                <label>
                  <span>To</span>
                  <div>
                    <span>₹</span>
                    <strong>28</strong>
                  </div>
                </label>
              </div>
            </div>

            <div className="collection-filter__section">
              <div className="collection-filter__header">
                <h3>Color</h3>
              </div>

              <div className="collection-filter__subheader">
                <span>{selectedColors.length} selected</span>
                <button type="button" onClick={resetColors}>
                  Reset
                </button>
              </div>

              <div className="collection-filter__colors">
                {colorOptions.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    className={`collection-filter__color ${selectedColors.includes(item.id) ? "is-active" : ""}`}
                    onClick={() => toggleColor(item.id)}
                  >
                    <span
                      className="collection-filter__swatch"
                      style={{ backgroundColor: item.swatch }}
                    ></span>
                    <span>{item.label}</span>
                    <strong>({item.count})</strong>
                  </button>
                ))}
              </div>
            </div>

            <div className="collection-filter__section">
              <div className="collection-filter__header">
                <h3>Special product</h3>
              </div>

              <div className="collection-special">
                {specialProducts.map((item) => (
                  <article className="collection-special__item" key={item.id}>
                    <div className="collection-special__image">
                      <img src={item.image} alt={item.title} />
                    </div>

                    <div className="collection-special__content">
                      <h4>{item.title}</h4>
                      <p>{item.price}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className="collection-sidebanner">
                <img src={sideBanner} alt="Gold for every event" />
              </div>
            </div>
          </div>
        </aside>

        <div className="collection-main">
          <h2 className="collection-main__title">{selectedCategory}</h2>

          <article
            className="collection-promo"
            style={{ backgroundImage: `url(${banner5})` }}
          ></article>

          <p className="collection-main__description">
            Care for fiber: 30% more recycled polyester. We label garments manufactured
            using environmentally friendly technologies and raw materials with the Join
            Life label.
          </p>

          <div className="collection-toolbar">
            <div className="collection-toolbar__views" aria-label="View options">
              <button type="button" aria-label="Grid view">
                <i className="fa fa-th-large" aria-hidden="true"></i>
              </button>
              <button type="button" aria-label="List view">
                <i className="fa fa-list" aria-hidden="true"></i>
              </button>
            </div>

            <div className="collection-toolbar__sort">
              <span>12 products</span>
              <label>
                <strong>Sort by:</strong>
                <select defaultValue="Best selling" aria-label="Sort products">
                  <option>Featured</option>
                  <option>Best selling</option>
                  <option>Alphabetically, A-Z</option>
                  <option>Alphabetically, Z-A</option>
                  <option>Newest</option>
                  <option>Price low to high</option>
                  <option>Price high to low</option>
                  <option>Date, new to old</option>
                  <option>Date, old to new</option>
                </select>
              </label>
            </div>
          </div>

          <div className="collection-products">
            {collectionProducts.map((item) => (
              <article className="collection-product-card" key={item.id}>
                <div className="collection-product-card__image-area">
                  <span className="collection-product-card__discount">{item.discount}</span>

                  <div className="collection-product-card__image-wrap">
                    <img src={item.image} alt={item.title} className="collection-product-card__image" />

                    <div className="collection-product-card__hover-actions">
                      <button
                        type="button"
                        aria-label={`Add ${item.title} to wishlist`}
                        className={isInWishlist(item.id) ? "is-active" : ""}
                        onClick={() => toggleWishlistItem(item)}
                      >
                        <HeartIcon />
                      </button>
                      <button
                        type="button"
                        aria-label={`View ${item.title}`}
                        onClick={() => viewProductItem(item)}
                      >
                        <EyeIcon />
                      </button>
                    </div>
                  </div>

                  <div className="collection-product-card__countdown" aria-label="Offer countdown">
                    <div>
                      <strong>{String(countdown.days).padStart(4, "0")}</strong>
                      <span>DAY</span>
                    </div>
                    <div>
                      <strong>{String(countdown.hours).padStart(2, "0")}</strong>
                      <span>HRS</span>
                    </div>
                    <div>
                      <strong>{String(countdown.minutes).padStart(2, "0")}</strong>
                      <span>MIN</span>
                    </div>
                    <div>
                      <strong>{String(countdown.seconds).padStart(2, "0")}</strong>
                      <span>SEC</span>
                    </div>
                  </div>
                </div>

                <div className="collection-product-card__content">
                  <div className="collection-product-card__details">
                    <p>JEWELRY</p>
                    <h3>{item.title}</h3>
                    <div className="collection-product-card__price">
                      <span>{item.price}</span>
                      <del>{item.oldPrice}</del>
                    </div>
                  </div>

                  <div className="collection-product-card__purchase">
                    <div className="collection-product-card__selectors">
                      <select
                        value={selectedProductOptions[item.id] ?? item.options[0]}
                        aria-label={`${item.title} option`}
                        onChange={(event) => updateProductOption(item.id, event.target.value)}
                      >
                        {item.options.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>

                      <div className="collection-product-card__qty" aria-label={`${item.title} quantity`}>
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateProductQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span>{productQuantities[item.id] ?? 1}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateProductQuantity(item.id, 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="collection-product-card__cart-btn"
                      onClick={() =>
                        onAddToCart({
                          id: item.id,
                          title: item.title,
                          price: getCartPrice(item.price),
                          oldPrice: item.oldPrice,
                          image: item.image,
                          variant: selectedProductOptions[item.id] ?? item.options[0],
                          quantity: productQuantities[item.id] ?? 1,
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

export default Collection;
