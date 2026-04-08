import { useEffect, useState } from "react";
import AboutUs from "./AboutUs";
import AboutUs2 from "./AboutUs2";
import Blog from "./Blog";
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

function getPathname() {
  return window.location.pathname.toLowerCase();
}

function App() {
  const [pathname, setPathname] = useState(getPathname);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(getPathname());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  if (pathname === "/collection") {
    return <Collection />;
  }

  if (pathname === "/blog") {
    return <Blog />;
  }

  if (pathname === "/about-us") {
    return <AboutUs />;
  }

  if (pathname === "/about-us-2") {
    return <AboutUs2 />;
  }

  if (pathname === "/contact-us") {
    return <ContactUs />;
  }

  if (pathname === "/contact-us-2") {
    return <ContactUs2 />;
  }

  if (pathname === "/faqs") {
    return <Faqs />;
  }

  if (pathname === "/privacy-policy") {
    return <PrivacyPolicy />;
  }

  if (pathname === "/refund") {
    return <Refund />;
  }

  if (pathname === "/location") {
    return <Location />;
  }

  if (pathname === "/shipping") {
    return <Shipping />;
  }

  if (pathname === "/terms") {
    return <Terms />;
  }

  return <Home />;
}

export default App;
