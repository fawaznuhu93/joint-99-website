import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import AboutOwners from './components/AboutOwners';
import Certification from './components/Certification';
import Feedback from './components/Feedback';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      <Header />
      <Hero />
      <ProductList />
      <AboutOwners />
      <Certification />
      <Feedback />
      <Location />
      <Footer />
    </div>
  );
}

export default App;