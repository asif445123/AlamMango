import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { WHATSAPP_NUMBER, fmt } from '../data';

export default function CartDrawer() {
  const { items, isOpen, totalPrice, closeCart, updateQty, removeFromCart } = useCart();
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', address: '' });

  const handleCheckout = () => {
    if (items.length === 0) return;

    if (!formData.name || !formData.phone || !formData.city || !formData.address) {
      alert('Please fill out all delivery details.');
      return;
    }

    let msg = "Assalam o Alaikum! I would like to place an order from *Alam Mango* 🥭\n\n";
    msg += "*ORDER DETAILS*\n";

    items.forEach((item, i) => {
      const price = item.size === 10 ? item.price10 : item.price5;
      msg += `${i + 1}. ${item.name} — ${item.size}kg box × ${item.qty} = ${fmt(price * item.qty)}\n`;
    });

    msg += `\n*Total: ${fmt(totalPrice)}*\n`;
    msg += "Delivery: Free home delivery\n\n";
    msg += "*MY DETAILS*\n";
    msg += `Name: ${formData.name}\n`;
    msg += `Phone: ${formData.phone}\n`;
    msg += `City: ${formData.city}\n`;
    msg += `Address: ${formData.address}\n`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white">
          <h3 className="font-serif text-xl font-bold text-gray-900">Your Order</h3>
          <button
            onClick={closeCart}
            className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Close cart"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="text-6xl mb-3">🥭</div>
              <p className="text-gray-800 font-bold text-lg mt-2">Your basket is empty</p>
              <p className="text-gray-400 text-sm mt-1">Add some delicious mangoes to get started.</p>
            </div>
          ) : (
            <>
              {/* Cart items */}
              <div className="space-y-3">
                {items.map(item => {
                  const price = item.size === 10 ? item.price10 : item.price5;
                  return (
                    <div key={`${item.id}-${item.size}`} className="flex gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                      {/* Photo thumb */}
                      <div className="w-16 h-16 rounded-xl flex-shrink-0 shadow-sm overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 text-sm">{item.name}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{item.size} KG Box · {fmt(price)} each</div>
                        <div className="text-amber-600 font-bold text-sm mt-1">{fmt(price * item.qty)}</div>

                        {/* Qty controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQty(item.id, item.size, -1)}
                            className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-sm font-bold"
                            aria-label="Decrease"
                          >
                            −
                          </button>
                          <span className="text-sm font-semibold w-6 text-center">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.size, 1)}
                            className="w-7 h-7 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-sm font-bold"
                            aria-label="Increase"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id, item.size)}
                            className="ml-auto text-xs text-red-400 hover:text-red-600 font-medium transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Delivery details form */}
              <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-100">
                <h4 className="font-serif font-bold text-gray-900 text-base mb-1">📋 Delivery Details</h4>
                <p className="text-xs text-gray-500 mb-4">
                  Fill these in and they'll be added to your WhatsApp order automatically.
                </p>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Your name</label>
                    <input
                      type="text"
                      placeholder="e.g. Ahmed Khan"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Phone number</label>
                    <input
                      type="tel"
                      placeholder="e.g. 0300 1234567"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">City</label>
                    <input
                      type="text"
                      placeholder="e.g. Lahore"
                      value={formData.city}
                      onChange={e => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder:text-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Full delivery address</label>
                    <textarea
                      rows={2}
                      placeholder="House #, street, area..."
                      value={formData.address}
                      onChange={e => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all resize-none placeholder:text-gray-300"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer — totals + checkout */}
        {items.length > 0 && (
          <div className="border-t border-gray-100 px-5 py-4 bg-white space-y-3">
            {/* Subtotal */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-semibold text-gray-800 text-base">{fmt(totalPrice)}</span>
            </div>
            {/* Delivery */}
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">Delivery</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-green-50 text-green-600 text-xs font-bold rounded-full">
                ✓ FREE
              </span>
            </div>
            {/* Grand total */}
            <div className="flex items-center justify-between pt-2 border-t border-dashed border-gray-200">
              <span className="font-semibold text-gray-700">Total</span>
              <span className="text-xl font-bold text-gray-900">{fmt(totalPrice)}</span>
            </div>

            {/* WhatsApp checkout */}
            <button
              onClick={handleCheckout}
              className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-[0.98] mt-1"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 0 1 8.413 3.488 11.824 11.824 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607z" />
              </svg>
              Place Order on WhatsApp
            </button>
            <p className="text-center text-xs text-gray-400 mt-1">
              You'll be taken to WhatsApp with your order ready to send.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
