  export interface Product {
  id: string;
  name: string;
  emoji: string;
  tone: string;
  desc: string;
  price10: number;
  price5: number;
  image: string;
  soldOut?: boolean; // optional
}

export interface Testimonial {
  text: string;
  author: string;
  location: string;
  stars: number;
}
