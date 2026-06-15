import { WHATSAPP_LINK } from '../data';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand column */}
          <div>
            <div className="mb-4">
              <img
                src="/images/logo.png"
                alt="Alam Mango"
                className="h-14 w-auto rounded-lg"
              />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Alam Mango — premium, garden-fresh mangoes from Rahim Yar Khan, Pakistan's mango capital. Delivered free to your door.
            </p>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Shop</h4>
            <div className="flex flex-col gap-2.5">
              <a href="#mangoes" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">10 KG Boxes</a>
              <a href="#mangoes" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">5 KG Boxes</a>
              <a href="#why" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Why Us</a>
              <a href="#story" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Our Story</a>
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Get in touch</h4>
            <div className="flex flex-col gap-2.5">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors text-sm"
              >
                WhatsApp: 0320 5501173
              </a>
              <div className="text-gray-400 text-sm">Free home delivery</div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-2 px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all text-sm w-fit"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.12 1.52 5.855L0 24l6.335-1.652A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.875 0-3.63-.506-5.14-1.387l-.368-.22-3.817.996 1.02-3.72-.24-.382A9.71 9.71 0 012.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75z" />
                </svg>
                Order now →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Alam Mango, Rahim Yar Khan. All rights reserved.</span>
          <span>Made with 🥭 in Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
