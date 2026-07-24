import { useState, useMemo, memo } from 'react';
import { products } from '../data/products';
import { Product } from '../types';
import ProductModal from './ProductModal';
import Cate from './Cate';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter products based on category – memoized for performance
  const filtered = useMemo(() => {
    return products.filter((p) =>
      selectedCategory === 'all' ? true : p.category.toLowerCase() === selectedCategory
    );
  }, [selectedCategory]);

  const available = filtered.filter((p) => p.inStock);
  const outOfStock = filtered.filter((p) => !p.inStock);

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-green-600 tracking-wider uppercase">Our Collection</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Shop <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">Products</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <Cate selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

        {/* Available */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-2xl font-bold text-green-700">Available</h3>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">{available.length} items</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {available.map((product) => (
              <ProductCard key={product.id} product={product} onClick={() => openModal(product)} />
            ))}
          </div>
        </div>

        {/* Out of Stock */}
        {outOfStock.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⏳</span>
              </div>
              <h3 className="text-2xl font-bold text-red-700">Out of Stock</h3>
              <span className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded-full">{outOfStock.length} items</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {outOfStock.map((product) => (
                <ProductCard key={product.id} product={product} onClick={() => openModal(product)} />
              ))}
            </div>
          </div>
        )}
      </div>

      <ProductModal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} />
    </section>
  );
};

// Memoized Product Card to avoid re-renders
const ProductCard = memo(({ product, onClick }: { product: Product; onClick: () => void }) => {
  const imageSrc = product.image ? `/products/${product.image}` : '/product-placeholder.jpg';

  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1 active:scale-95"
    >
      <div className="relative p-4">
        <div className="aspect-square w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-3 overflow-hidden">
          <img
            src={imageSrc}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div className="text-center">
          <h4 className="font-semibold text-gray-800 text-sm group-hover:text-green-600 transition-colors">{product.name}</h4>
          <p className="text-xs text-gray-500 mt-1">{product.category}</p>
        </div>
        <div className="mt-3 text-center">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
              product.inStock
                ? 'bg-green-100 text-green-700 border border-green-200'
                : 'bg-red-100 text-red-700 border border-red-200'
            }`}
          >
            {product.inStock ? '● In Stock' : '● Out of Stock'}
          </span>
        </div>
      </div>
    </div>
  );
});

ProductCard.displayName = 'ProductCard';

export default ProductList;