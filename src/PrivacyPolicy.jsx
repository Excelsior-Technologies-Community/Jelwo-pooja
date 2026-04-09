import { useRef, useState } from "react";
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
import breadcrumbImage from "./assets/jewelry-3-breadcrumb.jpg";
import visaCard from "./assets/visa.png";
import mastercardCard from "./assets/mastercard.png";
import paypalCard from "./assets/paypal.png";
import discoverCard from "./assets/discover.png";

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
    items: ["Blue heavy t-shirt", "Brown sunglasses", "Bucket shoes", "Iamond rashmi ring", "Floral gold bangle", "Glitter diamond ring"],
  },
  {
    title: "Necklace",
    items: ["Rose gold rings", "Brown sunglasses", "Bucket shoes", "Color print sandal", "Floral gold bangle", "Simple Pearl earrings"],
  },
  {
    title: "Rings",
    items: ["Blue heavy t-shirt", "Brown sunglasses", "Dark sunglasses", "Half sleev tshirt", "Formal shirt", "Gold nose pin"],
  },
  {
    title: "Bracelets",
    items: ["Blue heavy t-shirt", "Brown sunglasses", "Formal shoes", "Formal shirt", "Blue heavy t-shirt", "Brown sunglasses"],
  },
];

const productMenuColumns = [
  {
    title: "Earrings",
    items: ["Blue heavy t-shirt", "Brown sunglasses", "Bucket shoes", "Iamond rashmi ring", "Floral gold bangle", "Glitter diamond ring"],
  },
  {
    title: "Bracelets",
    items: ["Blue heavy t-shirt", "Brown sunglasses", "Formal shoes", "Formal shirt", "Blue heavy t-shirt", "Brown sunglasses"],
  },
  {
    title: "Necklace",
    items: ["Rose gold rings", "Brown sunglasses", "Bucket shoes", "Color print sandal", "Floral gold bangle", "Simple Pearl earrings"],
  },
  {
    title: "Rings",
    items: ["Blue heavy t-shirt", "Brown sunglasses", "Dark sunglasses", "Half sleev tshirt", "Formal shirt", "Gold nose pin"],
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

const privacyCollectionGroups = [
  {
    title: "Device information",
    items: [
      {
        label: "Examples of personal information collected:",
        text: "Browser version, IP address, time zone, cookie data, and details about how you browse and interact with our storefront.",
      },
      {
        label: "Purpose of collection:",
        text: "To load the site accurately for your device, improve performance, and understand how visitors use the store.",
      },
      {
        label: "Source of collection:",
        text: "Collected automatically when you access our website using cookies, log files, pixels, tags, and similar technologies.",
      },
    ],
  },
  {
    title: "Order information",
    items: [
      {
        label: "Examples of personal information collected:",
        text: "Name, billing address, shipping address, payment details, email address, and phone number.",
      },
      {
        label: "Purpose of collection:",
        text: "To process your payment, arrange shipping, provide invoices or order confirmations, and communicate about your purchase.",
      },
      {
        label: "Source of collection:",
        text: "Collected directly from you when you place an order or update your checkout information.",
      },
    ],
  },
  {
    title: "Customer support information",
    items: [
      {
        label: "Examples of personal information collected:",
        text: "Order number, contact details, support history, and any information you share when asking for help.",
      },
      {
        label: "Purpose of collection:",
        text: "To respond to questions, resolve issues, and keep a record of service requests so we can support you faster.",
      },
      {
        label: "Source of collection:",
        text: "Collected directly from you through contact forms, email messages, and support conversations.",
      },
    ],
  },
];

const privacyRights = [
  {
    title: "GDPR",
    text: "If you are a resident of the European Economic Area, you have the right to access the personal information we hold about you and to ask that it be corrected, updated, or erased where required by law.",
  },
  {
    title: "CCPA",
    text: "If you are a California resident, you may request access to the categories of personal information we collect and ask us to delete or limit certain uses of that information when applicable.",
  },
];

const sharingPartners = [
  "payment processors that securely authorize transactions",
  "shipping and fulfillment partners that deliver orders",
  "analytics providers that help us understand store performance",
  "marketing platforms that help us manage newsletters and ad campaigns",
];

const behaviouralAdvertisingOptions = [
  "Use your browser settings to block or clear cookies.",
  "Unsubscribe from marketing emails by using the link in any campaign message.",
  "Contact our team if you want us to stop using your information for promotional outreach.",
];

const sellingPolicyPoints = [
  "We do not sell personal information for direct monetary value.",
  "We may share limited identifiers with trusted marketing and analytics vendors to improve store performance.",
  "You can ask us to review, delete, or restrict this processing by contacting our support team.",
];

const essentialCookies = [
  { name: "_djc", purpose: "Supports storefront session management and keeps secure browsing preferences active." },
  { name: "_secure", purpose: "Helps protect customer sessions and maintain security checks during checkout." },
  { name: "cart_st", purpose: "Stores cart status so items remain available while you continue shopping." },
  { name: "secret", purpose: "Verifies secure actions and protects customer requests from unauthorized use." },
  { name: "secure_customer", purpose: "Maintains the signed-in customer state across protected account pages." },
  { name: "_shopify_u", purpose: "Tracks account updates after login so the storefront experience stays consistent." },
];

const analyticsCookies = [
  { name: "_shopify_y", purpose: "Measures visitor behavior over time so we can improve navigation and conversion paths." },
  { name: "_landing_page", purpose: "Remembers the first page a visitor entered to help evaluate campaign performance." },
  { name: "_orig_referrer", purpose: "Stores referral details so we know which channels drive traffic to the store." },
  { name: "_s", purpose: "Tracks storefront analytics sessions for short-term reporting and funnel analysis." },
  { name: "_shopify_sa_t", purpose: "Supports marketing attribution for traffic sources and campaign effectiveness." },
];

function PrivacyPolicy() {
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [isPagesMenuOpen, setIsPagesMenuOpen] = useState(false);
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

  const navigateToAboutUs = () => navigateTo("/about-us");
  const navigateToAboutUs2 = () => navigateTo("/about-us-2");
  const navigateToContactUs = () => navigateTo("/contact-us");
  const navigateToContactUs2 = () => navigateTo("/contact-us-2");
  const navigateToFaqs = () => navigateTo("/faqs");
  const navigateToPrivacyPolicy = () => navigateTo("/privacy-policy");
  const navigateToRefund = () => navigateTo("/refund");
  const navigateToLocation = () => navigateTo("/location");
  const navigateToShipping = () => navigateTo("/shipping");
  const navigateToTerms = () => navigateTo("/terms");
  const navigateToBlog = () => navigateTo("/blog");

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
              <span className="search__icon"><SearchIcon /></span>
            </label>
            <button className="icon-link" type="button" aria-label="Account"><UserPlusIcon /></button>
            <button className="icon-link icon-link--count" type="button" aria-label="Wishlist" onClick={() => window.location.assign("/wishlist")}><HeartIcon /><span>(0)</span></button>
            <button className="icon-link icon-link--count" type="button" aria-label="Cart"><BagIcon /><span>(0)</span></button>
          </div>
        </div>
      </header>

      <nav className="subbar">
        <div className="subbar__inner">
          <div className="subbar__phone">
            <span className="subbar__icon"><HeadsetIcon /></span>
            <span>(220) 123 456 7890</span>
          </div>

          <div className="subbar__menu">
            <div className="subbar__menu-item" onMouseEnter={openHomeMenu} onMouseLeave={closeMenus}>
              <button className={`subbar__menu-btn ${isHomeMenuOpen ? "is-active" : ""}`} type="button">
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

            <div className="subbar__menu-item" onMouseEnter={openShopMenu} onMouseLeave={closeMenus}>
              <button className={`subbar__menu-btn ${isShopMenuOpen ? "is-active" : ""}`} type="button">
                SHOP <span><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
              </button>
              <div className={`shop-menu ${isShopMenuOpen ? "is-open" : ""}`}>
                <div className="shop-menu__layout">
                  <div className="shop-menu__columns">
                    {shopMenuColumns.map((column) => (
                      <div className="shop-menu__column" key={column.title}>
                        <h3>{column.title}</h3>
                        {column.items.map((item) => <p key={item}>{item}</p>)}
                      </div>
                    ))}
                  </div>
                  <div className="shop-menu__promo">
                    <img src={shopPromo} alt="Flat 30% off" />
                  </div>
                </div>
              </div>
            </div>

            <div className="subbar__menu-item" onMouseEnter={openProductsMenu} onMouseLeave={closeMenus}>
              <button className={`subbar__menu-btn ${isProductsMenuOpen ? "is-active" : ""}`} type="button">
                PRODUCTS <span><i className="fa fa-chevron-down" aria-hidden="true"></i></span>
              </button>
              <div className={`products-menu ${isProductsMenuOpen ? "is-open" : ""}`}>
                <div className="products-menu__layout">
                  <div className="products-menu__columns">
                    {productMenuColumns.map((column) => (
                      <div className="products-menu__column" key={column.title}>
                        <h3>{column.title}</h3>
                        {column.items.map((item) => <p key={item}>{item}</p>)}
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
                        <div className="products-menu__image-box"><img src={productPromo1} alt="Pendant" /></div>
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

            <div className="subbar__menu-item" onMouseEnter={openPagesMenu} onMouseLeave={closeMenus}>
              <button className={`subbar__menu-btn ${isPagesMenuOpen ? "is-active" : ""}`} type="button">
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
                      ><span>{item}</span></a>
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
                              href={
                                child === "About Us"
                                  ? "/about-us"
                                  : child === "About Us 2"
                                    ? "/about-us-2"
                                    : child === "Contact"
                                      ? "/contact-us"
                                      : child === "Contact 2"
                                        ? "/contact-us-2"
                                        : "/"
                              }
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
            <span className="subbar__icon"><HomeOutlineIcon /></span>
            <span>FREE TRY AT HOME</span>
          </div>
        </div>
      </nav>

      <section
        className="collection-breadcrumb"
        style={{ backgroundImage: `linear-gradient(rgba(64, 47, 28, 0.28), rgba(64, 47, 28, 0.28)), url(${breadcrumbImage})` }}
      >
        <p>HOME - PRIVACY POLICY</p>
        <h1>Privacy Policy</h1>
      </section>

      <section className="privacy-policy-layout">
        <div className="privacy-policy-layout__column">
          <section className="privacy-policy-layout__section">
            <h2>Collecting personal information</h2>
            <p>
              When you visit the site, we collect certain information about your device, your interactions with the store, and
              information needed to process purchases or respond to support requests.
            </p>
            <p>
              This information helps us operate the storefront, secure checkout, deliver orders, and improve the shopping
              experience over time.
            </p>

            {privacyCollectionGroups.map((group) => (
              <div className="privacy-policy-layout__group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="privacy-policy-layout__detail-list">
                  {group.items.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong>
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section className="privacy-policy-layout__section">
            <h2>Your rights</h2>
            {privacyRights.map((item) => (
              <div className="privacy-policy-layout__rights-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
            <p>
              To exercise any of these rights, please contact us at <a href="mailto:support@jelwo.com">support@jelwo.com</a>.
            </p>
          </section>

          <section className="privacy-policy-layout__section">
            <h2>Changes</h2>
            <p>
              We may update this privacy policy from time to time to reflect operational, legal, or regulatory changes.
            </p>
            <p>
              When updates are made, the revised version will be posted on this page so you can review the latest information.
            </p>
          </section>
        </div>

        <div className="privacy-policy-layout__column">
          <section className="privacy-policy-layout__section">
            <h2>Sharing personal information</h2>
            <p>
              We share personal information with service providers only when it is necessary to run our business and fulfill the
              services you request from us.
            </p>
            <ul className="privacy-policy-layout__bullet-list">
              {sharingPartners.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              We may also share information to comply with applicable laws, respond to lawful requests, or protect our rights.
            </p>
          </section>

          <section className="privacy-policy-layout__section">
            <h2>Behavioural advertising</h2>
            <p>
              We may use your information to provide you with targeted advertisements or marketing communications that we believe
              may be relevant to your interests.
            </p>
            <p>
              If you prefer to opt out of this type of activity, you can take any of the following steps:
            </p>
            <ul className="privacy-policy-layout__bullet-list">
              {behaviouralAdvertisingOptions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="privacy-policy-layout__section">
            <h2>Selling personal information</h2>
            <p>
              Some privacy laws use a broad definition of the word &quot;sell.&quot; We want to be clear about how we handle your data.
            </p>
            <ul className="privacy-policy-layout__bullet-list">
              {sellingPolicyPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="privacy-policy-layout__section">
            <h2>Cookies</h2>
            <p>
              We use cookies to support core store functionality, remember your preferences, and understand how customers use the
              website.
            </p>

            <h3 className="privacy-policy-layout__table-title">Cookies necessary for the functioning of the store</h3>
            <div className="privacy-policy-layout__table-wrap">
              <table className="privacy-policy-layout__table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Function</th>
                  </tr>
                </thead>
                <tbody>
                  {essentialCookies.map((cookie) => (
                    <tr key={cookie.name}>
                      <td>{cookie.name}</td>
                      <td>{cookie.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="privacy-policy-layout__table-title">Reporting and analytics</h3>
            <div className="privacy-policy-layout__table-wrap">
              <table className="privacy-policy-layout__table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Function</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticsCookies.map((cookie) => (
                    <tr key={cookie.name}>
                      <td>{cookie.name}</td>
                      <td>{cookie.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
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
              <a href="/faqs" onClick={(event) => { event.preventDefault(); navigateToFaqs(); }}>Faq&apos;s</a>
              <a href="/">News</a>
            </div>

            <div className="site-footer__column">
              <h3>Privacy &amp; terms</h3>
              <a href="/privacy-policy" onClick={(event) => { event.preventDefault(); navigateToPrivacyPolicy(); }}>Privacy policy</a>
              <a href="/refund" onClick={(event) => { event.preventDefault(); navigateToRefund(); }}>Refund policy</a>
              <a href="/shipping" onClick={(event) => { event.preventDefault(); navigateToShipping(); }}>Shipping &amp; return</a>
              <a href="/terms" onClick={(event) => { event.preventDefault(); navigateToTerms(); }}>Terms &amp; condition</a>
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
          <p>Copyright (c) 2026 by spacingtech</p>

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

export default PrivacyPolicy;
