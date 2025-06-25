function SocialProof() {
  const testimonials = [
    {
      quote: `“Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”`,
      name: "Name Surname",
    },
    {
      quote: `“Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”`,
      name: "Name Surname",
    },
    {
      quote: `“Gorgeous, high-quality video sharing on desktop, mobile, tablet. All base UI elements are made using Nested Symbols”`,
      name: "Name Surname",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-blue-700 text-center py-4">
        What Our Users Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testmonial, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 flex flex-col items-start text-gray-700 bg-white"
          >
            <p className="mb-6">{testmonial.quote}</p>
            <div className="flex items-center w-full mt-auto">
              <div>
                <div className="font-bold">{testmonial.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="call-to-action bg-gray-800 p-8 mt-12 rounded-lg shadow-lg">
        <h3 className="text-2xl text-white font-semibold text-center mt-8 mb-4">
          Join Our Community
        </h3>
        <p className="text-center text-white mb-6">
          Become part of our growing community and experience the benefits
          firsthand.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300">
            Sign Up Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default SocialProof;
