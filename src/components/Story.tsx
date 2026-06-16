export default function Story() {
  return (
    <section id="story" className="py-20 sm:py-28 bg-gradient-to-b from-white to-amber-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/mango-farm.jpg"
                alt="Our mango orchard in Rahim Yar Khan"
                className="w-full h-[400px] sm:h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-amber-500 text-white p-6 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-3xl font-bold font-serif">20+</div>
              <div className="text-sm text-amber-100">Years of Excellence</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">Our Story</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6">
              From Our Orchards to Your Table
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Nestled in the heart of Rahim Yar Khan, our family has been cultivating premium mangoes for over three decades. 
                What began as a small family orchard has blossomed into one of the region's most respected mango producers.
              </p>
              <p>
                Our secret? A deep respect for nature and tradition. We let our mangoes ripen naturally on the tree, 
                harvesting only when they reach peak sweetness. No shortcuts, no chemicals — just pure, sun-kissed flavor.
              </p>
              <p>
                Every box of Alam Mango carries the warmth of our Punjab sun, the richness of our soil, and the dedication 
                of three generations of passionate farmers. When you taste our mangoes, you taste our heritage.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-8">
              <div>
                <div className="text-2xl font-bold text-amber-600 font-serif">500+</div>
                <div className="text-sm text-gray-500">Mango Trees</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-600 font-serif">10,000+</div>
                <div className="text-sm text-gray-500">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-600 font-serif">6</div>
                <div className="text-sm text-gray-500">Premium Varieties</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
