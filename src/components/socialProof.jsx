import Banner from "./banner";

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
      <Banner
        title="Join Our Community Today!"
        description="Sign up now to start sharing your videos and connecting with others!"
        buttonText="Sign Up Now"
      />
    </section>
  );
}

export default SocialProof;
