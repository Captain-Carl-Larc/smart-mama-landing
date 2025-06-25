import Banner from "./banner";

function SocialProof() {
  const testimonials = [
    {
      quote: `“Before SmartMama, I was overwhelmed by all the conflicting information out there. Their personalized guidance on nutrition and gentle exercises brought me so much clarity and peace of mind. I felt truly supported and confident throughout my entire pregnancy, which made all the difference.”`,
      name: "Sarah K.",
    },
    {
      quote: `“SmartMama's birth preparation resources were an absolute game-changer. I went from feeling anxious about labor to genuinely excited and empowered. The practical techniques and expert insights gave me the confidence to advocate for myself and have the positive birth experience I always dreamed of.”`,
      name: "Jessica P.",
    },
    {
      quote: `“Connecting with the SmartMama community and having direct access to their experts was invaluable. I optimized my health, felt genuinely understood, and had all my questions answered. It truly felt like having a supportive village guiding me through my pregnancy journey.”`,
      name: "Emily R.",
    },
  ];

  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-blue-700 text-center py-4">
        What Our Mamas Are Saying
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
