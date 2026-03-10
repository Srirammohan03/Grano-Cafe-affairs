

import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import "../styles/MenuShowcaseSection.css";

import MenuSectionBlock from "./MenuSectionBlock";
import { menuItems } from "../data/newmenuData";

// Use an image you already have so build won't break:
import plateFallback from "/images/aboutsec.png";

export default function MenuShowcaseSection() {
  const breakfastItems = useMemo(() => {
    const wanted = new Set(["toasts-bread", "hot-coffees", "sandwiches"]);
    return menuItems.filter((m) => wanted.has(m.categoryId)).slice(0, 6);
  }, []);

  const lunchItems = useMemo(() => {
    const wanted = new Set(["main-plate-veg", "main-plate-nonveg", "rice-noodles"]);
    return menuItems.filter((m) => wanted.has(m.categoryId)).slice(0, 6);
  }, []);

  return (
    <div className="msc-wrap">
      <MenuSectionBlock
        kicker="Enjoy a sunny day with our breakfast"
        title="Breakfast Menu"
        imageSrc={plateFallback}
        items={breakfastItems}
        cta={
          <Link className="msc-btn" to="/menu">
            SEE MORE
          </Link>
        }
      />

      <MenuSectionBlock
        kicker="Fresh plates, bold flavours, perfect noon"
        title="Lunch Menu"
        imageSrc={plateFallback}
        items={lunchItems}
        reverse
        cta={
          <Link className="msc-btn" to="/menu">
            SEE MORE
          </Link>
        }
      />
    </div>
  );
}