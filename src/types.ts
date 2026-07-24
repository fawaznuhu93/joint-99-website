export interface Product {
  id: string;
  name: string;
  category: string;
  inStock: boolean;
  image?: string; // optional, use placeholder if not provided
}

export type Category = {
  name: string;
  slug: string;
};