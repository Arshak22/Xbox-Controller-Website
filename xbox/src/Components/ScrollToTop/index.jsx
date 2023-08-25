import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    const delay = 100;
    const timeoutId = setTimeout(scrollToTop, delay);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
}