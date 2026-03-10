import { useEffect, useRef, useState } from "react";
import MenuCard from "./MenuCard";
import { Filter } from "lucide-react";
import "../styles/menu.css";
import { menuItems } from "../data/menuData";

export interface MenuItem {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  category: string;
  badge?: string;
}

interface MenuSectionProps {
  limit?: number;
  onOrderClick: (item: MenuItem) => void;
}

const categories = [
  { id: "all", label: "All" },
  { id: "starters", label: "Starters" },
  { id: "sandwiches", label: "Sandwiches & Burgers" },
  { id: "soups", label: "Soups" },
  { id: "rice-noodles", label: "Rice & Noodles" },
  { id: "risotto-pasta", label: "Risotto & Pasta" },
  { id: "hot-coffees", label: "Hot Coffees" },
  { id: "cold-coffees", label: "Cold Coffees" },
  { id: "main-plate-veg", label: "Main On Your Plate Veg" },
  { id: "main-plate-nonveg", label: "Main On Your Plate Non Veg" },
  { id: "toasts-bread", label: "Toasts & Bread Basket" },
  { id: "gourmet-fries", label: "Gourmet Fries" },
  { id: "pizzas", label: "Pizzas" },
];

const MenuSection = ({ limit, onOrderClick }: MenuSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("starters");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const displayItems = limit ? filteredItems.slice(0, limit) : filteredItems;

  return (
    <section ref={sectionRef} className="section menu-section">
      <div className="container">

        <div className={`menu-header fade-in ${isVisible ? "visible" : ""}`}>
          <span className="subheading">Explore Our Menu</span>
          <h2>Delicious Menu for You</h2>

          {/* Mobile Filter Button */}
          <button
            className="mobile-filter-btn"
            onClick={() => setMobileFilterOpen(true)}
          >
            <Filter size={18} /> Categories
          </button>
        </div>

        <div className="menu-layout">

          {/* Sidebar */}
          <aside className="menu-sidebar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`sidebar-item ${
                  activeCategory === cat.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </aside>

          {/* Menu Grid */}
          <div className="menu-grid">
            {displayItems.map((item, index) => (
              <MenuCard
                key={item.id}
                item={item}
                isVisible={isVisible}
                delay={index * 0.05}
                onOrderClick={onOrderClick}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <div className={`mobile-filter ${mobileFilterOpen ? "open" : ""}`}>
        <div className="mobile-filter-overlay"
          onClick={() => setMobileFilterOpen(false)}
        />

        <div className="mobile-filter-panel">
          <h3>Select Category</h3>

          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`mobile-category ${
                activeCategory === cat.id ? "active" : ""
              }`}
              onClick={() => {
                setActiveCategory(cat.id);
                setMobileFilterOpen(false);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;