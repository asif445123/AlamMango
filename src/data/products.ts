import { Product } from './types';

export const products: Product[] = [
  {
    id: 'langra',
    name: 'Langra',
    emoji: '🥭',
    tone: 'linear-gradient(145deg,#bcd13f,#6e9b1e)',
    desc: 'Fibreless, rich and aromatic — a true classic.',
    price10: 2500,
    price5: 1500,
    image: '/images/langra.jpg',
  },
  {
    id: 'saroli',
    name: 'Saroli',
    emoji: '🥭',
    tone: 'linear-gradient(145deg,#ffd24d,#e89a12)',
    desc: 'Soft, juicy and wonderfully sweet.',
    price10: 2500,
    price5: 1500,
    image: '/images/saroli.jpg',
  },
  {
    id: 'dosehri',
    name: 'Dosehri',
    emoji: '🥭',
    tone: 'linear-gradient(145deg,#ffe06b,#f3b008)',
    desc: 'Honey-sweet with a smooth, melting texture.',
    price10: 2500,
    price5: 1500,
    image: '/images/dosehri.jpg',
  },
  {
    id: 'sindhri',
    name: 'Sindhri',
    emoji: '🥭',
    tone: 'linear-gradient(145deg,#ffc24d,#e8830c)',
    desc: 'Large, golden and famously fragrant.',
    price10: 2700,
    price5: 1700,
    image: 'https://images.pexels.com/photos/28939331/pexels-photo-28939331.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  },
  {
    id: 'chaunsa',
    name: 'Chaunsa',
    emoji: '🥭',
    tone: 'linear-gradient(145deg,#ffb13d,#dd5e07)',
    desc: 'The king of mangoes — intensely sweet & juicy.',
    price10: 3000,
    price5: 2000,
    image: 'https://images.pexels.com/photos/7543212/pexels-photo-7543212.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  },
  {
    id: 'anwar',
    name: 'Anwar Ratol',
    emoji: '🥭',
    tone: 'linear-gradient(145deg,#ff9d52,#cf3b12)',
    desc: 'Small, premium, and bursting with flavour.',
    price10: 3200,
    price5: 2200,
    image: 'https://images.pexels.com/photos/8523870/pexels-photo-8523870.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
  },
];

export const WHATSAPP_NUMBER = '923205501173';
export const WHATSAPP_LINK = 'https://wa.me/923205501173';
export const CURRENCY = 'Rs';
export const fmt = (n: number) => `${CURRENCY} ${n.toLocaleString('en-PK')}`;
