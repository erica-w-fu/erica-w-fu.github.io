import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar.js";
import UpNext from "../UpNext/UpNext.js";
import { Footer } from "../Footer/Footer.js";

import EquinixImgHover from '../../media/Equinix/Hero.png';
import EquinixImgHoverBG from '../../media/Equinix/HeroBG.webp';
import ZenoImgHover from '../../media/Zeno/Hero.webp';
import ZenoImgHoverBG from '../../media/Zeno/HeroBG.png';

export default function Layout() {
  const location = useLocation();
  const hideLayout = location.pathname === "/";

  // Define dynamic page data
  const pageMeta = {
    "/JPMorganChase": { title: "JPMorganChase projects", next: "Equinix case study", nextLink: "/Equinix" },
    "/Equinix": { title: "Equinix case study", next: "Zeno case study", nextLink: "/Zeno" },
    "/Zeno": { title: "Zeno case study", next: "My creative playground", nextLink: "/Play", img: {ZenoImgHover}, imgBG: {ZenoImgHoverBG} },
    "/Play": { title: "My creative playground", next: "About me", nextLink: "/About" },
    "/About": { title: "About me", next: "Home", nextLink: "/" },
  };

  const meta = pageMeta[location.pathname] || {};

  return hideLayout ? (
    <Outlet />
  ) : (
    <>
        <Navbar title={meta.title} next={meta.next} nextLink={meta.nextLink} />
        <div style={{border: '1px var(--black) solid'}}>
            <Outlet />
            <UpNext 
              title={meta.next}
              link={meta.nextLink}
            />
            <Footer />
        </div>
    </>
  );
}
