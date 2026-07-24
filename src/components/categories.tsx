import { Category } from '../types';

const categories: Category[] = [
  { name: '✨ All', slug: 'all' },
  { name: '🥤 Drinks', slug: 'drinks' },
  { name: '🌾 Grains & Flour', slug: 'grains' },
  { name: '🍝 Pasta & Noodles', slug: 'pasta' },
  { name: '🧴 Personal Care', slug: 'care' },
  { name: '🍪 Snacks', slug: 'snacks' },
  { name: '🥛 Dairy', slug: 'dairy' },
  { name: '☕ Beverages', slug: 'beverages' },
  { name: '🧹 Cleaning', slug: 'cleaning' },
  { name: '🌶️ Spices', slug: 'spices' },
  { name: '🫒 Oils & Fats', slug: 'oils' },
  { name: '🥫 Canned Goods', slug: 'canned' },
  { name: '👶 Baby Care', slug: 'baby' },
  { name: '📦 Misc', slug: 'misc' },
];

interface CategoriesProps {
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
}

const Categories = ({ selectedCategory, onSelectCategory }: CategoriesProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 my-8">
      {categories.map((cat) => (
        <button
          key={cat.slug}
          onClick={() => onSelectCategory(cat.slug)}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
            selectedCategory === cat.slug
              ? 'bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg shadow-green-500/30'
              : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
          }`}
        >
          {cat.name}
        </button>
      ))}
    </div> 
  );
};

export default Categories   ;