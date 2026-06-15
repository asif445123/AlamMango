import { useState } from 'react';
import { products, fmt } from '../data';
import { useCart } from '../context/CartContext';

export default function Products() {
  const { addToCart } = useCart();
  const [activeSize, setActiveSize] = useState<number>(10);
  const [addedMap, setAddedMap] = useState<Record<string, boolean>>({});

  const handleAdd = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    addToCart(product, activeSize);
    const key = `${productId}-${activeSize}`;
    setAddedMap(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setAddedMap(prev => ({ ...prev, [key]: false }));
    }, 1100);
  };

  return (
    <section id="mangoes">
      <div className="wrap">
        <div className="sec-head">
          <span className="eyebrow"><span className="dot" /> Our Harvest</span>
          <h2>Pick your favourite premium mangoes</h2>
          <p>Every box of premium mangoes is packed fresh on order. Choose your variety and box size — we deliver free to your door.</p>
          <p style={{ fontSize: '.85rem', color: 'var(--ink-soft)', opacity: .85, marginTop: '.6rem' }}>
            Box weights are approximate (around 10kg or 5kg) and may vary slightly, since no two mangoes are the same size.
          </p>
        </div>

        <div className="tabs">
          <button
            className={`tab${activeSize === 10 ? ' active' : ''}`}
            onClick={() => setActiveSize(10)}
          >
            10 KG Box
          </button>
          <button
            className={`tab${activeSize === 5 ? ' active' : ''}`}
            onClick={() => setActiveSize(5)}
          >
            5 KG Box
          </button>
        </div>

        <div className="grid" id="productGrid">
          {products.map(product => {
            const price = activeSize === 10 ? product.price10 : product.price5;
            const key = `${product.id}-${activeSize}`;
            const isAdded = addedMap[key] || false;

            return (
              <article className="card" key={product.id}>
                <div className="ph">
                  {/* Real photo with gradient overlay */}
                  <img
                    className="card-img"
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                  <div className="card-overlay" style={{ background: product.tone }} />
                  <span className="card-name">{product.name}</span>
                  <span className="size-tag">{activeSize} KG Box</span>
                </div>
                <div className="body">
                  <h3>{product.name}</h3>
                  <p className="desc">{product.desc}</p>
                  <div className="row">
                    <div className="price">
                      {fmt(price)} <small>/ box</small>
                    </div>
                    <button
                      className={`add${isAdded ? ' added' : ''}`}
                      onClick={() => handleAdd(product.id)}
                    >
                      {isAdded ? '✓ Added' : (
                        <>
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                          {' '}Add
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
