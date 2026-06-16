import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { WHATSAPP_LINK } from '../data';

export default function Header() {
  const { totalItems, openCart } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-3 group" aria-label="Alam Mango">
            <img src="/images/logo.png" alt="Alam Mango" className="h-10 sm:h-12 w-auto rounded-lg" />
            <div className="hidden sm:block">
              <span className="block text-xs text-amber-600 tracking-wide">
                Premium Mangoes · Rahim Yar Khan
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#mangoes" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">Our Mangoes</a>
            <a href="#why" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">Why Us</a>
            <a href="#story" className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">Our Story</a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"
              className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.12 1.52 5.855L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.63-.506-5.14-1.387l-.368-.22-3.817.996 1.02-3.72-.24-.382A9.71 9.71 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z"/>
              </svg>
              WhatsApp
            </a>
            <button onClick={openCart} className="relative p-2 text-gray-700 hover:text-amber-600 transition-colors" aria-label="Open cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-3 md:hidden">
            <button onClick={openCart} className="relative p-2 text-gray-700" aria-label="Open cart">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-gray-700" aria-label="Toggle menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {menuOpen ? <path d="M18 6L6 18M6 6l12 12"/> : <path d="M3 12h18M3 6h18M3 18h18"/>}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden py-4 border-t border-amber-100 space-y-3">
            <a href="#mangoes" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-gray-700 hover:text-amber-600 py-1">Our Mangoes</a>
            <a href="#why" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-gray-700 hover:text-amber-600 py-1">Why Us</a>
            <a href="#story" onClick={() => setMenuOpen(false)} className="block text-sm font-medium text-gray-700 hover:text-amber-600 py-1">Our Story</a>
            <a
      href="#faq"
      onClick={() => setMenuOpen(false)}
      className="block text-sm font-medium text-gray-700 hover:text-amber-600 py-1"
    >
      FAQ
    </a>
            <a
    href="#faq"
    className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors"
  >
    FAQ
  </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-green-600 py-1">WhatsApp Us</a>
          </div>
        )}
      </div>
    </header>
  );
}
