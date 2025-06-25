function Faqs() {
  const faqs = [
    {
      question:
        "What makes SmartMama different from other pregnancy resources?",
      answer:
        "SmartMama offers a unique blend of personalized health and wellness plans, expert-led birth preparation, and a nurturing community, all designed to give you comprehensive support and peace of mind throughout your unique journey. We focus on empowering you.",
    },
    {
      question:
        "Who are the SmartMama experts, and what are their qualifications?",
      answer:
        "Our team comprises highly qualified professionals, including certified prenatal nutritionists, experienced birth educators, doulas, and maternal wellness coaches. Each expert is dedicated to providing evidence-based, compassionate support tailored to your specific needs.",
    },
    {
      question:
        "Is SmartMama suitable for all stages of pregnancy, and beyond?",
      answer:
        "Yes! SmartMama programs are designed to support you from preconception through all trimesters, labor, delivery, and even into the vital postpartum period. Our guidance adapts to your evolving needs, ensuring continuous support.",
    },
    {
      question: "How do I access the personalized plans and community support?",
      answer:
        "Getting started is easy! After clicking 'Start My SmartMama Journey,' you'll complete a brief assessment to help us tailor your experience. You'll then gain immediate access to your personalized resources, connect with our experts, and join our welcoming community portal.",
    },
  ];

  return (
    <section>
      <div className="bg-gray-800 py-8 p-4 md:p-8">
        <h2 className="text-center pb-2">
          <span className="text-3xl font-bold text-white text-start py-4">
            Frequently Asked Questions
          </span>
        </h2>
      </div>
      <div className="join join-vertical bg-base-100 w-screen max-w-4xl mx-auto my-8 p-4 md:p-8 flex justify-center">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="collapse collapse-arrow join-item border-base-300 border"
          >
            <input
              type="radio"
              name="my-accordion-4"
              defaultChecked={idx === 0}
            />
            <div className="collapse-title font-semibold">{faq.question}</div>
            <div className="collapse-content text-sm">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faqs;
