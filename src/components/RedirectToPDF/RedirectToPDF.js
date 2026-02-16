import { useEffect } from "react";

function RedirectToPDF() {
  useEffect(() => {
    // Open PDF in a new tab
    window.open("/Erica_Fu_UX_Designer_2025.pdf", "_blank", "noopener,noreferrer");
  }, []);

  return null; // or a loading spinner if you want
}

export default RedirectToPDF;
