import React, { useMemo, useEffect, useRef } from "react";
import "../styles/MenuSectionBlock.css";
import type { NewMenuItem } from "../types/menu";

type Props = {
  kicker?: string;
  title: string;
  imageSrc: string;
  reverse?: boolean;
  items: NewMenuItem[];
  onAdd?: (item: NewMenuItem) => void;
  cta?: React.ReactNode;
  showImage?: boolean;
};

function MenuColumn({
  items,
  onAdd,
}: {
  items: NewMenuItem[];
  onAdd?: (item: NewMenuItem) => void;
}) {
  return (
    <div className="msb-list">
      {items.map((it) => (
        <div className="msb-row" key={it.id}>
          <div className="msb-rowTop">
            <div className="msb-itemName">{it.name}</div>

            <div className="msb-right">
              <div className="msb-price">₹{it.price}</div>

              {onAdd && (
                <button
                  className="msb-addBtn"
                  onClick={() => onAdd(it)}
                  type="button"
                >
                  +
                </button>
              )}
            </div>
          </div>

          <div className="msb-desc">{it.description}</div>
          <div className="msb-divider" />
        </div>
      ))}
    </div>
  );
}

export default function MenuSectionBlock({
  kicker,
  title,
  imageSrc,
  reverse,
  items,
  onAdd,
  cta,
  showImage = true,
}: Props) {

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const { left, right } = useMemo(() => {
    const mid = Math.ceil(items.length / 2);
    return { left: items.slice(0, mid), right: items.slice(mid) };
  }, [items]);

  return (
   <section
  ref={sectionRef}
  className={`msb-wrap ${!showImage ? "msb-noImage" : ""}`}
>
      <div className={`msb-block ${reverse ? "msb-reverse" : ""}`}>
       {showImage && (
  <div className="msb-media">
    <div className="msb-plate">
      <img src={imageSrc} alt={title} className="msb-img" />
    </div>
  </div>
)}

        <div className="msb-content">
          {kicker && <div className="msb-kicker">{kicker}</div>}
          <h2 className="msb-title">{title}</h2>

          <div className="msb-itemsGrid">
            <MenuColumn items={left} onAdd={onAdd} />
            <MenuColumn items={right} onAdd={onAdd} />
          </div>

          {cta && <div className="msb-cta">{cta}</div>}
        </div>
      </div>
    </section>
  );
}