import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Story from './components/Story';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white font-sans">
        <Header />
        <Hero />
        <Products />
        <WhyUs />
        <Story />
        <FAQ />

        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}
