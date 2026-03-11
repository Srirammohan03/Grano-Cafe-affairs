// src/data/menuData.ts

import type { Category, NewMenuItem } from "../types/menu";

export const categories: Category[] = [
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


// helpers
const price = (min: number, max: number, seed: number) => {
  const x = Math.abs(Math.sin(seed * 999)) * (max - min) + min;
  return Math.round(x / 5) * 5;
};

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const buildMenuItems = (): NewMenuItem[] => {
  const seedsByCategory: Record<string, Array<{ name: string; desc: string }>> = {
    starters: [
      { name: "Classic Veg Falafel", desc: "Crispy outside, soft inside. Served with house dip." },
      { name: "Flame-Kissed Chicken Wings", desc: "Smoky glaze, sesame finish, juicy bite." },
      { name: "Crispy Chicken Wontons", desc: "Golden pockets with spicy soy dip." },
      { name: "Broccoli & Corn Cheese Croquettes", desc: "Creamy center, crunchy coat." },
      { name: "Golden Crusted Fish Cakes", desc: "Herb-fish blend with a crisp crust." },
    ],
    sandwiches: [
      { name: "Grano Classic Chicken Burger", desc: "Juicy patty, lettuce, sauce, toasted bun." },
      { name: "Paneer Tikka Sandwich", desc: "Smoky paneer, onions, mint mayo." },
      { name: "Peri Peri Chicken Sandwich", desc: "Spiced chicken, crunchy slaw, peri sauce." },
      { name: "Mushroom Melt Burger", desc: "Sautéed mushrooms, cheese, garlic aioli." },
    ],
    soups: [
      { name: "Cream of Mushroom Soup", desc: "Velvety mushroom cream, warm & comforting." },
      { name: "Roasted Tomato Basil Soup", desc: "Slow-roasted tomatoes with basil aroma." },
      { name: "Sweet Corn Soup", desc: "Light, classic, wholesome." },
    ],
    "rice-noodles": [
      { name: "Veg Fried Rice", desc: "Wok-tossed rice, veggies, house soy." },
      { name: "Chicken Hakka Noodles", desc: "High-heat wok noodles, tender chicken." },
      { name: "Schezwan Noodles", desc: "Spicy, garlic, bold street-style flavour." },
    ],
    "risotto-pasta": [
      { name: "Alfredo Pasta", desc: "Creamy white sauce, parmesan finish." },
      { name: "Arrabbiata Pasta", desc: "Tomato chili sauce, punchy & bright." },
      { name: "Mushroom Risotto", desc: "Slow-cooked rice, earthy mushrooms." },
    ],
    "hot-coffees": [
      { name: "Espresso", desc: "Strong, clean, single origin shot." },
      { name: "Cappuccino", desc: "Balanced espresso, steamed milk, foam." },
      { name: "Cafe Latte", desc: "Smooth milk coffee, comfort sip." },
      { name: "Mocha", desc: "Chocolate + espresso = mood." },
    ],
    "cold-coffees": [
      { name: "Iced Americano", desc: "Bold and refreshing." },
      { name: "Cold Coffee Classic", desc: "Creamy blend, café style." },
      { name: "Caramel Frappe", desc: "Caramel swirl, crushed ice." },
      { name: "Mocha Frappe", desc: "Chocolate coffee shake vibes." },
    ],
    "main-plate-veg": [
      { name: "Paneer Butter Masala with Naan", desc: "Rich gravy, soft paneer, comfort plate." },
      { name: "Mexican Veg Sizzler", desc: "Hot plate, sauces, veggies, fries." },
      { name: "Veg Alfredo Grilled Bowl", desc: "Creamy veg mix with herb bread." },
    ],
    "main-plate-nonveg": [
      { name: "Grilled Chicken with Herb Rice", desc: "Juicy chicken, fragrant rice." },
      { name: "Butter Chicken with Naan", desc: "Creamy, iconic, crowd favourite." },
      { name: "Fish & Chips", desc: "Crispy fish, fries, tartar dip." },
    ],
    "toasts-bread": [
      { name: "Avocado Toast", desc: "Creamy avocado, pepper, lemon." },
      { name: "Cheese Garlic Bread", desc: "Toasted, cheesy, garlic butter." },
      { name: "French Toast", desc: "Soft, sweet, dusted finish." },
    ],
    "gourmet-fries": [
      { name: "Peri Peri Fries", desc: "Spicy dusted fries, addictive." },
      { name: "Cheesy Loaded Fries", desc: "Cheese sauce, herbs, crunch." },
      { name: "Truffle Mayo Fries", desc: "Premium mayo, subtle truffle." },
    ],
    pizzas: [
      { name: "Margherita Pizza", desc: "Classic cheese, tomato base, basil." },
      { name: "Veggie Supreme Pizza", desc: "Loaded veggies, extra cheese." },
      { name: "Chicken Tikka Pizza", desc: "Spiced chicken, onions, capsicum." },
    ],
  };

  const generated: NewMenuItem[] = [];
  let idCounter = 1;

  const categoryIds = categories.filter((c) => c.id !== "all").map((c) => c.id);

  categoryIds.forEach((catId, catIndex) => {
    const seeds = seedsByCategory[catId] || [];

    seeds.forEach((s, i) => {
      const seed = (catIndex + 1) * 1000 + i + 1;
      generated.push({
        id: `mi_${idCounter++}`,
        name: s.name,
        description: s.desc,
        price: price(99, 499, seed),
        categoryId: catId,
        slug: slugify(s.name),
      });
    });

    // Make total 100+ (8 per category * 13 categories = 104)
    const targetPerCategory = 8;
    const remaining = Math.max(0, targetPerCategory - seeds.length);

    for (let j = 1; j <= remaining; j++) {
      const catLabel = categories.find((c) => c.id === catId)?.label || "Menu";
      const seed = (catIndex + 1) * 10000 + j;

      generated.push({
        id: `mi_${idCounter++}`,
        name: `${catLabel} Special ${j}`,
        description: "Signature Grano-style recipe. Fresh, balanced, and satisfying.",
        price: price(109, 549, seed),
        categoryId: catId,
        slug: slugify(`${catLabel}-special-${j}`),
      });
    }
  });

  return generated;
};

export const menuItems: NewMenuItem[] = buildMenuItems();