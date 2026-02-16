import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function GTMPageViewTracker() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
        event: "page_view",
        page_location: window.location.href,
        page_path: location.pathname,
        page_title: document.title,
    });

  }, [location]);

  return null;
}

export default GTMPageViewTracker;
