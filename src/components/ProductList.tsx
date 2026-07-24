import { useState, useEffect, useRef } from 'react';
import { products } from '../data/products';
import { Product } from '../types';
import ProductModal from './ProductModal';
import Cate from './Cate';  // <-- Changed from Categories to Cate

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filtered = products.filter((p) =>
    selectedCategory === 'all' ? true : p.category.toLowerCase() === selectedCategory
  );

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
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transform transition-all duration-1000 opacity-0 translate-y-10">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold text-green-600 tracking-wider uppercase">Our Collection</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-2">
            Shop <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-700">Products</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <Cate
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

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
            {available.map((product, index) => (
              <ProductCard key={product.id} product={product} onClick={() => openModal(product)} index={index} />
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
              {outOfStock.map((product, index) => (
                <ProductCard key={product.id} product={product} onClick={() => openModal(product)} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>

      <ProductModal
        isOpen={isModalOpen}
        onClose={closeModal}
        product={selectedProduct}
      />
    </section>
  );
};

// Product Card with Beautiful Design
const ProductCard = ({ product, onClick, index }: { product: Product; onClick: () => void; index: number }) => {
  const imageSrc = product.image ? `/products/${product.image}` : '/product-placeholder.jpg';
  
  return (
    <div
      onClick={onClick}
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-green-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-4">
        <div className="aspect-square w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl mb-3 overflow-hidden">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-500"
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

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
      </div>
    </div>
  );
};

export default ProductList;