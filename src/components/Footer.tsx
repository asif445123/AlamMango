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
                src="/images/logo2.png"
                alt="Alam Mango"
                className="h-14 w-auto rounded-lg"
              />
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              Alam Mango — Premium Mangoes from Rahim Yar Khan | Buy Chaunsa & Sindhri Online,
              Pakistan's mango capital. Delivered free to your door.
            </p>
          </div>

          {/* Shop column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Shop</h4>
            <div className="flex flex-col gap-2.5">
              <a href="#mangoes" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">10 KG Boxes</a>
              <a href="#mangoes" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">5 KG Boxes</a>
              <a href="#why"     className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Why Us</a>
              <a href="#story"   className="text-gray-400 hover:text-amber-400 transition-colors text-sm">Our Story</a>
            </div>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Get in touch</h4>
            <div className="flex flex-col gap-3">

              {/* WhatsApp */}
              <a
                href="https://wa.me/923205501173"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-400 transition-colors"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp: 0320 5501173
              </a>

              {/* 100% Natural & Chemical Free */}
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" fill="#C8E6C9" stroke="#2E7D32" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C10.9 14.36 12 12 12 12" stroke="#388E3C" fill="none" />
                </svg>
                100% Natural & Chemical Free
              </div>

              {/* Export Quality */}
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="7" fill="#FFF9C4" stroke="#F9A825" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" fill="#FFD54F" stroke="#F57F17" />
                </svg>
                Export Quality
              </div>

              {/* Free Home Delivery */}
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" strokeWidth="2">
                  <path d="M1 3h15v13H1z" fill="#BBDEFB" stroke="#1565C0" />
                  <path d="M16 8h4l3 3v5h-7V8z" fill="#E3F2FD" stroke="#1565C0" />
                  <circle cx="5.5" cy="18.5" r="2.5" fill="#455A64" stroke="#263238" />
                  <circle cx="18.5" cy="18.5" r="2.5" fill="#455A64" stroke="#263238" />
                </svg>
                Free Home Delivery
              </div>

              {/* Order Now Button */}
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