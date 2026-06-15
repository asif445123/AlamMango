import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Product } from '../data/types';

export interface CartItem {
  id: string;
  name: string;
  emoji: string;
  tone: string;
  image: string;
  size: number;
  price10: number;
  price5: number;
  qty: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  totalItems: number;
  totalPrice: number;
  addToCart: (product: Product, size: number) => void;
  removeFromCart: (id: string, size: number) => void;
  updateQty: (id: string, size: number, delta: number) => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = items.reduce((sum, item) => {
    const unitPrice = item.size === 10 ? item.price10 : item.price5;
    return sum + unitPrice * item.qty;
  }, 0);

  const addToCart = useCallback((product: Product, size: number) => {
    setItems(prev => {
      const existing = prev.find(i => i.id === product.id && i.size === size);
      if (existing) {
        return prev.map(i =>
          i.id === product.id && i.size === size
            ? { ...i, qty: i.qty + 1 }
            : i
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        emoji: product.emoji,
        tone: product.tone,
        image: product.image,
        price10: product.price10,
        price5: product.price5,
        size,
        qty: 1,
      }];
    });
    setIsOpen(true);
  }, []);

  const removeFromCart = useCallback((id: string, size: number) => {
    setItems(prev => prev.filter(i => !(i.id === id && i.size === size)));
  }, []);

  const updateQty = useCallback((id: string, size: number, delta: number) => {
    setItems(prev =>
      prev
        .map(i => (i.id === id && i.size === size ? { ...i, qty: i.qty + delta } : i))
        .filter(i => i.qty > 0)
    );
  }, []);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);
  const clearCart = useCallback(() => {
    setItems([]);
    setIsOpen(false);
  }, []);

  return (
    <CartContext.Provider
      value={{ items, isOpen, totalItems, totalPrice, addToCart, removeFromCart, updateQty, openCart, closeCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
