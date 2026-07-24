import { useState } from 'react';
import { products } from '../data/products';
import { Product } from '../types';
import ProductModal from './ProductModal';
import Categories from './Categories';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <section id="products" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Our Products</h2>
        <Categories
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Available */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-green-600 mb-4 flex items-center">
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            Available
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {available.map((product) => (
              <ProductCard key={product.id} product={product} onClick={() => openModal(product)} />
            ))}
          </div>
        </div>

        {/* Out of Stock */}
        {outOfStock.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-red-600 mb-4 flex items-center">
              <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
              Out of Stock
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {outOfStock.map((product) => (
                <ProductCard key={product.id} product={product} onClick={() => openModal(product)} />
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

// Individual Product Card
const ProductCard = ({ product, onClick }: { product: Product; onClick: () => void }) => {
  const imageSrc = product.image ? `/products/${product.image}` : '/product-placeholder.jpg';
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition cursor-pointer border border-gray-100"
    >
      <img src={imageSrc} alt={product.name} className="w-full h-24 object-contain mb-2" />
      <p className="text-sm font-medium text-center text-gray-800">{product.name}</p>
      <p className="text-xs text-center text-gray-500">{product.category}</p>
      <div className="mt-2 text-center">
        <span
          className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
            product.inStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
    </div>
  );
};

export default ProductList;