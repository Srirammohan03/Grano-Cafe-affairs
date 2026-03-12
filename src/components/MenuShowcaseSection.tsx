import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "../styles/MenuShowcaseSection.css";

import MenuSectionBlock from "./MenuSectionBlock";
import { menuItems } from "../data/newmenuData";

// image for home showcase
import plateFallback from "/images/aboutsec.png";

export default function MenuShowcaseSection() {

  const showcaseItems = useMemo(() => {
    const wanted = new Set([ "combo", "coffee"]);
    return menuItems.filter((m) => wanted.has(m.categoryId)).slice(0, 6);
  }, []);

  return (
    <section className="msc-wrap">

      <MenuSectionBlock
        kicker="Popular picks from our kitchen"
        title="Signature Menu"
        imageSrc={plateFallback}
        items={showcaseItems}
        cta={
          <Link className="btn btn-primary" to="/menu">
            View Full Menu
          </Link>
        }
      />

    </section>
  );
}