// src/types/menu.ts

export type Category = {
  id: string;
  label: string;
};

export type NewMenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
  slug: string;
};