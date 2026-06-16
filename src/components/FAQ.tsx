export default function FAQ() {
  const faqs = [
    {
      question: "Are your mangoes naturally ripened?",
      answer:
        "Yes. All Alam Mango varieties are naturally ripened on the tree without artificial ripening chemicals.",
    },
    {
      question: "Do you deliver mangoes across Pakistan?",
      answer:
        "Yes. We provide free home delivery to major cities across Pakistan including Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad, Multan, and more.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Most orders are delivered within 24–48 hours after dispatch, depending on your location.",
    },
    {
      question: "Which mango variety is the sweetest?",
      answer:
        "Chaunsa is widely considered the sweetest mango variety in Pakistan, while Anwar Ratol is famous for its rich aroma and premium taste.",
    },
    {
      question: "Are your mangoes chemical-free?",
      answer:
        "Yes. Our mangoes are grown using natural farming practices and are harvested at peak ripeness.",
    },
    {
      question: "Where are your mangoes grown?",
      answer:
        "Our orchards are located in Rahim Yar Khan, one of Pakistan's most famous mango-growing regions.",
    },
    {
      question: "What mango varieties do you offer?",
      answer:
        "We offer Chaunsa, Sindhri, Anwar Ratol, Dosehri, Langra and Saroli mangoes depending on seasonal availability.",
    },
    {
      question: "How can I place an order?",
      answer:
        "Simply add mangoes to your cart and place your order through WhatsApp. Our team will confirm your order and delivery details.",
    },
  ];

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-gradient-to-b from-amber-50/40 to-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase">
            FAQ
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 text-lg">
            Everything you need to know about our premium mangoes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-2xl border border-amber-100 p-5 shadow-sm"
            >
              <summary className="flex justify-between items-center cursor-pointer list-none font-semibold text-gray-900">
                {faq.question}

                <span className="transition-transform duration-300 group-open:rotate-45 text-2xl text-amber-500">
                  +
                </span>
              </summary>

              <p className="mt-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}