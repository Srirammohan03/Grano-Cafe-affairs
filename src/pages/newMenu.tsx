import React, { useMemo, useState } from "react";
import "../styles/newMenu.css";

import Header from "../components/Header";
import Hero from "../components/Hero";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import OrderModal from "../components/OrderModal";

import heroImage from '/images/menu.png';

import MenuCategoryTabs from "../components/MenuCategoryTabs";
import MenuSectionBlock from "../components/MenuSectionBlock";

import { categories, menuItems } from "../data/newmenuData";
import type { NewMenuItem } from "../types/menu";

export default function NewMenu() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<NewMenuItem | null>(null);

  const handleOrderClick = (item: NewMenuItem) => {
    setSelectedItem(item);
    setIsOrderModalOpen(true);
  };

  const blocks = useMemo(() => {
    const list = categories.filter((c) => c.id !== "all");

    const visible =
      activeCategory === "all"
        ? list
        : list.filter((c) => c.id === activeCategory);

    return visible.map((cat, idx) => {
      const items = menuItems.filter((m) => m.categoryId === cat.id);

      return {
        key: cat.id,
        title: `${cat.label} Menu`,
        kicker: "Crafted fresh at Grano Cafe",
        reverse: idx % 2 === 1,
        items,
      };
    });
  }, [activeCategory]);

  return (
    <>
      <Header />

      <Hero
        title="OUR MENU"
        subtitle="- Explore Our Delicious Menu -"
        description="From premium coffees to freshly baked pastries, discover our carefully crafted offerings."
        showButtons={false}
        isPageHero={true}
        backgroundImage={heroImage}
      />

      <main className="menuPage">
        <div className="menuContainer">
          <div className="menuTop">
            <div className="menuText">
              <h1 className="menuTitle">Explore Grano Cafe Menu</h1><br />
              {/* <p className="menuSub">
                Tap <strong>+</strong> to add and complete your order in
                seconds.
              </p> */}
            </div>

            {/* MOBILE FILTER BUTTON */}
            <div className="menuMobileFilter">
              <MenuCategoryTabs
                categories={categories}
                activeId={activeCategory}
                onChange={(id) => setActiveCategory(id)}
              />
            </div>
          </div>
        </div>

        <div className="menuLayout">
          {/* DESKTOP SIDEBAR */}
          <aside className="menuSidebar">
            <MenuCategoryTabs
              categories={categories}
              activeId={activeCategory}
              onChange={(id) => setActiveCategory(id)}
            />
          </aside>

          <div className="menuContent">
            {blocks.map((b) => (
           <MenuSectionBlock
  key={b.key}
  kicker={b.kicker}
  title={b.title}
  imageSrc={heroImage}
  reverse={b.reverse}
  items={b.items}
  showImage={false}
  showTitle={true}
/>  
            ))}
          </div>
        </div>

        <CTASection />
      </main>

      <Footer />
      <BackToTop />

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        selectedItem={selectedItem}
      />
    </>
  );
}