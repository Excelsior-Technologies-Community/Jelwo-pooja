import { useEffect, useState } from "react";
import AboutUs from "./AboutUs";
import AboutUs2 from "./AboutUs2";
import Blog from "./Blog";
import Collection from "./Collection";
import Home from "./Home";

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

  return <Home />;
}

export default App;
