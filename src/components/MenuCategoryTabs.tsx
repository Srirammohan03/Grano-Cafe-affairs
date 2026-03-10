import React, { useState } from "react";
import "../styles/MenuCategoryTabs.css";
import type { Category } from "../types/menu";

type Props = {
  categories: Category[];
  activeId: string;
  onChange: (id: string) => void;
};

export default function MenuCategoryTabs({ categories, activeId, onChange }: Props) {

  const [open, setOpen] = useState(false);

  const handleSelect = (id: string) => {
    onChange(id);
    setOpen(false);
  };

  return (
    <div className="mct-container">

      {/* MOBILE FILTER BUTTON */}
      <button className="mct-filterBtn" onClick={() => setOpen(true)}>
        ☰ Categories
      </button>

      {/* OVERLAY */}
      {open && <div className="mct-overlay" onClick={() => setOpen(false)} />}

      {/* SLIDE DRAWER */}
      <div className={`mct-drawer ${open ? "open" : ""}`}>

        <div className="mct-drawerHeader">
          <h3>Categories</h3>
          <button className="mct-close" onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="mct-wrap">
          {categories.map((c) => (
            <button
              key={c.id}
              className={`mct-tab ${activeId === c.id ? "is-active" : ""}`}
              onClick={() => handleSelect(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

      </div>

      {/* DESKTOP SIDEBAR */}
      <div className="mct-desktop">
        {categories.map((c) => (
          <button
            key={c.id}
            className={`mct-tab ${activeId === c.id ? "is-active" : ""}`}
            onClick={() => onChange(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

    </div>
  );
}