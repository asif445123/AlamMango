const features = [
  {
    icon: '🌱',
    title: 'Organic & Natural',
    description: 'No chemicals, no artificial ripening. Our mangoes ripen naturally on the tree under the Punjab sun.',
  },
  {
    icon: '✋',
    title: 'Hand-Picked',
    description: 'Every mango is carefully selected by our experienced farmers to ensure only the finest reach you.',
  },
  {
    icon: '📦',
    title: 'Premium Packaging',
    description: 'Cushioned, temperature-controlled packaging ensures your mangoes arrive in perfect condition.',
  },
  {
    icon: '🚚',
    title: 'Fast Delivery',
    description: 'Farm to doorstep within 24-48 hours. We deliver across Pakistan and ship internationally.',
  },
  {
    icon: '👨‍🌾',
    title: 'Family Heritage',
    description: 'Three generations of mango farming expertise from the fertile lands of Rahim Yar Khan.',
  },
  {
    icon: '💯',
    title: 'Quality Guarantee',
    description: 'Not satisfied? We offer a full replacement guarantee. Your happiness is our priority.',
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            The Alam Mango Difference
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We don't just sell mangoes — we deliver an experience rooted in tradition, quality, and love.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
