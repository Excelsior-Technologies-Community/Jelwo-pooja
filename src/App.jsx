import { useEffect, useState } from "react";
import AboutUs from "./AboutUs";
import AboutUs2 from "./AboutUs2";
import Blog from "./Blog";
import CartDrawer from "./CartDrawer";
import Collection from "./Collection";
import ContactUs from "./ContactUs";
import ContactUs2 from "./ContactUs2";
import Faqs from "./Faqs";
import Home from "./Home";
import Location from "./Location";
import PrivacyPolicy from "./PrivacyPolicy";
import Refund from "./Refund";
import Shipping from "./Shipping";
import Terms from "./Terms";
import Wishlist from "./Wishlist";

function getPathname() {
  return window.location.pathname.toLowerCase();
}

const CART_STORAGE_KEY = "jelwo-cart-items";
const WISHLIST_STORAGE_KEY = "jelwo-wishlist-items";

function loadStoredCartItems() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedCartItems = window.localStorage.getItem(CART_STORAGE_KEY);

    if (!storedCartItems) {
      return [];
    }

    const parsedCartItems = JSON.parse(storedCartItems);

    return Array.isArray(parsedCartItems) ? parsedCartItems : [];
  } catch {
    return [];
  }
}

function loadStoredWishlistItems() {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const storedWishlistItems = window.localStorage.getItem(WISHLIST_STORAGE_KEY);

    if (!storedWishlistItems) {
      return [];
    }

    const parsedWishlistItems = JSON.parse(storedWishlistItems);

    return Array.isArray(parsedWishlistItems) ? parsedWishlistItems : [];
  } catch {
    return [];
  }
}

function parsePriceValue(price) {
  const normalizedPrice = String(price)
    .replace(/[^0-9.]/g, "")
    .replace(/^\.+/, "");

  return Number.parseFloat(normalizedPrice) || 0;
}

function App() {
  const [pathname, setPathname] = useState(getPathname);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(loadStoredCartItems);
  const [wishlistItems, setWishlistItems] = useState(loadStoredWishlistItems);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getPathname());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = wishlistItems.length;
  const cartSubtotal = cartItems.reduce(
    (total, item) => total + parsePriceValue(item.price) * item.quantity,
    0
  );

  const addToCart = ({ id, title, price, oldPrice, image, variant = "Gold", quantity = 1 }) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === id && item.variant === variant);

      if (existingItem) {
        return prev.map((item) =>
          item.id === id && item.variant === variant
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prev, { id, title, price, oldPrice, image, variant, quantity }];
    });

    setIsCartOpen(true);
  };

  const updateCartQuantity = (id, variant, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.variant === variant
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeCartItem = (id, variant) => {
    setCartItems((prev) => prev.filter((item) => !(item.id === id && item.variant === variant)));
  };

  const addToWishlist = (item) => {
    setWishlistItems((prev) => {
      if (prev.some((wishlistItem) => wishlistItem.id === item.id)) {
        return prev;
      }

      return [...prev, item];
    });
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleWishlist = (item) => {
    setWishlistItems((prev) =>
      prev.some((wishlistItem) => wishlistItem.id === item.id)
        ? prev.filter((wishlistItem) => wishlistItem.id !== item.id)
        : [...prev, item]
    );
  };

  const isInWishlist = (id) => wishlistItems.some((item) => item.id === id);

  const sharedPageProps = {
    cartCount,
    wishlistCount,
    wishlistItems,
    onCartOpen: () => setIsCartOpen(true),
    onAddToCart: addToCart,
    onAddToWishlist: addToWishlist,
    onRemoveFromWishlist: removeFromWishlist,
    onToggleWishlist: toggleWishlist,
    isInWishlist,
  };

  let page = <Home {...sharedPageProps} />;

  if (pathname === "/collection") {
    page = <Collection {...sharedPageProps} />;
  }
  else if (pathname === "/blog") {
    page = <Blog {...sharedPageProps} />;
  }
  else if (pathname === "/about-us") {
    page = <AboutUs {...sharedPageProps} />;
  }
  else if (pathname === "/about-us-2") {
    page = <AboutUs2 {...sharedPageProps} />;
  }
  else if (pathname === "/contact-us") {
    page = <ContactUs {...sharedPageProps} />;
  }
  else if (pathname === "/contact-us-2") {
    page = <ContactUs2 {...sharedPageProps} />;
  }
  else if (pathname === "/faqs") {
    page = <Faqs {...sharedPageProps} />;
  }
  else if (pathname === "/privacy-policy") {
    page = <PrivacyPolicy {...sharedPageProps} />;
  }
  else if (pathname === "/refund") {
    page = <Refund {...sharedPageProps} />;
  }
  else if (pathname === "/location") {
    page = <Location {...sharedPageProps} />;
  }
  else if (pathname === "/shipping") {
    page = <Shipping {...sharedPageProps} />;
  }
  else if (pathname === "/terms") {
    page = <Terms {...sharedPageProps} />;
  }
  else if (pathname === "/wishlist") {
    page = <Wishlist {...sharedPageProps} />;
  }

  return (
    <>
      <CartDrawer
        isOpen={isCartOpen}
        cartItems={cartItems}
        cartCount={cartCount}
        cartSubtotal={cartSubtotal}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeCartItem}
      />
      {page}
    </>
  );
}

export default App;
