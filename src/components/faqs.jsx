function Faqs() {
  const faqs = [
    {
      question: "How do I create an account?",
      answer:
        'Click the "Sign Up" button in the top right corner and follow the registration process.',
    },
    {
      question: "I forgot my password. What should I do?",
      answer:
        'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
    },
    {
      question: "How do I update my profile information?",
      answer:
        'Go to "My Account" settings and select "Edit Profile" to make changes.',
    },{
        question: "Can I change my username?",
        answer:
            'Yes, you can change your username in the "Account Settings" section.',
        },
        {
        question: "How do I delete my account?",
        answer:
            'To delete your account, go to "Account Settings" and select "Delete Account". Please note that this action is irreversible.',
    }
  ];

  return (
    <section>
      <div className="bg-gray-800 py-8 p-4 md:p-8">
        <h2 className="text-center pb-2">
          <span className="text-3xl font-bold text-white text-start py-4">
            Frequently Asked Questions
          </span>
        </h2>
        <p className="text-start text-white mb-8 mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          alias deleniti rerum nulla magni assumenda maiores porro reiciendis
          doloribus amet.
        </p>
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
